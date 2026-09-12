import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";

export interface CarouselMediaItem {
  type: "image" | "video";
  url: string;
}

export interface PostItem {
  id: number;
  type: "video" | "carousel";
  title: string;
  strategy: string;
  views?: string;
  likes: string;
  comments: string;
  videoUrl?: string;
  posterUrl?: string;
  carouselMedia?: CarouselMediaItem[];
  caption?: string;
  strategyExplanation?: string;
  instagramUrl?: string;
  tag?: string;
  description?: string;
}

export interface ClientProfile {
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
  isAvatarPdf?: boolean;
  website: string;
  highlights?: string[];
  posts: PostItem[];
}

const DEFAULT_CLIENTS: ClientProfile[] = [
  {
    id: "4uviagens",
    name: "4U Viagens",
    username: "4uviagens",
    subtitle: "Assessoria Internacional de Viagens",
    followersCount: "2.272",
    postsCount: "951",
    followingCount: "2.157",
    verified: true,
    bio: "💜✈️ Transformamos roteiros comuns em experiências exclusivas.\nCuradoria especializada | Grupos exclusivos | Suporte 24h\n👇 Saiba mais",
    foco: "Turismo premium de alto padrão e curadoria exclusiva de viagens.",
    avatarUrl: "/CLIENTES/4U Viagens/logo-4uviagens.jpg",
    website: "goconecta.com.br/4uviagens",
    posts: [
      {
        id: 1,
        type: "video",
        title: "A Trajetória que transformou a 4U Viagens no que é hoje",
        strategy: "Storytelling & Posicionamento",
        tag: "Branding & Autoridade",
        videoUrl: "/CLIENTES/4U Viagens/videos/trajetoria.mp4",
        posterUrl: "/CLIENTES/4U Viagens/capas/capa-trajetoria.jpg",
        instagramUrl: "https://www.instagram.com/4uviagens/",
        likes: "88",
        comments: "46",
        views: "973",
        caption: "Conheça os bastidores e a história real por trás da 4U Viagens. Uma jornada dedicada a entregar experiências inesquecíveis pelo mundo.",
        strategyExplanation: "Estratégia de Storytelling focada em gerar conexão emocional profunda com a audiência e consolidar a autoridade da 4U no mercado de viagens de luxo."
      },
      {
        id: 2,
        type: "video",
        title: "100% oficial: A Black Friday chegou na 4U Viagens",
        strategy: "Marketing de Lançamento & Conversão",
        tag: "Campanha Comercial",
        videoUrl: "/CLIENTES/4U Viagens/videos/black-friday.mp4",
        posterUrl: "/CLIENTES/4U Viagens/capas/capa-black-friday.jpg",
        instagramUrl: "https://www.instagram.com/4uviagens/",
        likes: "60",
        comments: "25",
        views: "798",
        caption: "Condições imperdíveis ativas para os nossos grupos de viagem exclusivos. Vagas limitadas!",
        strategyExplanation: "Campanha comercial de conversão direta utilizando gatilhos mentais de escassez e urgência para preenchimento rápido de vagas."
      },
      {
        id: 3,
        type: "video",
        title: "Você acha que o Google tem todas as respostas sobre a sua viagem?",
        strategy: "Quebra de Objeções & Autoridade",
        tag: "Educação de Audiência",
        videoUrl: "/CLIENTES/4U Viagens/videos/google.mp4",
        posterUrl: "/CLIENTES/4U Viagens/capas/capa-google.jpg",
        instagramUrl: "https://www.instagram.com/4uviagens/",
        likes: "32",
        comments: "3",
        views: "9.290",
        caption: "Google vs. Assessoria Especializada: Entenda a diferença fundamental na hora de planejar suas férias.",
        strategyExplanation: "Quebra de objeção clássica de clientes que acreditam que montar viagem pela internet é suficiente, demonstrando o alto valor agregado do suporte humano 24h."
      }
    ]
  },
  {
    id: "qviagem",
    name: "QViagem",
    username: "qviagem",
    subtitle: "Agência & Clube de Viagens Premium",
    followersCount: "45,8K",
    postsCount: "412",
    followingCount: "390",
    verified: true,
    bio: "✈️ Especialistas em transformar viagens dos sonhos em roteiros reais e inesquecíveis.\n📍 Destinos paradisíacos & Resorts Exclusivos",
    foco: "Experiências visuais de luxo, co-marketing e captação de leads qualificados.",
    avatarUrl: "/CLIENTES/QViagem/logotipo-qviagem.png",
    website: "qviagem.com.br",
    posts: [
      {
        id: 1,
        type: "video",
        title: "Invadi o perfil da Laranjinha no Malai Manso Resort",
        strategy: "Co-marketing & Marketing de Influência",
        tag: "Awareness & Autoridade",
        videoUrl: "/CLIENTES/QViagem/POST 3/laranjinha.mp4",
        posterUrl: "/CLIENTES/QViagem/POST 3/laranjinha-cover.jpg",
        instagramUrl: "https://www.instagram.com/reel/DGwGTduRmKQ/",
        likes: "12.4K",
        comments: "342",
        views: "166K",
        caption: "Invadimos o Malai Manso Resort com a Laranjinha! Confira cada momento dessa experiência incrível.",
        strategyExplanation: "Parceria estratégica com influenciador relevante para expansão de alcance, alavancando a prova social e gerando alto volume de compartilhamentos."
      },
      {
        id: 2,
        type: "video",
        title: "O Resort Mais Completo de Natal - RN",
        strategy: "Experiência Visual & Conversão",
        tag: "Captação de Leads",
        videoUrl: "/CLIENTES/QViagem/POST 2/natal.mp4",
        posterUrl: "/CLIENTES/QViagem/POST 2/natal-cover.png",
        instagramUrl: "https://www.instagram.com/reel/DO_1JdYkZXo/",
        likes: "8.9K",
        comments: "195",
        views: "95K",
        caption: "Seu próximo destino de férias já tem nome e lugar: Natal, RN!",
        strategyExplanation: "Vídeo sensorial de alto desejo voltado para conversão imediata de famílias interessadas em pacotes de férias."
      },
      {
        id: 3,
        type: "video",
        title: "Conheça o Novo Andar da QViagem",
        strategy: "Employer Branding & Conexão Humana",
        tag: "Humanização de Marca",
        videoUrl: "/CLIENTES/QViagem/POST 1/novo-andar.mp4",
        posterUrl: "/CLIENTES/QViagem/POST 1/novo-andar-cover.png",
        instagramUrl: "https://www.instagram.com/reel/DI4aBQnMugm/",
        likes: "5.2K",
        comments: "88",
        views: "54K",
        caption: "Nosso time cresceu e nosso espaço se renovou para te receber com ainda mais conforto!",
        strategyExplanation: "Conteúdo focado em humanização e branding corporativo para gerar orgulho na equipe e aproximação com a comunidade."
      }
    ]
  },
  {
    id: "armazem-ananda",
    name: "Armazém Anandda",
    username: "armazemanandda",
    subtitle: "Produtos Naturais & Bem-Estar",
    followersCount: "9,3k",
    postsCount: "167",
    followingCount: "488",
    verified: false,
    bio: "🌱 Cuidar de Você é Nossa Felicidade! | 🧘‍♂️ Produtos Naturais | Fitoterápicos | Suplementos",
    foco: "Comunicação leve e visual focado em vida saudável.",
    avatarUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/logotipo-anandda.jpg",
    isAvatarPdf: false,
    website: "armazemanandda.com.br",
    highlights: ["Suplementos", "Receitas", "Localização", "Dicas", "Cuidados"],
    posts: [
      {
        id: 1,
        type: "video",
        title: "HISTÓRIA DO ARMAZÉM ANANDDA",
        strategy: "Branding & Origem",
        views: "6.053",
        likes: "322",
        comments: "84",
        videoUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 1/01. historia-anandda.mp4",
        posterUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 1/01. capa-historia-anandda.png",
        instagramUrl: "https://www.instagram.com/reel/C7hth9FPNOw/",
        caption: "Conheça a história por trás de uma das melhores lojas de produtos naturais de Alagoas, o Armazém Anandda ✨\n\nNossa fundadora, Leila Amanda, compartilha sua jornada pessoal de bem-estar e paixão pela alimentação natural.",
        strategyExplanation: "Vídeo de Storytelling para reforçar o propósito da marca e humanizar a empresa perante os clientes da região."
      },
      {
        id: 2,
        type: "video",
        title: "INAUGURAÇÃO MASSAGUEIRA",
        strategy: "Visita & Experiência",
        views: "172.000",
        likes: "392",
        comments: "27",
        videoUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 2/02. capa-produtos.mp4",
        posterUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 2/capa-localização-anandda.jpg",
        instagramUrl: "https://www.instagram.com/reel/C7kZezFv-6P/",
        caption: "Que alegria foi a inauguração da nossa nova loja de produtos naturais na Massagueira. 🥰💚",
        strategyExplanation: "Cobertura de evento físico destacando o crescimento da rede e atração de novos clientes locais."
      },
      {
        id: 3,
        type: "video",
        title: "CONHEÇA NOSSA LOJA EM PONTA VERDE",
        strategy: "Localização & Experiência",
        views: "39.9K",
        likes: "318",
        comments: "20",
        videoUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 3/03. localização-anandda.mov",
        posterUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 3/03. capa-localização-anandda.jpg",
        instagramUrl: "https://www.instagram.com/reel/C9Dil6-vgc_/",
        caption: "📍🌱 Você já conhece o nosso cantinho de produtos naturais aqui em Maceió?\n\nO Armazém Anandda fica na Rua Deputado José Lages, Ponta Verde!",
        strategyExplanation: "Vídeo de localização estratégica facilitando a chegada do cliente à loja física e apresentando os principais produtos."
      }
    ]
  },
  {
    id: "academia-de-estudos",
    name: "Academia de Estudos & Reforço",
    username: "academiadeestudos",
    subtitle: "Reforço Escolar & Acompanhamento",
    followersCount: "4,1k",
    postsCount: "124",
    followingCount: "290",
    verified: true,
    bio: "🎓 Transformando o aprendizado com métodos psicopedagógicos e suporte personalizado para o sucesso escolar do seu filho.",
    foco: "Comunicação empática voltada para pais que buscam excelência acadêmica.",
    avatarUrl: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/logotipo-academiadeestudosereforços.jpg",
    website: "academiadeestudos.com.br",
    posts: [
      {
        id: 1,
        type: "carousel",
        title: "MÉTODO TRANSCENDER",
        strategy: "Apresentação de Metodologia",
        likes: "412",
        comments: "35",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/1.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/2.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/3.jpg" }
        ],
        caption: "E se você pudesse garantir que seu filho tivesse as ferramentas certas para ir além? 🦋",
        strategyExplanation: "Carrossel explicativo sobre a metodologia própria de aprendizado, gerando autoridade perante mães e pais de alunos."
      }
    ]
  },
  {
    id: "derma-beauty",
    name: "Derma Beauty",
    username: "dermabeauty",
    subtitle: "Estética Avançada & Dermatologia",
    followersCount: "14,2k",
    postsCount: "230",
    followingCount: "510",
    verified: true,
    bio: "✨ Realçando a sua beleza natural com biostimuladores, toxina botulínica e tratamentos faciais e corporais personalizados.",
    foco: "Posicionamento internacional sofisticado em português e inglês.",
    avatarUrl: "/CLIENTES/Prolegado/DERMA BEAUTY/logotipo-dermabeauty.jpg",
    website: "dermabeauty.com.br",
    posts: [
      {
        id: 1,
        type: "video",
        title: "BELEZA E AUTOESTIMA",
        strategy: "Storytelling & Fundadores",
        views: "18.4K",
        likes: "512",
        comments: "42",
        videoUrl: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 1/historia-dermabeauty.mp4",
        posterUrl: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 1/capa-historia-dermabeauty.png",
        caption: "Você já pensou no que realmente te faz sentir bonita? Fundada em 2021, a Derma Beauty nasceu para transformar vidas e elevar a autoconfiança. ✨💖",
        strategyExplanation: "Vídeo conceito conectando beleza e saúde mental, posicionando a clínica em um patamar de alto valor."
      }
    ]
  },
  {
    id: "erick-sheik",
    name: "Erick Sheik",
    username: "ericksheik",
    subtitle: "Mentor & Estrategista Imobiliário",
    followersCount: "52,4k",
    postsCount: "890",
    followingCount: "630",
    verified: true,
    bio: "🚀 Mentoria Comercial & Aceleração de Corretores de Imóveis | De zero a R$ 100 Mi em VGV.",
    foco: "Autoridade agressiva de vendas e quebra de objeções para corretores.",
    avatarUrl: "/CLIENTES/Prolegado/ERICK SHEIK/logotipo-ericksheik.jpg",
    website: "ericksheik.com.br",
    posts: [
      {
        id: 1,
        type: "video",
        title: "DE ZERO A 100 MILHÕES DE VGV",
        strategy: "Storytelling & Superação",
        views: "142K",
        likes: "2.410",
        comments: "312",
        videoUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 1 - video/historia-sheik.mp4",
        posterUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 1 - video/capa-historia-sheik.jpg",
        caption: "Você sabe como eu me tornei um corretor de sucesso? Eu te conto, do absoluto zero! Do desemprego em 2012 a mais de R$100 milhões em vendas em 2024. 🚀",
        strategyExplanation: "Jornada do herói inspiradora voltada para recrutamento de alunos para mentoria comercial no setor imobiliário."
      }
    ]
  },
  {
    id: "fabiano-gois",
    name: "Fabiano Gois",
    username: "fabianogois",
    subtitle: "Investimentos & Alto Padrão",
    followersCount: "18,9k",
    postsCount: "310",
    followingCount: "410",
    verified: true,
    bio: "🏛️ Especialista em Imóveis de Luxo e Estratégias de Investimento de Alto Impacto.",
    foco: "Elegância visual e autoridade no mercado imobiliário de alto valor.",
    avatarUrl: "/CLIENTES/Prolegado/FABIANO GOIS/logotipo-fabianogois.jpg",
    website: "fabianogois.com.br",
    posts: [
      {
        id: 1,
        type: "video",
        title: "11 MILHÕES EM VGV",
        strategy: "Case de Sucesso & Autoridade",
        views: "89.5K",
        likes: "1.890",
        comments: "145",
        videoUrl: "/CLIENTES/Prolegado/FABIANO GOIS/POST 1 - video/11milhoes.mp4",
        posterUrl: "/CLIENTES/Prolegado/FABIANO GOIS/POST 1 - video/capa-11milhoes.jpg",
        caption: "Como alcançamos o marco de R$ 11 milhões em VGV através de posicionamento estratégico e tráfego altamente segmentado.",
        strategyExplanation: "Estudo de caso focado em comprovação numérica de resultados para investidores do mercado de luxo."
      }
    ]
  },
  {
    id: "oh-my-core",
    name: "Oh My Core - Renata Vicentini",
    username: "renatavicentinilpf",
    subtitle: "Especialista em LPF & Saúde Feminina",
    followersCount: "31,5k",
    postsCount: "540",
    followingCount: "480",
    verified: true,
    bio: "💖 Te ensino a eliminar até 12cm de cintura com o Método LPF sem cirurgias ou dietas malucas.",
    foco: "Transformação pessoal, estética corporal e autoestima feminina.",
    avatarUrl: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/logotipo-ohmycore.jpg",
    website: "renatavicenti.com.br",
    posts: [
      {
        id: 1,
        type: "video",
        title: "QUEM É RENATA VICENTINI",
        strategy: "Captação & Lançamento",
        views: "98.2K",
        likes: "1.450",
        comments: "189",
        videoUrl: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 1 - Quem é RENATA VICENTINI/historia.mp4",
        posterUrl: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 1 - Quem é RENATA VICENTINI/capa-historia.jpg",
        caption: "Preparei com muito carinho o evento “Meta Barriga Zero”! Um projeto para você eliminar 12cm de cintura sem academia, cirurgia ou dietas restritas! 💖",
        strategyExplanation: "Vídeo de atração e topo de funil para cadastros no evento gratuito de LPF."
      }
    ]
  }
];

