import Link from "next/link";
import React from "react";
import {
  render,
  MARK_LINK,
  MARK_CODE,
  NODE_HR,
  NODE_HEADING,
  NODE_CODEBLOCK,
  NODE_LI,
  NODE_UL,
  NODE_OL,
  NODE_PARAGRAPH,
  NODE_BR,
  NODE_IMAGE,
} from "storyblok-rich-text-react-renderer";

export default function RichTextDefault({ blok }) {
  const { richtext, ...rest } = blok;

  const textAlignments = blok.text_alignment;
  console.log("textAlignments", textAlignments);
  console.log("richtext in render", richtext);

  const resolveNodeHeading = (children, props) => {
    const { level } = props;
    console.log("level", level);
    switch (level) {
      case 1:
        return <h1 className="text-4xl">{children}</h1>;
        break;
      case 2:
        return <h2 className="text-3xl">{children}</h2>;
        break;
      case 3:
        return <h3 className="text-2xl">{children}</h3>;
        break;
      case 4:
        return <h4 className="text-xl">{children}</h4>;
        break;
      case 5:
        return <h5 className="text-lg">{children}</h5>;
        break;
      case 6:
        return <h6 className="text-base">{children}</h6>;
        break;
      default:
        break;
    }
    return <p className="text-sm text-black">{children}</p>;
  };

  const resolveNodeUL = (children) => {
    return <ul className="list-disc ml-4">{children}</ul>;
  };

  const resolveNodeOL = (children) => {
    return <ol className="list-decimal ml-4">{children}</ol>;
  };

  const resolveNodeLI = (children) => {
    return <li className="mb-1">{children}</li>;
  };

  const resolveMarkLink = (children, props) => {
    const { linktype, href, target } = props;
    const linkClassNames = "font-bold underline";
    if (linktype === "email") {
      // Email links: add `mailto:` scheme and map to <a>
      return (
        <a className={`${linkClassNames}`} href={`mailto:${href}`}>
          {children}
        </a>
      );
    }
    if (href.match(/^(https?:)?\/\//)) {
      // External links -> a-tag
      return (
        <a className={`${linkClassNames}`} href={href} target={"_blank"}>
          {children}
        </a>
      );
    }
    // Internal links: map to <Link>
    return (
      <Link className={`${linkClassNames}`} href={href}>
        {children}
      </Link>
    );
  };

  const resolveNodeParagraph = (children) => {
    return <p>{children}</p>;
  };

  const resolveMarkCode = (children, props) => {
    return "";
  };

  const resolveNodeBR = () => {
    return (
      <>
        <br />
      </>
    );
  };
  
  const resolveNodeImage = (children, props) => {
    const { alt, src } = props;
    return (
      <img src={src} alt={alt} />
    );
  }

  const resolvers = {
    markResolvers: {
      [MARK_LINK]: (children, props) => resolveMarkLink(children, props),
      [MARK_CODE]: (children, props) => resolveMarkCode(children, props),
    },
    nodeResolvers: {
      [NODE_HEADING]: (children, props) => resolveNodeHeading(children, props),
      [NODE_CODEBLOCK]: (children, props) =>
        resolveNodeCodeBlock(children, props),
      [NODE_UL]: (children) => resolveNodeUL(children),
      [NODE_OL]: (children) => resolveNodeOL(children),
      [NODE_LI]: (children) => resolveNodeLI(children),
      [NODE_PARAGRAPH]: (children) => resolveNodeParagraph(children),
      [NODE_BR]: () => resolveNodeBR(),
      [NODE_HR]: () => (
        <div className="mt-8 mb-8">
          <hr className="border-t-2 border-t-gray-400" />
        </div>
      ),
    },
    blokResolvers: {
      //Connect other components here
    },
  };

  const renderedRichText = render(richtext, resolvers);

  return (
    <div className={`${textAlignments}`} {...rest}>
      {renderedRichText}
    </div>
  );
}
