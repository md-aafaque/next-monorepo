import {atom} from "recoil";

export interface Course {
  _id: number,
  title: string,
  description: string,
  price: number,
  imageLink: string
}

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