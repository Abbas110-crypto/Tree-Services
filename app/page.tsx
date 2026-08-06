import {
  ArrowUpRight,
  Axe,
  CheckCircle2,
  Mail,
  MapPin,
  Mic,
  Phone,
  Play,
  Quote,
  Scissors,
  Search,
  ShieldCheck,
  Star,
  TreeDeciduous,
  Truck,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import CountUpStat from "../components/CountUpStat";
import SiteMotion from "../components/SiteMotion";
import TimberVoiceWidget from "../components/TimberVoiceWidget";

const phoneDisplay = "630.373.3354";
const phoneHref = "tel:6303733354";
const email = "admin@tri-countytreeservices.com";

const navItems = [
  ["Services", "#services"],
  ["In Action", "#video"],
  ["Our Work", "#work"],
  ["Results", "#results"],
  ["Reviews", "#reviews"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

const stats = [
  { end: 20, suffix: "+", label: "Years in the industry" },
  { end: 6400, suffix: "+", label: "Trees safely handled" },
  { end: 4.9, suffix: "\u2605", label: "Average review score", decimals: 1 },
  { end: 24, suffix: "h", label: "Emergency response" },
];

const services: Array<{
  title: string;
  description: string;
  Icon: LucideIcon;
}> = [
  {
    title: "Tree Removal",
    description:
      "Controlled, sectional take-downs beside roofs, fences and pools - stump ground and site raked clean the same day.",
    Icon: Axe,
  },
  {
    title: "Structural Pruning",
    description:
      "Species-specific cuts that reduce storm failure risk and add years of healthy growth.",
    Icon: Scissors,
  },
  {
    title: "Crane & Spider Lift",
    description: "Reach the tightest backyard without a single rut in your turf.",
    Icon: Truck,
  },
  {
    title: "Tree Health Inspection",
    description:
      "Root-to-crown diagnostics with a written plan and a plain-English risk rating.",
    Icon: Search,
  },
  {
    title: "Ornamental Shaping",
    description: "Detail work on specimen trees, hedgerows and feature plantings.",
    Icon: TreeDeciduous,
  },
  {
    title: "24-Hour Storm Response",
    description:
      "Limb on the roof at midnight? A certified arborist answers the phone, every time.",
    Icon: ShieldCheck,
  },
];

const steps = [
  ["01", "Free estimate", "Call, or ask our AI voice agent. Most quotes booked within 24 hours."],
  ["02", "On-site walk", "A certified arborist rates every tree and prices it in writing."],
  ["03", "Clean execution", "Crew arrives on time, protects your turf and leaves it spotless."],
];

const work = [
  {
    category: "Crane removal",
    title: "80-ft red oak lifted clear of a family home",
    location: "Wheaton, IL",
    meta: "Completed in 1 day",
    description:
      "A declining oak leaning over the master bedroom. Sectioned and craned out over the roofline with zero damage to shingles, gutters or the perennial beds below.",
    image: "/assets/work-crane-removal-B8iyffEr.jpg",
    alt: "Crane-assisted removal of a large oak overhanging a suburban roof",
    className: "lg:col-span-7",
  },
  {
    category: "Emergency response",
    title: "Storm-felled maple cleared before sunrise",
    location: "Glen Ellyn, IL",
    meta: "On site in 45 minutes",
    description:
      "Call came in at 11pm. Driveway open and safe by 6am.",
    image: "/assets/work-storm-DGH7p7TL.jpg",
    alt: "Crew clearing a storm-felled tree from a driveway before sunrise",
    className: "lg:col-span-5",
  },
  {
    category: "Structural pruning",
    title: "Estate maple row restored to healthy form",
    location: "Naperville, IL",
    meta: "3-year care plan",
    description:
      "Twelve mature maples on a three-year pruning cycle — crown cleaning, deadwood removal and clearance work.",
    image: "/assets/work-pruning-mT5KNMOF.jpg",
    alt: "Row of mature maples after professional structural pruning on an estate lawn",
    className: "lg:col-span-5",
  },
  {
    category: "Stump grinding",
    title: "Front-lawn stump ground and reseeded",
    location: "Lombard, IL",
    meta: "Same-day finish",
    description:
      "Ground 14 inches below grade, chips removed, topsoil and seed laid the same afternoon.",
    image: "/assets/work-stump-CFqnseNu.jpg",
    alt: "Stump grinder removing a large tree stump from a front lawn",
    className: "lg:col-span-7",
  },
];

const reviews = [
  {
    initials: "MR",
    name: "Marcus Reed",
    detail: "Wheaton, IL · Crane removal",
    quote:
      "They took down a 70-foot silver maple over our garage without a single scratch. On time, insured, and the yard was cleaner than when they arrived. Twenty years of experience genuinely shows in how calmly the crew works.",
  },
  {
    initials: "DW",
    name: "Dana Whitfield",
    detail: "Naperville, IL · Structural pruning",
    quote:
      "The arborist walked our whole property, explained what each tree needed and never upsold once. That honesty is why we've booked them three seasons running.",
  },
  {
    initials: "EV",
    name: "Ellis Vaughn",
    detail: "Glen Ellyn, IL · Emergency call-out",
    quote:
      "Storm dropped a limb at 11pm. They were here before sunrise. Genuine 24-hour emergency service, not a voicemail box.",
  },
];

const faqs = [
  {
    question: "How much does tree removal cost in DuPage County?",
    answer:
      "Most residential removals fall between $450 and $2,800 depending on height, lean, proximity to structures and access. We give a firm written price on site - no hourly surprises, no deposit to book.",
  },
  {
    question: "Do you offer 24-hour emergency tree service?",
    answer:
      "Yes. Storm-damaged trees, blocked driveways and limbs on roofs are handled around the clock for existing and new clients.",
  },
  {
    question: "What does an ISA Certified Arborist actually do?",
    answer:
      "An ISA Certified Arborist has passed a comprehensive exam, keeps continuing education current and works to a published code of ethics.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Fully insured with general liability and workers' compensation. Certificates are emailed with every estimate before a saw ever starts.",
  },
];

function Logo({ className }: { className: string }) {
  return (
    <img
      src="/assets/tri-county-logo.png"
      alt="Tri-County Tree Services"
      className={className}
    />
  );
}

function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="eyebrow text-ember">{eyebrow}</p>
      <h2 className="rule-ember mt-5 text-4xl text-foreground sm:text-5xl">{title}</h2>
    </div>
  );
}

function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-4 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
    >
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

function ReviewAuthor({
  initials,
  name,
  detail,
}: {
  initials: string;
  name: string;
  detail: string;
}) {
  return (
    <figcaption className="mt-6 flex items-center gap-3 border-t border-white/12 pt-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ember font-display text-sm text-accent-foreground">
        {initials}
      </span>
      <span className="min-w-0">
        <span className="block font-display text-base text-background">{name}</span>
        <span className="block text-xs text-background/60">{detail}</span>
      </span>
      <span className="ml-auto flex shrink-0 gap-0.5 text-ember-soft">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-current" />
        ))}
      </span>
    </figcaption>
  );
}

