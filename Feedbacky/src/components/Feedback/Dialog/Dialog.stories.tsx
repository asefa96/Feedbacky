/* istanbul ignore file */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FeedbackDialog from "./";
export default {
  title: "Example/Dialog",
  component: FeedbackDialog,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof FeedbackDialog>;

const Template: ComponentStory<typeof FeedbackDialog> = (args) => (
  <FeedbackDialog isOpen={true} {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  headerText: "Feedback Dialog",
  headerSize: "medium",
  headerVariant: "white",
  submitButtonText:"Submit me!",
  submitButtonSize:"medium",
  submitButtonVariant:"orange",
  messageMaxLenght:2000,
  messageFontSize:"medium"
};
