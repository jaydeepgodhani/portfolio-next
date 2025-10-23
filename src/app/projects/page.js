"use client";

import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { textBlocks, textList } from "../helpers/utilities";
import Block from "../typography/Block";
import Heading from "../typography/Heading";
import Horizontal from "../typography/Horizontal";
import Radio from "../typography/Radio";

export default function Page() {
  return (
    <LayoutGroup>
      <AnimatePresence mode="sync">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, delayChildren: 0.2 }}
          className="mt-12 mb-4"
        >
          <Heading text={"Experience"} />
          <div
            className="ml-8"
          >
            {textBlocks.experience.map((item, id) => (
              <div key={id} className="my-8">
                <Block
                  key={id}
                  header={item[0]}
                  body={item[1]}
                  footer={item[2]}
                />
                <Horizontal />
              </div>
            ))}
          </div>
          <Heading text={"Corporate Projects"} />
          <div className="ml-8">
            {textBlocks.corpprojects.map((item, id) => (
              <div key={id}>
                <Block
                  key={id}
                  header={item[0]}
                  body={item[1]}
                  footer={item[2]}
                />
                <Horizontal />
              </div>
            ))}
          </div>
          <Heading text={"Personal Exploration"} />
          <div className="ml-8">
            {textBlocks.personalprojects.map((item, id) => (
              <div key={id}>
                <Block
                  key={id}
                  header={item[0]}
                  body={item[1]}
                  footer={item[2]}
                />
                <Horizontal />
              </div>
            ))}
          </div>
          <Heading text={"Skills"} />
          <div className="ml-8">
            <Radio text={textList.skills} />
          </div>
          <Heading text={"Certifications"} />
          <div className="ml-8">
            <Radio text={textList.certifications} />
          </div>
          <Heading text={"Achievements"} />
          <div className="ml-8">
            <Radio text={textList.achievements} />
          </div>
        </motion.div>
      </AnimatePresence>
    </LayoutGroup>
  );
}
