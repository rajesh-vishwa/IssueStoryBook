import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Hello from "./Hello";

export default {
  title: "Example/Hello",
  component: Hello,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Hello>;

const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />;

export const Initial = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Initial.args = {};
