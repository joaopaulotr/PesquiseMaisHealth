"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface HeroSectionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  animatedTexts: string[];
  subtitle: string;
  infoBadgeText: string;
  ctaButtonText: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  socialProofText: string;
  avatars: { src: string; alt: string; fallback: string }[];
  ctaHref?: string;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  (
    {
      className,
      title,
      animatedTexts,
      subtitle,
      infoBadgeText,
      ctaButtonText,
      secondaryButtonText,
      secondaryButtonHref = "#funcionalidades",
      socialProofText,
      avatars,
      ctaHref = "#planos",
      ...props
    },
    ref,
  ) => {
    const [textIndex, setTextIndex] = React.useState(0);
    const [displayText, setDisplayText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);

    React.useEffect(() => {
      const fullText = animatedTexts[textIndex];

      const handleTyping = () => {
        if (isDeleting) {
          setDisplayText((prev) => prev.substring(0, prev.length - 1));
        } else {
          setDisplayText((prev) => fullText.substring(0, prev.length + 1));
        }
      };

      const typingSpeed = isDeleting ? 60 : 120;
      const typeInterval = setInterval(handleTyping, typingSpeed);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % animatedTexts.length);
      }

      return () => clearInterval(typeInterval);
    }, [displayText, isDeleting, textIndex, animatedTexts]);

    return (
      <section
        className={cn(
          "mx-auto flex flex-col items-center justify-center text-center px-5 py-16 lg:py-20",
          className,
        )}
        ref={ref}
        {...props}
      >
        <div className="max-w-4xl">
          {/* Main heading */}
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-[4rem] leading-[1.1]">
            {title}
            <span className="relative mt-3 block w-fit mx-auto">
              {/* Dashed border */}
              <span className="absolute inset-0 -z-10 -m-2">
                <span className="absolute inset-0 border-2 border-dashed border-primary rounded-2xl" />
              </span>
              {/* Typewriter text */}
              <span className="text-primary min-h-[1.2em] inline-block">
                {displayText}
                <span className="animate-pulse font-thin">|</span>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-7 text-[17px] leading-8 text-muted-foreground max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5">
          {/* Info badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 px-4 py-1.5 text-[13px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            {infoBadgeText}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              className="px-8 rounded-full text-[15px] font-semibold bg-primary hover:bg-primary/90 shadow-md shadow-primary/25 transition-all hover:scale-[1.03] hover:shadow-primary/35"
              asChild
            >
              <a href={ctaHref}>{ctaButtonText}</a>
            </Button>

            {secondaryButtonText && (
              <Button
                size="lg"
                variant="outline"
                className="px-8 rounded-full text-[15px] font-semibold border-gray-200 hover:border-primary/40 hover:text-primary transition-all"
                asChild
              >
                <a href={secondaryButtonHref}>{secondaryButtonText}</a>
              </Button>
            )}
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-3 mt-1">
            <div className="flex -space-x-3">
              {avatars.map((avatar, i) => (
                <Avatar key={i} className="border-2 border-white w-9 h-9 shadow-sm">
                  <AvatarImage src={avatar.src} alt={avatar.alt} />
                  <AvatarFallback className="text-[10px] bg-brand-100 text-brand-700">
                    {avatar.fallback}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="text-sm font-medium text-muted-foreground">{socialProofText}</p>
          </div>
        </div>
      </section>
    );
  },
);

HeroSection.displayName = "HeroSection";

export { HeroSection };
