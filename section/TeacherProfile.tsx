import CardProfile from "@/components/CardProfile"
import React from "react"
const TeacherProfile: React.FC = () => {
     return (
          <section className="bg-gray-100 px-6 md:px-14 py-6">
               <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <CardProfile imageUrl="/images/1.jpg" name="Title Or Name"/>
                    <CardProfile imageUrl="/images/1.jpg" name="Title Or Name"/>
                    <CardProfile imageUrl="/images/1.jpg" name="Title Or Name"/>
                    <CardProfile imageUrl="/images/1.jpg" name="Title Or Name"/>
                    <CardProfile imageUrl="/images/1.jpg" name="Title Or Name"/>
               </div>
          </section>
     )
}

export default TeacherProfile