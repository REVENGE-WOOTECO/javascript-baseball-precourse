import { ERROR_MESSAGE } from "./constants.js";

export const $ = (selector) => document.querySelector(selector);

export const isValidUserInput = (input) => {
  console.log(input);
  if (input.includes(0)) {
    alert("0을 포함");
    return false;
  }

  if (new Set([...input]).size !== 3) {
    alert(ERROR_MESSAGE.DUPLICATED_NUMBER);
    return false;
  }

  return true;
};
