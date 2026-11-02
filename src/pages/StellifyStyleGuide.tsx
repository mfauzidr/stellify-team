import React from "react";
import Brand from "../components/atoms/Brand";

const palette = [
  {
    name: "Sky 500",
    token: "--color-sky-500",
    hex: "#3BAAFC",
    use: "Primary actions, links, active states",
  },
  {
    name: "Sky 600",
    token: "--color-sky-600",
    hex: "#268FE8",
    use: "Hover and emphasized blue elements",
  },
  {
    name: "Blue 700",
    token: "--color-blue-700",
    hex: "#396EE5",
    use: "Strong blue accents and gradients",
  },
  {
    name: "Indigo 600",
    token: "--color-indigo-600",
    hex: "#405CD4",
    use: "Secondary emphasis",
  },
  {
    name: "Violet 500",
    token: "--color-violet-500",
    hex: "#694AF8",
    use: "CTA gradient, highlights, idol accents",
  },
  {
    name: "Violet 400",
    token: "--color-violet-400",
    hex: "#7F67EF",
    use: "Soft purple accents",
  },
  {
    name: "Pink 400",
    token: "--color-pink-400",
    hex: "#C76CC6",
    use: "Cheki, special labels, cute accents",
  },
];

const neutrals = [
  { name: "Ink 900", hex: "#17233F", use: "Headings and primary text" },
  { name: "Slate 600", hex: "#64748B", use: "Body text and descriptions" },
  { name: "Slate 400", hex: "#94A3B8", use: "Muted labels and metadata" },
  { name: "Border 200", hex: "#E5EAF3", use: "Borders and dividers" },
  { name: "Surface 50", hex: "#F8FAFD", use: "Subtle cards and sections" },
  { name: "White", hex: "#FFFFFF", use: "Main canvas and elevated surfaces" },
];

const typography = [
  {
    role: "Brand / Wordmark",
    font: "Manrope",
    className: "font-brand",
    sample: "Stellify Team",
    note: "Bold 700 · Core brand identity",
  },
  {
    role: "Page title / Idol headline",
    font: "M PLUS Rounded 1c",
    className: "font-title",
    sample: "Closer to Your Stars",
    note: "ExtraBold 800 · Expressive headlines",
  },
  {
    role: "Member name",
    font: "Outfit",
    className: "font-name",
    sample: "Yume Hoshizora",
    note: "Bold 700 · Member identity",
  },
  {
    role: "Body / UI",
    font: "Manrope",
    className: "font-primary",
    sample:
      "Discover events, book cheki sessions, and support your favorite idols.",
    note: "Regular 400 · Interface and body copy",
  },
  {
    role: "Supporting info",
    font: "Nunito",
    className: "font-secondary",
    sample: "Birthday · Zodiac · Member profile",
    note: "SemiBold 600 · Friendly metadata",
  },
  {
    role: "Decorative accent",
    font: "Quicksand",
    className: "font-accent",
    sample: "Special Moments ✦",
    note: "Bold 700 · Playful supporting text",
  },
];

function Swatch({
  name,
  hex,
  use,
}: {
  name: string;
  hex: string;
  use: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <div
        className="h-20 rounded-xl border border-black/5"
        style={{ backgroundColor: hex }}
      />
      <div className="mt-3 flex items-center justify-between gap-2">
        <span className="text-sm font-bold text-slate-800">{name}</span>
        <code className="text-xs text-slate-500">{hex}</code>
      </div>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">{use}</p>
    </div>
  );
}

