import { IClassrooms } from "@/interfaces/IClassroom";

export interface ITeacher {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  classrooms: IClassrooms[];
}

/*export interface ITeachers {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}*/
