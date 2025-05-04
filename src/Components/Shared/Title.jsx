const Title = ({ title }) => {
  return (
    <div className="flex items-center gap-2 mb-4 ">
      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
      <p className="uppercase text-sm opacity-50">{title}</p>
    </div>
  );
};

export default Title;
