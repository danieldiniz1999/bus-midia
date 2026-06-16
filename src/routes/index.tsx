import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Phone,
  Youtube,
  Instagram,
  ArrowUpRight,
} from "lucide-react";
import heroBus from "../assets/hero-bus.jpg";
import backbusImg from "../assets/backbus.jpg";
import busdoorImg from "../assets/busdoor.jpg";
import logoAsset from "../assets/busmidia-logo.webp.asset.json";

const LOGO_URL = logoAsset.url;
const WHATSAPP_NUMBER = "5585987326044";
const WHATSAPP_MESSAGE =
  "Olá, vim pelo site e quero fazer um orçamento de divulgação da minha marca/empresa";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BusMidia | Publicidade em Ônibus em Fortaleza — Busdoor e Backbus" },
      {
        name: "description",
        content:
          "Coloque sua marca em movimento por Fortaleza com mídia em Busdoor e Backbus. +3.000 projetos, +250 clientes e +220 marcas. Solicite seu orçamento.",
      },
      { property: "og:title", content: "BusMidia | Publicidade em Ônibus" },
      {
        property: "og:description",
        content: "Mídia em ônibus que coloca sua marca em movimento por toda Fortaleza.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/30">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Formats />
        <Benefits />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- Header ---------------- */

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center" aria-label="BusMidia">
          <img src={LOGO_URL} alt="BusMidia" className="h-9 w-auto" />
        </a>
        <nav className="hidden items-center gap-10 text-[13px] font-normal text-muted-foreground md:flex">
          <a href="#quem-somos" className="transition hover:text-foreground">Quem somos</a>
          <a href="#formatos" className="transition hover:text-foreground">Formatos</a>
          <a href="#beneficios" className="transition hover:text-foreground">Benefícios</a>
          <a href="#depoimentos" className="transition hover:text-foreground">Clientes</a>
          <a href="#contato" className="transition hover:text-foreground">Contato</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 text-[13px] font-medium text-foreground transition hover:text-primary sm:inline-flex"
        >
          Orçamento
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>BusMidia — Fortaleza, CE</Eyebrow>
            <h1 className="mt-8 font-serif text-5xl font-light leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Sua marca em{" "}
              <em className="font-medium italic text-primary">movimento</em>,
              <br className="hidden sm:block" /> por toda a cidade.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Há mais de uma década transformando ônibus urbanos em mídia de
              alto impacto. Anuncie em Busdoor e Backbus e alcance milhares de
              pessoas todos os dias.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border-b border-foreground pb-2 text-sm font-medium tracking-wide text-foreground transition hover:border-primary hover:text-primary"
              >
                Solicitar orçamento
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#formatos"
                className="text-sm font-normal text-muted-foreground transition hover:text-foreground"
              >
                Ver formatos
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden">
              <img
                src={heroBus}
                alt="Ônibus com publicidade em avenida de Fortaleza"
                className="aspect-[4/5] w-full object-cover grayscale transition duration-700 hover:grayscale-0"
                width={1024}
                height={1280}
              />
            </div>
            <p className="mt-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Av. Bezerra de Menezes — Fortaleza
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Marquee / Numbers ---------------- */

function Marquee() {
  const items = [
    { v: "3.000+", l: "Projetos realizados" },
    { v: "250+", l: "Clientes atendidos" },
    { v: "220+", l: "Marcas divulgadas" },
    { v: "10+", l: "Anos de estrada" },
  ];
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border md:grid-cols-4">
        {items.map((s) => (
          <div key={s.l} className="px-6 py-10 text-center">
            <div className="font-serif text-4xl font-light text-foreground sm:text-5xl">
              {s.v}
            </div>
            <div className="mt-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

function About() {
  return (
    <section id="quem-somos" className="mx-auto max-w-6xl px-6 py-28 lg:py-36">
      <div className="grid gap-20 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <Eyebrow>01 — Quem somos</Eyebrow>
          <h2 className="mt-8 font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl">
            Mídia urbana que <em className="italic text-primary">circula</em> com a sua marca.
          </h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="text-base leading-relaxed text-muted-foreground">
            A BusMidia é uma agência cearense especializada em publicidade móvel
            em ônibus urbanos. Com sede em Fortaleza, conectamos marcas a
            milhares de pessoas todos os dias — levando sua mensagem para as
            principais avenidas, bairros e pontos comerciais da cidade.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Cuidamos da produção, instalação e gestão completa da campanha. Da
            arte ao relatório final, para que sua marca tenha visibilidade real
            — sem complicação.
          </p>
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {[
              "Equipe própria de produção e instalação",
              "Atendimento consultivo e personalizado",
              "Relatório fotográfico de cada campanha",
              "Frota circulando por toda Fortaleza",
            ].map((t, i) => (
              <li
                key={t}
                className="flex items-baseline gap-6 py-4 text-sm text-foreground"
              >
                <span className="font-serif text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Formats ---------------- */

function Formats() {
  const formats = [
    {
      tag: "Busdoor",
      title: "Mídia lateral",
      description:
        "Painel fixado nas janelas traseiras laterais. Na altura do olhar de pedestres e motoristas, gera leitura excepcional em cruzamentos e semáforos.",
      image: busdoorImg,
    },
    {
      tag: "Backbus",
      title: "Mídia traseira",
      description:
        "Ocupa toda a parte traseira do ônibus. Visto continuamente pelos veículos atrás, garante impacto prolongado durante todo o trajeto.",
      image: backbusImg,
    },
  ];
  return (
    <section id="formatos" className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow tone="dark">02 — Formatos</Eyebrow>
            <h2 className="mt-8 font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl">
              Dois formatos. Uma cidade <em className="italic text-primary">inteira</em> de alcance.
            </h2>
          </div>
          <p className="text-sm text-secondary-foreground/60 lg:col-span-4 lg:col-start-9">
            Escolha o formato ideal para o seu objetivo. Ou combine os dois
            para amplificar o impacto.
          </p>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-2 md:gap-10">
          {formats.map((f) => (
            <article key={f.tag} className="group">
              <div className="overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  className="aspect-[4/3] w-full object-cover transition duration-[1200ms] group-hover:scale-[1.03]"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
              </div>
              <div className="mt-8 flex items-baseline justify-between border-b border-white/10 pb-4">
                <h3 className="font-serif text-2xl font-light text-secondary-foreground">
                  {f.title}
                </h3>
                <span className="text-[11px] uppercase tracking-[0.3em] text-primary">
                  {f.tag}
                </span>
              </div>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-secondary-foreground/70">
                {f.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Benefits ---------------- */

function Benefits() {
  const items = [
    { t: "Alta visibilidade", d: "Sua marca exposta a milhares de pessoas em todo o trajeto, todos os dias." },
    { t: "Cobertura urbana", d: "Atingimos diferentes bairros e perfis de público em uma única campanha." },
    { t: "Custo-benefício", d: "Impacto comparável a outdoors fixos, com investimento mais inteligente." },
    { t: "Mídia que se move", d: "Enquanto outdoors esperam o público passar, o ônibus leva a marca até ele." },
  ];
  return (
    <section id="beneficios" className="mx-auto max-w-6xl px-6 py-28 lg:py-36">
      <div className="max-w-2xl">
        <Eyebrow>03 — Benefícios</Eyebrow>
        <h2 className="mt-8 font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl">
          Resultado que <em className="italic text-primary">circula</em> pela cidade.
        </h2>
      </div>
      <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {items.map((b, i) => (
          <div key={b.t} className="border-t border-border pt-6">
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-sm text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl font-normal text-foreground">{b.t}</h3>
            </div>
            <p className="mt-3 pl-10 text-sm leading-relaxed text-muted-foreground">
              {b.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */

function Process() {
  const steps = [
    { t: "Conversa", d: "Entre em contato pelo WhatsApp e nos conte sobre o seu objetivo." },
    { t: "Proposta", d: "Montamos um plano com formato, quantidade de ônibus e período ideal." },
    { t: "Aprovação", d: "Nossa equipe orienta e finaliza a arte pronta para impressão." },
    { t: "Na rua", d: "Produzimos, instalamos e a campanha começa a rodar Fortaleza." },
  ];
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:py-36">
        <div className="max-w-2xl">
          <Eyebrow>04 — Processo</Eyebrow>
          <h2 className="mt-8 font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl">
            Da ideia à rua, em quatro <em className="italic text-primary">tempos</em>.
          </h2>
        </div>
        <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="border-t border-border pt-6">
              <div className="font-serif text-3xl font-light text-primary">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-6 font-serif text-xl font-normal text-foreground">
                {s.t}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.d}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function Testimonials() {
  const testimonials = [
    {
      name: "Rafael Lima",
      role: "Diretor de Marketing",
      quote:
        "A campanha em Backbus virou conversa nas lojas. Em duas semanas vimos aumento real de fluxo nas unidades atendidas.",
    },
    {
      name: "Carla Mendes",
      role: "Fundadora · Studio Bem Estar",
      quote:
        "Equipe atenciosa do briefing à instalação. O relatório fotográfico foi um diferencial — fechamos a renovação imediata.",
    },
    {
      name: "Diego Araújo",
      role: "Gerente Comercial",
      quote:
        "Trocamos parte da verba de outdoor por Busdoor e o alcance praticamente dobrou. Hoje é item fixo no nosso plano de mídia.",
    },
  ];

  const cases = [
    { brand: "Varejo", metric: "+38%", label: "fluxo em loja após 30 dias" },
    { brand: "Imobiliário", metric: "2,1M", label: "impactos estimados ao mês" },
    { brand: "Educação", metric: "+62%", label: "buscas pela marca no período" },
  ];

  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-6 py-28 lg:py-36">
      <div className="max-w-2xl">
        <Eyebrow>05 — Clientes</Eyebrow>
        <h2 className="mt-8 font-serif text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl">
          Marcas que <em className="italic text-primary">rodam</em> Fortaleza com a gente.
        </h2>
      </div>

      <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="border-t border-border pt-8">
            <blockquote className="font-serif text-xl font-light italic leading-snug text-foreground">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-8">
              <div className="text-sm font-medium text-foreground">{t.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-24 border-t border-border pt-10">
        <div className="mb-10 flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-2xl font-light text-foreground">
            Cases em números
          </h3>
          <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Médias de campanhas recentes
          </span>
        </div>
        <div className="grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {cases.map((c) => (
            <div key={c.brand} className="px-2 py-8 md:px-8">
              <div className="text-[11px] uppercase tracking-[0.3em] text-primary">
                {c.brand}
              </div>
              <div className="mt-5 font-serif text-5xl font-light text-foreground sm:text-6xl">
                {c.metric}
              </div>
              <div className="mt-3 text-sm text-muted-foreground">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section id="contato" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-32 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Eyebrow tone="dark">Contato</Eyebrow>
            <h2 className="mt-8 font-serif text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Vamos colocar sua marca em{" "}
              <em className="italic text-primary">movimento</em>?
            </h2>
            <p className="mt-8 max-w-xl text-base text-secondary-foreground/70">
              Solicite agora seu orçamento de Busdoor ou Backbus e descubra
              como é simples anunciar com a BusMidia.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 inline-flex items-center gap-3 border-b border-secondary-foreground pb-2 text-sm font-medium tracking-wide text-secondary-foreground transition hover:border-primary hover:text-primary"
            >
              Falar no WhatsApp
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          <div className="space-y-6 text-sm text-secondary-foreground/80 lg:col-span-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-primary">
                Telefone
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                (85) 98732-6044
              </div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-primary">
                Endereço
              </div>
              <div className="mt-2 flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                Av. da Liberdade, 361 — Autran Nunes, Fortaleza/CE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-6">
          <img src={LOGO_URL} alt="BusMidia" className="h-9 w-auto" />
          <span className="hidden text-xs text-secondary-foreground/50 sm:inline">
            © {new Date().getFullYear()} BusMidia Publicidade Móvel
          </span>
        </div>
        <div className="flex items-center gap-5">
          <SocialLink href="https://www.youtube.com/@busmidiapublicidademovel6664" label="YouTube">
            <Youtube className="h-4 w-4" />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/busmidiaceara/" label="Instagram">
            <Instagram className="h-4 w-4" />
          </SocialLink>
          <SocialLink href={WHATSAPP_URL} label="WhatsApp">
            <WhatsAppIcon className="h-4 w-4" />
          </SocialLink>
        </div>
      </div>
      <div className="border-t border-white/10 sm:hidden">
        <div className="px-6 py-5 text-center text-xs text-secondary-foreground/50">
          © {new Date().getFullYear()} BusMidia Publicidade Móvel
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-secondary-foreground/60 transition hover:text-primary"
    >
      {children}
    </a>
  );
}

/* ---------------- Helpers ---------------- */

function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div className="flex items-center gap-4">
      <span
        className={`h-px w-8 ${tone === "dark" ? "bg-primary/60" : "bg-foreground/30"}`}
      />
      <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-primary">
        {children}
      </span>
    </div>
  );
}

/* ---------------- Floating WhatsApp ---------------- */

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <WhatsAppIcon className="h-5 w-5" />
    </a>
  );
}
