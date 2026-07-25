import { createFileRoute } from "@tanstack/react-router";
import InstagramFeedQViagem from "@/components/InstagramFeedQViagem";
import InstagramFeed4U from "@/components/InstagramFeed4U";
import InstagramFeedProlegado from "@/components/InstagramFeedProlegado";

const portrait = "/vitoria.png";
const curriculo = "/curriculo.pdf";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Sticky minimal nav */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-background/80 backdrop-blur-sm">
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
          © VITÓRIA | PORTFÓLIO 2026
        </span>
        <div className="hidden md:flex gap-8 text-[11px] font-mono tracking-widest uppercase">
          <a href="#sobre" className="hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#curriculo" className="hover:text-primary transition-colors">
            CV
          </a>
          <a href="#cases" className="hover:text-primary transition-colors">
            Cases
          </a>
          <a href="#contato" className="hover:text-primary transition-colors">
            Contato
          </a>
        </div>
      </nav>

      {/* HERO — Modular editorial grid */}
      <section className="pt-28 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Name & title block */}
          <div className="md:col-span-8 bg-primary text-primary-foreground p-8 md:p-14 flex flex-col justify-between min-h-[420px] md:min-h-[520px]">
            <div className="space-y-6">
              <p className="uppercase tracking-[0.25em] text-[10px] font-bold opacity-70">
                Estrategista de Conteúdo & Marketing Digital
              </p>
              <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold leading-[0.85] tracking-tighter">
                VITÓRIA ARAÚJO
                <br />
                VARGAS FERREIRA
              </h1>
            </div>
            <div className="mt-10">
              <p className="text-lg md:text-xl font-medium max-w-md opacity-90">
                Analista de Marketing, Conteúdo & Social Media Estratégico.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 border border-primary-foreground/30 rounded-full text-[10px] font-medium uppercase tracking-wider">
                  Especialista em Estratégia de Conteúdo
                </span>
                <span className="px-3 py-1 border border-primary-foreground/30 rounded-full text-[10px] font-medium uppercase tracking-wider">
                  Estratégia de Posicionamento
                </span>
                <span className="px-3 py-1 border border-primary-foreground/30 rounded-full text-[10px] font-medium uppercase tracking-wider">
                  Social Media
                </span>
              </div>
            </div>
          </div>

          {/* Portrait block */}
          <div className="md:col-span-4 relative overflow-hidden bg-muted min-h-[320px] md:min-h-auto">
            <img
              src={portrait}
              alt="Vitória Araújo Vargas Ferreira"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              loading="eager"
            />
            <div className="absolute inset-0 border-[12px] border-primary/5 pointer-events-none" />
          </div>

          {/* About quote block */}
          <div
            id="sobre"
            className="md:col-span-5 border border-border p-10 flex flex-col justify-center bg-card"
          >
            <h3 className="font-display text-lg font-bold text-primary mb-6 uppercase tracking-widest">
              Sobre mim
            </h3>
            <p className="text-xl md:text-2xl leading-tight text-foreground font-medium">
              "Transformando ideias em conexões reais."
            </p>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Olá! Eu sou a Vitória, mas pode me chamar de{" "}
              <span className="text-primary font-medium">Vih</span>. Tenho 21 anos e sou
              profissional de Marketing apaixonada por transformar ideias em estratégias que
              conectam pessoas e fortalecem marcas.
            </p>
          </div>

          {/* Selected works preview */}
          <a
            href="#cases"
            className="md:col-span-4 bg-secondary p-10 flex flex-col justify-between group hover:bg-primary hover:text-primary-foreground transition-all duration-500 cursor-pointer"
          >
            <div className="space-y-4">
              <div className="w-8 h-[1px] bg-primary group-hover:bg-primary-foreground transition-colors" />
              <h3 className="font-display text-2xl font-bold">Cases de Sucesso</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed italic">
                QViagem, 4U Viagens e outras marcas que ganharam voz e resultados no digital.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-3 text-xs font-black uppercase tracking-widest">
              Ver projetos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* Availability / Contact */}
          <div className="md:col-span-3 bg-inverse text-inverse-foreground p-10 flex flex-col justify-center text-center border-b-8 border-primary">
            <div className="mb-6 flex justify-center">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 opacity-50">
              Status atual
            </p>
            <p className="text-sm font-medium">Disponível para contratação CLT e projetos estratégicos</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE — Dark block */}
      <section id="curriculo" className="py-20 px-4 md:px-8 bg-inverse text-inverse-foreground">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <span className="font-mono text-[10px] tracking-widest uppercase text-inverse-foreground/50 mb-4 block">
                02 / EXPERIÊNCIA
              </span>
              <h2 className="font-display text-4xl font-bold">Trajetória Profissional</h2>
              <a
                href={curriculo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-full font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0 text-xs tracking-wider uppercase group w-fit cursor-pointer"
              >
                <span>Visualizar currículo completo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="md:col-span-8 flex flex-col gap-10">
              {[
                {
                  period: "2025 — ATUAL",
                  title: "GoConecta | Agência de Marketing para Turismo",
                  role: "Fundadora e Estrategista de Marketing",
                },
                {
                  period: "JUL/2024 — OUT/2024",
                  title: "Prolegado Mídias | Agência de Marketing Digital e Tráfego Pago",
                  role: "Social Media e Estrategista de Conteúdo (PJ)",
                },
                {
                  period: "JUL/2022 — JUN/2024",
                  title: "QViagem | Agência de Viagens",
                  role: "Social Media e Estrategista de Conteúdo (CLT)",
                },
              ].map((job) => (
                <div key={job.title} className="border-b border-inverse-foreground/10 pb-8">
                  <span className="font-mono text-xs text-inverse-foreground/50">{job.period}</span>
                  <h3 className="text-xl md:text-2xl font-bold mt-2">{job.title}</h3>
                  <p className="text-inverse-foreground/70">{job.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & SKILLS — Contained grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-4 block">
              03 / FORMAÇÃO
            </span>
            <h2 className="font-display text-4xl font-bold mb-8">Formação e Cursos</h2>
            <div className="space-y-6">
              {[
                ["Academia Social Media", "Seja Intensa / Stefania Dominique"],
                ["Agência Organizada", "Don Comunicação Digital"],
                ["Formação Social Media", "Like Marketing / Rejane Toigo"],
                ["Ensino Médio Completo", "E. E. Professora Silva Aparecida dos Santos"],
              ].map(([title, place]) => (
                <div key={title} className="border-b border-border pb-5">
                  <h4 className="font-bold text-base">{title}</h4>
                  <p className="text-sm text-muted-foreground">{place}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7">
            <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-4 block">
              HABILIDADES
            </span>
            <h2 className="font-display text-4xl font-bold mb-8">O que eu faço</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: "Estratégia de conteúdo", colorClass: "bg-violet-50 text-violet-700 border-violet-200/60 dark:bg-violet-950/20 dark:text-violet-300 dark:border-violet-900/50" },
                { name: "Gestão de redes sociais", colorClass: "bg-blue-50 text-blue-700 border-blue-200/60 dark:bg-blue-950/20 dark:text-blue-300 dark:border-blue-900/50" },
                { name: "Calendário de conteúdo", colorClass: "bg-zinc-50 text-zinc-700 border-zinc-200 dark:bg-zinc-800/30 dark:text-zinc-300 dark:border-zinc-800/50" },
                { name: "Análise de perfil", colorClass: "bg-violet-50 text-violet-700 border-violet-200/60 dark:bg-violet-950/20 dark:text-violet-300 dark:border-violet-900/50" },
                { name: "Curadoria de conteúdo", colorClass: "bg-blue-50 text-blue-700 border-blue-200/60 dark:bg-blue-950/20 dark:text-blue-300 dark:border-blue-900/50" },
                { name: "Criação de conteúdo", colorClass: "bg-zinc-50 text-zinc-700 border-zinc-200 dark:bg-zinc-800/30 dark:text-zinc-300 dark:border-zinc-800/50" },
                { name: "Posicionamento digital", colorClass: "bg-violet-50 text-violet-700 border-violet-200/60 dark:bg-violet-950/20 dark:text-violet-300 dark:border-violet-900/50" },
                { name: "Branding", colorClass: "bg-blue-50 text-blue-700 border-blue-200/60 dark:bg-blue-950/20 dark:text-blue-300 dark:border-blue-900/50" },
                { name: "Storymaker", colorClass: "bg-zinc-50 text-zinc-700 border-zinc-200 dark:bg-zinc-800/30 dark:text-zinc-300 dark:border-zinc-800/50" },
                { name: "Campanhas de lançamento", colorClass: "bg-violet-50 text-violet-700 border-violet-200/60 dark:bg-violet-950/20 dark:text-violet-300 dark:border-violet-900/50" },
                { name: "Captação de conteúdo", colorClass: "bg-blue-50 text-blue-700 border-blue-200/60 dark:bg-blue-950/20 dark:text-blue-300 dark:border-blue-900/50" },
                { name: "Copywriting & storytelling", colorClass: "bg-zinc-50 text-zinc-700 border-zinc-200 dark:bg-zinc-800/30 dark:text-zinc-300 dark:border-zinc-800/50" },
              ].map((skill) => (
                <span
                  key={skill.name}
                  className={`px-4 py-3 border rounded-full text-xs font-semibold uppercase tracking-wider text-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 ${skill.colorClass}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASES — Editorial grid */}
      <section id="cases" className="py-20 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end border-b-2 border-foreground pb-4 mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase">
              Cases
            </h2>
            <span className="text-muted-foreground font-mono text-xs tracking-widest mb-2">
              / ARQUIVO DE TRABALHO
            </span>
          </div>

          {/* CASE 01 */}
          <article className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <span className="font-mono text-xs text-primary font-bold">CASE 01</span>
                <h3 className="text-3xl font-display font-bold mt-2">QViagem</h3>
                <p className="mt-3 text-muted-foreground text-sm">
                  Reestruturação de Marca, Estratégia 360° e Marketing de Destino
                </p>
                <p className="mt-6 text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">Função:</span> Analista de Marketing e
                  Estrategista de Conteúdo (transição de solo para gestão de equipe via GoConecta)
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">Tempo:</span> Cerca de 3 anos (duas
                  fases estratégicas)
                </p>
              </div>
              <div className="md:col-span-8 space-y-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    { n: "+463 mil", l: "impressões totais" },
                    { n: "+195 mil", l: "contas alcançadas" },
                    { n: "+109 mil", l: "alcance orgânico" },
                    { n: "+166 mil", l: "reproduções em Reels" },
                    { n: "+7.500", l: "interações diretas" },
                    { n: "11k → 16k+", l: "seguidores qualificados" },
                  ].map((m) => (
                    <div
                      key={m.l}
                      className="p-5 bg-background text-foreground rounded-xl border border-border"
                    >
                      <span className="block text-2xl font-black text-primary leading-none">
                        {m.n}
                      </span>
                      <span className="mt-2 block text-[10px] uppercase tracking-wider text-muted-foreground">
                        {m.l}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-background border border-border rounded-xl">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-primary">
                      Fase 1
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Construção de base e operação solo: identidade visual estendida, linguagem de
                      marca, BioLink de conversão e esteira de produção de ~500 conteúdos.
                    </p>
                  </div>
                  <div className="p-6 bg-background border border-border rounded-xl">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-primary">
                      Fase 2
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Escalabilidade via GoConecta: liderança criativa, equipe multidisciplinar,
                      cobertura em Fernando de Noronha e campanha de influência no Carnaval 2025.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <InstagramFeedQViagem />
          </article>

          {/* CASE 02 */}
          <article>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <span className="font-mono text-xs text-primary font-bold">CASE 02</span>
                <h3 className="text-3xl font-display font-bold mt-2">4U Viagens</h3>
                <p className="mt-3 text-muted-foreground text-sm">
                  Posicionamento de Marca Digital e Atração de Público Premium (40+)
                </p>
                <p className="mt-6 text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">Período:</span> Setembro/2025 a
                  Janeiro/2026
                </p>
              </div>
              <div className="md:col-span-8 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      n: "+509,5%",
                      v: "1.700 interações",
                      l: "Público engajado com a narrativa da marca.",
                    },
                    {
                      n: "+93,3%",
                      v: "2.400 visitas ao perfil",
                      l: "Validação de autoridade e curiosidade.",
                    },
                    {
                      n: "+86,3%",
                      v: "157.000 visualizações",
                      l: "Distribuição orgânica consistente.",
                    },
                    { n: "+84,9%", v: "638 cliques no link", l: "Otimização do fundo do funil." },
                    {
                      n: "+37,8%",
                      v: "+186 seguidores",
                      l: "Base premium (75% mulheres, 35–54 anos).",
                    },
                    { n: "+10,6%", v: "52.100 contas", l: "Expansão gradual e protegida." },
                  ].map((m) => (
                    <div key={m.v} className="p-5 bg-background border border-border rounded-xl">
                      <span className="block text-2xl font-black text-primary leading-none">
                        {m.n}
                      </span>
                      <span className="mt-1 block text-sm font-bold">{m.v}</span>
                      <span className="mt-2 block text-xs text-muted-foreground leading-relaxed">
                        {m.l}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Durante o pré-lançamento dos grupos, o perfil passou por um afunilamento natural:
                  enquanto o topo de funil foi filtrado para evitar curiosos, os cliques no link
                  dispararam mais de <strong className="text-foreground">43.000%</strong> em
                  períodos de aquecimento — trocando métrica de vaidade por intencionalidade
                  comercial.
                </p>
              </div>
            </div>
            <InstagramFeed4U />
          </article>

          {/* CASE 03 */}
          <article className="mt-20 pt-20 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <span className="font-mono text-xs text-primary font-bold">CASE 03</span>
                <h3 className="text-3xl font-display font-bold mt-2">Prolegado Mídias</h3>
                <p className="mt-3 text-muted-foreground text-sm">
                  Estruturação de Perfil, Branding & Posicionamento Pré-Tráfego
                </p>
                <p className="mt-6 text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">Função:</span> Estrategista de Conteúdo e Designer
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">Contexto:</span> Atuação no ecossistema da agência Prolegado (lançamentos e tráfego pago)
                </p>
              </div>
              <div className="md:col-span-8 space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      n: "6 Perfis",
                      v: "Clientes Restruturados",
                      l: "Alinhamento completo de estética, biografia, destaques e posicionamento.",
                    },
                    {
                      n: "18 Posts",
                      v: "Fixados & Estratégicos",
                      l: "Grid de 3 posts por cliente focados em onboarding, autoridade e conversão.",
                    },
                    {
                      n: "190k+",
                      v: "Seguidores Qualificados",
                      l: "Audiência combinada preparada para receber tráfego pago de alta relevância.",
                    },
                    {
                      n: "100%",
                      v: "Identidade Pré-Tráfego",
                      l: "Criação da base necessária para otimizar anúncios e maximizar a taxa de conversão.",
                    },
                    {
                      n: "High-Ticket",
                      v: "Branding de Autoridade",
                      l: "Posicionamento premium lapidado para infoprodutos e negócios locais.",
                    },
                    {
                      n: "Conversão",
                      v: "Funil Pré-Otimizado",
                      l: "Restruturação de bios e call-to-actions (CTAs) para diminuir o Custo por Lead (CPL).",
                    },
                  ].map((m) => (
                    <div key={m.v} className="p-5 bg-background border border-border rounded-xl">
                      <span className="block text-2xl font-black text-primary leading-none">
                        {m.n}
                      </span>
                      <span className="mt-1 block text-sm font-bold">{m.v}</span>
                      <span className="mt-2 block text-xs text-muted-foreground leading-relaxed">
                        {m.l}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Antes de iniciar qualquer campanha de tráfego pago ou lançamento, a reestruturação visual e estratégica do perfil é vital. O design e o conteúdo dos 3 posts fixados criam um funil de entrada: um post apresenta o profissional/marca (onboarding), outro educa sobre a solução principal (autoridade) e o terceiro remove as principais objeções de compra (conversão).
                </p>
              </div>
            </div>
            <InstagramFeedProlegado />
          </article>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contato" className="py-24 px-4 md:px-8 bg-inverse text-inverse-foreground">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-7xl font-bold mb-10">
            Vamos criar o próximo <span className="text-primary">padrão?</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 mt-12">
            <a
              href="https://wa.me/5511976652340"
              target="_blank"
              rel="noreferrer"
              className="block group"
            >
              <span className="font-mono text-[10px] tracking-widest uppercase text-inverse-foreground/50">
                WhatsApp
              </span>
              <p className="text-2xl font-bold group-hover:text-primary transition-colors">
                +55 11 97665-2340
              </p>
            </a>
            <a href="mailto:contato.vitoriaferreiraav@gmail.com" className="block group">
              <span className="font-mono text-[10px] tracking-widest uppercase text-inverse-foreground/50">
                E-mail
              </span>
              <p className="text-xl font-bold break-all group-hover:text-primary transition-colors">
                contato.vitoriaferreiraav@gmail.com
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 md:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Instagram
            </a>
            <a
              href="https://wa.me/5511976652340"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors"
            >
              WhatsApp
            </a>
          </div>
          <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            © 2025 Vitória Araújo. Desenvolvido para impacto.
          </span>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://wa.me/5511976652340"
          target="_blank"
          rel="noreferrer"
          className="bg-foreground text-background px-6 py-4 rounded-full font-bold shadow-2xl hover:-translate-y-1 transition-transform flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Solicitar Proposta
        </a>
      </div>
    </main>
  );
}
