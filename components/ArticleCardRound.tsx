import Image from 'next/image';
import { Article } from '@/types/article';
import Link from 'next/link';
import { AspectRatio } from './ui/aspect-ratio';

interface ArticleCardRoundProps {
  article: Article;
  nameOfContext: string
}

const ArticleCardRound: React.FC<ArticleCardRoundProps> = ({ article, nameOfContext }) => {
  return (
    <section>
    <Link href={`/${nameOfContext}/${article.id}`}>
    <div className="w-full rounded-md overflow-hidden flex flex-col space-y-1.5 border-1 p-6">
      <AspectRatio ratio={16 / 9}>
      <Image src={article.imageUrl} alt={article.title} fill className="rounded-lg object-cover" />
        <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
          09 Januari 20
        </div>
      </AspectRatio>
      <div className="py-4">
        <h3 className="font-bold text-xl mb-2">{article.title}</h3>
        <p className="text-gray-600 text-sm font-semibold mb-2">Ditulis oleh Admin pada 09 Januari 2024</p>
        <p className="text-gray-700 text-sm line-clamp-3">{article.excerpt}</p>
      </div>
    </div>
    </Link>
    </section>
  );
};

export default ArticleCardRound;
