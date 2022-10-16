import { FC } from "react";

import ITeacher from "@/interfaces/scope/teacher/ITeacher";
import TeacherTableRow from "@/components/Scope/Teacher/TeacherTableRow/TeacherTableRow";

type TeacherTableProps = {
  teachers: ITeacher[];
};

const TeacherTable: FC<TeacherTableProps> = ({ teachers }) => {
  return (
    <div className="overflow-x-auto">
      <div className="font-sans overflow-hidden w-full">
        <div className="bg-white shadow-md rounded my-6">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">First Name</th>
                <th className="py-3 px-6 text-left">Last Name</th>
                <th className="py-3 px-6 text-center">Email</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {teachers.map((teacher) => (
                <TeacherTableRow key={teacher._id} teacher={teacher} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherTable;
