import Markdown from "react-markdown";
import CodeBlock from "./CodeBlock";

type Props = {
  content: string;
};

export default function PostBody({ content }: Props) {
  const markdown = urlToMarkdown(content);

  return (
    <>
      <Markdown
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            if (match) {
              const language = match[1];
              const code = String(children).replace(/\n$/, "");
              return <CodeBlock language={language} code={code} />;
            } else {
              return (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            }
          },
          pre(props) {
            return <>{props.children}</>;
          },
          a(props) {
            const { children, node, ...rest } = props;
            return (
              <a
                {...rest}
                className="hover:underline text-blue-500"
                target="_blank"
              >
                {children}
              </a>
            );
          },
        }}
      >
        {markdown}
      </Markdown>
    </>
  );
}

const urlToMarkdown = (text: string) => {
  // https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
  // https://commonmark.org/help/
  const expression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  return text.replace(expression, "[$&]($&)");
};
