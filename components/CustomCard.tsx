type Data = {
  from: string;
  to: string;
  tagline: string;
  description: string;
  tags: string[];
};

interface CustomCardProps {
  data: Data;
}

export default function CustomCard({ data }: CustomCardProps) {
  return (
    <div className="max-w-md overflow-hidden rounded-lg bg-blue-200/30 shadow border border-solid border-blue-100/25">
      <div className="p-4">
        <p className="mb-1 text-sm text-neutral-900">
          <time>{data.from}</time> - <time>{data.to}</time>
        </p>
        <h3 className="text-xl font-medium text-black">{data.tagline}</h3>
        <p className="mt-1 text-neutral-900">{data.description}</p>
        <div className="mt-4 flex gap-2">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 rounded-full bg-zinc-900 px-2 py-1 text-xs font-semibold text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
