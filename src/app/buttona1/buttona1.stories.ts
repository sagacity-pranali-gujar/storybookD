
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { Buttona1Component } from './buttona1.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Buttona1Component,
  backgroundColor: { control: 'color' },
 
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<Buttona1Component> = (args: Buttona1Component) => ({
  props: args,
});

export const Primarybutton  = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primarybutton.args = {
title:"hello  ",
label: 'Button',
};

export const Secondarybutton = Template.bind({});
Secondarybutton.args = {
  label: 'Button',
};


