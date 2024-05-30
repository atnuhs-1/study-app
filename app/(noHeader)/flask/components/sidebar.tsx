export default function Sidebar() {
  const contents = [
    { item: "1" },
    { item: "2" },
    { item: "3" },
    { item: "4" },
    { item: "5" },
    { item: "6" },
    { item: "7" },
    { item: "8" },
    { item: "10" },
    { item: "11" },
    { item: "12" },
    { item: "13" },
  ];
  return (
    <div className="col-span-3 border-2 w-full h-full flex flex-col items-center space-y-2">
      {contents.map((content) => (
        <div className="bg-slate-100 w-60 h-20 text-center border-gray-100 border-2">{content.item}</div>
      ))}
    </div>
  );
}
