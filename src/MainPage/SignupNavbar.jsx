import { Link } from "react-router-dom";

const SignupNavbar = () => {
  const navItems = [
    { label: "Dashboard", path: "/" },
    { label: "Manage Member", path: "/managemember" },
    { label: "Allott Property", path: "/allottproperty" },
    { label: "Transfer Property", path: "/transferproperty" },
    { label: "Update Payment", path: "/updatepayment" },
    { label: "Property History", path: "/propertyhistory" },
  ];

  const NavItems =
    "shrink-0 whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium leading-none !text-white underline-offset-4 decoration-yellow-400 transition duration-200 hover:bg-white/10 hover:!text-yellow-200 hover:underline sm:px-4 lg:text-base";

  return (
    <nav className="relative bg-[#112074] text-white shadow-sm">
      <div className="signup-nav-scroll flex min-h-11 w-full items-center gap-2 overflow-x-auto overscroll-x-contain scroll-smooth px-3 py-1 sm:gap-3 sm:px-4 lg:justify-between lg:gap-5 lg:overflow-visible lg:px-20">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className={NavItems}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default SignupNavbar
