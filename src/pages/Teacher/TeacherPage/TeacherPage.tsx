import useFetch from "@/hooks/useFetch";
import useTeacher from "@/hooks/useTeacher";
import { useEffect } from "react";
import TeacherTable from "@/components/Scope/Teacher/TeacherTable/TeacherTable";
import SpinnerLoader from "@/components/Global/UI/Loaders/SpinnerLoader/SpinnerLoader";
import LinkButton from "@/components/Global/UI/Buttons/LinkButton";
import Title from "@/components/Global/UI/Title/Title";

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
      <div className="flex justify-between items-center mb-5">
        <Title size="2xl">List of teachers</Title>
        <LinkButton path="/teachers/new" variant="bg-pink-700">
          Add Teacher
        </LinkButton>
      </div>
      <TeacherTable teachers={teachers} />
    </>
  );
};

export default TeacherPage;
