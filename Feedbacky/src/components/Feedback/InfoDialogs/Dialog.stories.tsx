/* istanbul ignore file */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import InfoDialog from "./";

export default {
  title: "Example/InfoDialog",
  component: InfoDialog,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof InfoDialog>;

const Template: ComponentStory<typeof InfoDialog> = (args) => (
  <InfoDialog
    isOpen={true}
    {...args}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  infoMessage:{
    messageType:"err"
  },
};

export const ErrorDialog = Template.bind({});
ErrorDialog.args = {
  infoMessage:{
    message:"This is xl error message",
    messageType:"err",
  },
};

export const SuccessDialog = Template.bind({});
SuccessDialog.args = {
  infoMessage:{
    message:"This is xl succes message",
    messageType:"success",
  },

  
};
