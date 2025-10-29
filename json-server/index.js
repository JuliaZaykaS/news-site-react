/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const https = require('https');
const http = require('http');

// === SSL сертификаты ===
const options = {
    key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem')),
};

// === Создаём сервер и маршруты ===
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

// === Миддлвары: лог, CORS, статика ===
const middlewares = jsonServer.defaults();
server.use(middlewares);

// === Отдача изображений ===
// картинки будут доступны по пути: /images/имя_файла
server.use(
    '/images',
    jsonServer.defaults({
        static: path.resolve(__dirname, 'images'),
    })
);

// server.use(jsonServer.defaults({}));

// === Парсер тела запроса ===
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
    await new Promise((res) => {
        setTimeout(res, 800);
    });
    next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(
            fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'),
        );

        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
    if (
        req.url.startsWith('/images') ||
        req.url.startsWith('/login') ||
        req.method === 'GET' && req.url.includes('/favicon.ico')
    ) {
        return next();
    }
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }

    next();
});

// === Подключаем маршруты из db.json ===
server.use(router);

// запуск сервера
const HTTPS_PORT = 8443; // для https
const HTTP_PORT = 8000; // для http

const httpsServer = https.createServer(options, server);
const httpServer = http.createServer(server);
httpsServer.listen(HTTPS_PORT, () => {
    console.log(`server is running on ${HTTPS_PORT} port`);
});
httpServer.listen(HTTP_PORT, () => {
    console.log(`server is running on ${HTTP_PORT} port`);
});