export default function StellifyStyleGuide() {
  return (
    <main className="min-h-screen bg-canvass px-4 py-8 text-[var(--color-ink)] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-10">
        <header className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--color-sky-100)] via-white to-[var(--color-violet-100)] p-7 shadow-sm ring-1 ring-slate-200/70 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Brand />
            </div>
            <span className="rounded-full border border-white/80 bg-white/75 px-4 py-2 text-xs font-bold text-[var(--color-blue-700)]">
              STYLE GUIDE · V1.0
            </span>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-[1.2fr_.8fr] md:items-end">
            <div>
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[.22em] text-[var(--color-sky-600)]">
                Meet · Support · Create Memories
              </p>
              <h1 className="font-title text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">
                Closer to{" "}
                <span className="bg-gradient-to-r from-[var(--color-sky-500)] to-[var(--color-violet-500)] bg-clip-text text-transparent">
                  Your Stars
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                A bright, dreamy and friendly visual language for an idol
                community — balancing a professional digital platform with the
                playful energy of J-Pop and K-Pop culture.
              </p>
            </div>
            <div className="rounded-3xl border border-white/80 bg-white/70 p-5 shadow-lg shadow-blue-100/60 backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Core brand colors
              </p>
              <div className="mt-4 flex h-16 overflow-hidden rounded-2xl">
                <div className="flex-1 bg-[var(--color-sky-500)]" />
                <div className="flex-1 bg-[var(--color-blue-700)]" />
                <div className="flex-1 bg-[var(--color-violet-500)]" />
                <div className="flex-1 bg-[var(--color-pink-400)]" />
              </div>
              <div className="mt-3 flex justify-between text-[11px] font-semibold text-slate-500">
                <span>Sky blue</span>
                <span>Blue</span>
                <span>Violet</span>
                <span>Pink</span>
              </div>
            </div>
          </div>
        </header>

        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[var(--color-sky-600)]">
                01 · Color system
              </p>
              <h2 className="mt-1 text-2xl font-extrabold">Brand palette</h2>
            </div>
            <p className="hidden text-sm text-slate-500 sm:block">
              Blue is the anchor. Violet adds energy; pink adds idol charm.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {palette.map((c) => (
              <Swatch key={c.token} {...c} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-5">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[var(--color-sky-600)]">
              02 · Neutral foundation
            </p>
            <h2 className="mt-1 text-2xl font-extrabold">
              Neutrals & surfaces
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {neutrals.map((c) => (
              <Swatch key={c.hex} {...c} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[var(--color-sky-600)]">
              03 · Gradients
            </p>
            <h2 className="mt-1 text-2xl font-extrabold">Signature blends</h2>
            <div className="mt-5 space-y-4">
              <div>
                <div className="h-20 rounded-2xl bg-gradient-to-r from-[var(--color-sky-500)] to-[var(--color-violet-500)]" />
                <p className="mt-2 text-sm font-bold">Primary CTA</p>
                <code className="text-xs text-slate-500">
                  Sky 500 → Violet 500
                </code>
              </div>
              <div>
                <div className="h-20 rounded-2xl bg-gradient-to-r from-[var(--color-sky-100)] via-white to-[var(--color-violet-100)]" />
                <p className="mt-2 text-sm font-bold">Dreamy background</p>
                <code className="text-xs text-slate-500">
                  Sky 100 → White → Violet 100
                </code>
              </div>
              <div>
                <div className="h-20 rounded-2xl bg-gradient-to-r from-[var(--color-blue-700)] to-[var(--color-violet-500)]" />
                <p className="mt-2 text-sm font-bold">Emphasis gradient</p>
                <code className="text-xs text-slate-500">
                  Blue 700 → Violet 500
                </code>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[var(--color-sky-600)]">
              04 · Semantic colors
            </p>
            <h2 className="mt-1 text-2xl font-extrabold">Color by purpose</h2>
            <div className="mt-5 space-y-3 text-sm">
              {[
                ["Text primary", "#17233F", "Main headings and readable text"],
                [
                  "Text secondary",
                  "#64748B",
                  "Descriptions and supporting copy",
                ],
                ["Text accent", "#268FE8", "Links and highlighted text"],
                ["Button primary", "#3BAAFC", "Main action background"],
                ["Button label", "#FFFFFF", "Text on primary buttons"],
                ["Border default", "#E5EAF3", "Cards, inputs and dividers"],
              ].map(([label, hex, desc]) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"
                >
                  <span
                    className="h-8 w-8 shrink-0 rounded-lg border border-black/5"
                    style={{ backgroundColor: hex }}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-slate-800">{label}</p>
                    <p className="text-xs text-slate-500">{desc}</p>
                  </div>
                  <code className="text-xs text-slate-500">{hex}</code>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-5">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[var(--color-sky-600)]">
              05 · Typography
            </p>
            <h2 className="mt-1 text-2xl font-extrabold">Font roles</h2>
            <p className="mt-1 text-sm text-slate-500">
              Use each family with a clear role; avoid using all fonts in the
              same component.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {typography.map((t) => (
              <div
                key={t.role}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                    {t.role}
                  </p>
                  <code className="text-[11px] text-[var(--color-blue-700)]">
                    {t.font}
                  </code>
                </div>
                <p className={`mt-4 text-2xl font-bold ${t.className}`}>
                  {t.sample}
                </p>
                <p className="mt-2 text-xs text-slate-500">{t.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-5">
            <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[var(--color-sky-600)]">
              06 · Components
            </p>
            <h2 className="mt-1 text-2xl font-extrabold">UI examples</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                Buttons
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl bg-gradient-to-r from-[var(--color-sky-500)] to-[var(--color-violet-500)] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-200">
                  Explore Events →
                </button>
                <button className="rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-bold text-[var(--color-blue-700)]">
                  View Idols
                </button>
                <button className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-bold text-slate-600">
                  Secondary
                </button>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Primary for the main action; outline for secondary navigation.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                Badges & labels
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-violet-100 px-3 py-1.5 text-xs font-extrabold text-violet-700">
                  Featured
                </span>
                <span className="rounded-full bg-sky-100 px-3 py-1.5 text-xs font-extrabold text-sky-700">
                  Upcoming
                </span>
                <span className="rounded-full bg-pink-100 px-3 py-1.5 text-xs font-extrabold text-pink-700">
                  On Sale
                </span>
                <span className="rounded-full bg-amber-100 px-3 py-1.5 text-xs font-extrabold text-amber-700">
                  Best Seller
                </span>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Use accent colors sparingly to help categories stand apart.
              </p>
            </div>
          </div>
        </section>

        <footer className="rounded-3xl bg-[var(--color-ink)] p-6 text-white sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="font-brand text-xl font-extrabold">Stellify Team ✦</p>
            <p className="mt-1 text-sm text-slate-300">
              Meet your stars. Create unforgettable memories.
            </p>
          </div>
          <p className="mt-4 text-xs text-slate-400 sm:mt-0">
            Color values are visual estimates from the supplied homepage
            reference.
          </p>
        </footer>
      </div>
    </main>
  );
}
