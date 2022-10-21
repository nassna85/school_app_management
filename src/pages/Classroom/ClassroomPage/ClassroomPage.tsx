import Title from "@/components/Global/UI/Title/Title";
import LinkButton from "@/components/Global/UI/Buttons/LinkButton/LinkButton";
import ClassroomTable from "@/components/Scope/Classroom/ClassroomTable/ClassroomTable";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import SpinnerLoader from "@/components/Global/UI/Loaders/SpinnerLoader/SpinnerLoader";

const ClassroomPage = () => {
  const { loading, load, items: classrooms } = useFetch("/classrooms");

  useEffect(() => {
    load();
  }, []);

  return loading ? (
    <SpinnerLoader />
  ) : (
    <>
      <div className="flex justify-between items-center mb-5">
        <Title size="2xl">List of classrooms</Title>
        <LinkButton path="/classrooms/new" variant="primary" border="rounded">
          Add classroom
        </LinkButton>
      </div>
      <ClassroomTable classrooms={classrooms} />
    </>
  );
};

export default ClassroomPage;
