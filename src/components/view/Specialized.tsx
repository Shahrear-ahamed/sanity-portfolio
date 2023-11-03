import React from "react";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";

const specializedData = [
  {
    title: "Front End Development",
    body: "Front-end development involves creating the user interface and user experience of a website or web application. It focuses on the client-side of development, utilizing technologies such as HTML, CSS, and JavaScript. React, as represented by the icon, is a popular library for building interactive user interfaces.",
    icon: <FaReact />,
  },
  {
    title: "Full Stack Development (MERN)",
    body: "MERN stack stands for MongoDB, Express.js, React, and Node.js. Full-stack developers using the MERN stack have expertise in both front-end and back-end development. MongoDB is a NoSQL database, Express.js is a web application framework for Node.js, and Node.js is a server-side JavaScript runtime.",
    icon: <DiMongodb />,
  },
  {
    title: "Full Stack Development (PERN)",
    body: "PERN stack is similar to MERN but uses PostgreSQL as the database instead of MongoDB. PostgreSQL is a powerful, open-source relational database management system. Full-stack developers using the PERN stack are skilled in building end-to-end applications, combining front-end and back-end technologies.",
    icon: <SiPostgresql />,
  },
];

export default function Specialized() {
  return (
    <section className="wrapper-container mx-auto my-14">
      <h3 className="text-3xl my-5">
        I am <span className="text-primary">Specialized</span> in
      </h3>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {specializedData.map((data, index) => (
          <div
            key={index}
            className="border border-white rounded-lg p-6 group hover:border-primary hover:bg-primary hover:shadow-md hover:shadow-primary duration-400">
            <span className="text-4xl">{data.icon}</span>
            <h4 className="text-2xl my-5 group-hover:text-background duration-400">
              {data.title}
            </h4>
            <p className="text-base group-hover:text-background duration-400">
              {data.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
