import {toolsConfig } from "../toolsConfig";

export default function ToolsPage({ params }: { params: { name: string } }) {

    // Take the name parameter from the URL and lowercase it
    const toolName = params.name.toLowerCase();
    // remove url whitespace like %20
    const toolNameCleaned = toolName.replace(/%20/g, " ");

    // Find the tool based on the name parameter
    // This assumes that the name in the URL matches the name in the toolsConfig
    const tool = toolsConfig.find((tool) => tool.name.toLowerCase() === toolNameCleaned);
    if (!tool) {
        return <div>Tool not found</div>;
    }
    const { name, description, icon, overview } = tool;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">{icon} {name}</h1>
            <p className="mb-2 text-sm text-gray-600">{description}</p>
            <p className="text-sm font-medium">Features:</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
                {overview.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
}
