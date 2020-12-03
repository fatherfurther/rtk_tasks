import React from 'react';

import { Button } from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Login = Template.bind({});
Login.args = {
  size: 'large',
  primary: true,
  label: 'LOGIN',
};

export const Create = Template.bind({});
Create.args = {
  size: 'large',
  label: 'CREATE',
};

export const Update = Template.bind({});
Update.args = {
  size: 'small',
  label: 'UPDATE',
};

