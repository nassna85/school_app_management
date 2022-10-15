import { FC, useState } from "react";
import { BiShow, BiPencil, BiTrash } from "react-icons/bi";

import { ITeacher } from "@/interfaces/scope/teacher/ITeacher";
import ActionButton from "@/components/Global/UI/Buttons/ActionButton/ActionButton";
import Badge from "@/components/Global/UI/Badge/Badge";
import BaseModal from "@/components/Global/UI/Modals/BaseModal/BaseModal";
import useFetch from "@/hooks/useFetch";
import { IClassrooms } from "@/interfaces/scope/classroom/IClassroom";
import Drawer from "@/components/Global/UI/Drawer/Drawer";
import TeacherEditForm from "@/components/Scope/Teacher/TeacherEditForm/TeacherEditForm";

type TeacherTableItemProps = {
  teacher: ITeacher;
};

const TeacherTableRow: FC<TeacherTableItemProps> = ({ teacher }) => {
  const { loading, load, item } = useFetch(`/teachers/${teacher._id}`, true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
    load();
  };

  const openDrawerHandler = () => {
    setIsDrawerOpen(true);
    load();
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const closeDrawerHandler = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      <tr
        key={teacher._id}
        className="border-b border-gray-200 hover:bg-gray-100"
      >
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <span className="font-medium">{teacher._id}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-left">
          <span>{teacher.firstName}</span>
        </td>
        <td className="py-3 px-6 text-left">
          <span>{teacher.lastName}</span>
        </td>
        <td className="py-3 px-6 text-center">
          <Badge variant="primary" border="rounded-50">
            {teacher.email}
          </Badge>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <ActionButton
              type="button"
              variant="text-blue-700"
              onClick={openModalHandler}
            >
              <BiShow />
            </ActionButton>
            <ActionButton
              type="button"
              variant="text-teal-500"
              onClick={openDrawerHandler}
            >
              <BiPencil />
            </ActionButton>
            <ActionButton
              type="button"
              variant="text-pink-700"
              onClick={() => null}
            >
              <BiTrash />
            </ActionButton>
          </div>
        </td>
      </tr>
      <BaseModal
        isOpen={isModalOpen}
        onClose={closeModalHandler}
        isLoading={loading}
      >
        <h3 className="text-xl font-bold mb-2 text-gray-800">Identity:</h3>
        <ul className="list-none mb-2">
          <li>
            <b>Identifier</b>: {item?._id}
          </li>
          <li>
            <b>First Name</b>: {item?.firstName}
          </li>
          <li>
            <b>Last Name</b>: {item?.lastName}
          </li>
          <li>
            <b>Email</b>: {item?.email}
          </li>
          <li>
            <b>Street</b>: {item?.street}
          </li>
          <li>
            <b>Postal code</b>: {item?.postalCode}
          </li>
          <li>
            <b>City</b>: {item?.city}
          </li>
          <li>
            <b>Country</b>: {item?.country}
          </li>
        </ul>
        <h3 className="text-xl font-bold mb-2 text-gray-800">Classrooms:</h3>
        <ul className="list-none mb-2">
          {item?.classrooms?.map((classroom: IClassrooms) => (
            <li key={classroom?._id}>{classroom?.name}</li>
          ))}
        </ul>
      </BaseModal>

      <Drawer
        isLoading={loading}
        isOpen={isDrawerOpen}
        onCloseDrawer={closeDrawerHandler}
      >
        <p>
          Edit teacher{" "}
          <b>
            {item?.firstName} {item?.lastName}
          </b>
        </p>
        <TeacherEditForm teacher={item} onCloseDrawer={closeDrawerHandler} />
      </Drawer>
    </>
  );
};

export default TeacherTableRow;
