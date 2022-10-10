import useFetch from "@/hooks/useFetch";
import useTeacher from "@/hooks/useTeacher";
import { useEffect } from "react";
import TeacherTable from "@/components/Scope/Teacher/TeacherTable/TeacherTable";

const TeacherPage = () => {
  const { teachers, loadTeachers } = useTeacher();
  const { loading, load, items } = useFetch("/teachers");

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    loadTeachers(items);
  }, [items]);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <h1 className="text-2xl font-bold">List of teachers</h1>
      <TeacherTable />
    </div>
  );
};

export default TeacherPage;
