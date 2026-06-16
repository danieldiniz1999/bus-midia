import { createFileRoute } from "@tanstack/react-router";
import {
  Bus,
  MapPin,
  Phone,
  Youtube,
  Instagram,
  MessageCircle,
  CheckCircle2,
  Target,
  TrendingUp,
  Users,
  Eye,
  Route as RouteIcon,
  Sparkles,
} from "lucide-react";
import heroBus from "../assets/hero-bus.jpg";
import backbusImg from "../assets/backbus.jpg";
import busdoorImg from "../assets/busdoor.jpg";

const WHATSAPP_NUMBER = "5585987326044";
const WHATSAPP_MESSAGE =
  "Olá, vim pelo site e quero fazer um orçamento de divulgação da minha marca/empresa";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BusMidia Ceará | Mídia em Busdoor e Backbus em Fortaleza" },
      {
        name: "description",
        content:
          "Divulgue sua marca em Fortaleza com Busdoor e Backbus. +3.000 projetos, +250 clientes e +220 marcas atendidas. Solicite seu orçamento.",
      },
      { property: "og:title", content: "BusMidia Ceará | Busdoor e Backbus" },
      {
        property: "og:description",
        content:
          "Mídia em ônibus que coloca sua marca em movimento por Fortaleza. Solicite um orçamento agora.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Formats />
        <Benefits />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)]">
            <Bus className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight">BusMidia</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
              Publicidade Móvel
            </div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex">
          <a href="#quem-somos" className="hover:text-foreground">Quem somos</a>
          <a href="#formatos" className="hover:text-foreground">Formatos</a>
          <a href="#beneficios" className="hover:text-foreground">Benefícios</a>
          <a href="#contato" className="hover:text-foreground">Contato</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:scale-[1.03] sm:inline-flex"
        >
          Orçamento
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 -z-10 opacity-30 mix-blend-overlay">
        <img
          src={heroBus}
          alt=""
          className="h-full w-full object-cover"
          width={1536}
          height={1024}
        />
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:py-36">
        <div className="text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Mídia em movimento • Fortaleza
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Sua marca rodando <span className="text-primary">a cidade inteira</span> todos os dias.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Há mais de uma década transformando ônibus em outdoors urbanos.
            Anuncie em <strong>Busdoor</strong> e <strong>Backbus</strong> e alcance
            milhares de pessoas por toda Fortaleza.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" /> Quero um orçamento
            </a>
            <a
              href="#formatos"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Ver formatos
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            {[
              "Cobertura em toda Fortaleza",
              "Alta visibilidade diária",
              "Formatos para todos os tamanhos de marca",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -inset-4 rounded-3xl bg-primary/30 blur-3xl" />
          <img
            src={heroBus}
            alt="Ônibus com publicidade no backbus rodando em avenida de Fortaleza"
            className="relative rounded-3xl border border-white/10 object-cover shadow-2xl"
            width={1536}
            height={1024}
          />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: "+3.000", label: "projetos realizados", icon: Target },
    { value: "+250", label: "clientes atendidos", icon: Users },
    { value: "+220", label: "marcas divulgadas", icon: TrendingUp },
  ];
  return (
    <section className="border-b border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-4 py-10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6">
        {items.map(({ value, label, icon: Icon }) => (
          <div key={label} className="flex items-center justify-center gap-4 py-6 sm:py-2">
            <Icon className="h-9 w-9 text-primary" />
            <div>
              <div className="text-3xl font-black leading-none">{value}</div>
              <div className="mt-1 text-sm uppercase tracking-wider text-white/70">
                {label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="quem-somos" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Quem somos
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Especialistas em transformar ônibus em mídia de alto impacto.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A <strong>BusMidia</strong> é uma agência cearense dedicada à publicidade
            móvel em ônibus urbanos. Com sede em Fortaleza, conectamos marcas a
            milhares de pessoas todos os dias, levando sua mensagem para as
            principais avenidas, bairros e pontos comerciais da cidade.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Trabalhamos com produção, instalação e gestão completa da campanha —
            da arte ao relatório final — para que sua marca tenha visibilidade
            real, sem complicação.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Equipe própria de produção e instalação",
              "Atendimento personalizado e consultivo",
              "Relatório fotográfico das campanhas",
              "Frota em circulação por toda Fortaleza",
            ].map((t) => (
              <div key={t} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-primary/10 blur-2xl" />
          <img
            src={busdoorImg}
            alt="Ônibus com mídia busdoor"
            className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
            loading="lazy"
            width={1024}
            height={768}
          />
        </div>
      </div>
    </section>
  );
}

function Formats() {
  return (
    <section id="formatos" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Nossos formatos
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Busdoor e Backbus: dois jeitos de colocar sua marca em movimento.
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <FormatCard
            tag="Busdoor"
            title="Mídia lateral nas janelas do ônibus"
            description="O Busdoor é o painel publicitário fixado nas laterais (geralmente nas janelas traseiras) dos ônibus urbanos. Por estar na altura do olhar de pedestres e motoristas, gera altíssima visibilidade nos cruzamentos, semáforos e pontos de parada — perfeito para campanhas com forte apelo visual."
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
            description="O Backbus ocupa a parte de trás do ônibus, sendo visto continuamente por motoristas e passageiros dos veículos que vêm atrás. É um formato de impacto prolongado: enquanto o ônibus circula, sua marca está sempre no campo de visão de quem o segue no trânsito."
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
    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
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
        <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
          {tag}
        </span>
        <h3 className="mt-3 text-xl font-bold">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <ul className="mt-5 space-y-2 text-sm">
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
    <section id="beneficios" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          Por que anunciar com a gente
        </span>
        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
          Resultado que circula pela cidade inteira.
        </h2>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Fale com a gente", d: "Entre em contato pelo WhatsApp e conte sobre o seu objetivo de campanha." },
    { n: "02", t: "Receba a proposta", d: "Montamos um plano de mídia com formato, quantidade de ônibus e período ideal." },
    { n: "03", t: "Aprovação da arte", d: "Nossa equipe orienta e finaliza a arte pronta para impressão." },
    { n: "04", t: "Sua marca na rua", d: "Produzimos, instalamos e sua campanha começa a rodar Fortaleza." },
  ];
  return (
    <section className="bg-secondary py-24 text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Como funciona
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Da ideia até a rua em 4 passos simples.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-primary/60"
            >
              <div className="text-4xl font-black text-primary">{s.n}</div>
              <h3 className="mt-3 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contato" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div
        className="relative overflow-hidden rounded-3xl px-8 py-16 text-center text-primary-foreground sm:px-16"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Pronto para colocar sua marca em movimento?
          </h2>
          <p className="mt-5 text-base text-white/80 sm:text-lg">
            Solicite agora seu orçamento de Busdoor ou Backbus e descubra como
            é simples anunciar com a BusMidia.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:scale-[1.03]"
          >
            <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
          </a>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/80">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> (85) 98732-6044
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Av. da Liberdade, 361 — Autran Nunes, Fortaleza/CE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
              <Bus className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-bold">BusMidia</div>
              <div className="text-[10px] uppercase tracking-widest text-white/60">
                Publicidade Móvel
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/70">
            Mídia em ônibus que coloca sua marca em movimento por toda Fortaleza.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/80">
            Contato
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
              Av. da Liberdade, 361 — Bairro Autran Nunes, Fortaleza/CE
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                (85) 98732-6044
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white/80">
            Redes sociais
          </h4>
          <div className="mt-4 flex gap-3">
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
              <MessageCircle className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/60 sm:px-6">
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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
    >
      {children}
    </a>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elegant)] ring-4 ring-[#25D366]/20 transition hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-[#25D366]" />
      </span>
    </a>
  );
}
