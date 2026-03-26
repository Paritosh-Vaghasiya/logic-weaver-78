"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface AppNavLinkProps
  extends
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<LinkProps, "href"> {
  href: LinkProps["href"];
  className?: string;
  activeClassName?: string;
}

const AppNavLink = forwardRef<HTMLAnchorElement, AppNavLinkProps>(
  ({ className, activeClassName, href, ...props }, ref) => {
    const pathname = usePathname();
    const hrefAsString =
      typeof href === "string" ? href : (href.pathname ?? "");
    const isActive = pathname === hrefAsString;

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

AppNavLink.displayName = "AppNavLink";

export { AppNavLink };
