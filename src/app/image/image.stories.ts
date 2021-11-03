
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

export const NoImageCaption  = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
NoImageCaption .args = {
    figCaptionTxt : '' ,
};

export const WithImageCaption = Template.bind({});
WithImageCaption.args = {
    figCaptionTxt : 'The Gateway of India is an arch-monument built in the early 20th century in the city of Mumbai, India.' ,
};

export const WithFullOpacity = Template.bind({});
WithFullOpacity.args = {
    imgOpacity : 1
};

export const WithHalfOpacity = Template.bind({});
WithHalfOpacity.args = {
    imgOpacity : 0.5
};


