import { createContext, FC, ReactNode, useState } from "react";

import ITeachersContext from "@/interfaces/scope/teacher/ITeachersContext";
import { ITeacher } from "@/interfaces/scope/teacher/ITeacher";

interface TeacherProviderProps {
  children: ReactNode;
}

export const TeacherContext = createContext<ITeachersContext | null>(null);

const TeacherProvider: FC<TeacherProviderProps> = ({ children }) => {
  const [teachers, setTeachers] = useState<ITeacher[]>([]);

  const saveTeacher = (teacher: ITeacher) => {
    setTeachers([teacher, ...teachers]);
  };

  const updateTeacher = (id: string, teacherUpdated: ITeacher) => {
    const teacherUpd = teachers.map((teacher) => {
      if (teacher._id === id) {
        return { ...teacher, ...teacherUpdated };
      }
      return teacher;
    });
    setTeachers(teacherUpd);
  };

  const loadTeachers = (teachers: ITeacher[]) => {
    setTeachers(teachers);
  };

  return (
    <TeacherContext.Provider
      value={{
        teachers,
        saveTeacher,
        updateTeacher,
        loadTeachers,
      }}
    >
      {children}
    </TeacherContext.Provider>
  );
};

export default TeacherProvider;
