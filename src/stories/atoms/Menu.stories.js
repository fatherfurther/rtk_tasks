import React from 'react';

import { Menu } from './Menu';

export default {
  title: 'atoms/Menu',
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const MenuIcon = Template.bind({});
MenuIcon.args = {
  message:"Are you OK?"
};




