/* eslint-disable max-len */
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { ToggleFeatures } from '@/shared/lib/features';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (<ToggleFeatures
        feature={'isAppRedesigned'}
        on={<Page data-testid={'AboutPage'}>
            <VStack max gap='32'>
                <Text title={t('О сайте')} bold size='l' />
                <VStack max gap='16'>
                    <Text text={t('Добро пожаловать в мир идей и вдохновения! 🌿')} bold size='l' />
                    <Text text={t('Здесь каждый может стать автором — пишите статьи на любые темы, делитесь опытом, мыслями и открытиями.')} size='m' />
                    <Text text={t('А если хотите просто почитать — у нас всегда найдутся интересные публикации, живые обсуждения и новые точки зрения.')} size='m' />
                    <Text text={t('Комментируйте, оценивайте и поддерживайте авторов — ведь именно вы помогаете формировать сообщество, где ценятся искренность, уважение и желание учиться новому.')} size='m' />
                    <Text text={t('Будь то заметка о путешествии, размышления о жизни или статья о новых технологиях — у каждой истории здесь есть свой читатель.')} size='m' />
                    <Text text={t('✨ Присоединяйтесь, вдохновляйтесь и создавайте вместе с нами!')} bold size='l' />

                </VStack>
            </VStack>
        </Page>}
        off={<Page data-testid={'AboutPage'}>
            <VStack max gap='32'>
                <TextDeprecated title={t('О сайте')} size={TextSize.L} />
                <VStack max gap='16'>
                    <TextDeprecated text={t('Добро пожаловать в мир идей и вдохновения! 🌿')} size={TextSize.L} />
                    <TextDeprecated text={t('Здесь каждый может стать автором — пишите статьи на любые темы, делитесь опытом, мыслями и открытиями.')} size={TextSize.M} />
                    <TextDeprecated text={t('А если хотите просто почитать — у нас всегда найдутся интересные публикации, живые обсуждения и новые точки зрения.')} size={TextSize.M} />
                    <TextDeprecated text={t('Комментируйте, оценивайте и поддерживайте авторов — ведь именно вы помогаете формировать сообщество, где ценятся искренность, уважение и желание учиться новому.')} size={TextSize.M} />
                    <TextDeprecated text={t('Будь то заметка о путешествии, размышления о жизни или статья о новых технологиях — у каждой истории здесь есть свой читатель.')} size={TextSize.M} />
                    <TextDeprecated text={t('✨ Присоединяйтесь, вдохновляйтесь и создавайте вместе с нами!')} size={TextSize.L} />
                </VStack>
            </VStack>
        </Page >
        }
    />
    )

};

export default AboutPage;
