import GoBack from "@/components/Global/UI/GoBack/GoBack";
import Title from "@/components/Global/UI/Title/Title";
import ClassroomNewForm from "@/components/Scope/Classroom/ClassroomNewForm/ClassroomNewForm";

const ClassroomNewPage = () => {
  return (
    <div>
      <GoBack />
      <Title size="2xl">Create new classroom</Title>
      <ClassroomNewForm />
    </div>
  );
};

export default ClassroomNewPage;
