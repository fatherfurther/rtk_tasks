import React from 'react';

import { TitleLabel } from './TitleLabel';

export default {
  title: 'atoms/TitleLabel',
  component: TitleLabel,
};

const Template = (args) => <TitleLabel {...args} />;

export const Login = Template.bind({});
Login.args = {
  isLoginView:"exist"
};

export const Register = Template.bind({});
Register.args = {
  isLoginView:""
};



