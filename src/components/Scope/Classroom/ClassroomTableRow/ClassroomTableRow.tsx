import { FC, useMemo, useState } from "react";

import { IClassroom } from "@/interfaces/scope/classroom/IClassroom";
import Badge from "@/components/Global/UI/Badge/Badge";
import ActionButton from "@/components/Global/UI/Buttons/ActionButton/ActionButton";
import { BiPencil, BiShow, BiTrash } from "react-icons/bi";
import useFetch from "@/hooks/useFetch";
import BaseModal from "@/components/Global/UI/Modals/BaseModal/BaseModal";
import Drawer from "@/components/Global/UI/Drawer/Drawer";

type ClassroomTableRowProps = {
  classroom: IClassroom;
};

const ClassroomTableRow: FC<ClassroomTableRowProps> = ({ classroom }) => {
  const { loading, load, item } = useFetch(
    `/classrooms/${classroom._id}`,
    true
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openModalHandler = useMemo(
    function () {
      return function () {
        setIsModalOpen((prevState) => !prevState);
        load();
      };
    },
    [isModalOpen]
  );

  const openDrawerHandler = useMemo(
    function () {
      return function () {
        setIsDrawerOpen((prevState) => !prevState);
        load();
      };
    },
    [isDrawerOpen]
  );

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  const closeDrawerHandler = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <span className="font-medium">{classroom._id}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-left">
          <span>{classroom.name}</span>
        </td>
        <td className="py-3 px-6 text-left">
          <Badge variant="primary" border="rounded-50">
            {classroom.capacity}
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
        <h3 className="text-xl font-bold mb-2 text-gray-800">
          Classroom details
        </h3>
        <ul className="list-none mb-2">
          <li>
            <b>Teachers numbers:</b>{" "}
            <Badge variant="primary" border="rounded-50">
              {item?.teachers?.length}
            </Badge>
          </li>
          <li>
            <b>Name:</b> {item?.name}
          </li>
          <li>
            <b>Capacity:</b> {item?.capacity}
          </li>
        </ul>
      </BaseModal>

      <Drawer
        isOpen={isDrawerOpen}
        onCloseDrawer={closeDrawerHandler}
        isLoading={loading}
      >
        <p>
          Edit classroom <b>{item?.name}</b>
        </p>

        {/* TODO ClassroomEditForm */}
      </Drawer>
    </>
  );
};

export default ClassroomTableRow;
