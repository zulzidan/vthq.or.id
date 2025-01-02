import { Document as RichTextDocument, BLOCKS} from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {direction} from "direction";

const isArabicText = (text: string) => direction(text) === "rtl";

interface RichTextProps {
     document: RichTextDocument | null
}
// const options = {
//      renderNode: {
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           [BLOCKS.HEADING_1]: (node: any, children: any) => (
//                <h1 className="text-2xl font-bold">{children}</h1>
//           ),
//           // eslint-disable-next-line @typescript-eslint/no-explicit-any
//           [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
//                <p className="mb-4 text-base leading-relaxed">{children}</p>
//           ),
//      },
// };
const options = {
     renderNode: {
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       [BLOCKS.HEADING_1]: (node: any, children: any) => (
         <h1 className="text-2xl font-bold">{children}</h1>
       ),
   
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
       [BLOCKS.PARAGRAPH]: (node: any, children: any) => {
         const textContent = node.content
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
           .map((item: any) => item.value)
           .join("");
         const isArabic = isArabicText(textContent);
   
         return (
           <p
             dir={isArabic ? "rtl" : "ltr"}
             className={`mb-4 text-base leading-relaxed ${isArabic ? "text-right" : "text-left"}`}
           >
             {children}
           </p>
         );
       },
     },
   };


const RichText:React.FC<RichTextProps> = ({document}) => {
     if (!document) {
          return null
     }

     return (<>{documentToReactComponents(document, options)}</>)
}    

export default RichText;