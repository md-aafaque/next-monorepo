import {atom} from "recoil";

export const userState = atom<{
  isLoading: boolean,
  email: null | string
}> ({
  key: 'userState',
  default: {
    isLoading: true,
    email: null
  },
});