
import { Link } from "react-router-dom";

interface FooterLinkItem {
  label: string;
  href?: string;
}

interface FooterLinksProps {
  title: string;
  links: FooterLinkItem[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <section className="flex flex-col items-start gap-3">
      <h3 className="text-sm font-semibold text-stellify-ink">
        {title}
      </h3>

      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.label}>
            {link.href ? (
              <Link
                to={link.href}
                className="text-sm text-stellify-text-secondary transition-colors hover:text-sky-600"
              >
                {link.label}
              </Link>
            ) : (
              <span className="text-sm text-stellify-text-secondary">
                {link.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterLinks;
