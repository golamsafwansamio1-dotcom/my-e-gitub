
import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
} from "@icons-pack/react-simple-icons";


const iconList = {
  react: SiReact,
  vue: SiVuedotjs,
  svelte: SiSvelte,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  postgresql: SiPostgresql,
  redis: SiRedis,
  javascript: SiJavascript,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  docker: SiDocker,
};

function Allissues({ issue, selectedIssue, setSelectedIssue }) {
  const Icon = iconList[issue.icon];

 
  const isSelected = selectedIssue.some(
    (item) => item.id === issue.id
  );

  
  const handleAddToStack = () => {
    if (isSelected) {
      return;
    }

    setSelectedIssue([...selectedIssue, issue]);
  };

  return (
    <div className="w-full max-w-xs rounded-2xl border border-gray-200 bg-white p-4">

     
      <div className="flex items-center justify-between">
        {Icon && <Icon size={28} />}

        <span className="rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs text-sky-500">
          {issue.badge}
        </span>
      </div>

     
      <h2 className="mt-3 text-base font-bold text-gray-900">
        {issue.name}
      </h2>

      
      <p className="mt-2 text-xs leading-5 text-gray-600">
        {issue.description}
      </p>

     
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 pt-3">
        <span className="rounded bg-gray-100 px-2 py-1 text-[10px] text-gray-600">
          {issue.category}
        </span>

        <span className="text-[10px] text-gray-500">
          {issue.level}
        </span>

        <span className="text-xs text-gray-900">
          <span className="text-yellow-400">★</span>{" "}
          {issue.rating}
        </span>
      </div>

     
      <button
        onClick={handleAddToStack}
        disabled={isSelected}
        className={`mt-3 w-full rounded-lg py-2.5 text-xs font-semibold text-white ${
          isSelected
            ? "bg-green-600 cursor-not-allowed"
            : "bg-gray-950 hover:bg-gray-800"
        }`}
      >
        {isSelected ? "Added to Stack ✓" : "Add to Stack"}
      </button>

    </div>
  );
}

export default Allissues;


