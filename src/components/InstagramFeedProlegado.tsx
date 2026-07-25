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
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
} from "lucide-react";

interface PostItem {
  id: number;
  type: "video" | "carousel";
  title: string;
  strategy: string;
  views?: string;
  likes: string;
  comments: string;
  // If video
  videoUrl?: string;
  posterUrl?: string;
  // If carousel (mixed media supported)
  carouselMedia?: {
    type: "image" | "video";
    url: string;
  }[];
}

interface ClientProfile {
  id: string;
  name: string;
  username: string;
  subtitle: string;
  followersCount: string;
  postsCount: string;
  followingCount: string;
  verified: boolean;
  bio: string;
  foco: string;
  avatarUrl: string;
  isAvatarPdf: boolean;
  website: string;
  highlights: string[];
  posts: PostItem[];
}

const CLIENTS_DATA: ClientProfile[] = [
  {
    id: "fabiano-gois",
    name: "Fabiano Góis",
    username: "fabianogoisfx",
    subtitle: "Mercado Financeiro / Trader (Verificado)",
    followersCount: "58,9k",
    postsCount: "94",
    followingCount: "382",
    verified: true,
    bio: "Faço mais de + 7 Dígitos (5%) para meus Clientes todos os Meses no Mercado de Câmbio... Forex",
    foco: "Posicionamento de autoridade e clareza no mercado financeiro.",
    avatarUrl: "/Prolegado/FABIANO GOIS ✅/logotipo-fabianogois.jpg",
    isAvatarPdf: false,
    website: "linktr.ee/fabianogoisfx",
    highlights: ["Resultados", "Mentorias", "Forex", "Câmbio", "Dúvidas"],
    posts: [
      {
        id: 1,
        type: "video",
        title: "Como geramos R$ 11 milhões para nossos clientes no mercado de câmbio.",
        strategy: "Storytelling & Autoridade",
        views: "18.4K",
        likes: "2.4K",
        comments: "142",
        videoUrl: "/Prolegado/FABIANO GOIS ✅/POST 1 - video/11milhoes.mp4",
        posterUrl: "/Prolegado/FABIANO GOIS ✅/POST 1 - video/capa-11milhoes.jpg",
      },
      {
        id: 2,
        type: "carousel",
        title: "O Guia Definitivo do Mercado de Forex para Iniciantes.",
        strategy: "Educativo & Funil",
        likes: "1.9K",
        comments: "98",
        carouselMedia: [
          { type: "image", url: "/Prolegado/FABIANO GOIS ✅/POST 2 - carrossel/1.jpg" },
          { type: "image", url: "/Prolegado/FABIANO GOIS ✅/POST 2 - carrossel/2.jpg" },
          { type: "image", url: "/Prolegado/FABIANO GOIS ✅/POST 2 - carrossel/3.jpg" },
          { type: "image", url: "/Prolegado/FABIANO GOIS ✅/POST 2 - carrossel/4.jpg" },
          { type: "image", url: "/Prolegado/FABIANO GOIS ✅/POST 2 - carrossel/5.jpg" },
          { type: "image", url: "/Prolegado/FABIANO GOIS ✅/POST 2 - carrossel/6.jpg" },
        ],
      },
      {
        id: 3,
        type: "video",
        title: "É possível ficar milionário apenas com Câmbio Forex?",
        strategy: "Quebra de Objeções",
        views: "12.8K",
        likes: "1.7K",
        comments: "86",
        videoUrl: "/Prolegado/FABIANO GOIS ✅/POST 3 - video/comoficarmilionario.mp4",
        posterUrl: "/Prolegado/FABIANO GOIS ✅/POST 3 - video/capa-comoficarmilionario.jpg",
      },
    ],
  },
  {
    id: "erick-sheik",
    name: "Erick Sheik",
    username: "ericksheik7",
    subtitle: "Mercado Imobiliário (Verificado)",
    followersCount: "31,6k",
    postsCount: "112",
    followingCount: "510",
    verified: true,
    bio: "🏢 +10 anos transformando o mercado imobiliário | 🔑 Líder no Esquadrão Da Casa Própria | 🤝 Mentorias, Negócios & Soluções Imobiliárias",
    foco: "Transmitir solidez, negócios high-ticket e liderança setorial.",
    avatarUrl: "/Prolegado/ERICK SHEIK ✅/logotipo-ericksheik.jpg",
    isAvatarPdf: false,
    website: "ericksheik.com.br",
    highlights: ["Mentorados", "Esquadrão", "Imóveis", "Soluções", "Negócios"],
    posts: [
      {
        id: 1,
        type: "video",
        title: "A trajetória por trás do Esquadrão Da Casa Própria.",
        strategy: "História de Vida & Conexão",
        views: "9.2K",
        likes: "1.1K",
        comments: "72",
        videoUrl: "/Prolegado/ERICK SHEIK ✅/POST 1 - video/historia-sheik.mp4",
        posterUrl: "/Prolegado/ERICK SHEIK ✅/POST 1 - video/capa-historia-sheik.jpg",
      },
      {
        id: 2,
        type: "carousel",
        title: "Como funciona a mentoria exclusiva para negócios High-Ticket.",
        strategy: "Solidez & Negócios",
        likes: "842",
        comments: "54",
        carouselMedia: [
          { type: "image", url: "/Prolegado/ERICK SHEIK ✅/POST 2 - carrossel/1.jpg" },
          { type: "image", url: "/Prolegado/ERICK SHEIK ✅/POST 2 - carrossel/2.jpg" },
          { type: "image", url: "/Prolegado/ERICK SHEIK ✅/POST 2 - carrossel/3.jpg" },
          { type: "image", url: "/Prolegado/ERICK SHEIK ✅/POST 2 - carrossel/4.jpg" },
          { type: "image", url: "/Prolegado/ERICK SHEIK ✅/POST 2 - carrossel/5.jpg" },
          { type: "image", url: "/Prolegado/ERICK SHEIK ✅/POST 2 - carrossel/6.jpg" },
          { type: "image", url: "/Prolegado/ERICK SHEIK ✅/POST 2 - carrossel/7.jpg" },
        ],
      },
      {
        id: 3,
        type: "video",
        title: "Do zero a 50k em comissões no mercado imobiliário.",
        strategy: "Validação & Autoridade",
        views: "14.5K",
        likes: "1.8K",
        comments: "115",
        videoUrl: "/Prolegado/ERICK SHEIK ✅/POST 3 - video/50k.mp4",
        posterUrl: "/Prolegado/ERICK SHEIK ✅/POST 3 - video/capa-50k.jpg",
      },
    ],
  },
  {
    id: "renata-vicentini",
    name: "Renata Vicentini",
    username: "ohmycore",
    subtitle: "Saúde & Fitness (Verificado)",
    followersCount: "86,9k",
    postsCount: "250",
    followingCount: "624",
    verified: true,
    bio: "Aqui você conquista sua barriga negativa! Treinos práticos (5–20min) para fazer em casa!",
    foco: "Conexão direta com público feminino e clareza da promessa do produto.",
    avatarUrl: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/logotipo-ohmycore.jpg",
    isAvatarPdf: false,
    website: "ohmycore.com.br",
    highlights: ["MetaBarrigaZero", "Vácuo", "Quem Sou?", "Dúvidas"],
    posts: [
      {
        id: 1,
        type: "video",
        title: "Como criei o método que ajudou milhares de mulheres a recuperar a autoestima.",
        strategy: "História de Superação",
        views: "34.1K",
        likes: "4.5K",
        comments: "329",
        videoUrl: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 1/historia.mp4",
        posterUrl: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 1/capa-historia.jpg",
      },
      {
        id: 2,
        type: "carousel",
        title: "Os segredos do Vácuo Abdominal: Como fazer passo a passo.",
        strategy: "Técnica Barriga Negativa",
        likes: "3.2K",
        comments: "210",
        carouselMedia: [
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 2 - carrossel/1.png" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 2 - carrossel/2.png" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 2 - carrossel/3.png" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 2 - carrossel/4.png" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 2 - carrossel/5.png" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 2 - carrossel/6.png" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 2 - carrossel/7.png" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 2 - carrossel/8.png" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 2 - carrossel/9.png" },
        ],
      },
      {
        id: 3,
        type: "carousel",
        title: "Rotina rápida de 10 minutos para secar em casa.",
        strategy: "Treinos em Casa",
        likes: "2.8K",
        comments: "185",
        carouselMedia: [
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 3 - carrossel/1.jpg" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 3 - carrossel/2.jpg" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 3 - carrossel/3.jpg" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 3 - carrossel/4.jpg" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 3 - carrossel/5.jpg" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 3 - carrossel/6.jpg" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 3 - carrossel/7.jpg" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 3 - carrossel/8.jpg" },
          { type: "image", url: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 3 - carrossel/9.jpg" },
        ],
      },
    ],
  },
  {
    id: "derma-beauty",
    name: "Derma Beauty",
    username: "dermabeauty.uk",
    subtitle: "Estética Avançada em Londres / Reino Unido",
    followersCount: "2,5k",
    postsCount: "43",
    followingCount: "194",
    verified: false,
    bio: "✨ Refinando sua Beleza! | 📍 Clínica em Londres | 🇬🇧🇧🇷 | 💆‍♀️ Tratamentos Faciais e Corporais",
    foco: "Design sofisticado e clean direcionado ao público internacional/UK.",
    avatarUrl: "/Prolegado/DERMA BEAUTY ✅/logotipo-dermabeauty.jpg",
    isAvatarPdf: false,
    website: "dermabeauty.co.uk",
    highlights: ["Sobre Nós", "Tratamentos", "Resultados", "Feedbacks", "Equipe", "Cuidados"],
    posts: [
      {
        id: 1,
        type: "video",
        title: "A clínica de estética brasileira que está transformando Londres.",
        strategy: "Institucional & Conceito",
        views: "3.2K",
        likes: "254",
        comments: "31",
        videoUrl: "/Prolegado/DERMA BEAUTY ✅/POST 1/historia-dermabeauty.mp4",
        posterUrl: "/Prolegado/DERMA BEAUTY ✅/POST 1/capa-historia-dermabeauty.png",
      },
      {
        id: 2,
        type: "carousel",
        title: "Quais procedimentos faciais são mais indicados para o inverno britânico?",
        strategy: "Tratamentos Estéticos",
        likes: "188",
        comments: "14",
        carouselMedia: [
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 2 - carrossel/1.jpg" },
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 2 - carrossel/2.jpg" },
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 2 - carrossel/3.jpg" },
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 2 - carrossel/4.jpg" },
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 2 - carrossel/5.jpg" },
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 2 - carrossel/6.jpg" },
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 2 - carrossel/7.jpg" },
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 2 - carrossel/8.jpg" },
        ],
      },
      {
        id: 3,
        type: "carousel",
        title: "Casos clínicos de rejuvenescimento e tratamentos corporais avançados.",
        strategy: "Resultados Reais",
        likes: "220",
        comments: "25",
        carouselMedia: [
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 3 - carrossel/1.jpg" },
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 3 - carrossel/2.jpg" },
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 3 - carrossel/3.jpg" },
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 3 - carrossel/4.jpg" },
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 3 - carrossel/5.jpg" },
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 3 - carrossel/6.jpg" },
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 3 - carrossel/7.jpg" },
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 3 - carrossel/8.jpg" },
          { type: "image", url: "/Prolegado/DERMA BEAUTY ✅/POST 3 - carrossel/9.jpg" },
        ],
      },
    ],
  },
  {
    id: "estudos-reforcos",
    name: "Academia de Estudos",
    username: "estudosereforcos",
    subtitle: "Educação Infantil",
    followersCount: "1,5k",
    postsCount: "38",
    followingCount: "228",
    verified: false,
    bio: "Reforço Escolar Personalizado - Método Transcender. Transformamos sua criança em um aluno(a) notável.",
    foco: "Transmitir confiança, método pedagógico e acolhimento para os pais.",
    avatarUrl: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/logotipo-academiadeestudosereforços.jpg",
    isAvatarPdf: false,
    website: "goconecta.com.br/estudosereforcos",
    highlights: ["Método", "Aulas", "Espaço", "Matrículas", "Dicas"],
    posts: [
      {
        id: 1,
        type: "carousel",
        title: "Como funciona o método pedagógico focado em tornar seu filho notável.",
        strategy: "Método Transcender",
        likes: "94",
        comments: "12",
        carouselMedia: [
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 1 - carrossel/1.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 1 - carrossel/2.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 1 - carrossel/3.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 1 - carrossel/4.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 1 - carrossel/5.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 1 - carrossel/6.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 1 - carrossel/7.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 1 - carrossel/8.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 1 - carrossel/9.jpg" },
        ],
      },
      {
        id: 2,
        type: "carousel",
        title: "Dicas de rotina de estudos em casa que realmente funcionam para crianças.",
        strategy: "Acolhimento & Dicas",
        likes: "78",
        comments: "9",
        carouselMedia: [
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 2 - carrossel/1.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 2 - carrossel/2.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 2 - carrossel/3.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 2 - carrossel/4.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 2 - carrossel/5.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 2 - carrossel/6.png" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 2 - carrossel/7.png" },
        ],
      },
      {
        id: 3,
        type: "carousel",
        title: "A rotina real dos nossos alunos durante as sessões de reforço escolar.",
        strategy: "Aulas Práticas & Depoimentos",
        likes: "112",
        comments: "15",
        carouselMedia: [
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 3 - carrossel com videos/1.png" },
          { type: "video", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 3 - carrossel com videos/2.mp4" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 3 - carrossel com videos/3.png" },
          { type: "video", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 3 - carrossel com videos/4.mp4" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 3 - carrossel com videos/5.png" },
          { type: "video", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 3 - carrossel com videos/6.mp4" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 3 - carrossel com videos/7.png" },
        ],
      },
    ],
  },
  {
    id: "armazem-ananda",
    name: "Armazém Ananda",
    username: "armazemanandda",
    subtitle: "Produtos Naturais & Bem-Estar",
    followersCount: "9,3k",
    postsCount: "167",
    followingCount: "488",
    verified: false,
    bio: "♥ Cuidar de Você é Nossa Felicidade! | 🌱 Produtos Naturais | Fitoterápicos | Suplementos",
    foco: "Comunicação leve e visual focado em vida saudável.",
    avatarUrl: "",
    isAvatarPdf: true, // We will render a custom sprout gradient initials circle instead
    website: "armazemanandda.com.br",
    highlights: ["Suplementos", "Receitas", "Localização", "Dicas", "Cuidados"],
    posts: [
      {
        id: 1,
        type: "video",
        title: "A história do Armazém Ananda e nosso amor por cuidar de você.",
        strategy: "Branding & Origem",
        views: "7.4K",
        likes: "612",
        comments: "42",
        videoUrl: "/Prolegado/ARMAZÉM ANANDDA ✅/POST 1/historia-anandda.mov",
        posterUrl: "/Prolegado/ARMAZÉM ANANDDA ✅/POST 1/capa-historia-anandda.png",
      },
      {
        id: 2,
        type: "video",
        title: "Onde nos encontrar: Venha conhecer nossa loja física cheia de vida.",
        strategy: "Visita & Experiência",
        views: "5.1K",
        likes: "422",
        comments: "28",
        videoUrl: "/Prolegado/ARMAZÉM ANANDDA ✅/POST 2/localização-anandda.mov",
        posterUrl: "/Prolegado/ARMAZÉM ANANDDA ✅/POST 2/capa-localização-anandda.jpg",
      },
      {
        id: 3,
        type: "video",
        title: "Doença Celíaca: O que é e quais produtos são seguros para consumir?",
        strategy: "Educativo & Saúde",
        views: "9.8K",
        likes: "782",
        comments: "64",
        videoUrl: "/Prolegado/ARMAZÉM ANANDDA ✅/POST 3/doença-celiaca.mov",
        posterUrl: "/Prolegado/ARMAZÉM ANANDDA ✅/POST 3/capa-doença-celiaca.png",
      },
    ],
  },
];

