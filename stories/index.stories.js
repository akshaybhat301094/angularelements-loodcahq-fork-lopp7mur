import "../src/index";
import { html } from "lit-html";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story = () => html` <my-counter></my-counter> `;
