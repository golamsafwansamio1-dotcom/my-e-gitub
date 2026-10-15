
function YourStack({ stack, onRemove, onRemoveAll }) {
  const isStackEmpty = stack.length === 0;

  return (
    <div className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-sm flex flex-col min-h-[300px]">

     
      <h2 className="text-xl font-bold text-[#1e293b] mb-0.5">
        Your Stack
      </h2>

      {isStackEmpty ? (
        <>
         
          <p className="text-sm text-slate-400 font-normal mb-6">
            No technologies selected yet.
          </p>

          <div className="border border-dashed border-slate-200 rounded-2xl py-10 px-4 flex items-center justify-center text-center my-auto">
            <span className="text-sm text-slate-400 font-medium">
              Your stack is empty.
            </span>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-between flex-1">
          <div>
            <p className="text-sm text-slate-400 font-normal mb-4">
              {stack.length} Technology Selected
            </p>

           
            <div className="space-y-3 mb-6">
              {stack.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 flex items-center justify-center text-gray-700">
                      {(() => {
                        const Icon = iconListForStack(item.icon);
                        return Icon ? <Icon size={24} /> : null;
                      })()}
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-slate-800 leading-tight">
                        {item.name}
                      </h4>

                      <span className="text-[10px] text-slate-400 capitalize">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-slate-300 hover:text-slate-600 transition-colors p-1 text-sm font-bold"
                    title="Remove item"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          
          <button
            onClick={onRemoveAll}
            className="w-full py-2.5 rounded-xl border border-red-200 text-red-500 font-semibold text-sm hover:bg-red-50 transition-colors mt-auto"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
}


function iconListForStack(iconName) {
  const icons = {
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

  return icons[iconName];
}

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

export default YourStack;
