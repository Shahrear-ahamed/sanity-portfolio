import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import EmailForm from "../ui/EmailForm";

export default function ContactMe() {
  return (
    <section className="wrapper-container mx-auto mt-20 bg-white text-background py-8 rounded-lg -mb-20 relative z-50">
      <div className="p-10 grid gap-10 grid-rows-2 grid-cols-1 md:grid-rows-1 md:grid-cols-2">
        <div className="">
          <h3 className="text-4xl mt-0 mb-5">
            Let&apos;s <span className="text-primary">Talk</span>
          </h3>
          <p className="">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible.
          </p>

          <div>
            <div className="flex items-center mt-8">
              <div className="w-12 h-12 flex mr-5 rounded items-center justify-center bg-primary-100 [&>svg]:text-xl [&>svg]:text-primary">
                <HiOutlineMail />
              </div>
              <div className="flex justify-between items-start flex-col text-sm">
                <h4>Email:</h4>
                <p>its.shahrear@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center mt-8">
              <div className="w-12 h-12 flex mr-5 rounded items-center justify-center bg-primary-100 [&>svg]:text-xl [&>svg]:text-primary">
                <IoCall />
              </div>
              <div className="flex justify-between items-start flex-col text-sm">
                <h4>Whatsapp:</h4>
                <p>+8801517-821912</p>
              </div>
            </div>
          </div>
        </div>

        <EmailForm />
      </div>
    </section>
  );
}
