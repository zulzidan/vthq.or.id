import React from "react";
import { dummyActivity } from "@/data/dummyActivity";
import ArticleCardRound from "@/components/ArticleCardRound";

const ActivityLayout: React.FC = () => {
     return (
          <section className="py-6 px-6 md:px-14 max-w-screen-2xl mx-auto">
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {dummyActivity.map((activity) => {
                         return (
                              <ArticleCardRound article={activity} nameOfContext="kegiatan" key={activity.id}/>
                         )
                    })}
               </div>
          </section>
     )
}

export default ActivityLayout;