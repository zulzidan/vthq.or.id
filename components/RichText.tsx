import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface RichTextProps {
     document: RichTextDocument | null
}
const RichText:React.FC<RichTextProps> = ({document}) => {
     if (!document) {
          return null
     }

     return (<>{documentToReactComponents(document)}</>)
}    

export default RichText;