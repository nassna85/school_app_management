import { ITeacher } from "@/interfaces/ITeacher";

export default interface ITeachersContext {
  teachers: ITeacher[];
  saveTeacher: (teacher: ITeacher) => void;
  updateTeacher: (id: string, teacher: ITeacher) => void;
  loadTeachers: (teacher: ITeacher[]) => void;
}
