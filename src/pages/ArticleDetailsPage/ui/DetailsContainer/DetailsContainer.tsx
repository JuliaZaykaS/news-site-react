import { typedMemo } from '@/shared/const/memo';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';
import { useEffect, useState } from 'react';

interface DetailsContainerProps {
    className?: string;
    mockedId?: string; // для мокания в сторибуке
}

export const DetailsContainer = typedMemo(
    (props: DetailsContainerProps) => {
        const { className, mockedId } = props;

        // const { id } = useParams<{ id: string }>();
        const params = useParams<{ id: string }>();
        const [id, setId] = useState(params.id);

        useEffect(() => {
            if (__PROJECT__ === 'storybook') {
                setId(mockedId);
            }
        }, [mockedId]);

        return (
            <Card
                className={className}
                max
                padding="24"
                borderRadius="partial"
            >
                <ArticleDetails articleId={id} />
            </Card>
        );
    },
);
