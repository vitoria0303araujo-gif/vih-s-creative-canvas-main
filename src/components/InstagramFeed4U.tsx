import React, { useRef } from "react";
import {
  Heart,
  MessageCircle,
  Play,
  Instagram,
  Grid,
  Film,
  User,
  Check,
  ExternalLink,
} from "lucide-react";

interface ReelItem {
  id: number;
  title: string;
  strategy: string;
  description: string;
  tag: string;
  videoUrl: string;
  posterUrl: string;
  instagramUrl: string;
  likes: string;
  comments: string;
  views: string;
}

const REELS_DATA: ReelItem[] = [
  {
    id: 1,
    title: "A Trajetória que transformou a 4U Viagens no que é hoje",
    strategy: "Storytelling & Posicionamento",
    description:
      "A trajetória e os bastidores reais que transformaram a 4U Viagens em referência de assessoria para o público de turismo premium.",
    tag: "Branding & Autoridade",
    videoUrl: "/4uviagens/videos/trajetoria.mp4",
    posterUrl: "/4uviagens/capas/capa-trajetoria.jpg",
    instagramUrl: "https://www.instagram.com/4uviagens/",
    likes: "4.2K",
    comments: "156",
    views: "58K",
  },
  {
    id: 2,
    title: "É oficial: A Black Friday chegou na 4U Viagens",
    strategy: "Marketing de Lançamento & Conversão",
    description:
      "Campanha comercial estratégica para grupos de viagem exclusivos, combinando desejo, escassez e condições imperdíveis.",
    tag: "Campanha Comercial",
    videoUrl: "/4uviagens/videos/black-friday.mp4",
    posterUrl: "/4uviagens/capas/capa-black-friday.jpg",
    instagramUrl: "https://www.instagram.com/4uviagens/",
    likes: "6.1K",
    comments: "210",
    views: "64K",
  },
  {
    id: 3,
    title: "Você acha que o Google tem todas as respostas sobre a sua viagem?",
    strategy: "Quebra de Objeções & Autoridade",
    description:
      "Vídeo de quebra de objeções demonstrando o valor de uma assessoria de viagens personalizada contra as buscas genéricas na internet.",
    tag: "Educação de Audiência",
    videoUrl: "/4uviagens/videos/google.mp4",
    posterUrl: "/4uviagens/capas/capa-google.jpg",
    instagramUrl: "https://www.instagram.com/4uviagens/",
    likes: "3.8K",
    comments: "98",
    views: "35K",
  },
];

