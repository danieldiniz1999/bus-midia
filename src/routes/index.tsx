import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Youtube,
  Instagram,
  CheckCircle2,
  Target,
  TrendingUp,
  Users,
  Eye,
  Route as RouteIcon,
  Sparkles,
  ArrowRight,
  Star,
  Quote,
  Menu,
  X,
} from "lucide-react";
import heroBus from "../assets/hero-bus.jpg";
import { Reveal } from "../components/Reveal";
import { NumberTicker } from "../components/NumberTicker";
import backbusImg from "../assets/backbus.jpg";
import busdoorImg from "../assets/busdoor.jpg";
import logoAsset from "../assets/busmidia-logo.webp.asset.json";
import clientBrayan from "../assets/clients/brayan.png.asset.json";
import clientDomQuintino from "../assets/clients/domquintino.png.asset.json";
import clientGcNet from "../assets/clients/gcnet.png.asset.json";

import clientSelfit from "../assets/clients/selfit.svg.asset.json";
import clientTiradentes from "../assets/clients/tiradentes.png.asset.json";
import clientUnifametro from "../assets/clients/unifametro.png.asset.json";
import clientIdealAlimentos from "../assets/clients/ideal-alimentos.png.asset.json";
import clientUnifanor from "../assets/clients/unifanor.png.asset.json";
import clientBetNacional from "../assets/betnacional.png.asset.json";
import clientPomar from "../assets/pomar.png.asset.json";

const CLIENTS = [
  { name: "Selfit Academias", url: clientSelfit.url },
  { name: "UNIFANOR Wyden", url: clientUnifanor.url },
  { name: "UNIFAMETRO", url: clientUnifametro.url },
  { name: "Colégio Tiradentes", url: clientTiradentes.url },
  { name: "Colégio Dom Quintino", url: clientDomQuintino.url },
  { name: "Ideal Alimentos", url: clientIdealAlimentos.url },
  
  { name: "GC Net", url: clientGcNet.url },
  { name: "Brayan Burguer", url: clientBrayan.url },
  { name: "Bet Nacional", url: clientBetNacional.url },
  { name: "Pomar", url: clientPomar.url },
];

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
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <Reveal><Stats /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><Formats /></Reveal>
        <Reveal><Benefits /></Reveal>
        <Reveal><Process /></Reveal>
        <Reveal><Clients /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><FinalCTA /></Reveal>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- Header ---------------- */

