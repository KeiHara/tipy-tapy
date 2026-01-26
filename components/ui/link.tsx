import { cva, type VariantProps } from "class-variance-authority";
import NextLink from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

const linkVariants = cva(
  "relative inline-flex items-center gap-1 transition-colors [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-center after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100",
  {
    variants: {
      variant: {
        default: "text-primary after:bg-primary",
        muted: "text-muted-foreground hover:text-foreground after:bg-foreground",
        foreground: "text-foreground after:bg-foreground",
      },
      size: {
        default: "text-sm",
        xs: "text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Link({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof NextLink> & VariantProps<typeof linkVariants>) {
  return (
    <NextLink
      data-slot="link"
      data-variant={variant}
      data-size={size}
      className={cn(linkVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Link, linkVariants };
