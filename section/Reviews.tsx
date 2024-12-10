import React from "react";
import Profile from "@/components/Profile";

interface ReviewsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apaKataMereka: any;
}

const Reviews: React.FC<ReviewsProps> = ({ apaKataMereka }) => {
  return (
    <section className="py-6 px-6 md:px-14">
      <div className="flex sm:space-x-10 space-x-5 items-center align-middle pb-8">
        <h2 className="text-base font-bold text-green-700 mt-1">
          APA KATA MEREKA ?
        </h2>
        <div className="flex-grow">
          <hr className="bg-green-600 h-2" />
        </div>
      </div>
      <div className="space-y-10">
        {apaKataMereka.map(
           // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (item: { sys: { id: any; }; fields: { imageReviewer: { fields: { file: { url: any; details: { image: { width: number; height: number; }; }; }; title: string; }; }; reviewerType: any; description: any; namaReviewer: any; titleReviewer: any; }; }) => {
            // ImageReviewer
            // ReviewerType
            // Description
            // NamaReviewer
            // TitleReviewer
            const { id } = item.sys;
            const imageReviewrUrl = item.fields.imageReviewer.fields.file.url;
            const altTextReviewerUrl =
              item.fields.imageReviewer.fields.title || "Foto Reviewer";
            const widthImageReviewer =
              item.fields.imageReviewer.fields.file?.details.image?.width || 1000;
            const heightImageReviewer =
              item.fields.imageReviewer.fields.file?.details.image?.height || 1000;
            const reviewerType = item.fields.reviewerType;
            const description = item.fields.description;
            const namaReviewer = item.fields.namaReviewer;
            const titleReviewer = item.fields.titleReviewer;
            return (
              <Profile
                key={id}
                id={id}
                description={description}
                imageAlt={altTextReviewerUrl}
                imageUrl={imageReviewrUrl}
                name={namaReviewer}
                title={reviewerType}
                who={titleReviewer}
                height={heightImageReviewer}
                width={widthImageReviewer}
              />
            );
          }
        )}
        {/* {dummyProfiles.map((profile)=>{
               return(
                    <Profile
                     key={profile.id}
                     id={profile.id}
                     description={profile.description}
                     imageAlt={profile.imageAlt}
                     imageUrl={profile.imageUrl}
                     name={profile.name}
                     title={profile.title}
                     who={profile.who}
                    />
               )
          })} */}
      </div>
    </section>
  );
};

export default Reviews;
