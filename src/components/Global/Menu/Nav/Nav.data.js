import {
  MdOutlineDashboard,
  MdAccessibilityNew,
  MdSupervisedUserCircle,
} from "react-icons/md";
import { FaSchool } from "react-icons/fa";

export const data = [
  {
    name: "Dashboard",
    path: "/",
    icon: <MdOutlineDashboard />,
  },
  {
    name: "Teachers",
    path: "/teachers",
    icon: <MdSupervisedUserCircle />,
  },
  {
    name: "Classrooms",
    path: "/classrooms",
    icon: <FaSchool />,
  },
  {
    name: "Students",
    path: "/students",
    icon: <MdAccessibilityNew />,
  },
];
