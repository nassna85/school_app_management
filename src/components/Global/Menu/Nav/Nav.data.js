import {
  MdOutlineDashboard,
  MdAccessibilityNew,
  MdSupervisedUserCircle,
} from "react-icons/md";

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
    name: "Students",
    path: "/students",
    icon: <MdAccessibilityNew />,
  },
];
