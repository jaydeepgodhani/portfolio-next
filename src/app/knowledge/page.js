"use client";

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { knowledgeDocs } from '../helpers/metadata';
import Heading from '../typography/Heading';
import KnowledgeDocsList from "../typography/KnowledgeDocsList";

const Page = () => {
  return (
    <LayoutGroup>
    <AnimatePresence mode="sync">
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, delayChildren: 0.2 }}
        className="mt-12 mb-4"
      >
        <Heading text={"Docs"} />
        <KnowledgeDocsList content={knowledgeDocs} />
      </motion.main>
    </AnimatePresence>
  </LayoutGroup>
  );
};

export default Page;
