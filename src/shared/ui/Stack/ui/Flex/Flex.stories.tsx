import type { Meta, StoryFn } from '@storybook/react';
import { Flex } from './Flex';

export default {
   title: 'shared/Flex',
   component: Flex,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as Meta<typeof Flex>;

const Template: StoryFn<typeof Flex> = (args) => <Flex { ...args } />;

export const Row = Template.bind({});
Row.args = {
   children: (
      <>
         <div>first</div>
         <div>first</div>
         <div>first</div>
         <div>first</div>
      </>
   ),
   direction: 'row'
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
   children: (
      <>
         <div>first</div>
         <div>first</div>
         <div>first</div>
         <div>first</div>
      </>
   ),
   direction: 'row',
   gap: "4",
};
export const RowGap8 = Template.bind({});
RowGap8.args = {
   children: (
      <>
         <div>first</div>
         <div>first</div>
         <div>first</div>
         <div>first</div>
      </>
   ),
   direction: 'row',
   gap: "8",
};
export const RowGap16 = Template.bind({});
RowGap16.args = {
   children: (
      <>
         <div>first</div>
         <div>first</div>
         <div>first</div>
         <div>first</div>
      </>
   ),
   direction: 'row',
   gap: "16",
};
export const RowGap32 = Template.bind({});
RowGap32.args = {
   children: (
      <>
         <div>first</div>
         <div>first</div>
         <div>first</div>
         <div>first</div>
      </>
   ),
   direction: 'row',
   gap: "32",
};

   export const Column = Template.bind({});
   Column.args = {
      children: (
         <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
         </>
      ),
      direction: 'column'
   };
   export const ColumnGap16 = Template.bind({});
   ColumnGap16.args = {
      children: (
         <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
         </>
      ),
      direction: 'column',
      gap: "16"
   };
   export const ColumnAlignEnd = Template.bind({});
   ColumnAlignEnd.args = {
      children: (
         <>
            <div>first</div>
            <div>first</div>
            <div>first</div>
            <div>first</div>
         </>
      ),
      direction: 'column',
      gap: "16",
      align: "end"
   };