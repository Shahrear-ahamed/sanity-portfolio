import React from "react";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import SectionTitle from "../ui/SectionTitle";

const specializedData = [
  {
    title: "Front End Development",
    body: "Front-end development involves creating the user interface and user experience of a website or web application. My main focus is to provide the best user experience to the user. My preferred framework is React.js. and Next.js.",
    icon: <FaReact />,
  },
  {
    title: "MERN Stack Development",
    body: "MongoDB is a document-oriented NoSQL database used for high volume data storage our data can store as like JSON but not JSON its call BSON. I can develop full stack application using MongoDB, Express.js, React, and Node.js.",
    icon: <DiMongodb />,
  },
  {
    title: "PERN Stack Development",
    body: "PostgreSQL are used for relational database. As like MERN i use PostgreSQL instance of MongoDB. I like to use PostgreSQL because it's more secure and more reliable than MongoDB.",
    icon: <SiPostgresql />,
  },
];

export default function Specialized() {
  return (
    <section className="wrapper-container mx-auto my-20 min-h-[60vh] h-full flex flex-col justify-center">
      <SectionTitle>
        I am <span className="text-primary">Specialized</span> in
      </SectionTitle>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {specializedData.map((data, index) => (
          <div
            key={index}
            className="border-2 border-white rounded-lg p-6 -skew-x-[4deg] group hover:border-primary hover:bg-primary hover:shadow-md hover:shadow-primary duration-400 cursor-default">
            <div className="skew-x-[4deg]">
              <span className="w-[50px] h-[50px] flex items-center justify-center border-primary bg-primary group-hover:bg-background border-2 rounded-full [&>svg]:text-3xl [&>svg]:text-background group-hover:[&>svg]:text-white duration-400 [&>svg]:duration-400">
                {data.icon}
              </span>
              <h4 className="text-xl md:text-2xl my-5 group-hover:text-background duration-400">
                {data.title}
              </h4>
              <p className="text-sm group-hover:text-background duration-400">
                {data.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
