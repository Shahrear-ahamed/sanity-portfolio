"use client";

import { FiSend } from "react-icons/fi";
import toast from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import { EmailTemplateProps } from "@/interfaces/sendEmail";

export default function EmailForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<EmailTemplateProps>();

  const onSubmit: SubmitHandler<EmailTemplateProps> = async (data) => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      toast.error("Message failed to send", { duration: 3000 });
      return;
    }

    reset();
    toast.success(`Hey ${data.name}, i got your mail 📬`, { duration: 3000 });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <p className="text-xs text-red-600 h-5">{errors.name?.message}</p>
        <label
          className="flex text-sm pb-1 items-center justify-between ease-in-out duration-200 border-b-2 border-solid border-gray-500 focus-within:border-b-primary"
          htmlFor="name">
          <span className="w-20">Name:</span>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full resize-none text-black ml-4 bg-transparent border-none outline-none"
            {...register("name", { required: true })}
          />
        </label>
      </div>

      <div>
        <p className="text-xs text-red-600 h-5">{errors.email?.message}</p>
        <label
          className="flex text-sm pb-1 items-center justify-between ease-in-out duration-200 border-b-2 border-solid border-gray-500 focus-within:border-b-primary"
          htmlFor="email">
          <span className="w-20">Email:</span>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className="w-full resize-none text-black ml-4 bg-transparent border-none outline-none"
            {...register("email", { required: true })}
          />
        </label>
      </div>

      <div>
        <p className="text-xs text-red-600 h-5">{errors.subject?.message}</p>
        <label
          className="flex text-sm pb-1 items-center justify-between ease-in-out duration-200 border-b-2 border-solid border-gray-500 focus-within:border-b-primary"
          htmlFor="subject">
          <span className="w-20">Subject:</span>
          <input
            type="text"
            id="Subject"
            placeholder="Enter your subject for message"
            className="w-full resize-none text-black ml-4 bg-transparent border-none outline-none"
            {...register("subject", { required: true })}
          />
        </label>
      </div>

      <div>
        <p className="text-xs text-red-600 h-5">{errors.message?.message}</p>
        <label
          className="flex text-sm pb-1 justify-between ease-in-out duration-200 border-b-2 border-solid border-gray-500 focus-within:border-b-primary"
          htmlFor="message">
          <span className="w-20">Message:</span>
          <textarea
            id="message"
            cols={30}
            rows={4}
            placeholder="Enter your message"
            className="w-full resize-none text-black ml-4 bg-transparent border-none outline-none"
            {...register("message", { required: true })}
          />
        </label>
      </div>

      <button
        type="submit"
        className="flex cursor-pointer rounded-lg items-center justify-center border-none py-3 px-5 bg-primary duration-400 ease-in-out hover:shadow hover:shadow-primary -skew-x-12 text-sm">
        <span className="skew-x-12 mr-2">Send Message</span>
        <FiSend />
      </button>
    </form>
  );
}
