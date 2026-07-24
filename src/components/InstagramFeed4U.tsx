import React, { useRef, useState, useEffect } from "react";
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
  Link as LinkIcon,
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
    likes: "88",
    comments: "46",
    views: "973",
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
    likes: "60",
    comments: "25",
    views: "798",
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
    likes: "32",
    comments: "3",
    views: "9.290",
  },
];

// Componente individual para cada Reel com controle de Mouse Hover e Intersection Observer
function ReelCard({ item }: { item: ReelItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se é dispositivo móvel (por largura ou toque)
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches || 
        ("ontouchstart" in window) || 
        navigator.maxTouchPoints > 0
      );
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Intersection Observer para AutoPlay no Mobile
  useEffect(() => {
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Ativa quando 50% do card estiver visível
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isMobile]);

  // Efeito para controlar Play/Pause do vídeo baseado no estado isActive
  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch((err) => {
          console.warn("Autoplay blocked by browser policy:", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsActive(false);
    }
  };

  return (
    <a
      ref={cardRef}
      href={item.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group block flex flex-col focus:outline-none focus:ring-2 focus:ring-primary rounded-xl overflow-hidden bg-card border border-border"
    >
      {/* Video container simulando formato 9:16 de celular */}
      <div className="relative aspect-[9/16] w-full rounded-t-xl overflow-hidden bg-zinc-950 border-b border-border shadow-sm group-hover:shadow-md transition-all duration-500">
        
        {/* 1. Capa estática (Thumbnail) - Sempre visível se o vídeo não estiver ativo */}
        <div className="absolute inset-0 bg-zinc-900 z-0">
          <img
            src={item.posterUrl}
            alt={item.title}
            className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              e.currentTarget.style.opacity = "0";
            }}
          />
        </div>

        {/* 2. Elemento do Vídeo (reprodução controlada) */}
        <video
          ref={videoRef}
          src={item.videoUrl}
          muted
          loop
          playsInline
          preload="metadata"
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
            isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
          onError={(e) => {
            (e.target as HTMLVideoElement).style.display = "none";
          }}
        />

        {/* 3. Badges Overlay - Alta legibilidade, z-20 para ficar por cima do vídeo em execução */}
        <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none z-20">
          <div className="flex justify-end">
            <span 
              style={{ 
                background: "rgba(0, 0, 0, 0.65)", 
                color: "#ffffff", 
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.6)" 
              }}
              className="backdrop-blur-md text-[11px] px-2.5 py-1 rounded-full font-sans font-semibold flex items-center gap-1 shadow-sm"
            >
              <Play className="w-2.5 h-2.5 fill-current text-white" />
              {item.views}
            </span>
          </div>
          <div className="flex flex-col gap-1 items-start text-white/95">
            <span className="text-[10px] uppercase font-mono tracking-widest bg-primary/80 backdrop-blur-sm px-2.5 py-1 rounded">
              {item.tag}
            </span>
          </div>
        </div>

        {/* 4. Camada de Hover (Apenas Desktop - z-30) */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex flex-col items-center justify-center text-white gap-6 pointer-events-none md:pointer-events-auto">
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
          {/* Avatar simples */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border border-border flex items-center justify-center bg-zinc-900 shadow-sm">
              <img
                src="/4uviagens/logo.jpg"
                alt="4uviagens logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="text-3xl font-black tracking-tighter text-primary font-display bg-gradient-to-tr from-yellow-400 via-amber-400 to-amber-500 bg-clip-text text-transparent z-0 absolute">
                4U
              </span>
            </div>
          </div>

          {/* Profile Details */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <h4 className="text-xl font-bold tracking-tight">
                4uviagens
              </h4>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-6 text-sm text-muted-foreground">
              <span>
                <strong className="text-foreground font-sans">951</strong> posts
              </span>
              <span>
                <strong className="text-foreground font-sans">2.272</strong> seguidores
              </span>
              <span>
                <strong className="text-foreground font-sans">2.157</strong> seguindo
              </span>
            </div>

            {/* Bio */}
            <div className="text-sm space-y-1 text-left max-w-lg">
              <p className="font-bold text-foreground">4U Viagens | Assessoria Internacional de Viagens 💜✈️</p>
              <p className="text-muted-foreground/75 text-xs md:text-sm">Empreendedor(a)</p>
              <div className="text-muted-foreground space-y-1 text-xs md:text-sm pt-1">
                <p>‼️ Transformamos roteiros comuns em experiências exclusivas.✈️</p>
                <p>Curadoria especializada | Grupos exclusivos | Suporte 24h</p>
                <p>👇 Saiba mais</p>
              </div>
              <div className="pt-2">
                <a
                  href="https://goconecta.com.br/4uviagens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 font-semibold text-xs md:text-sm"
                >
                  <LinkIcon className="w-3.5 h-3.5 shrink-0" />
                  goconecta.com.br/4uviagens
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
