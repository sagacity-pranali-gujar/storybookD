
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
//import { Primarybutton } from '../buttona1/buttona1.stories';
import { ImageComponent } from './image.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Image',
  component: ImageComponent,
  backgroundColor: { control: 'color' },
 
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ImageComponent> = (args: ImageComponent) => ({
  props: args,
});

export const image1  = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
image1.args = {

};

// export const Secondarybutton = Template.bind({});
// Secondarybutton.args = {
//   label: 'Button',
// };


