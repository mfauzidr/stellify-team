
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterCopyright from "./FooterCopyright";

const exploreLinks = [
  { label: "Events", href: "/events" },
  { label: "Cheki", href: "/cheki" },
  { label: "Products", href: "/products" },
  { label: "Idols", href: "/idols" },
  { label: "News", href: "/news" },
];

const supportLinks = [
  { label: "Help Center" },
  { label: "FAQ" },
  { label: "Terms of Service" },
  { label: "Privacy Policy" },
  { label: "Contact Us" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-stellify-border bg-stellify-canvas">
      <div className="page-container">
        <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <FooterBrand />

          <FooterLinks
            title="Explore"
            links={exploreLinks}
          />

          <FooterLinks
            title="Support"
            links={supportLinks}
          />
        </div>

        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
