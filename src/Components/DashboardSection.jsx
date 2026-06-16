const DashboardSection = ({ title, children }) => {
  return (
    <div className="mb-6">
      <div className="bg-yellow-300 px-3 py-1 font-semibold flex items-center justify-between">
        {title}
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
};
export default DashboardSection;