import { ArrowUpRightIcon } from "lucide-react";

import { CopyEmail } from "@/components/sections/contact/copy-email";
import { SocialLinks } from "@/components/shared/social-links";
import { profile } from "@/data/profile";

export function ContactDetails() {
  const details = [
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    { label: "Based in", value: profile.location },
    { label: "Status", value: profile.availability },
  ];

  return (
    <div>
      <p className="font-mono text-[0.6875rem] tracking-[0.2em] text-muted-foreground uppercase">
        Write to me
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="group mt-3 inline-block font-display text-2xl leading-tight tracking-tight break-all sm:text-3xl xl:text-4xl"
      >
        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
          {profile.email}
        </span>
      </a>
      <div className="mt-4">
        <CopyEmail email={profile.email} />
      </div>

      <dl className="mt-12 border-t">
        {details.map((detail) => (
          <div
            key={detail.label}
            className="grid grid-cols-[6.5rem_1fr] gap-4 border-b py-4"
          >
            <dt className="pt-0.5 font-mono text-[0.6875rem] tracking-[0.2em] text-muted-foreground uppercase">
              {detail.label}
            </dt>
            <dd>
              {detail.href ? (
                <a href={detail.href} className="hover:text-brand">
                  {detail.value}
                </a>
              ) : (
                detail.value
              )}
            </dd>
          </div>
        ))}
      </dl>

      <SocialLinks className="mt-10" />

      <a
        href={profile.resumeUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline"
      >
        Download my resume
        <ArrowUpRightIcon className="size-4" />
      </a>
    </div>
  );
}