// Subcomponente individual de Post com interseção e controle de som
function PostCard({
  post,
  client,
  onOpen,
}: {
  post: PostItem;
  client: ClientProfile;
  onOpen: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches ||
          "ontouchstart" in window ||
          navigator.maxTouchPoints > 0
      );
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Intersection Observer no celular para reprodução automática
  useEffect(() => {
    if (!isMobile || post.type !== "video") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [isMobile, post.type]);

  useEffect(() => {
    if (videoRef.current && post.type === "video") {
      if (isActive) {
        videoRef.current.play().catch((err) => {
          console.warn("Autoplay blocked:", err);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive, post.type]);

  const handleMouseEnter = () => {
    if (!isMobile && post.type === "video") {
      setIsActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && post.type === "video") {
      setIsActive(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  // Thumbnail da postagem
  const coverImage =
    post.type === "video" ? post.posterUrl : post.carouselMedia?.[0]?.url;

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
      className="group relative aspect-square w-full bg-zinc-950 border border-border/40 overflow-hidden cursor-pointer rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* 1. Capa Estática */}
      <img
        src={coverImage}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />

      {/* 2. Reprodutor de vídeo (se for post do tipo vídeo simples) */}
      {post.type === "video" && post.videoUrl && (
        <video
          ref={videoRef}
          src={post.videoUrl}
          muted={isMuted}
          loop
          playsInline
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 pointer-events-none ${
            isActive ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      )}

      {/* 3. Ícones de Tipo (Canto Superior Direito) */}
      <div className="absolute top-2.5 right-2.5 z-20 bg-black/60 backdrop-blur-md text-white p-1.5 rounded-md text-[10px] font-bold">
        {post.type === "video" ? (
          <Play className="w-3.5 h-3.5 fill-current text-white" />
        ) : (
          <span className="flex items-center gap-1">
            <svg
              className="w-3.5 h-3.5 fill-current text-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 2H8a2 2 0 0 0-2 2v1H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM8 4h11v11H8V4ZM5 7h1v8H5V7Zm11 13H5V9h1v9a2 2 0 0 0 2 2h8v1Z" />
            </svg>
            <span className="font-sans leading-none">{post.carouselMedia?.length}</span>
          </span>
        )}
      </div>

      {/* 4. Overlay de Hover (Desktop) */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center text-white gap-4">
        {post.type === "video" && post.views && (
          <span className="text-[10px] uppercase font-mono tracking-widest bg-primary/80 backdrop-blur-sm px-2.5 py-1 rounded">
            {post.views} views
          </span>
        )}
        <div className="flex gap-6 text-sm font-bold font-mono">
          <span className="flex items-center gap-1.5">
            <Heart className="w-5 h-5 fill-current text-red-500" />
            {post.likes}
          </span>
          <span className="flex items-center gap-1.5">
            <MessageCircle className="w-5 h-5 fill-current text-white" />
            {post.comments}
          </span>
        </div>
        <span className="text-[10px] tracking-wider uppercase font-mono text-zinc-300">
          Clique para abrir
        </span>
      </div>

      {/* 5. Botão de Áudio (Apenas se for vídeo e estiver em reprodução) */}
      {post.type === "video" && isActive && (
        <button
          onClick={toggleMute}
          className="absolute bottom-3 right-3 bg-black/75 hover:bg-black/90 text-white p-1.5 rounded-full z-30 transition-all duration-300 pointer-events-auto cursor-pointer"
          title={isMuted ? "Ativar som" : "Desativar som"}
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 stroke-[2]" />
          ) : (
            <Volume2 className="w-3.5 h-3.5 stroke-[2]" />
          )}
        </button>
      )}
    </div>
  );
}

// Componente do Lightbox/Visualizador de Post
function PostViewerModal({
  post,
  client,
  onClose,
}: {
  post: PostItem;
  client: ClientProfile;
  onClose: () => void;
}) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (post.carouselMedia && slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    }
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (post.carouselMedia && slideIndex < post.carouselMedia.length - 1) {
      setSlideIndex((prev) => prev + 1);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted((prev) => !prev);
  };

  // Renderizador do conteúdo de mídia
  const renderMedia = () => {
    if (post.type === "video") {
      return (
        <div className="relative w-full h-full bg-zinc-950 flex items-center justify-center">
          <video
            ref={videoRef}
            src={post.videoUrl}
            muted={isMuted}
            controls
            autoPlay
            loop
            playsInline
            className="w-full h-full object-contain"
          />
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full z-20 transition-all cursor-pointer shadow"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
        </div>
      );
    }

    if (post.type === "carousel" && post.carouselMedia) {
      const currentMedia = post.carouselMedia[slideIndex];

      return (
        <div className="relative w-full h-full bg-zinc-950 flex items-center justify-center">
          {currentMedia.type === "video" ? (
            <video
              src={currentMedia.url}
              muted={isMuted}
              controls
              autoPlay
              loop
              playsInline
              className="w-full h-full object-contain"
            />
          ) : (
            <img
              src={currentMedia.url}
              alt={`Slide ${slideIndex + 1}`}
              className="w-full h-full object-contain select-none"
            />
          )}

          {/* Navegação Carrossel */}
          {slideIndex > 0 && (
            <button
              onClick={handlePrevSlide}
              className="absolute left-4 bg-black/55 hover:bg-black/80 text-white p-2 rounded-full z-20 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {slideIndex < post.carouselMedia.length - 1 && (
            <button
              onClick={handleNextSlide}
              className="absolute right-4 bg-black/55 hover:bg-black/80 text-white p-2 rounded-full z-20 transition-all cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Botão de som (se o slide ativo for vídeo) */}
          {currentMedia.type === "video" && (
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full z-20 transition-all cursor-pointer shadow"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
          )}

          {/* Indicadores de slides (Dots) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/35 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {post.carouselMedia.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === slideIndex ? "bg-white scale-125" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8 animate-fade-in"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 p-2.5 rounded-full z-50 transition-all cursor-pointer"
        title="Fechar"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-card border border-border/80 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[85vh] max-h-[85vh] md:h-[650px]"
      >
        {/* Lado Esquerdo: Media Viewer */}
        <div className="flex-1 relative bg-zinc-950 flex items-center justify-center h-2/3 md:h-full">
          {renderMedia()}
        </div>

        {/* Lado Direito: Perfil & Info */}
        <div className="w-full md:w-[360px] border-t md:border-t-0 md:border-l border-border flex flex-col h-1/3 md:h-full bg-background">
          {/* Header do Perfil */}
          <div className="p-4 border-b border-border/60 flex items-center gap-3 shrink-0">
            {client.isAvatarPdf ? (
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-mono font-bold text-xs shadow-sm ring-1 ring-border">
                AA
              </div>
            ) : (
              <div className="w-9 h-9 rounded-full overflow-hidden border border-border flex items-center justify-center bg-zinc-950 shrink-0">
                <img
                  src={client.avatarUrl}
                  alt={client.username}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="font-bold text-sm tracking-tight text-foreground truncate block">
                  {client.username}
                </span>
                {client.verified && (
                  <span className="w-3.5 h-3.5 bg-blue-500 rounded-full flex items-center justify-center text-white shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
              </div>
              <span className="text-[10px] text-muted-foreground block truncate">
                {client.subtitle}
              </span>
            </div>
            <a
              href={`https://instagram.com/${client.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary font-bold hover:underline shrink-0 flex items-center gap-0.5"
            >
              Seguir
            </a>
          </div>

          {/* Corpo - Informações do Post */}
          <div className="p-5 flex-1 overflow-y-auto space-y-4">
            <div>
              <span className="inline-block text-[9px] uppercase font-mono tracking-widest text-primary font-bold bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                {post.strategy}
              </span>
              <h4 className="mt-3 font-bold text-base text-foreground leading-snug">
                {post.title}
              </h4>
            </div>

            <div className="p-3.5 bg-secondary border border-border rounded-xl space-y-2">
              <span className="font-mono text-[9px] tracking-wider text-muted-foreground uppercase font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                Foco Estratégico
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {client.foco}
              </p>
            </div>

            <div className="space-y-1 text-xs text-muted-foreground/90 font-sans">
              <p className="font-bold text-foreground">Legenda do Feed Restaurado:</p>
              <p className="italic leading-relaxed">
                "{client.bio}"
              </p>
            </div>
          </div>

          {/* Footer - Stats */}
          <div className="p-4 border-t border-border bg-secondary/30 flex justify-between items-center text-xs font-mono text-muted-foreground uppercase tracking-wider shrink-0">
            <span className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              {post.likes} likes
            </span>
            <span className="flex items-center gap-1.5">
              <MessageCircle className="w-4 h-4 text-foreground/70" />
              {post.comments} comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente Principal
export default function InstagramFeedProlegado() {
  const [activeClientId, setActiveClientId] = useState<string>("fabiano-gois");
  const [activePost, setActivePost] = useState<PostItem | null>(null);

  // Localiza o perfil ativo com base no ID
  const activeClient = CLIENTS_DATA.find((c) => c.id === activeClientId) || CLIENTS_DATA[0];

  return (
    <div className="mt-16 border border-border rounded-2xl bg-card overflow-hidden shadow-sm animate-reveal">
      {/* 1. SELETOR DE CLIENTES (FORMATO STORIES DO INSTAGRAM) */}
      <div className="p-4 md:p-6 border-b border-border/80 bg-background/50 flex flex-col items-center">
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-4 font-bold block">
          Selecionar Cliente para Visualizar
        </span>
        <div className="flex gap-4 md:gap-6 overflow-x-auto w-full max-w-4xl no-scrollbar py-2 justify-start sm:justify-center px-4">
          {CLIENTS_DATA.map((client) => {
            const isSelected = client.id === activeClientId;
            return (
              <button
                key={client.id}
                onClick={() => {
                  setActiveClientId(client.id);
                  setActivePost(null);
                }}
                className="flex flex-col items-center gap-1.5 shrink-0 focus:outline-none group cursor-pointer transition-transform active:scale-95"
              >
                {/* Story Circle */}
                <div
                  className={`p-0.5 rounded-full transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 ring-2 ring-primary/20 scale-105"
                      : "bg-transparent border border-border/70 group-hover:border-primary/50"
                  }`}
                >
                  <div className="p-0.5 bg-background rounded-full">
                    {client.isAvatarPdf ? (
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-inner">
                        AA
                      </div>
                    ) : (
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border border-border/50 flex items-center justify-center bg-zinc-950">
                        <img
                          src={client.avatarUrl}
                          alt={client.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                  </div>
                </div>
                {/* Username */}
                <span
                  className={`text-[10px] font-mono tracking-tighter truncate max-w-[80px] text-center ${
                    isSelected ? "text-primary font-bold" : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  @{client.username}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. CARD DO PERFIL DO INSTAGRAM (SIMULAÇÃO REALISTA) */}
      <div className="p-6 md:p-10 border-b border-border bg-background/50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Avatar com degradê */}
          <div className="relative shrink-0">
            <div className="p-1.5 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 shadow-md">
              <div className="p-1 bg-background rounded-full">
                {activeClient.isAvatarPdf ? (
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-mono font-black text-2xl shadow-inner">
                    AA
                  </div>
                ) : (
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-border flex items-center justify-center bg-zinc-950">
                    <img
                      src={activeClient.avatarUrl}
                      alt={activeClient.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Detalhes do Perfil */}
          <div className="flex-1 text-center md:text-left space-y-4 min-w-0">
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <h4 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-1.5">
                {activeClient.username}
                {activeClient.verified && (
                  <span className="w-4.5 h-4.5 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-sm shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </span>
                )}
              </h4>

              {/* Botões do Perfil */}
              <div className="flex gap-2 mt-2 sm:mt-0 font-sans text-xs font-semibold">
                <button className="px-5 py-1.5 bg-secondary text-foreground hover:bg-secondary/80 border border-border rounded-lg transition-colors cursor-pointer">
                  Seguir
                </button>
                <button className="px-4 py-1.5 bg-secondary text-foreground hover:bg-secondary/80 border border-border rounded-lg transition-colors cursor-pointer">
                  Mensagem
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-8 text-sm text-muted-foreground font-sans">
              <span>
                <strong className="text-foreground font-semibold">{activeClient.postsCount}</strong> posts
              </span>
              <span>
                <strong className="text-foreground font-semibold">{activeClient.followersCount}</strong> seguidores
              </span>
              <span>
                <strong className="text-foreground font-semibold">{activeClient.followingCount}</strong> seguindo
              </span>
            </div>

            {/* Bio */}
            <div className="text-sm space-y-1 text-left max-w-xl">
              <p className="font-bold text-foreground">{activeClient.name}</p>
              <p className="text-muted-foreground/80 text-[11px] uppercase tracking-wide">
                {activeClient.subtitle}
              </p>
              <div className="text-muted-foreground space-y-1.5 text-xs md:text-sm pt-1.5 font-sans leading-relaxed whitespace-pre-line">
                {activeClient.bio}
              </div>
              <div className="pt-2">
                <a
                  href={`https://${activeClient.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1 font-bold text-xs md:text-sm"
                >
                  <LinkIcon className="w-3.5 h-3.5 shrink-0" />
                  {activeClient.website}
                </a>
              </div>
            </div>

            {/* Badge Especial: Foco Estratégico */}
            <div className="pt-2">
              <div className="inline-flex flex-col sm:flex-row sm:items-center gap-2 px-4 py-2.5 bg-primary/5 hover:bg-primary/10 border border-primary/15 rounded-xl transition-all max-w-xl text-left">
                <span className="font-mono text-[9px] uppercase tracking-widest bg-primary/10 border border-primary/20 text-primary px-2 py-0.5 rounded w-fit shrink-0 font-bold">
                  Foco Estratégico
                </span>
                <span className="text-xs text-muted-foreground leading-snug">
                  {activeClient.foco}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. STORIES DE DESTAQUES (HIGHLIGHTS) */}
      <div className="px-6 py-4 md:px-10 border-b border-border bg-card/40 flex items-center justify-start overflow-x-auto no-scrollbar shrink-0">
        <div className="flex gap-6 max-w-4xl mx-auto py-1">
          {activeClient.highlights.map((highlight) => (
            <div key={highlight} className="flex flex-col items-center gap-1 shrink-0">
              <div className="w-12 h-12 rounded-full border border-border/80 bg-secondary/50 flex items-center justify-center p-0.5 animate-reveal">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center border border-border/40 font-mono text-[10px] text-muted-foreground font-semibold shadow-inner">
                  {highlight.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <span className="text-[10px] text-muted-foreground truncate max-w-[65px]">
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. ABAS E GRID DE PUBLICAÇÕES */}
      <div className="flex justify-center border-b border-border bg-card">
        <div className="flex gap-12 font-mono text-[10px] tracking-widest uppercase font-bold text-muted-foreground py-4">
          <button className="flex items-center gap-1.5 text-primary border-b-2 border-primary pb-4 -mb-4">
            <Grid className="w-3.5 h-3.5" />
            Publicações Fixadas
          </button>
          <button className="flex items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity cursor-not-allowed">
            <Film className="w-3.5 h-3.5" />
            Reels
          </button>
          <button className="flex items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity cursor-not-allowed">
            <User className="w-3.5 h-3.5" />
            Marcados
          </button>
        </div>
      </div>

      {/* Grid de 3 Posts Fixados */}
      <div className="p-6 md:p-10 bg-background/30">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto animate-reveal">
          {activeClient.posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              client={activeClient}
              onOpen={() => setActivePost(post)}
            />
          ))}
        </div>
      </div>

      {/* 5. OVERLAY LIGHTBOX MODAL */}
      {activePost && (
        <PostViewerModal
          post={activePost}
          client={activeClient}
          onClose={() => setActivePost(null)}
        />
      )}
    </div>
  );
}
