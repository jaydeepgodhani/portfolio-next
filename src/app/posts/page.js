"use client";

import { useEffect, useState } from "react";
// import markdownContent2 from "./assets/posts/001.md?raw";
import { metadata } from "../helpers/metadata";
import { getMapOfTags } from "../helpers/utilities";
import PostList from "../typography/PostList";

const tagMap = getMapOfTags(metadata);

const checkSubset = (parentArray, subsetArray) => {
  return subsetArray.every((el) => {
    return parentArray.includes(el);
  });
};

const Page = () => {
  const [content, setContent] = useState(metadata);
  const [filter, setFilter] = useState([]);

  const filterTags = (value, e) => {
    const outerSpan = e.currentTarget; // The outer span wrapper
    const shadowSpan = outerSpan.querySelector("span.absolute"); // Find shadow span inside

    if (!filter.includes(value)) {
      shadowSpan.classList.add("shadow-3xl", "animate-fade");
      outerSpan.classList.remove("bg-code-bg");
      setFilter([...filter, value]);
    } else {
      shadowSpan.classList.remove("shadow-3xl", "animate-fade");
      outerSpan.classList.add("bg-code-bg");
      setFilter(filter.filter((a) => a != value));
    }
  };

  useEffect(() => {
    if (filter.length === 0) setContent(metadata);
    else
      setContent(
        metadata.filter((obj) => {
          if (checkSubset(obj.tags, filter)) return true;
          else return false;
        })
      );
  }, [filter]);

  return (
    <div className="animate-fade">
      <h2 className="font-heading text-2xl py-6 text-primary">Tags</h2>
      <div className="mb-4 text-sm text-secondary">
        {Object.keys(tagMap).map((val) => (
          <span
            className="relative inline-block text-secondary text-sm cursor-pointer py-1 px-2 mr-4 rounded-md bg-code-bg"
            key={val}
            onClick={e => filterTags(val, e)}
          >
            <span
              className="absolute inset-0 rounded-md pointer-events-none"
              aria-hidden="true"
            ></span>
            <span className="relative z-10">{val}</span>
          </span>
        ))}
      </div>
      <PostList content={content} />
    </div>
  );
};

export default Page;
