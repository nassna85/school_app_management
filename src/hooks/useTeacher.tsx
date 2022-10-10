import { useContext } from "react";
import { TeacherContext } from "@/context/teacherContext";

const useTeacher = () => {
  // @ts-ignore
  const { teachers, saveTeacher, updateTeacher, loadTeachers } =
    useContext(TeacherContext);

  return {
    teachers,
    saveTeacher,
    updateTeacher,
    loadTeachers,
  };
};

export default useTeacher;
