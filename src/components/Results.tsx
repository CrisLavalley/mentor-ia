
export default function Results({ content }: { content: string }) {
  return (
    <div className="whitespace-pre-wrap mt-4 bg-gray-100 p-4 rounded-lg shadow">
      {content}
    </div>
  );
}
