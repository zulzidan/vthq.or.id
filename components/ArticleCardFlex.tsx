import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogActivity } from "@/contentful/blogActivity";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, Node, Text } from '@contentful/rich-text-types';

interface ArticleCardFlexProps {
  article: BlogActivity;
  nameOfContext: string;
}
const ArticleCardFlex: React.FC<ArticleCardFlexProps> = ({
  article,
  nameOfContext,
}) => {
  const CustomComponent = ({ title, description }: { title: string; description: string }) => (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );

  const isTextNode = (node: Node): node is Text => {
    return (node as Text).value !== undefined;
  };

  const options: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const { title, description } = node.data.target.fields;
        return <CustomComponent title={title} description={description} />;
      },
      [INLINES.HYPERLINK]: (node) => {
        if (isTextNode(node.content[0])) {
          return <span>{node.content[0].value}</span>;
        }
        return null;
      },
      [INLINES.ENTRY_HYPERLINK]: (node) => {
        if (isTextNode(node.content[0])) {
          return <span>{node.content[0].value}</span>;
        }
        return null;
      },
      [INLINES.ASSET_HYPERLINK]: (node) => {
        if (isTextNode(node.content[0])) {
          return <span>{node.content[0].value}</span>;
        }
        return null;
      },
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        if (isTextNode(node.content[0])) {
          return <span>{node.content[0].value}</span>;
        }
        return null;
      },
      [INLINES.EMBEDDED_RESOURCE]: (node) => {
        if (isTextNode(node.content[0])) {
          return <span>{node.content[0].value}</span>;
        }
        return null;
      }
    }
  };

  return (
    <>
      <Link href={`/${nameOfContext}/${article.slug}`} >
        <div className="flex items-start space-x-4">
          <div className="lg:w-36 lg:h-36 h-auto w-20 flex-shrink-0">
            {
              article.image && (
                <Image
                  src={`https:${article.image.src}`}
                  alt={article.title}
                  width={2363}
                  height={2363}
                  className="object-cover w-full h-full"
                />
              )
            }
          </div>
          <div className="flex-grow">
            <h3 className="text-sm font-semibold mb-1">{article.title}</h3>
            <div className="text-xs text-gray-600 line-clamp-3">
              {article.body && documentToReactComponents(article.body, options)}
            </div>
            <p
              className="text-blue-500 text-xs hover:underline"
            >
              Baca Selengkapnya...
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ArticleCardFlex;
