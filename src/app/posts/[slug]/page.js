// "use client";
import { metadata } from "@/app/helpers/metadata";
import BlogPost from "../../typography/BlogPost";

export async function generateStaticParams() {
  return metadata.map((post) => ({
    slug: post.link,
  }));
}

const Page = async ({ params }) => {
  const { slug } = await params;
  return <BlogPost sublink={"posts"} link={slug} />;
};

export default Page;
