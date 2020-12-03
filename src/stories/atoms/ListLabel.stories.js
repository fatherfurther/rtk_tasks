import React from 'react';

import { ListLabel } from './ListLabel';

export default {
  title: 'atoms/ListLabel',
  component: ListLabel,
};

const Template = (args) => <ListLabel {...args} />;

export const Task = Template.bind({});
Task.args = {
  title:"Task X"
};



