import React from 'react';

import { Input } from './Input';

export default {
  title: 'atoms/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Username = Template.bind({});
Username.args = {
  type: "text",
  name: "sername",
  placeholder: "Username"
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  name: "password",
  placeholder: "Password"
};



