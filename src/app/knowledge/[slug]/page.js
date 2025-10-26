// "use client";
import { knowledgeDocs } from "@/app/helpers/metadata";
import BlogPost from "@/app/typography/BlogPost";

export async function generateStaticParams() {
  return knowledgeDocs.map((kw) => ({
    slug: kw.link,
  }));
}

const Page= async({ params }) => {
  const { slug } = await params;
  return <BlogPost sublink={'knowledge'} link={slug} />;
}

export default Page;