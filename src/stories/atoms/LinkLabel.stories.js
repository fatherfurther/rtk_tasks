import React from 'react';

import { LinkLabel } from './LinkLabel';

export default {
  title: 'atoms/LinkLabel',
  component: LinkLabel,
};

const Template = (args) => <LinkLabel {...args} />;

export const GotoRegister = Template.bind({});
GotoRegister.args = {
  label:"Create Account?"
};

export const GotoLogin = Template.bind({});
GotoLogin.args = {
  label:"Back to Login"
};



