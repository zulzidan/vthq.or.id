import Image from 'next/image';
import Link from 'next/link';
import { AspectRatio } from './ui/aspect-ratio';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BlogArticle } from '@/contentful/blogArticle';



interface ArticleCardRoundProps {
  article: BlogArticle;
  nameOfContext: string
}

const ArticleCardRound: React.FC<ArticleCardRoundProps> = ({ article, nameOfContext }) => {
  return (
    <div>
    <Link href={`/${nameOfContext}/${article.slug}`} passHref>
    <Card>
      <CardContent className='p-4'>
      <AspectRatio ratio={16 / 9}>
      {article.image && (
      <Image src={`https:${article.image.src}`} alt={article.title} fill className="rounded-lg object-cover" />
      )}
        <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          {article.date}
        </div>
      </AspectRatio>
      <div className="py-4">
        <h3 className="font-bold text-xl mb-2">{article.title}</h3>
        <p className="text-gray-600 text-sm font-semibold mb-2">Ditulis oleh {article.author?.name} pada {article.date}</p>
        <div className="text-gray-700 text-sm line-clamp-3">
          {article.body && (
            documentToReactComponents(article.body)
          )}
        </div>
      </div>
        </CardContent>
    </Card>
    </Link>
    </div>
  );
};

export default ArticleCardRound;
