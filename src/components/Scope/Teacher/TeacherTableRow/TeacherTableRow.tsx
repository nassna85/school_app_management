import { FC } from "react";
import { BiShow, BiPencil, BiTrash } from "react-icons/bi";

import { ITeacher } from "@/interfaces/ITeacher";
import ActionButton from "@/components/Global/UI/Buttons/ActionButton";
import Badge from "@/components/Global/UI/Badge/Badge";

type TeacherTableItemProps = {
  teacher: ITeacher;
};

const TeacherTableRow: FC<TeacherTableItemProps> = ({ teacher }) => {
  return (
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
        <Badge variant="bg-pink-200" color="text-pink-900">
          {teacher.email}
        </Badge>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center">
          <ActionButton type="button" variant="text-blue-700">
            <BiShow />
          </ActionButton>
          <ActionButton type="button" variant="text-teal-500">
            <BiPencil />
          </ActionButton>
          <ActionButton type="button" variant="text-pink-700">
            <BiTrash />
          </ActionButton>
        </div>
      </td>
    </tr>
  );
};

export default TeacherTableRow;
