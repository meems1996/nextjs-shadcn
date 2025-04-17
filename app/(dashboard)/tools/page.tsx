import Link from "next/link";
import { Tool, toolsConfig } from "./toolsConfig";

export default function ToolsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tools</h1>
      <div className="flex flex-wrap gap-4">
      {toolsConfig.map((tool) => (
        <div className="w-[400px]" key={tool.id}>
          <ToolCard
            key={tool.id}
            title={tool.overview.title}
            description={tool.overview.description}
            icon={tool.icon}
            overview={tool.overview.features}
            name={tool.name}
          />
        </div>
      ))}
      </div>
    </div>
  );
}

const ToolCard = ({ name, description, icon, overview}: Tool) => {
  return (
      <Link
          href={`/tools/${name}`}
          className="flex h-full items-center flex-col justify-between p-4 border rounded-lg shadow-sm hover:shadow-md hover:shadow-pink-300 hover:border-pink-400 transition-shadow duration-200"
          >
          <div>
              <h2 className="text-lg font-semibold mb-2">{icon} {name}</h2>
              <p className="mb-2 text-sm text-gray-600">{description}</p>
              <p className="text-sm font-medium">Features:</p>
              <ul className="list-disc list-inside text-sm text-gray-700">
                  {overview.map((feature, index) => (
                      <li key={index}>{feature}</li>
                  ))}
              </ul>
          </div>
      </Link>
  )
}
