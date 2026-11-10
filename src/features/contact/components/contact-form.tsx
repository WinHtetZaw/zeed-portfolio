"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";

import {
  contactSchema,
  type ContactFormValues,
} from "@/features/contact/schemas/contact-schema";
import { sendContactMessage } from "../server/actions/send-contact-message";
import { env } from "@/env/client";
import Button from "@/components/ui/button";

const inputClassName =
  "w-full rounded-lg border border-white/10 bg-zinc-900/70 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    // formState: { errors, isSubmitting },
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
      turnstileToken: "",
    },
  });
  const [serverError, setServerError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileKey, setTurnstileKey] = useState(0);

  function onSubmit(values: ContactFormValues) {
    startTransition(async () => {
      setServerError("");

      const result = await sendContactMessage({
        ...values,
        turnstileToken,
      });

      if (!result.success) {
        setServerError(result.message);
        setTurnstileToken("");
        setValue("turnstileToken", "");
        setTurnstileKey((current) => current + 1);
        return;
      }

      setIsSubmitted(true);
      reset();
      setTurnstileToken("");
      setTurnstileKey((current) => current + 1);
    });
  }

  if (isSubmitted) {
    return (
      <div
        role="status"
        className="rounded-2xl border border-green-500/20 bg-green-500/5 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto size-10 text-green-400" />

        <h3 className="mt-4 text-xl font-semibold text-white">
          Message submitted!
        </h3>

        <p className="mt-2 text-sm leading-6 text-zinc-400">
          This is a temporary confirmation. Email delivery will be connected in
          the next step.
        </p>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setTurnstileToken("");
            setTurnstileKey((current) => current + 1);
          }}
          className="mt-6 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Your name
          </label>

          <input
            id="name"
            {...register("name")}
            placeholder="John Doe"
            autoComplete="off"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClassName}
          />

          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Email address
          </label>

          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="john@example.com"
            autoComplete="off"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClassName}
          />

          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          Subject
        </label>

        <input
          id="subject"
          autoComplete="off"
          {...register("subject")}
          placeholder="What would you like to discuss?"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          className={inputClassName}
        />

        {errors.subject && (
          <p id="subject-error" className="mt-2 text-sm text-red-400">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-zinc-300"
        >
          Message
        </label>

        <textarea
          id="message"
          autoComplete="off"
          rows={6}
          {...register("message")}
          placeholder="Tell me a little about your project or opportunity..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClassName} resize-y`}
        />

        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      <input
        type="text"
        {...register("website")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -m-px left-[-9999px] h-px w-px"
      />

      {serverError && (
        <p role="alert" className="text-sm text-red-400">
          {serverError}
        </p>
      )}

      <input type="hidden" {...register("turnstileToken")} />

      <Turnstile
        className=""
        key={turnstileKey}
        siteKey={env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        onSuccess={(token) => {
          setTurnstileToken(token);
          setValue("turnstileToken", token, {
            shouldValidate: true,
          });
        }}
        onExpire={() => {
          setTurnstileToken("");
          setValue("turnstileToken", "", {
            shouldValidate: true,
          });
        }}
        onError={() => {
          setTurnstileToken("");
          setValue("turnstileToken", "", {
            shouldValidate: true,
          });
        }}
      />

      <Button
        type="submit"
        disabled={isPending || !turnstileToken}
        className="inline-flex sm:mr-auto w-full items-center justify-center gap-2 px-5 py-3 text-sm font-medium sm:w-auto"
      >
        {isPending ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send message
            <Send className="size-4" />
          </>
        )}
      </Button>
    </form>
  );
}
