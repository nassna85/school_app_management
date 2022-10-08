import Logo from "@/components/Global/Menu/Logo/Logo";
import Nav from "@/components/Global/Menu/Nav/Nav";
import Setting from "@/components/Global/Menu/Setting/Setting";

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
