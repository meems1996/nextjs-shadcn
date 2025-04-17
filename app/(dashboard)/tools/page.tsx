import Link from "next/link";
import { Tool, toolsConfig } from "./toolsConfig";

export default function ToolsPage() {
  return (
    <div>
      <h1>Tools</h1>
      {toolsConfig.map((tool) => (
        <ToolCard
          key={tool.id}
          title={tool.overview.title}
          description={tool.overview.description}
          icon={tool.icon}
          overview={tool.overview.description}
          name={tool.name}
        />
      ))}
    </div>
  );
}

const ToolCard = ({ title, description, icon, overview, name}: Tool) => {
  return (
      <Link
          href={`/tools/${name}`}
          className="flex items-center justify-between p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
          <div>
              <h2>{title}</h2>
              <p>{overview}</p>
              <p>{description}</p>
              <div>{icon}</div>
          </div>
      </Link>
  )
}