export default function Home() {
  return (
    <>
      <main className="reference-root bg-background">
        <div className="hidden bg-forest-deep py-2 text-center text-xs text-background/85 md:block">
          Free estimates · 24-hour emergency response across DuPage County ·{" "}
          <a className="font-semibold text-ember-soft underline-offset-4 hover:underline" href={phoneHref}>
            {phoneDisplay}
          </a>
        </div>

        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 lg:h-20 lg:px-10">
            <a href="#top" className="site-logo-link" aria-label="Tri-County Tree Services home">
              <Logo className="site-logo-header" />
            </a>
            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map(([label, href]) => (
                <a key={label} href={href} className="text-sm font-medium text-foreground/75 transition-colors hover:text-forest">
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex shrink-0 items-center gap-3">
              <a href={phoneHref} className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-ember">
                <Phone className="h-4 w-4 text-ember" />
                <span className="hidden sm:inline">{phoneDisplay}</span>
              </a>
              <a href="#contact" className="hidden rounded-md bg-forest px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-forest-deep sm:inline-block">
                Free estimate
              </a>
            </div>
          </div>
        </header>

        <section id="top" className="relative isolate overflow-hidden">
          <img
            src="/assets/hero-arborist-BcEIYk1j.jpg"
            alt="ISA Certified arborist climbing a large oak tree with a chainsaw in DuPage County"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-deep/95 via-forest-deep/80 to-forest-deep/40" />
          <div className="mx-auto max-w-7xl px-4 pt-16 pb-14 lg:px-10 lg:pt-28 lg:pb-20">
            <div className="max-w-3xl rise">
              <span className="pill bg-white/10 text-background backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-ember-soft" />
                Serving DuPage County since 2006 · ISA Certified
              </span>
              <h1 className="mt-7 text-4xl text-background sm:text-6xl xl:text-7xl">
                Tree removal & pruning
                <span className="block text-ember-soft">done right the first time</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/80">
                Over 6,400 trees safely removed, pruned and restored across Illinois. Honest written pricing, spotless job sites and a certified arborist on call 24 hours a day.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#contact" className="flex items-center gap-2 rounded-md bg-ember px-7 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
                  Get my free estimate <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href={phoneHref} className="flex items-center gap-2 rounded-md border border-background/35 px-7 py-4 text-sm font-semibold text-background transition-colors hover:bg-background hover:text-forest">
                  <Phone className="h-4 w-4" /> Call {phoneDisplay}
                </a>
                <button className="group flex items-center gap-3 rounded-md bg-white/10 px-6 py-4 text-sm font-semibold text-background backdrop-blur-sm transition-colors hover:bg-white/20">
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-ember text-accent-foreground">
                    <span className="halo absolute inset-0 rounded-full bg-ember" />
                    <Mic className="relative h-4 w-4" />
                  </span>
                  Ask Timber, our AI voice agent
                </button>
              </div>
              <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2">
                {["No deposit to book", "Written fixed price", "Licensed & fully insured"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-background/85">
                    <CheckCircle2 className="h-4 w-4 text-ember-soft" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/15 bg-forest-deep/70 backdrop-blur-sm">
            <div className="mx-auto grid max-w-7xl gap-y-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
              {stats.map((stat) => (
                <CountUpStat key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-28 mx-auto max-w-7xl px-4 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading eyebrow="Tree services" title="Everything your canopy needs, from one certified crew" />
            <p className="max-w-xl self-end text-lg leading-relaxed text-muted-foreground">
              A job site is one day for us - it is your home every day. Every tree gets an individual assessment, a written price and a crew that treats your property like a client, not a work order.
            </p>
          </div>
          <div className="mt-12 grid border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, description, Icon }) => (
              <article key={title} className="group border-b border-border px-0 py-8 transition-colors sm:px-6 sm:odd:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n-1)]:border-r">
                <Icon className="h-7 w-7 text-ember" strokeWidth={1.5} />
                <h3 className="mt-5 text-xl text-foreground">{title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-10 lg:pb-28">
          <p className="eyebrow text-ember">How it works</p>
          <h2 className="mt-4 max-w-2xl text-3xl text-foreground sm:text-4xl">Three steps from first call to a cleaner, safer yard</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {steps.map(([number, title, description]) => (
              <div key={number} className="border-t-2 border-ember pt-5">
                <p className="eyebrow text-ember">Step {number}</p>
                <p className="mt-3 font-display text-xl text-foreground">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="video" className="mx-auto max-w-7xl scroll-mt-28 px-4 pb-20 lg:px-10 lg:pb-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-3xl border border-border bg-forest-deep">
              <button className="group relative block aspect-video w-full" aria-label="Play tree removal video">
                <img src="/assets/video-poster-BsJafrhA.jpg" alt="Arborist in a bucket lift beside a tall pine at golden hour" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 bg-forest-deep/35" />
                <span className="absolute top-1/2 left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ember text-accent-foreground transition-transform group-hover:scale-110">
                  <Play className="h-7 w-7 fill-current" />
                </span>
              </button>
            </div>
            <div>
              <SectionHeading eyebrow="On the job" title="Watch a full tree removal, start to finish" />
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Rigging, sectional felling and clean-up - filmed on a real DuPage County removal so you know exactly what happens in your yard.
              </p>
              <div className="mt-8">
                <PrimaryLink href="#contact">Get my free estimate</PrimaryLink>
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="mx-auto max-w-7xl scroll-mt-28 px-4 pb-20 lg:px-10 lg:pb-28">
          <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <SectionHeading eyebrow="Before & after" title="Drag to see the difference" />
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                A storm-damaged canopy restored to healthy, balanced form. Structural pruning today means fewer failures - and fewer emergency bills - in the next decade.
              </p>
              <div className="mt-8">
                <PrimaryLink href="#contact">Book my walk-through</PrimaryLink>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border">
              <div className="relative aspect-4/3 w-full cursor-ew-resize select-none overflow-hidden rounded-sm md:aspect-16/9">
                <img src="/assets/after-yard-BdTsRMrW.jpg" alt="Front yard after professional tree pruning" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 overflow-hidden before-clip">
                  <img src="/assets/before-yard-DO1MsYnS.jpg" alt="Overgrown front yard tree before service" className="h-full w-full object-cover" />
                </div>
                <span className="eyebrow absolute left-4 top-4 bg-forest-deep/85 px-3 py-1.5 text-background">Before</span>
                <span className="eyebrow absolute right-4 top-4 bg-ember px-3 py-1.5 text-accent-foreground">After</span>
                <div className="pointer-events-none absolute inset-y-0 w-1 bg-ember" style={{ left: "50%" }}>
                  <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ember text-accent-foreground shadow-lg">
                    <span className="text-sm font-bold tracking-tight">{"\u2194"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="scroll-mt-28 mx-auto max-w-7xl px-4 pb-20 lg:px-10 lg:pb-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-ember">Recent projects</p>
              <h2 className="rule-ember mt-5 max-w-2xl text-4xl text-foreground sm:text-5xl">
                Two decades of work you can walk past today
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              A sample of the 6,400+ removals, prunings and storm calls our crews have completed across DuPage County and the surrounding Illinois suburbs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-12">
            {work.map((item) => (
              <article key={item.title} className={`group relative overflow-hidden rounded-2xl ${item.className}`}>
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/25 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <span className="eyebrow text-ember-soft">{item.category}</span>
                  <h3 className="mt-2 text-xl text-background sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-background/75">{item.description}</p>
                  <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-background/60">
                    <span>{item.location}</span>
                    <span>{item.meta}</span>
                  </p>
                </figcaption>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-border bg-card p-7">
            <p className="max-w-xl text-muted-foreground">
              Every project above was completed by ISA Certified arborists, fully insured crews and documented with before-and-after photos handed to the homeowner.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-forest px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-forest-deep">
              Start my project <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section id="reviews" className="scroll-mt-28 surface-forest">
          <div className="mx-auto max-w-7xl px-4 py-20 lg:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="eyebrow text-moss">Client words</p>
                <h2 className="mt-5 text-4xl sm:text-5xl">Rated 4.9 by DuPage homeowners</h2>
                <div className="mt-6 flex items-center gap-2 text-ember-soft">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-current" />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-background/70">187 verified reviews</span>
                </div>
                <p className="mt-6 max-w-md leading-relaxed text-background/70">
                  Nine out of ten of our jobs come from a neighbour's recommendation. Here's what they tell us after the trucks pull away.
                </p>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-ember px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
                  Join them — book a free estimate <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {reviews.map((review, index) => (
                  <figure key={review.name} className={`flex flex-col rounded-2xl bg-white/8 p-7 backdrop-blur-sm ring-1 ring-white/10 ${index === 0 ? "sm:col-span-2" : ""}`}>
                    <Quote className="h-6 w-6 text-ember-soft" strokeWidth={1.5} />
                    <blockquote className={`mt-4 grow leading-relaxed text-background/90 ${index === 0 ? "text-lg sm:text-xl" : "text-sm"}`}>
                      “{review.quote}”
                    </blockquote>
                    <ReviewAuthor initials={review.initials} name={review.name} detail={review.detail} />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 lg:px-10 lg:pb-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <img src="/assets/certification-matters.png" alt="ISA Certified arborist with climbing gear in a wooded Illinois backyard" className="h-[26rem] w-full rounded-3xl border border-border object-cover" />
            <div>
              <SectionHeading eyebrow="Why certification matters" title="What is an ISA Certified Arborist?" />
              <p className="mt-6 leading-relaxed text-muted-foreground">
                ISA Certified Arborists prove their knowledge through field experience and a comprehensive exam written by the industry's leading experts. Certification is voluntary, bound to a code of ethics and requires ongoing education - so the person climbing your tree is measured against current tree science, not habit.
              </p>
              <div className="mt-9">
                <PrimaryLink href="#contact">Talk to an arborist</PrimaryLink>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-28 mx-auto max-w-7xl px-4 pb-20 lg:px-10 lg:pb-28">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading eyebrow="Questions" title="Straight answers before you book" />
            <div className="grid gap-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-border bg-card p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-foreground">
                    {faq.question}
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-ember transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 mx-auto max-w-7xl px-4 pb-20 lg:px-10 lg:pb-28">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="surface-sage rounded-3xl border border-border p-8 sm:p-10">
              <SectionHeading eyebrow="Free estimate" title="Tell us about your tree" />
              <p className="mt-4 text-muted-foreground">Most estimates booked within 24 hours. No deposit, no pressure.</p>
              <dl className="mt-10 space-y-7">
                <ContactItem Icon={MapPin} label="Service area" value="DuPage County & surrounding Illinois" />
                <ContactItem Icon={Phone} label="Phone" value={phoneDisplay} href={phoneHref} helper="24-hour emergency line" />
                <ContactItem Icon={Mail} label="Email" value={email} />
              </dl>
            </div>
            <form className="grid gap-5 rounded-3xl border border-border bg-card p-8 sm:grid-cols-2 lg:p-10">
              {["First name", "Last name", "Phone number", "Email"].map((label) => (
                <label key={label} className="block">
                  <span className="eyebrow text-muted-foreground">{label}</span>
                  <input type={label === "Email" ? "email" : label === "Phone number" ? "tel" : "text"} required className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-ember" />
                </label>
              ))}
              <label className="block sm:col-span-2">
                <span className="eyebrow text-muted-foreground">Property address (optional)</span>
                <input type="text" className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-ember" />
              </label>
              <label className="block sm:col-span-2">
                <span className="eyebrow text-muted-foreground">How can we help?</span>
                <textarea rows={4} className="mt-2 w-full resize-none rounded-xl border border-border bg-background p-4 text-sm outline-none focus:border-ember" />
              </label>
              <button type="submit" className="rounded-full bg-ember px-7 py-4 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5 sm:col-span-2">
                Get my free estimate
              </button>
              <p className="text-xs text-muted-foreground sm:col-span-2">We reply within one business day. Your details are never shared.</p>
            </form>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBar />
      <SiteMotion />
      <TimberVoiceWidget />
    </>
  );
}

function ContactItem({
  Icon,
  label,
  value,
  href,
  helper,
}: {
  Icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  helper?: string;
}) {
  const content = href ? <a href={href}>{value}</a> : value;

  return (
    <div className="flex gap-4">
      <Icon className="h-5 w-5 shrink-0 text-ember" />
      <div className="min-w-0">
        <dt className="eyebrow text-muted-foreground">{label}</dt>
        <dd className="mt-1 text-foreground">{content}</dd>
        {helper ? <dd className="text-sm text-muted-foreground">{helper}</dd> : null}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-forest-deep text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="sm:col-span-2">
          <Logo className="site-logo-footer" />
          <p className="mt-3 max-w-md text-sm leading-relaxed text-background/60">
            ISA Certified arborists providing tree removal, pruning, crane work and 24-hour emergency service across DuPage County, Illinois. Licensed and fully insured.
          </p>
        </div>
        <div>
          <p className="eyebrow text-background/50">Company</p>
          <nav className="mt-4 flex flex-col gap-2.5">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-background/70 hover:text-ember-soft">
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <p className="eyebrow text-background/50">Contact</p>
          <ul className="mt-4 space-y-2.5 text-sm text-background/70">
            <li><a href={phoneHref} className="hover:text-ember-soft">{phoneDisplay}</a></li>
            <li className="break-all">{email}</li>
            <li>DuPage County, Illinois</li>
            <li>24-hour emergency line</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-background/40 lg:px-10">© 2026 Tri-County Tree Services. All rights reserved.</p>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-3 backdrop-blur-md sm:hidden">
      <a href={phoneHref} className="flex items-center justify-center gap-2 rounded-full border border-forest/25 py-3 text-sm font-bold text-forest">
        <Phone className="h-4 w-4" /> Call
      </a>
      <a href="#contact" className="flex items-center justify-center rounded-full bg-ember py-3 text-sm font-bold text-accent-foreground">
        Free estimate
      </a>
    </div>
  );
}
