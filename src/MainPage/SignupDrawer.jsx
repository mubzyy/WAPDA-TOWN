const SignupDrawer = ({ isOpen, onClose }) => {
  const menuItems = [
    "Home",
    "Society Map",
    "Society Management",
    "Plots for Sale/Action",
    "Application Form",
    "About Us",
    "Contact Us",
    "Feedback/Suggestions",
    "About Us",
  ];

  return (
    <>
      {/* Dark background overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity duration-300 ease-in-out
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-62 bg-white z-50 shadow-xl transform transition-transform duration-500 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <h2 className="font-bold text-lg text-blue-900">
            WAPDA Society
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl font-bold text-gray-700 transition-colors duration-200 hover:text-red-600"
          >
            X
          </button>
        </div>

        {/* Drawer Items */}
        <nav className="flex flex-col px-4 py-6 gap-4 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={onClose}
              className="text-left border-b border-gray-100 pb-3 transition-all duration-200 hover:translate-x-1 hover:text-green-900"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default SignupDrawer;
