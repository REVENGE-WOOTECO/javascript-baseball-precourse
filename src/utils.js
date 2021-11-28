import { ERROR_MESSAGE } from "./constants.js";

export const $ = (selector) => document.querySelector(selector);

export const isValidUserInput = (input) => {
  console.log(input);
  if (input.length !== 3) {
    alert(ERROR_MESSAGE.INPUT_AMOUNT);
    return false;
  }

  if (new Set([...input]).size !== 3) {
    alert(ERROR_MESSAGE.DUPLICATED_NUMBER);
    return false;
  }

  return true;
};
