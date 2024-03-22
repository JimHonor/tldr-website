import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import CopyButton from "./CopyButton";

type Props = {
  language: string;
  code: string;
};

export default function CodeBlock({ language, code }: Props) {
  return (
    <div className="code-block-wrapper">
      <div className="bg-gray-200 flex justify-between px-4 py-1">
        <span>{language}</span>
        <CopyButton value={code} />
      </div>
      <SyntaxHighlighter
        children={code}
        language={language}
        customStyle={{
          margin: 0,
        }}
      />
    </div>
  );
}
