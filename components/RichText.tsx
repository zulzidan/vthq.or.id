import { Document as RichTextDocument, BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface RichTextProps {
     document: RichTextDocument | null
}

const options = {
     renderNode: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [BLOCKS.HEADING_1]: (node: any, children: any) => (
               <h1 className="text-2xl font-bold">{children}</h1>
          ),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
               <p className="mb-4 text-base leading-relaxed">{children}</p>
          ),
     },
};


const RichText:React.FC<RichTextProps> = ({document}) => {
     if (!document) {
          return null
     }

     return (<>{documentToReactComponents(document, options)}</>)
}    

export default RichText;