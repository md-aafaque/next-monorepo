import {atom} from "recoil";
import { Course } from "../../../types/src/course";

export const courseState = atom<{
  isLoading: boolean,
  course: null | Course
}> ({
  key: 'courseState',
  default: {
    isLoading: true,
    course: null 
  },
});