// Componente individual para cada Reel com controle de Mouse Hover
function ReelCard({ item }: { item: ReelItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Trata a reprodução caso haja bloqueio do navegador
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <a
      href={item.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group block flex flex-col focus:outline-none focus:ring-2 focus:ring-primary rounded-xl overflow-hidden bg-card border border-border"
    >
      {/* Video container simulando formato 9:16 de celular */}
      <div className="relative aspect-[9/16] w-full rounded-t-xl overflow-hidden bg-zinc-950 border-b border-border shadow-sm group-hover:shadow-md transition-all duration-500">
        {/* Capa estática + overlay de estatísticas */}
        <div className="absolute inset-0 bg-zinc-900 z-0">
          <img
            src={item.posterUrl}
            alt={item.title}
            className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              e.currentTarget.style.opacity = "0";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 flex flex-col justify-between p-4 pointer-events-none z-10">
            <div className="flex justify-end">
              <span className="bg-black/40 backdrop-blur-md text-[10px] px-2 py-0.5 rounded-full font-mono text-zinc-300 flex items-center gap-1">
                <Play className="w-2.5 h-2.5 fill-current" />
                {item.views}
              </span>
            </div>
            <div className="flex flex-col gap-1 items-start text-white/95">
              <span className="text-[10px] uppercase font-mono tracking-widest bg-primary/80 backdrop-blur-sm px-2.5 py-1 rounded">
                {item.tag}
              </span>
            </div>
          </div>
        </div>

        {/* Elemento do Vídeo (reprodução controlada via hover) */}
        <video
          ref={videoRef}
          src={item.videoUrl}
          poster={item.posterUrl}
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover relative z-10 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          onError={(e) => {
            (e.target as HTMLVideoElement).style.display = "none";
          }}
        />

        {/* Camada ao passar o mouse */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center text-white gap-6">
          <Instagram className="w-10 h-10 stroke-[1.5] animate-pulse" />

          <div className="flex gap-6 text-sm font-bold font-mono">
            <span className="flex items-center gap-2">
              <Heart className="w-5 h-5 fill-current text-red-500" />
              {item.likes}
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 fill-current text-white" />
              {item.comments}
            </span>
          </div>

          <span className="text-[10px] tracking-widest uppercase bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full transition-colors flex items-center gap-1.5">
            Assistir no Instagram
            <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Detalhes de Estratégia */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-mono tracking-wider text-primary font-bold uppercase block mb-1">
            {item.strategy}
          </span>
          <h5 className="font-bold text-base text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
            {item.title}
          </h5>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </div>
        <div className="mt-4 pt-3 border-t border-border/60 flex justify-between items-center text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          <span>Reels Case Study</span>
          <span className="group-hover:translate-x-1 transition-transform text-primary font-bold flex items-center gap-1">
            Ver Post ➔
          </span>
        </div>
      </div>
    </a>
  );
}

export default function InstagramFeed4U() {
  return (
    <div className="mt-16 border border-border rounded-2xl bg-card overflow-hidden shadow-sm animate-reveal">
      {/* Mock Instagram Header */}
      <div className="p-6 md:p-10 border-b border-border bg-background/50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Avatar com Stories gradient */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px] shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden border-2 border-background relative">
                <img
                  src="/4uviagens/logo.jpg"
                  alt="4uviagens logo"
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <span className="text-3xl font-black tracking-tighter text-primary font-display bg-gradient-to-tr from-yellow-400 via-amber-400 to-amber-500 bg-clip-text text-transparent z-0 absolute">
                  4U
                </span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground p-2 rounded-full border-2 border-background shadow">
              <Film className="w-4 h-4" />
            </div>
          </div>

          {/* Profile Details */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <h4 className="text-xl font-bold tracking-tight flex items-center gap-2">
                4uviagens
                <span
                  className="inline-flex items-center justify-center bg-[#0095f6] text-white rounded-full p-0.5"
                  title="Conta Verificada"
                >
                  <Check className="w-3.5 h-3.5 stroke-[4]" />
                </span>
              </h4>
              <div className="flex gap-2">
                <a
                  href="https://www.instagram.com/4uviagens/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-1.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-xs font-bold rounded-lg shadow-sm flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  Seguir
                </a>
                <a
                  href="https://wa.me/5511976652340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 bg-secondary hover:bg-secondary/80 border border-border transition-colors text-xs font-bold rounded-lg"
                >
                  Enviar mensagem
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-6 text-sm text-muted-foreground font-mono">
              <span>
                <strong className="text-foreground font-sans">152</strong> publicações
              </span>
              <span>
                <strong className="text-foreground font-sans">8.950</strong> seguidores
              </span>
              <span>
                <strong className="text-foreground font-sans">347</strong> seguindo
              </span>
            </div>

            {/* Bio */}
            <div className="text-sm space-y-1 text-left md:text-left max-w-lg">
              <p className="font-bold text-foreground">4U Viagens e Assessoria ✈️</p>
              <p className="text-muted-foreground text-xs md:text-sm flex items-start gap-1">
                <span>🌍</span> <span>Assessoria de Viagens & Roteiros Personalizados</span>
              </p>
              <p className="text-muted-foreground text-xs md:text-sm flex items-start gap-1">
                <span>👑</span> <span>Viagens Premium e Experiências Exclusivas</span>
              </p>
              <p className="text-muted-foreground text-xs md:text-sm flex items-start gap-1">
                <span>🗺️</span> <span>Roteiros sob medida para o público 40+</span>
              </p>
              <p className="text-muted-foreground text-xs md:text-sm flex items-start gap-1">
                <span>📲</span> <span>Clique abaixo para solicitar seu orçamento 👇</span>
              </p>
              <div className="pt-1">
                <a
                  href="https://wa.me/5511976652340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 font-semibold text-xs"
                >
                  wa.me/4uviagens
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Header / Tabs */}
      <div className="flex justify-center border-b border-border bg-card">
        <div className="flex gap-12 font-mono text-[10px] tracking-widest uppercase font-bold text-muted-foreground py-4">
          <button className="flex items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
            <Grid className="w-3.5 h-3.5" />
            Publicações
          </button>
          <button className="flex items-center gap-1.5 text-primary border-b-2 border-primary pb-4 -mb-4">
            <Film className="w-3.5 h-3.5" />
            Reels
          </button>
          <button className="flex items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
            <User className="w-3.5 h-3.5" />
            Marcados
          </button>
        </div>
      </div>

      {/* Reels Grid */}
      <div className="p-6 md:p-10 bg-background/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {REELS_DATA.map((item) => (
            <ReelCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
