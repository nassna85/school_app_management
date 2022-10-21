import { FC } from "react";

import { IClassroom } from "@/interfaces/scope/classroom/IClassroom";
import Badge from "@/components/Global/UI/Badge/Badge";
import ActionButton from "@/components/Global/UI/Buttons/ActionButton/ActionButton";
import { BiPencil, BiShow, BiTrash } from "react-icons/bi";

type ClassroomTableRowProps = {
  classroom: IClassroom;
};

const ClassroomTableRow: FC<ClassroomTableRowProps> = ({ classroom }) => {
  const openModalHandler = () => {};
  const openDrawerHandler = () => {};

  return (
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
  );
};

export default ClassroomTableRow;
