import Link from "next/link";
import { Tool, toolsConfig } from "./toolsConfig";

export default function ToolsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tools</h1>
      <div className="flex flex-wrap gap-4">
      {toolsConfig.map((tool) => (
        <div className="w-[300px]" key={tool.id}>
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
          className="flex items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
          <div>
              <h2>{name}</h2>
              <p>{description}</p>
              <div>{icon}</div>
              <p>Features:</p>
              <ul>
                  {overview.map((feature, index) => (
                      <li key={index}>{feature}</li>
                  ))}
              </ul>
          </div>
      </Link>
  )
}
