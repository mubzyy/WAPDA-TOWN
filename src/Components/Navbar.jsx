const Navbar = () => {
  const NavItems =
    "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-white transition duration-200 hover:bg-white/10";
  return (
    <nav className="border-b border-blue-200 bg-[#112074] shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-2 overflow-x-auto px-4 py-2">
        <a className={NavItems}>Home</a>
        <a className={NavItems}>Society Map</a>
        <a className={NavItems}>Society Management</a>
        <a className={NavItems}>Plots for Sale/Auction</a>
        <a className={NavItems}>Application Forms</a>
        <a className={NavItems}>About Us</a>
        <a className={NavItems}>Contact Us</a>
        <a className={NavItems}>Feedback/Suggestions</a>
      </div>
    </nav>
  );
};

export default Navbar;
