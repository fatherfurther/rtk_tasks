import React from 'react';

import { withDesign } from "storybook-addon-designs";
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  decorators: [withDesign],
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'ボタン',
};

Primary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/OyYIF1XYKcLSLaUhdpjsmN/ToDo?node-id=0%3A1",
  },
};