function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { href: "#quem-somos", label: "Quem somos" },
    { href: "#formatos", label: "Formatos" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header className="relative z-40 border-b border-[#f5c518]/30 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#0c1a2e] transition hover:bg-[#0c1a2e]/10 lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
          <a href="#top" className="flex shrink-0 items-center" aria-label="BusMidia - início">
            <img
              src={LOGO_URL}
              alt="BusMidia - Publicidade em Ônibus"
              className="h-10 w-auto sm:h-12"
            />
          </a>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#0c1a2e]/80 lg:flex xl:gap-8">
          {navItems.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="relative transition hover:text-[#0c1a2e] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-[#f5c518] after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#f5c518] px-3 py-2 text-xs font-semibold text-[#0c1a2e] transition hover:bg-[#ffd84d] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden xs:inline sm:inline">Orçamento</span>
          </a>
        </div>
      </div>

      {open && (
        <nav className="border-t border-[#f5c518]/30 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navItems.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-[#0c1a2e]/85 transition hover:bg-[#0c1a2e]/10 hover:text-[#0c1a2e]"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-secondary text-secondary-foreground"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="pointer-events-none absolute -top-40 -right-40 -z-10 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-28">
        <div>
          <span
            className="inline-flex animate-rise-in items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            style={{ animationDelay: "0ms" }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Publicidade em movimento
          </span>

          <h1
            className="mt-6 animate-rise-in text-balance text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "120ms" }}
          >
            Sua marca rodando{" "}
            <span className="text-primary">Fortaleza inteira</span>{" "}
            todos os dias.
          </h1>

          <p
            className="mt-6 max-w-xl animate-rise-in text-pretty text-base leading-relaxed text-secondary-foreground/75 sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            Há mais de uma década transformando ônibus em outdoors urbanos.
            Anuncie em <strong className="text-primary">Busdoor</strong> e{" "}
            <strong className="text-primary">Backbus</strong> e alcance
            milhares de pessoas por toda a cidade.
          </p>

          <div
            className="mt-8 flex animate-rise-in flex-wrap gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:brightness-110"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Quero um orçamento
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#formatos"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-secondary-foreground backdrop-blur transition hover:bg-white/10"
            >
              Ver formatos
            </a>
          </div>

          <dl
            className="mt-12 grid animate-rise-in grid-cols-3 gap-6 border-t border-white/10 pt-8"
            style={{ animationDelay: "480ms" }}
          >
            {[
              { v: "+3.000", l: "projetos realizados" },
              { v: "+250", l: "clientes atendidos" },
              { v: "+220", l: "marcas impactadas" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-black text-primary sm:text-3xl">{s.v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-secondary-foreground/60">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/15 blur-3xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src={heroBus}
              alt="Ônibus com publicidade backbus em avenida de Fortaleza"
              className="aspect-[4/3] w-full object-cover"
              width={1536}
              height={1024}
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-primary/20 bg-background/95 p-5 shadow-xl backdrop-blur sm:left-10 sm:right-auto sm:w-72">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Eye className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-foreground">Alta visibilidade</div>
                <div className="text-xs text-muted-foreground">
                  Sua marca no campo de visão de toda a cidade
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */

function Stats() {
  const items = [
    { value: 3000, prefix: "+", label: "projetos realizados", icon: Target },
    { value: 250, prefix: "+", label: "clientes atendidos", icon: Users },
    { value: 220, prefix: "+", label: "marcas impactadas", icon: TrendingUp },
  ];
  return (
    <section className="border-y border-border bg-muted/50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-12 sm:grid-cols-3 sm:px-6">
        {items.map(({ value, prefix, label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center justify-center gap-4 rounded-2xl border border-border bg-background px-6 py-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <NumberTicker
                value={value}
                prefix={prefix}
                className="text-2xl font-black leading-none text-foreground"
              />
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {label}
              </div>
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
    <section id="quem-somos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionEyebrow>Quem somos</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Especialistas em transformar ônibus em mídia de alto impacto.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            A <strong className="text-foreground">BusMidia</strong> é uma agência
            cearense dedicada à publicidade móvel em ônibus urbanos. Com sede
            em Fortaleza, conectamos marcas a milhares de pessoas todos os
            dias, levando sua mensagem para as principais avenidas, bairros
            e pontos comerciais da cidade.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Cuidamos de produção, instalação e gestão completa da campanha —
            da arte ao relatório final — para que sua marca tenha
            visibilidade real, sem complicação.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Equipe própria de produção e instalação",
              "Atendimento consultivo e personalizado",
              "Relatório fotográfico das campanhas",
              "Frota circulando por toda Fortaleza",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />
          <img
            src={busdoorImg}
            alt="Ônibus com mídia busdoor circulando pela cidade"
            className="aspect-[4/3] w-full rounded-3xl border border-border object-cover shadow-xl"
            loading="lazy"
            width={1024}
            height={768}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Formats ---------------- */

function Formats() {
  return (
    <section id="formatos" className="bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Nossos formatos</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Busdoor e Backbus — dois jeitos de colocar sua marca em movimento.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
            Escolha o formato ideal para o seu objetivo. Ou combine os dois
            e amplie o impacto da sua campanha.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <FormatCard
            tag="Busdoor"
            title="Mídia lateral nas janelas do ônibus"
            description="O Busdoor é o painel publicitário fixado nas laterais (geralmente nas janelas traseiras) dos ônibus urbanos. Por estar na altura do olhar de pedestres e motoristas, gera altíssima visibilidade em cruzamentos, semáforos e pontos de parada."
            image={busdoorImg}
            bullets={[
              "Posição estratégica na lateral do veículo",
              "Excelente leitura em ruas movimentadas",
              "Ideal para promoções e branding",
            ]}
          />
          <FormatCard
            tag="Backbus"
            title="Mídia na traseira do ônibus"
            description="O Backbus ocupa a parte traseira do ônibus, sendo visto continuamente por motoristas e passageiros dos veículos atrás. Formato de impacto prolongado: enquanto o ônibus circula, sua marca está sempre no campo de visão de quem o segue."
            image={backbusImg}
            bullets={[
              "Visualização contínua no trânsito",
              "Grande área para destacar a marca",
              "Alta retenção de mensagem",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function FormatCard({
  tag,
  title,
  description,
  image,
  bullets,
}: {
  tag: string;
  title: string;
  description: string;
  image: string;
  bullets: string[];
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          width={1024}
          height={768}
        />
      </div>
      <div className="p-7">
        <span className="inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          {tag}
        </span>
        <h3 className="mt-4 text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <ul className="mt-5 space-y-2 text-sm text-foreground/85">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* ---------------- Benefits ---------------- */

function Benefits() {
  const items = [
    {
      icon: Eye,
      title: "Alta visibilidade",
      text: "Sua marca exposta a milhares de pessoas em todo o trajeto do ônibus, todos os dias.",
    },
    {
      icon: RouteIcon,
      title: "Cobertura urbana",
      text: "Atingimos diferentes bairros e perfis de público em uma única campanha.",
    },
    {
      icon: TrendingUp,
      title: "Custo-benefício",
      text: "Impacto comparável a outdoors fixos, com investimento mais inteligente.",
    },
    {
      icon: Target,
      title: "Mídia que se move",
      text: "Enquanto outdoors esperam o público passar, o ônibus leva sua marca até ele.",
    },
  ];
  return (
    <section id="beneficios" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow tone="dark">Por que anunciar com a gente</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Resultado que circula pela cidade inteira.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-secondary-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-foreground/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */

function Process() {
  const steps = [
    { n: "01", t: "Fale com a gente", d: "Entre em contato pelo WhatsApp e conte sobre o seu objetivo de campanha." },
    { n: "02", t: "Receba a proposta", d: "Montamos um plano com formato, quantidade de ônibus e período ideal." },
    { n: "03", t: "Aprovação da arte", d: "Nossa equipe orienta e finaliza a arte pronta para impressão." },
    { n: "04", t: "Sua marca na rua", d: "Produzimos, instalamos e a campanha começa a rodar Fortaleza." },
  ];
  return (
    <section className="bg-muted/50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Como funciona</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Da ideia até a rua em 4 passos simples.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-primary/40 hover:shadow-lg"
            >
              <div className="text-5xl font-black text-primary">{s.n}</div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Clients ---------------- */

function Clients() {
  // Duplicamos para efeito de carrossel infinito
  const loop = [...CLIENTS, ...CLIENTS];
  return (
    <section id="clientes" className="border-y border-border/60 bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Quem confia na BusMidia
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Marcas que já circularam com a gente
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Empresas locais e nacionais que escolheram nossa frota para crescer.
          </p>
        </div>

        <div
          className="group relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-[scroll_30s_linear_infinite] items-center gap-6 sm:gap-8 group-hover:[animation-play-state:paused]">
            {loop.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex h-16 w-32 shrink-0 items-center justify-center sm:h-20 sm:w-36"
                title={c.name}
              >
                <img
                  src={c.url}
                  alt={c.name}
                  loading="lazy"
                  className="logo-mono max-h-full max-w-full object-contain hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

/* ---------------- Testimonials & Cases ---------------- */

function Testimonials() {
  const testimonials = [
    {
      name: "Coordenação de Marketing",
      role: "Educação",
      company: "Colégio Dom Quintino",
      logo: clientDomQuintino.url,
      quote:
        "Na temporada de matrículas, o Busdoor foi decisivo para reforçar a marca nos bairros que queríamos atingir.",
      rating: 5,
    },
    {
      name: "Marketing Institucional",
      role: "Ensino Superior",
      company: "Unifametro",
      logo: clientUnifametro.url,
      quote:
        "Cobertura consistente nos corredores certos. O relatório fotográfico dá total transparência da veiculação.",
      rating: 5,
    },
    {
      name: "Trade Marketing",
      role: "Indústria de Alimentos",
      company: "Ideal Alimentos",
      logo: clientIdealAlimentos.url,
      quote:
        "Excelente custo por impacto. Conseguimos ativar a marca em larga escala sem estourar o orçamento de mídia.",
      rating: 5,
    },
    {
      name: "Equipe de Mídia",
      role: "Apostas Esportivas",
      company: "Bet Nacional",
      logo: clientBetNacional.url,
      quote:
        "Profissionalismo do briefing à instalação. Frota entregue no prazo e criativo respeitando 100% do manual de marca.",
      rating: 5,
    },
    {
      name: "Marketing",
      role: "Telecom",
      company: "GC Net",
      logo: clientGcNet.url,
      quote:
        "Parceria que entrega. O Backbus ampliou nosso awareness nos bairros atendidos e gerou retorno em vendas.",
      rating: 5,
    },
    {
      name: "Marketing",
      role: "Varejo",
      company: "Pomar",
      logo: clientPomar.url,
      quote:
        "Atendimento ágil e resultado visível. Renovamos a campanha porque o impacto nas ruas é real.",
      rating: 5,
    },
  ] as Array<{ name: string; role: string; company: string; quote: string; rating: number; logo?: string }>;

  const cases = [
    { brand: "Varejo", metric: "+38%", label: "fluxo em loja após 30 dias" },
    { brand: "Imobiliário", metric: "2,1M", label: "impactos estimados/mês" },
    { brand: "Educação", metric: "+62%", label: "buscas pela marca no período" },
  ];

  return (
    <section id="depoimentos" className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow tone="dark">Depoimentos & Cases</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Marcas que já rodam Fortaleza com a gente.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-secondary-foreground/70">
            Resultados reais de quem confiou na BusMidia para colocar a
            mensagem na rua.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.company}
              className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40"
            >
              <Quote
                className="absolute right-4 top-4 h-6 w-6 text-primary/20"
                aria-hidden="true"
              />
              <div className="flex gap-1 text-primary">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-secondary-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-white/10 pt-3">
                {t.logo && (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-1">
                    <img
                      src={t.logo}
                      alt={`Logo ${t.company}`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <div className="text-sm font-bold text-secondary-foreground">
                    {t.company}
                  </div>
                  <div className="text-xs text-secondary-foreground/60">
                    {t.name} · {t.role}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h3 className="text-xl font-bold text-secondary-foreground sm:text-2xl">
              Cases em números
            </h3>
            <span className="hidden text-xs uppercase tracking-[0.25em] text-secondary-foreground/50 sm:inline">
              Dados médios de campanhas recentes
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {cases.map((c) => (
              <div
                key={c.brand}
                className="rounded-2xl border border-primary/20 bg-gradient-to-br from-white/5 to-transparent p-7"
              >
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
                  {c.brand}
                </div>
                <div className="mt-3 text-4xl font-black text-secondary-foreground sm:text-5xl">
                  {c.metric}
                </div>
                <div className="mt-2 text-sm text-secondary-foreground/70">
                  {c.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

function FAQ() {
  const faqs = [
    {
      q: "Quanto custa anunciar em ônibus com a BusMidia?",
      a: "O investimento varia conforme o formato (Busdoor ou Backbus), quantidade de veículos e período da campanha. Solicite um orçamento personalizado pelo WhatsApp — respondemos em poucos minutos com a melhor combinação para o seu objetivo.",
    },
    {
      q: "Qual o prazo mínimo de veiculação?",
      a: "Trabalhamos com campanhas a partir de 15 dias. Para resultados consistentes de marca e recall, recomendamos períodos de 30 a 90 dias.",
    },
    {
      q: "Vocês cuidam da criação da arte?",
      a: "Sim. Nossa equipe orienta sobre as melhores práticas e pode desenvolver a arte do zero, garantindo legibilidade, impacto visual e fidelidade à identidade da sua marca.",
    },
    {
      q: "É possível escolher as rotas dos ônibus?",
      a: "Sim. Direcionamos a campanha para as regiões e linhas de Fortaleza mais estratégicas para o seu público — bairros nobres, corredores comerciais, zona universitária, entre outros.",
    },
    {
      q: "Como acompanho os resultados da campanha?",
      a: "Você recebe relatórios com fotos dos veículos rodando, comprovação de exposição e estimativas de alcance e impressões diárias por rota.",
    },
    {
      q: "Atendem em outras cidades além de Fortaleza?",
      a: "Nossa operação principal é em Fortaleza e Região Metropolitana. Para outras praças, entre em contato — avaliamos parcerias caso a caso.",
    },
  ];

  return (
    <section id="faq" className="bg-muted/50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Perguntas frequentes
          </span>
          <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
            Tudo o que você precisa saber
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Não encontrou sua dúvida? Fale com a gente no WhatsApp.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-primary/20 bg-background px-6 py-5 transition hover:border-primary/50 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold text-foreground sm:text-lg">
                <span>{item.q}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-primary/40 text-primary transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */




function FinalCTA() {
  return (
    <section id="contato" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div
        className="relative overflow-hidden rounded-3xl border border-primary/20 px-8 py-16 text-center text-secondary-foreground sm:px-16"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <SectionEyebrow tone="dark">Vamos rodar juntos</SectionEyebrow>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Pronto para colocar sua marca em movimento?
          </h2>
          <p className="mt-5 text-base text-secondary-foreground/75 sm:text-lg">
            Solicite agora seu orçamento de Busdoor ou Backbus e descubra
            como é simples anunciar com a BusMidia.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer group mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:brightness-110"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Falar no WhatsApp
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-secondary-foreground/80">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> (85) 98732-6044
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Av. da Liberdade, 361 — Autran Nunes, Fortaleza/CE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <img
            src={LOGO_URL}
            alt="BusMidia"
            className="h-12 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-secondary-foreground/70">
            Mídia em ônibus que coloca sua marca em movimento por toda Fortaleza.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Contato
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-secondary-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              Av. da Liberdade, 361 — Bairro Autran Nunes, Fortaleza/CE
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-primary"
              >
                (85) 98732-6044
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Redes sociais
          </h4>
          <div className="mt-5 flex gap-3">
            <SocialLink
              href="https://www.youtube.com/@busmidiapublicidademovel6664"
              label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/busmidiaceara/"
              label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={WHATSAPP_URL} label="WhatsApp">
              <WhatsAppIcon className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-secondary-foreground/60 sm:px-6">
          © {new Date().getFullYear()} BusMidia Publicidade Móvel. Todos os direitos reservados.
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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-secondary-foreground transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
    >
      {children}
    </a>
  );
}

/* ---------------- Helpers ---------------- */

function SectionEyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`text-xs font-bold uppercase tracking-[0.25em] ${
        tone === "dark" ? "text-primary" : "text-primary"
      }`}
    >
      {children}
    </span>
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
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_35px_-10px_rgba(37,211,102,0.6)] ring-4 ring-[#25D366]/20 transition hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#25D366]" />
      </span>
    </a>
  );
}
