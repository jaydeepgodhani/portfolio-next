import Link from "next/link";

const KnowledgeDocsList = ({ content }) => {
  return (
    <div className="animate-fade">
        {content.map((obj) => (
          <div key={obj.link} className="flex flex-row py-4 ml-8">
            <span className="shadow-none hover:shadow-none block text-primary w-auto">
              {"•"}&emsp;
            </span>
            <Link
              href={`/knowledge/${obj.link}`}
              className="shadow-none hover:shadow-none bg-quote-bg block text-primary w-auto"
            >
              {obj.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default KnowledgeDocsList;