const CMS_STORAGE_KEY = "portfolio_cms_data_v3";

interface PortfolioCMSContextType {
  clients: ClientProfile[];
  activeClientId: string;
  setActiveClientId: (id: string) => void;
  updateClientProfile: (clientId: string, updatedFields: Partial<ClientProfile>) => void;
  addPost: (clientId: string, newPost: Omit<PostItem, "id">) => void;
  updatePost: (clientId: string, postId: number, updatedFields: Partial<PostItem>) => void;
  deletePost: (clientId: string, postId: number) => void;
  resetToDefaults: () => void;
  isAdminOpen: boolean;
  setIsAdminOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getClient: (clientId: string) => ClientProfile | undefined;
}

const PortfolioCMSContext = createContext<PortfolioCMSContextType | undefined>(undefined);

export function PortfolioCMSProvider({ children }: { children: ReactNode }) {
  const [clients, setClients] = useState<ClientProfile[]>(() => {
    if (typeof window === "undefined") return DEFAULT_CLIENTS;
    try {
      const stored = localStorage.getItem(CMS_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error("Erro ao carregar dados do CMS:", e);
    }
    return DEFAULT_CLIENTS;
  });

  const [activeClientId, setActiveClientId] = useState<string>("armazem-ananda");
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

  // Persistence
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(clients));
    } catch (e) {
      console.error("Erro ao salvar dados do CMS:", e);
    }
  }, [clients]);

  // Global Shortcut detector: Ctrl + V + I
  const keysPressedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      keysPressedRef.current.add(key);

      const hasCtrl = e.ctrlKey || e.metaKey || keysPressedRef.current.has("control");
      const hasV = keysPressedRef.current.has("v");
      const hasI = keysPressedRef.current.has("i");

      if (hasCtrl && hasV && hasI) {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
        keysPressedRef.current.clear();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      keysPressedRef.current.delete(key);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const updateClientProfile = (clientId: string, updatedFields: Partial<ClientProfile>) => {
    setClients((prev) =>
      prev.map((c) => (c.id === clientId ? { ...c, ...updatedFields } : c))
    );
  };

  const addPost = (clientId: string, newPost: Omit<PostItem, "id">) => {
    setClients((prev) =>
      prev.map((c) => {
        if (c.id === clientId) {
          const maxId = c.posts.reduce((acc, p) => Math.max(acc, p.id), 0);
          const created: PostItem = { ...newPost, id: maxId + 1 } as PostItem;
          return { ...c, posts: [created, ...c.posts] };
        }
        return c;
      })
    );
  };

  const updatePost = (clientId: string, postId: number, updatedFields: Partial<PostItem>) => {
    setClients((prev) =>
      prev.map((c) => {
        if (c.id === clientId) {
          const nextPosts = c.posts.map((p) => (p.id === postId ? { ...p, ...updatedFields } : p));
          return { ...c, posts: nextPosts };
        }
        return c;
      })
    );
  };

  const deletePost = (clientId: string, postId: number) => {
    setClients((prev) =>
      prev.map((c) => {
        if (c.id === clientId) {
          const nextPosts = c.posts.filter((p) => p.id !== postId);
          return { ...c, posts: nextPosts };
        }
        return c;
      })
    );
  };

  const resetToDefaults = () => {
    setClients(DEFAULT_CLIENTS);
    try {
      localStorage.removeItem(CMS_STORAGE_KEY);
    } catch (e) {}
  };

  const getClient = (clientId: string) => {
    return clients.find((c) => c.id === clientId);
  };

  return (
    <PortfolioCMSContext.Provider
      value={{
        clients,
        activeClientId,
        setActiveClientId,
        updateClientProfile,
        addPost,
        updatePost,
        deletePost,
        resetToDefaults,
        isAdminOpen,
        setIsAdminOpen,
        getClient,
      }}
    >
      {children}
    </PortfolioCMSContext.Provider>
  );
}

export function usePortfolioCMS() {
  const context = useContext(PortfolioCMSContext);
  if (!context) {
    return {
      clients: DEFAULT_CLIENTS,
      activeClientId: "armazem-ananda",
      setActiveClientId: () => {},
      updateClientProfile: () => {},
      addPost: () => {},
      updatePost: () => {},
      deletePost: () => {},
      resetToDefaults: () => {},
      isAdminOpen: false,
      setIsAdminOpen: () => {},
      getClient: (id: string) => DEFAULT_CLIENTS.find(c => c.id === id)
    };
  }
  return context;
}
