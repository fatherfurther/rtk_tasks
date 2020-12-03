import React from 'react';

import { Username } from './Username';

export default {
  title: 'atoms/Username',
  component: Username,
};

const Template = (args) => <Username {...args} />;

export const Name = Template.bind({});
Name.args = {
  username:"Masao"
};




