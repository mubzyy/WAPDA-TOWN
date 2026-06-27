const DashboardSection = ({ title, children }) => {
  return (
    <section className="border-b border-slate-200 last:border-b-0">
      <div className="bg-yellow-300 px-3 py-2 text-sm font-bold leading-snug text-slate-950 shadow-[inset_0_-1px_0_rgba(0,0,0,0.18)] sm:px-4 sm:text-base">
        {title}
      </div>
      <div className="p-3 text-sm leading-7 text-slate-900 sm:p-4 sm:text-[15px] md:text-base">
        {children}
      </div>
    </section>
  );
};
export default DashboardSection;
