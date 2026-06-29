import { useRouteLoader } from "./RouteLoaderContext";

const Navbar = () => {
  const NavItems = "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium !text-white transition duration-200 hover:bg-white/10 hover:!text-white";
  const { startRouteLoading } = useRouteLoader();

  return (
    <nav className="border-b border-blue-200 bg-[#112074] shadow-sm">
      <div className="flex w-full justify-evenly overflow-x-auto px-4 py-2">
        <a className={NavItems} onClick={() => startRouteLoading("/dashboard")}>Dashboard</a>
        <a className={NavItems} onClick={() => startRouteLoading("/manage-member")}>Manage Member</a>
        <a className={NavItems}>Allott Property</a>
        <a className={NavItems} onClick={() => startRouteLoading("/transfer-property")}>Transfer Property</a>
        <a className={NavItems}>Update Payments</a>
        <a className={NavItems}>Property History</a>
        <a className={NavItems}>Event Management</a>
        <a className={NavItems}>MIS</a>
      </div>
    </nav>
  );
};

export default Navbar;
