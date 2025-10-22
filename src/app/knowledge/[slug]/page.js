import BlogPost from "@/app/typography/BlogPost";

const Page= async({ params }) => {
  const { slug } = await params;
  return <BlogPost sublink={'knowledge'} link={slug} />;
}

export default Page;