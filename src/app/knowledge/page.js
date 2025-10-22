import { knowledgeDocs } from '../helpers/metadata';
import KnowledgeDocsList from "../typography/KnowledgeDocsList";

const Page = () => {
  console.log('knowledge... ');

  return (
    <div className="animate-fade">
      <h2 className="font-heading text-2xl py-6 text-primary">Docs</h2>
      <KnowledgeDocsList content={knowledgeDocs} />
    </div>
  );
};

export default Page;
