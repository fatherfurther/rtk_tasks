import React from 'react';

import { Edit } from './Edit';

export default {
  title: 'atoms/Edit',
  component: Edit,
};

const Template = (args) => <Edit {...args} />;

export const TaskEdit = Template.bind({});
TaskEdit.args = {
  message:"Are you OK?"
};




