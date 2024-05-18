import { NAME, EMAIL } from "./actionType";

export const name = (value) => {
  return {
    type: NAME,
    value,
  };
};

export const email = (value = "") => {
  return {
    type: EMAIL,
    value,
  };
};
