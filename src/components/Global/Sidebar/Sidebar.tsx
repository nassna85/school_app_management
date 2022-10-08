import Logo from "@/components/Global/Logo/Logo";
import Nav from "@/components/Global/Nav/Nav";
import Setting from "@/components/Global/Setting/Setting";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 md:w-64 h-screen p-2">
      <Logo />
      <Nav />
      <Setting />
    </div>
  );
};

export default Sidebar;
