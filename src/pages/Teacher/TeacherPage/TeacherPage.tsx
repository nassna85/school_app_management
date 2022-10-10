import useFetch from "@/hooks/useFetch";
import useTeacher from "@/hooks/useTeacher";
import { useEffect } from "react";
import TeacherTable from "@/components/Scope/Teacher/TeacherTable/TeacherTable";
import SpinnerLoader from "@/components/Global/UI/Loaders/SpinnerLoader/SpinnerLoader";

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
    <SpinnerLoader />
  ) : (
    <>
      <h1 className="text-2xl font-bold">List of teachers</h1>
      <TeacherTable teachers={teachers} />
    </>
  );
};

export default TeacherPage;
