import React from "react";
import Image from "next/image";
import { Activity as ActivityType } from "@/types/activity";
import Article from "@/section/Article";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ShareButtons from "./ShareButtons";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface SingleBlogProps {
  article: ActivityType;
  titlePage: string;
}
const SingleBlog: React.FC<SingleBlogProps> = ({ article, titlePage }) => {
  return (
    <>
      <section className="py-6 px-6 md:px-16">
        <div className="py-4 max-w-screen-md mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/${titlePage}`}>
                 <p className="first-letter:uppercase">{titlePage}</p>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{article.slug}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="py-4 max-w-screen-md mx-auto">
          <p className="font-bold text-xl md:text-2xl lg:text-3xl">
            {article.title}
          </p>
        </div>
        <div className="max-w-screen-md flex justify-between sm:items-center mx-auto py-8">
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 text-sm">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{article.author.name}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-gray-600">Author: {article.author.name}</p>
              <p className="text-gray-600">{article.date}</p>
            </div>
          </div>
          <div className="mt-2.5 sm:mt-0">
            <ShareButtons />
          </div>
        </div>
        <div className="max-w-screen-md mx-auto">
          <Image
            src={article.imageUrl}
            alt={article.title}
            width={2363}
            height={2363}
            priority
            className="w-full"
          />
        </div>
        <div className="py-4 max-w-screen-md mx-auto">
          <p className="leading-loose">{article.description}</p>
        </div>
      </section>
      <div className="px-6 md:px-14 py-6">
        <div className="bg-gradient-to-r from-green-500 to-green-800 text-white w-fit mb-2">
          <h2 className="text-base font-bold mb-4 py-1 px-6 ">Rekomendasi :</h2>
        </div>
      </div>
      <Article />
    </>
  );
};

export default SingleBlog;
