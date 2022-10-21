import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import InputField from "@/components/Global/UI/Forms/InputField/InputField";
import usePostFetch from "@/hooks/usePostFetch";
import Button from "@/components/Global/UI/Buttons/Button/Button";
import { add } from "@/features/alert/alertSlice";

const ClassroomNewForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { send, data, loading, handleChange, isSuccess, setData, errors } =
    usePostFetch("/classrooms", "POST", "private");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await send(data);
  };

  useEffect(() => {
    if (isSuccess) {
      setData({});
      dispatch(
        add({ type: "success", message: "Classroom added successfully" })
      );
      navigate("/classrooms");
    }
  }, [isSuccess]);

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <InputField
          onChange={handleChange}
          value={data.name}
          name="name"
          type="text"
          required={true}
          placeholder="Name of classroom"
          labelText="Name of classroom"
          error={errors["name"]}
        />
        <InputField
          onChange={handleChange}
          value={data.capacity}
          name="capacity"
          type="number"
          required={true}
          placeholder="Capacity of classroom"
          labelText="Capacity of classroom"
          error={errors["capacity"]}
        />
      </div>

      <Button
        label="Save"
        type="submit"
        variant="primary"
        disabled={loading}
        border="rounded"
      />
    </form>
  );
};

export default ClassroomNewForm;
