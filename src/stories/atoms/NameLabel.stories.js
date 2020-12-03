import React from 'react';

import { NameLabel } from './NameLabel';

export default {
  title: 'atoms/NameLabel',
  component: NameLabel,
};

const Template = (args) => <NameLabel {...args} />;

export const LoginUsername = Template.bind({});
LoginUsername.args = {
  label:"Username:"
};




