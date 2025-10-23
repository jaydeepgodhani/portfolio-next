"use client";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { paragraphs } from "./helpers/utilities";
import Para from "./typography/Para";

const heading = "I'm Jaydeep Godhani";

export default function Page() {
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
          <h1 className="font-heading text-6xl py-24 text-primary">
            👋&emsp;{heading}
          </h1>
          {paragraphs.aboutme.map((item, id) => (
            <Para key={id}>{item}</Para>
          ))}
        </motion.main>
      </AnimatePresence>
    </LayoutGroup>
  );
}
