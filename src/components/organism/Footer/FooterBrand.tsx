import Brand from "../../atoms/Brand";

const FooterBrand = () => {
  const socialMediaItems = [
    { name: "X", icon: "/assets/icons/xIcon.svg" },
    { name: "Instagram", icon: "/assets/icons/instagram.svg" },
    { name: "YouTube", icon: "/assets/icons/youtube.svg" },
    { name: "TikTok", icon: "/assets/icons/tiktok.svg" },
  ];
  return (
    <section className="flex flex-col items-start gap-4">
      <Brand />

      <p className="max-w-xs text-sm leading-relaxed text-stellify-text-secondary">
        Your space to meet, support, and create unforgettable memories with your
        favorite idols.
      </p>

      <div className="flex items-center gap-3">
        {socialMediaItems.map((social) => (
          <span
            key={social.name}
            aria-label={social.name}
            title={social.name}
            className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-stellify-surface-subtle transition-colors duration-300 hover:bg-stellify-surface-hover"
          >
            <span
              className="size-5 bg-stellify-text-secondary transition-colors duration-300 group-hover:bg-sky-600"
              style={{
                mask: `url("${social.icon}") center / contain no-repeat`,
                WebkitMask: `url("${social.icon}") center / contain no-repeat`,
              }}
            />
          </span>
        ))}
      </div>
    </section>
  );
};

export default FooterBrand;
