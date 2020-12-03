import React from 'react';

import { Trash } from './Trash';

export default {
  title: 'atoms/Trash',
  component: Trash,
};

const Template = (args) => <Trash {...args} />;

export const TaskDelete = Template.bind({});
TaskDelete.args = {
  message:"Are you OK?"
};




