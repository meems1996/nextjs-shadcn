export default function ToolsPage({ params }: { params: { id: string } }) {
    return (
        <div>
        <h1>Tools</h1>
        <p>Tools ID: {params.id}</p>
        </div>
    );
}

