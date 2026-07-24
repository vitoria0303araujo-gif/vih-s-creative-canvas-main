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
    title: "Invadi o perfil da Laranjinha no Malai Manso Resort",
    strategy: "Co-marketing & Marketing de Influência",
    description:
      "Ação estratégica de Co-marketing e Marketing de Influência em parceria com Scarlet Pancera, desenhada para ampliação de awareness e autoridade de marca no segmento de resorts premium.",
    tag: "Awareness & Autoridade",
    videoUrl: "/laranjinha.mp4",
    posterUrl: "/laranjinha-cover.jpg",
    instagramUrl: "https://www.instagram.com/reel/DGwGTduRmKQ/",
    likes: "12.4K",
    comments: "342",
    views: "166K",
  },
  {
    id: 2,
    title: "O Resort Mais Completo de Natal - RN",
    strategy: "Experiência Visual & Conversão",
    description:
      "Conteúdo focado em experiência visual e desejo de consumo, estruturado estrategicamente para atração de leads qualificados e direcionamento para funil de vendas.",
    tag: "Captação de Leads",
    videoUrl: "/natal.mp4",
    posterUrl: "/natal-cover.png",
    instagramUrl: "https://www.instagram.com/reel/DO_1JdYkZXo/",
    likes: "8.9K",
    comments: "195",
    views: "95K",
  },
  {
    id: 3,
    title: "Conheça o Novo Andar da QViagem",
    strategy: "Employer Branding & Conexão Humana",
    description:
      "Estratégia de Employer Branding e conexão humana (humanização da marca), aumentando a taxa de retenção do público e gerando identificação com a comunidade.",
    tag: "Humanização de Marca",
    videoUrl: "/novo-andar.mp4",
    posterUrl: "/novo-andar-cover.png",
    instagramUrl: "https://www.instagram.com/reel/DI4aBQnMugm/",
    likes: "5.2K",
    comments: "88",
    views: "54K",
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

export default function InstagramFeedQViagem() {
  return (
    <div className="mt-16 border border-border rounded-2xl bg-card overflow-hidden shadow-sm animate-reveal">
      {/* Mock Instagram Header */}
      <div className="p-6 md:p-10 border-b border-border bg-background/50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Avatar com Stories gradient */}
          <div className="relative shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px] shadow-md flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden border-2 border-background relative">
                <img
                  src="/logo.png"
                  alt="qviagemoficial logo"
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full p-4 text-primary fill-current z-0"
                >
                  <path d="M50,15 C30.7,15 15,30.7 15,50 C15,69.3 30.7,85 50,85 C57.8,85 65,82.4 70.8,78.1 L81.5,88.8 L88.6,81.7 L78,71.1 C82.4,65.2 85,57.9 85,50 C85,30.7 69.3,15 50,15 Z M50,73 C37.3,73 27,62.7 27,50 C27,37.3 37.3,27 50,27 C62.7,27 73,37.3 73,50 C73,62.7 62.7,73 50,73 Z" />
                  <path d="M46,38 L62,50 L46,62 Z" className="text-primary/90" />
                </svg>
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
                qviagemoficial
                <span
                  className="inline-flex items-center justify-center bg-[#0095f6] text-white rounded-full p-0.5"
                  title="Conta Verificada"
                >
                  <Check className="w-3.5 h-3.5 stroke-[4]" />
                </span>
              </h4>
              <div className="flex gap-2">
                <a
                  href="https://www.instagram.com/qviagemoficial/"
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
                <strong className="text-foreground font-sans">491</strong> publicações
              </span>
              <span>
                <strong className="text-foreground font-sans">17,5 mil</strong> seguidores
              </span>
              <span>
                <strong className="text-foreground font-sans">208</strong> seguindo
              </span>
            </div>

            {/* Bio */}
            <div className="text-sm space-y-1 text-left md:text-left max-w-lg">
              <p className="font-bold text-foreground">QViagem! - Agência de Viagens 🧡✈️</p>
              <p className="text-muted-foreground text-xs md:text-sm flex items-start gap-1">
                <span>👉</span> <span>Marque a gente #MinhaViagemComALaranjinha</span>
              </p>
              <p className="text-muted-foreground text-xs md:text-sm flex items-start gap-1">
                <span>✈️</span> <span>Vendemos sonhos através de viagens</span>
              </p>
              <p className="text-muted-foreground text-xs md:text-sm flex items-start gap-1">
                <span>🧡</span> <span>+ de 50 mil passageiros em 8 anos</span>
              </p>
              <p className="text-muted-foreground text-xs md:text-sm flex items-start gap-1">
                <span>📲</span> <span>Tudo que você precisa aqui 👇</span>
              </p>
              <div className="pt-1">
                <a
                  href="https://qviagemoficial.my.canva.site/biolink-qviagem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 font-semibold text-xs"
                >
                  qviagemoficial.my.canva.site/biolink-qviagem
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
