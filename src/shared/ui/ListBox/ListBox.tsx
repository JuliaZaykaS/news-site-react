import { Fragment, ReactNode, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';

import { Listbox as HListbox } from '@headlessui/react'
import { Button } from '../Button/ui/Button';
import { HStack } from '../Stack';



export interface ListBoxItem{
   value: string;
   content: ReactNode;
   disabled?: boolean;
}

type DropdownDirection = "top" | "bottom"

interface ListBoxProps {
   className?: string;
   items?: ListBoxItem[];
   value?: string;
   defaultValue?: string;
   onChange?: <T extends string>(value: T) => void;
   readonly?: boolean;
   direction?: DropdownDirection;
   label?: string;
}



export const ListBox = (props: ListBoxProps) => {
   const { className, items = [], value, defaultValue, onChange, readonly, direction="bottom", label } = props;
   const { t } = useTranslation()

   const optionsClasses = [
cls[direction]
   ]




   return (

      <HStack gap={"4"}>

      {/* {label && <span>{`${label}>`}</span>} */}

         {label && <span className={classNames("", {[cls.labelDisabled]: readonly}, [])}>{`${label}>`}</span>}

      <HListbox
         disabled={readonly}
         as={"div"}
         className={classNames(cls.listBox, {}, [className])}
         value={value}
         onChange={onChange}
      >
         <HListbox.Button className={cls.trigger} >
            <Button  disabled={readonly}>
               {value ?? defaultValue}
            </Button>
         </HListbox.Button>
         <HListbox.Options className={classNames(cls.options, {}, optionsClasses)}>
            {items.map((item) => (
               <HListbox.Option
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                  as={Fragment}
               >
                  {({ active, selected }) => (

                     <li className={classNames(cls.item, {[cls.active]: active, [cls.disabled]: item.disabled}, [])}>
                        {selected && "✓ "}

                        {item.content}
                     </li>
                  )}
               </HListbox.Option>
            ))}
         </HListbox.Options>
         </HListbox>
         </HStack>
   )
}