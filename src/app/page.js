import { paragraphs, textBlocks } from "./helpers/utilities";
import Block from "./typography/Block";
import Heading from "./typography/Heading";
import Para from "./typography/Para";

const heading = "👋 I'm Jaydeep Godhani";

export default function Page() {
  return (
    <main className="animate-fade">
      <h1 className="font-heading text-6xl py-24 text-primary">{heading}</h1>
      {paragraphs.aboutme.map((item, id) => (
        <Para key={id}>{item}</Para>
      ))}
      <Heading text={"Experience"} />
      {textBlocks.experience.map((item, id) => (
        <Block key={id} header={item[0]} body={item[1]} footer={item[2]} />
      ))}
    </main>
  );
}
