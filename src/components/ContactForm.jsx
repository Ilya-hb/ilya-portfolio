import React from "react";
import { useForm } from "react-hook-form";
import { MdError } from "react-icons/md";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="flex w-full flex-col  flex-wrap gap-5 bg-neutral-900 border-1 border-neutral-700 rounded-xl px-10 py-15"
    >
      <h3 className="font-semibold text-neutral-300 text-center text-2xl">
        Let's talk!
      </h3>
      <input
        {...register("name", { required: "Please, write your name" })}
        placeholder="Your name"
        type="text"
      />
      {errors.name && (
        <p className="flex items-center gap-1 text-sm text-red-400 font-semibold">
          <MdError className="text-xl" />
          <span>{errors.name?.message}</span>
        </p>
      )}

      <input
        {...register("email", { required: "Please, write your email" })}
        placeholder="Your email"
        type="email"
      />
      {errors.email && (
        <p className="flex items-center gap-1 text-sm text-red-400 font-semibold">
          <MdError className="text-xl" />
          <span>{errors.email?.message}</span>
        </p>
      )}
      <textarea
        className="w-full p-2 rounded-md border text-neutral-300 border-neutral-700 focus:outline-none  bg-neutral-800 focus:ring-2 focus:ring-accent transition duration-300"
        {...register("message", {
          required: "Please, write your message!",
          minLength: { value: 4, message: "Min length is 4 " },
        })}
        placeholder="Your message"
        type="text"
      />
      {errors.message && (
        <p className="flex items-center gap-1 text-sm text-red-400 font-semibold">
          <MdError className="text-xl" /> <span>{errors.message?.message}</span>
        </p>
      )}
      <button
        type="submit"
        className="cursor-pointer self-center min-w-[200px] hover:bg-neutral-700 transition px-4 py-2 border-1 border-neutral-700 rounded-lg"
      >
        Send message
      </button>
    </form>
  );
}
