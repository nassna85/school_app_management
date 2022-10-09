import { createContext, FC, ReactNode, useState } from "react";

import ITeachersContext from "@/interfaces/ITeachersContext";
import { ITeacher } from "@/interfaces/ITeacher";

interface TeacherProviderProps {
  children: ReactNode;
}

export const TeacherContext = createContext<ITeachersContext | null>(null);

const TeacherProvider: FC<TeacherProviderProps> = ({ children }) => {
  const [teachers, setTeachers] = useState<ITeacher[]>([]);
  console.log(teachers);

  const saveTeacher = (teacher: ITeacher) => {
    setTeachers([teacher, ...teachers]);
  };

  const updateTeacher = (id: string, teacherUpdated: ITeacher) => {
    const teacherUpd = teachers.map((teacher) => {
      if (teacher.id === id) {
        return { ...teacher, ...teacherUpdated };
      }
      return teacher;
    });

    setTeachers(teacherUpd);
  };

  const loadTeachers = (teachers: ITeacher[]) => {
    console.log("from loadTeachers", teachers);
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
