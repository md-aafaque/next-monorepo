import { userState } from "../atoms/user";
import { selector } from "recoil";

export const emailState = selector({
  key: 'emailState',
  get: ({get}) => {
    const state = get(userState);

    return state.email;
  },
});