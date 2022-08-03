/* istanbul ignore file */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./";
export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: "primary",
  size: "medium",
  shape:"Pill"
};


export const LargeDangerButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LargeDangerButton.args = {
  variant: "danger",
  size: "large",
  shape:"Rectangle"
};
