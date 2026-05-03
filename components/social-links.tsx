import { Github, Linkedin, Mail, FileText, Twitter } from "lucide-react";
import { socialLinks, personalInfo } from "@/lib/portfolio-data";

const links = [
  {
    name: "GitHub",
    href: socialLinks.github,
    icon: Github,
    label: "View GitHub Profile",
  },
  {
    name: "LinkedIn",
    href: socialLinks.linkedin,
    icon: Linkedin,
    label: "Connect on LinkedIn",
  },
  {
    name: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    label: "Send an Email",
  },
  {
    name: "Resume",
    href: socialLinks.resume,
    icon: FileText,
    label: "Download Resume",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
          aria-label={link.label}
        >
          <link.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
}
