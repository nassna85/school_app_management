import { FC, useState } from "react";

import InputField from "@/components/Global/UI/Forms/InputField/InputField";
import { ITeacher } from "@/interfaces/ITeacher";
import Button from "@/components/Global/UI/Buttons/Button";

type TeacherEditFormProps = {
  teacher: ITeacher;
};

const TeacherEditForm: FC<TeacherEditFormProps> = ({ teacher }) => {
  const [originalTeacher, setOriginalTeacher] = useState(teacher);
  const [editedTeacher, setEditedTeacher] = useState(teacher);

  const handleChange = (changes: object) => {
    setEditedTeacher({ ...editedTeacher, ...changes });
  };

  const reset = () => {
    setEditedTeacher(originalTeacher);
  };
  return (
    <form>
      <Button
        label="Reset"
        isLoading={false}
        type="button"
        variant="bg-blue-700"
        disabled={false}
        onClick={reset}
      />
      <InputField
        handleChange={(e) => handleChange({ firstName: e.target.value })}
        value={editedTeacher?.firstName}
        labelText="First Name"
        labelFor="firstName"
        id="firstName"
        name="firstName"
        type="text"
        isRequired={true}
        placeholder="First Name"
      />
    </form>
  );
};

export default TeacherEditForm;
