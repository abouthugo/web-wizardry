type CustomCardProps = {
  data: {
    from: string;
    to: string;
    role: string;
    company: string;
    description: string;
    tags: string[];
  };
}

const Tag = (tag: string) => <span key={tag} className="px-3 py-1 inline-flex justify-center items-center rounded-full bg-semi-transparent border border-semi-transparent text-xs font-semibold text-neutral-400">{tag}</span>;

function CustomCard({ data }: CustomCardProps) {
  return (
    <div className="max-w-md overflow-hidden rounded-lg bg-semi-transparent shadow border border-solid border-semi-transparent cursor-pointer hover:border-off-transparent transition-all ease-linear">
      <div className="grid box-border h-full w-md flex-wrap content-between">
        <div className="p-4 text-white">
          <p className="mb-1 text-sm text-neutral-400">
            <time>{data.from}</time> - <time>{data.to}</time>
          </p>
          <p className="text-xl font-medium">{data.role}</p>
          <p className="text-xl">{data.company}</p>
          <p className="mt-1 text-neutral-300">{data.description}</p>
        </div>
        <div className="py-4 px-2 flex gap-x-2 gap-y-3 flex-wrap items-center">
          {data.tags.map(Tag)}
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
