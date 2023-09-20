import { PluginItem } from "@babel/core";

export default function (): PluginItem {
    return {
        visitor: {
            // для выпиливания из финальной сборки тестовых id
            Program(path, state) {
                const forbidden = state.opts.props || [];
                // проходимся по всем нодам AST дерева
                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;
                        // if (nodeName === "data-testid") { }
                        if (forbidden.includes(nodeName)) {
                            current.parentPath.remove()
                        }
                    }
                })
            }
            // Identifier(path) {
            //     const name = path.node.name;
            //     // reverse the name: JavaScript -> tpircSavaJ
            //     path.node.name = name
            //         .split("")
            //         .reverse()
            //         .join("");
            // },
        },
    };
}