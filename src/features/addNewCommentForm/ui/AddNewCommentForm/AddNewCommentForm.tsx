import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddNewCommentForm.module.scss';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useSelector } from 'react-redux';
import {
    // getNewCommentFormError,
    getNewCommentFormText,
} from '../../model/selectors/addNewCommentFormSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    addNewCommentFormActions,
    addNewCommentFormReducer,
} from '../../model/slices/addNewCommentFormSlice';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { typedMemo } from '@/shared/const/memo';
import { ToggleFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface AddNewCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducerList = {
    addNewCommentForm: addNewCommentFormReducer,
};

const AddNewCommentForm = typedMemo((props: AddNewCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getNewCommentFormText);
    // const error = useSelector(getNewCommentFormError);
    const dispatch = useAppDispatch();

    const onInputChange = useCallback(
        (value: string) => {
            dispatch(addNewCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendForm = useCallback(() => {
        onSendComment(text || '');
        onInputChange('');
    }, [onInputChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Card padding='24' borderRadius='partial' max>
                        <HStack
                            justify={'between'}
                            max
                            className={classNames(cls.addNewCommentFormRedesigned, {}, [className])}
                            data-testid={'AddNewCommentForm'}
                            gap='16'
                        >
                            <Input
                                placeholder={t('Введите текст комментария')}
                                value={text}
                                onChange={onInputChange}
                                className={cls.input}
                                type={'text'}
                                data-testid={'AddNewCommentForm.Input'}
                            />
                            <Button
                                variant={'outline'}
                                onClick={onSendForm}
                                data-testid={'AddNewCommentForm.Button'}
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </Card>}
                off={<HStack
                    justify={'between'}
                    max
                    className={classNames(cls.addNewCommentForm, {}, [className])}
                    data-testid={'AddNewCommentForm'}
                >
                    <InputDeprecated
                        placeholder={t('Введите текст комментария')}
                        value={text}
                        onChange={onInputChange}
                        className={cls.input}
                        type={'text'}
                        data-testid={'AddNewCommentForm.Input'}
                    />
                    <ButtonDeprecated
                        theme={ButtonTheme.OUTLINE}
                        onClick={onSendForm}
                        data-testid={'AddNewCommentForm.Button'}
                    >
                        {t('Отправить')}
                    </ButtonDeprecated>
                </HStack>}
            />

        </DynamicModuleLoader>
    );
});

export default AddNewCommentForm;
