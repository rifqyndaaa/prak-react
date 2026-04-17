import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">
          🚀 Framework List
        </h1>
        <p className="text-slate-500 text-sm">
          Modern JavaScript Framework Collection
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {frameworkData.map((item) => (
          <div
            key={item.id}
            className="
            group
            bg-white 
            rounded-2xl 
            shadow-sm 
            hover:shadow-xl 
            transition-all 
            duration-300 
            hover:-translate-y-2
            border border-slate-100
            overflow-hidden
            "
          >

            {/* Image */}
            {item.image && (
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                  w-full 
                  h-44 
                  object-cover 
                  transition-transform 
                  duration-500 
                  group-hover:scale-110
                  cursor-pointer
                  "
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6">

              {/* Title */}
              <h2 className="text-xl font-semibold text-slate-800 mb-2">
                {item.name}
              </h2>

              {/* Description */}
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Developer */}
              <div className="text-sm text-slate-600 mb-3">
                <span className="font-medium">
                  👨‍💻 Developed By:
                </span>{" "}
                <span className="font-semibold text-slate-800">
                  {item.details.developer}
                </span>
                <span className="text-slate-400">
                  {" "}({item.details.releaseYear})
                </span>
              </div>

              {/* Website */}
              <a
                href={item.details.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-block 
                text-sm 
                font-medium 
                text-indigo-600 
                hover:text-indigo-800 
                transition
                "
              >
                🌐 Official Website →
              </a>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="
                    bg-slate-100 
                    text-slate-600 
                    px-3 
                    py-1 
                    text-xs 
                    rounded-full 
                    font-medium
                    hover:bg-indigo-100
                    hover:text-indigo-600
                    transition
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}