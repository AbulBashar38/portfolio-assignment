"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRightIcon, MailCheckIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(10, "A little more detail, please — at least 10 characters.")
    .max(2000, "Please keep it under 2,000 characters."),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "h-12 rounded-none border-0 border-b bg-transparent px-0 text-base shadow-none focus-visible:border-brand focus-visible:ring-0 aria-invalid:border-destructive aria-invalid:ring-0 dark:bg-transparent md:text-base";

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <p
      id={id}
      role={message ? "alert" : undefined}
      className={cn("mt-2 text-sm text-destructive", !message && "sr-only")}
    >
      {message}
    </p>
  );
}

/**
 * Validates the message, then hands it to the visitor's email app via a
 * prefilled mailto link — no backend or third-party service needed.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  function onSubmit(values: FormValues) {
    const subject = `Portfolio enquiry from ${values.name}`;
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    window.location.assign(
      `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    );
    setSent(true);
    reset();
  }

  return (
    <div className="relative">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-8 sm:grid-cols-2"
      >
        <div>
          <Label
            htmlFor="contact-name"
            className="font-mono text-[0.6875rem] font-normal tracking-[0.2em] text-muted-foreground uppercase"
          >
            Your name
          </Label>
          <Input
            id="contact-name"
            autoComplete="name"
            placeholder="Jane Doe"
            aria-invalid={!!errors.name}
            aria-describedby="contact-name-error"
            className={fieldClass}
            {...register("name")}
          />
          <FieldError id="contact-name-error" message={errors.name?.message} />
        </div>

        <div>
          <Label
            htmlFor="contact-email"
            className="font-mono text-[0.6875rem] font-normal tracking-[0.2em] text-muted-foreground uppercase"
          >
            Email
          </Label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            aria-invalid={!!errors.email}
            aria-describedby="contact-email-error"
            className={fieldClass}
            {...register("email")}
          />
          <FieldError
            id="contact-email-error"
            message={errors.email?.message}
          />
        </div>

        <div className="sm:col-span-2">
          <Label
            htmlFor="contact-message"
            className="font-mono text-[0.6875rem] font-normal tracking-[0.2em] text-muted-foreground uppercase"
          >
            Message
          </Label>
          <Textarea
            id="contact-message"
            rows={5}
            placeholder="Tell me about the role or project…"
            aria-invalid={!!errors.message}
            aria-describedby="contact-message-error"
            className={cn(fieldClass, "h-auto min-h-36 resize-y py-3")}
            {...register("message")}
          />
          <FieldError
            id="contact-message-error"
            message={errors.message?.message}
          />
        </div>

        <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Opens your email app with the message ready to send.
          </p>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 px-6 text-sm"
          >
            Send message
            <ArrowUpRightIcon data-icon="inline-end" />
          </Button>
        </div>
      </form>

      <AnimatePresence>
        {sent && (
          <motion.div
            role="status"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="mt-8 flex gap-3 rounded-md border border-brand/40 bg-brand/5 p-4 text-sm"
          >
            <MailCheckIcon className="mt-0.5 size-4 shrink-0 text-brand" />
            <p>
              Your email app should now be open with the message ready to send.
              If nothing happened, write to me directly at{" "}
              <a
                href={`mailto:${profile.email}`}
                className="underline underline-offset-4"
              >
                {profile.email}
              </a>
              .
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
