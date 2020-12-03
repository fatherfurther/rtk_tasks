import React from 'react';

import { MButton } from './MButton';

export default {
  title: 'atoms/MButton',
  component: MButton,
};

const Template = (args) => <MButton {...args} />;

export const Login = Template.bind({});
Login.args = {
  variant: 'contained',
  disabled: false,
  color:"primary",
  isLoginView:"exist"
};

export const Create = Template.bind({});
Create.args = {
  variant: 'contained',
  disabled: false,
  color: "primary",
  isLoginView:""
};



