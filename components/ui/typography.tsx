import * as React from "react";

import { cn } from "@/lib/utils";

export function H1({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}
      {...props}
    />
  );
}

export function H2({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("scroll-m-20 border-b text-3xl font-semibold tracking-tight", className)}
      {...props}
    />
  );
}

export function H3({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props} />
  );
}

export function H4({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)} {...props} />
  );
}

export function P({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("leading-7", className)} {...props} />;
}

export function Blockquote({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) {
  return <blockquote className={cn("border-l-2 pl-6 italic", className)} {...props} />;
}

export function List({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) {
  return <ul className={cn("ml-6 list-disc", className)} {...props} />;
}

export function InlineCode({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <code
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...props}
    />
  );
}
