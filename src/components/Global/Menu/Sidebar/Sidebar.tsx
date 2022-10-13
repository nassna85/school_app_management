import Logo from "@/components/Global/Menu/Logo/Logo";
import Nav from "@/components/Global/Menu/Nav/Nav";
import Setting from "@/components/Global/Menu/Setting/Setting";
import UserNav from "@/components/Global/Menu/UserNav/UserNav";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 md:w-64 h-screen p-2 flex flex-col justify-between">
      <div>
        <Logo />
        <Nav />
        <Setting />
      </div>
      <UserNav />
    </div>
  );
};

export default Sidebar;
