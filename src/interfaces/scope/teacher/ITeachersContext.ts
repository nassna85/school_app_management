import ITeacher from "@/interfaces/scope/teacher/ITeacher";

export default interface ITeachersContext {
  teachers: ITeacher[];
  saveTeacher: (teacher: ITeacher) => void;
  updateTeacher: (id: string, teacher: ITeacher) => void;
  loadTeachers: (teacher: ITeacher[]) => void;
}
