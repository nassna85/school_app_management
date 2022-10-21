import ClassroomTableRow from "@/components/Scope/Classroom/ClassroomTableRow/ClassroomTableRow";
import { IClassroom } from "@/interfaces/scope/classroom/IClassroom";
import { FC } from "react";

type ClassroomTableProps = {
  classrooms: IClassroom[];
};

const ClassroomTable: FC<ClassroomTableProps> = ({ classrooms }) => {
  return (
    <div className="overflow-x-auto">
      <div className="font-sans overflow-hidden w-full">
        <div className="bg-white shadow-md rounded my-6">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Capacity</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {classrooms.map((classroom) => (
                <ClassroomTableRow key={classroom._id} classroom={classroom} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClassroomTable;
