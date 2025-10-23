import Para from "./Para";

const Block = ({ header, body, footer }) => {
  return <div className="my-2">
    <p className="my-5 whitespace-pre-line text-2xl leading-7 animate-fade">{header}</p>
    <Para>
      {body}
    </Para>
    <Para>
      {footer}
    </Para>
  </div>;
};

export default Block;
