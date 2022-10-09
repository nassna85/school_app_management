import useFetch from "@/hooks/useFetch";
import useTeacher from "@/hooks/useTeacher";
import { useEffect } from "react";

const TeacherPage = () => {
  const { teachers, loadTeachers } = useTeacher();
  const { loading, load, items } = useFetch("/teachers");

  useEffect(() => {
    load();
    loadTeachers(items);
  }, []);
  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <h2>Teacher list page</h2>
      {JSON.stringify(teachers)}
    </div>
  );
};

export default TeacherPage;
