import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon';
import StarIcon from '../../assets/icons/star.svg';
import { typedMemo } from '@/shared/const/memo';

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = typedMemo((props: StarRatingProps) => {
    const { className, onSelect, size = 30, selectedStars = 0 } = props;
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const mods: Mods = {
        // [cls.hovered]: isHovered,
        // [cls.normal]: !isHovered,
        [cls.selected]: isSelected,
    };

    const onHover = (starsCount: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
            if (currentStarsCount >= starsCount) {
                setIsHovered(true);
            }
        }
    };
    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
            setIsHovered(false);
        }
    };

    const onClick = (starsCount: number) => () => {
        if (!isSelected) {
            onSelect?.(starsCount);
            setCurrentStarsCount(starsCount);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cls.starRating, {}, [className])}>
            {stars.map((starNum) => (
                <Icon
                    Svg={StarIcon}
                    key={starNum}
                    // className={classNames(cls.starIcon, mods, [])}
                    className={classNames(cls.starIcon, mods, [
                        currentStarsCount >= starNum ? cls.hovered : cls.normal,
                    ])}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starNum)}
                    onClick={onClick(starNum)}
                    data-testid={`StarIcon.${starNum}`}
                    data-selected={currentStarsCount >= starNum}
                />
            ))}
        </div>
    );
});
