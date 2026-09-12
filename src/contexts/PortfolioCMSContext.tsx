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
    bio: "✈️ Transformamos roteiros comuns em experiências exclusivas.\nCuradoria especializada | Grupos exclusivos | Suporte 24h\n👉 Saiba mais",
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
    bio: "✈️ Especialistas em transformar viagens dos sonhos em roteiros reais e inesquecíveis.\n🌴 Destinos paradisíacos & Resorts Exclusivos",
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
    bio: "💚 Cuidar de Você é Nossa Felicidade! | 🌿 Produtos Naturais | Fitoterápicos | Suplementos",
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
        caption: "Conheça a história por trás de uma das melhores lojas de produtos naturais de Alagoas, o Armazém Anandda 💚\n\nNossa fundadora, Leila Amanda, compartilha sua jornada pessoal de bem-estar e paixão pela alimentação natural.",
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
        posterUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 2/02. capa-localização-anandda.jpg",
        instagramUrl: "https://www.instagram.com/reel/C7kZezFv-6P/",
        caption: "Que alegria foi a inauguração da nossa nova loja de produtos naturais na Massagueira! ✨ Cada sorriso e abraço tornaram esse momento inesquecível.",
        strategyExplanation: "Registro de evento local para fortalecer a comunidade e impulsionar o tráfego físico na nova filial."
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
        caption: "Você já conhece o nosso cantinho de produtos naturais aqui em Maceió? O Armazém Anandda fica na Rua Deputado José Lages, Ponta Verde! Alimentos sem glúten, sem lactose e fitoterápicos. 🌿",
        strategyExplanation: "Vídeo de localização estratégica facilitando a chegada do cliente à loja física e apresentando os principais produtos."
      },
      {
        id: 4,
        type: "video",
        title: "CONHEÇA NOSSO NOVO VISUAL",
        strategy: "Rebranding & Identidade Visual",
        views: "12.4K",
        likes: "245",
        comments: "18",
        videoUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 4/04. nova-identidade-visual.mp4",
        posterUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 4/04. capa-nova-identidade-visual.jpg",
        caption: "Temos Novidades no Ar! 🎉 O Armazém Anandda renovou a identidade visual para trazer mais vibração e credibilidade à marca que você já ama!",
        strategyExplanation: "Vídeo de Rebranding mostrando evolução da marca e alinhamento visual com novos públicos."
      },
      {
        id: 5,
        type: "video",
        title: "PREPARATIVOS DA INAUGURAÇÃO",
        strategy: "Bastidores & Teaser",
        views: "8.9K",
        likes: "180",
        comments: "12",
        videoUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 5/05. preparativos-inauguração.mp4",
        posterUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 5/05. capa-preparativos-inauguração.jpg",
        caption: "Os preparativos para a grande abertura estão a todo vapor! Bastidores exclusivos da preparação da nossa nova unidade. 🌿✨",
        strategyExplanation: "Conteúdo de bastidores para criar expectativa e engajamento pré-evento."
      },
      {
        id: 6,
        type: "video",
        title: "GRANDE INAUGURAÇÃO ANANDDA",
        strategy: "Evento & Cobertura",
        views: "45.2K",
        likes: "512",
        comments: "48",
        videoUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 6/06. grande-inauguração.mp4",
        posterUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 6/06. capa-grande-inauguração.jpg",
        caption: "Um dia histórico! Confira como foi a grande inauguração oficial do Armazém Anandda com a presença de clientes e parceiros especiais.",
        strategyExplanation: "Vídeo de cobertura com depoimentos e recepção de público para prova social contundente."
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
    highlights: ["Metodologia", "Depoimentos", "Espaço", "Horários"],
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
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/3.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/4.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/5.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/6.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/7.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/8.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/9.jpg" }
        ],
        caption: "E se você pudesse garantir que seu filho tivesse as ferramentas certas para ir além das notas baixas? Conheça o Método Transcender. 🎓✨",
        strategyExplanation: "Carrossel explicativo sobre a metodologia própria de aprendizado, gerando autoridade perante mães e pais de alunos."
      },
      {
        id: 2,
        type: "carousel",
        title: "DESENVOLVIMENTO INFANTIL & FOCO",
        strategy: "Acompanhamento Escolar & Habilidade",
        likes: "620",
        comments: "48",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 2 - carrossel/1.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 2 - carrossel/2.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 2 - carrossel/3.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 2 - carrossel/4.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 2 - carrossel/5.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 2 - carrossel/6.png" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 2 - carrossel/7.png" }
        ],
        caption: "Ajudar seu filho a construir rotina e autonomia de estudos não precisa ser um pesadelo diário! Dicas práticas de organização pedagógica. 📚✏️",
        strategyExplanation: "Conteúdo utilitário para dor dos pais, demonstrando o diferencial do apoio pedagógico especializado."
      },
      {
        id: 3,
        type: "carousel",
        title: "AULAS PRÁTICAS & ACOMPANHAMENTO",
        strategy: "Estratégia Pedagógica Dinâmica",
        likes: "1.2K",
        comments: "89",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 3 - carrossel com videos/1.png" },
          { type: "video", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 3 - carrossel com videos/2.mp4" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 3 - carrossel com videos/3.png" },
          { type: "video", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 3 - carrossel com videos/4.mp4" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 3 - carrossel com videos/5.png" },
          { type: "video", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 3 - carrossel com videos/6.mp4" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 3 - carrossel com videos/7.png" }
        ],
        caption: "Confira como funcionam nossas aulas práticas e interativas! Aprendizado de verdade que prende a atenção e fixa o conteúdo. 💡🚀",
        strategyExplanation: "Carrossel multimídia combinando imagens e vídeos em tempo real de aulas para transmitir máxima confiança."
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
    bio: "✨ Realçando a sua beleza natural com bioestimuladores, toxina botulínica e tratamentos faciais e corporais personalizados.",
    foco: "Posicionamento internacional sofisticado em português e inglês.",
    avatarUrl: "/CLIENTES/Prolegado/DERMA BEAUTY/logotipo-dermabeauty.jpg",
    website: "dermabeauty.com.br",
    highlights: ["Protocolos", "Resultados", "Estrutura", "Dúvidas"],
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
        caption: "Você já pensou no que realmente te faz sentir bonita? Fundada em 2021, a Derma Beauty nasceu para transformar vidas e elevar a autoconfiança. 🌸✨",
        strategyExplanation: "Vídeo conceito conectando beleza e saúde mental, posicionando a clínica em um patamar de alto valor."
      },
      {
        id: 2,
        type: "carousel",
        title: "BIOESTIMULADORES DE COLÁGENO",
        strategy: "Educação de Estética Avançada",
        likes: "845",
        comments: "63",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/1.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/2.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/3.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/4.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/5.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/6.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/7.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/8.jpg" }
        ],
        caption: "O segredo para uma pele firme e firmeza natural após os 30 anos! Entenda o poder dos bioestimuladores de colágeno. 💆‍♀️💎",
        strategyExplanation: "Carrossel didático focado na conscientização sobre rejuvenescimento facial sem exageros."
      },
      {
        id: 3,
        type: "carousel",
        title: "PROTOCOLOS EXCLUSIVOS DERMA BEAUTY",
        strategy: "Posicionamento Premium & Sofisticação",
        likes: "1.1K",
        comments: "92",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/1.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/2.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/3.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/4.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/5.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/6.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/7.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/8.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/9.jpg" }
        ],
        caption: "Cada pele é única e merece um plano de tratamento personalizado. Conheça nossos protocolos corporais e faciais exclusivos. ✨🥂",
        strategyExplanation: "Apresentação de catálogo de luxo reforçando a estética clean e personalizada da marca."
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
    highlights: ["Mentoria", "Resultados", "Alunos", "Estratégia"],
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
        caption: "Você sabe como eu me tornei um corretor de sucesso? Eu te conto, do absoluto zero! Do desemprego a mais de R$100 milhões em vendas. 🚀🏆",
        strategyExplanation: "Jornada do herói inspiradora voltada para recrutamento de alunos para mentoria comercial no setor imobiliário."
      },
      {
        id: 2,
        type: "carousel",
        title: "COMO FATURAR 30K POR MÊS NO MERCADO IMOBILIÁRIO",
        strategy: "Mentoria & Prospecção Imobiliária",
        likes: "3.8K",
        comments: "290",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/ERICK SHEIK/POST 2 - carrossel/1.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ERICK SHEIK/POST 2 - carrossel/2.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ERICK SHEIK/POST 2 - carrossel/3.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ERICK SHEIK/POST 2 - carrossel/4.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ERICK SHEIK/POST 2 - carrossel/5.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ERICK SHEIK/POST 2 - carrossel/6.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ERICK SHEIK/POST 2 - carrossel/7.jpg" }
        ],
        caption: "O passo a passo prático para mudar de patamar e alcançar a marca de R$ 30 mil mensais em comissões imobiliárias! 💼🔥",
        strategyExplanation: "Conteúdo denso e prático focado em corretores que buscam escala e alta produtividade."
      },
      {
        id: 3,
        type: "video",
        title: "BATEU 50K DE FATURAMENTO NO MÊS",
        strategy: "Case de Aluno & Prova Social",
        views: "89.4K",
        likes: "1.950",
        comments: "210",
        videoUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 3 - video/50k.mp4",
        posterUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 3 - video/capa-50k.jpg",
        caption: "Mais um mentorado aplicando o método e batendo R$ 50 mil em faturamento no mês! O resultado fala mais alto que qualquer discurso. 📈👊",
        strategyExplanation: "Estudo de caso curto comprovando a eficácia da mentoria na prática."
      },
      {
        id: 4,
        type: "video",
        title: "SEUS CONTEÚDOS NÃO VIRALIZAM?",
        strategy: "Estratégia de Reels & Vendas",
        views: "67.2K",
        likes: "1.420",
        comments: "185",
        videoUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 5/SEUS CONTEÚDOS NAO VIRALIZAM.mp4",
        posterUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 5/CAPA - SEUS CONTEÚDOS NAO VIRALIZAM.jpg",
        caption: "Descubra por que seus vídeos de imóveis não dão alcance e como virar a chave da atração orgânica! 📱⚡",
        strategyExplanation: "Diagnóstico direto de erros comuns cometidos por corretores no Instagram."
      },
      {
        id: 5,
        type: "video",
        title: "SUA MENTE ESTÁ PREPARADA PARA GANHAR 30K POR MÊS?",
        strategy: "Mentalidade de Vendas & Foco",
        views: "94.1K",
        likes: "2.110",
        comments: "230",
        videoUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 7/SUA MENTE ESTÁ PREPARADA PARA GANHAR 30K POR MES.mp4",
        posterUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 7/CAPA - SUA MENTE ESTÁ PREPARADA PARA GANHAR 30K POR MES.jpg",
        caption: "Vender imóveis de alto valor exige mentalidade forte e consistência inabalável. Está pronto para o próximo nível? 🧠🔥",
        strategyExplanation: "Vídeo motivacional e disciplinar para fortalecimento da autoridade do mentor."
      },
      {
        id: 6,
        type: "video",
        title: "É POSSÍVEL FATURAR VENDENDO MINHA CASA MINHA VIDA?",
        strategy: "Nichos Imobiliários & Escala",
        views: "112K",
        likes: "2.890",
        comments: "340",
        videoUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 8/É POSSÍVEL FATURAR VENDENDO MINHA CASA MINHA VIDA.mp4",
        posterUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 8/CAPA- É POSSÍVEL FATURAR VENDENDO MINHA CASA MINHA VIDA.jpg",
        caption: "Sim! O mercado econômico movimenta bilhões. Entenda como fechar volume e faturar alto no Minha Casa Minha Vida. 🏡💰",
        strategyExplanation: "Quebra de preconceito com imóveis econômicos mostrando volume financeiro real."
      },
      {
        id: 7,
        type: "video",
        title: "30 UNIDADES VENDIDAS EM 1 MÊS",
        strategy: "Lançamento Imobiliário & Recorde",
        views: "156K",
        likes: "3.650",
        comments: "410",
        videoUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 9/30 UNIDADES.mp4",
        posterUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 9/CAPA - 30 UNIDADES.jpg",
        caption: "Recorde batido! 30 unidades vendidas em apenas 30 dias com estratégia de vendas aceleradas. 🚀📊",
        strategyExplanation: "Gatilho de prova social extrema e escassez para atração de novas parcerias e construtoras."
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
    bio: "🏦 Especialista em Imóveis de Luxo e Estratégias de Investimento de Alto Impacto.",
    foco: "Elegância visual e autoridade no mercado imobiliário de alto valor.",
    avatarUrl: "/CLIENTES/Prolegado/FABIANO GOIS/logotipo-fabianogois.jpg",
    website: "fabianogois.com.br",
    highlights: ["Portfólio", "Mercado", "Investir", "Análises"],
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
        caption: "Como alcançamos o marco de R$ 11 milhões em VGV através de posicionamento estratégico e tráfego altamente segmentado. 🏛️📈",
        strategyExplanation: "Estudo de caso focado em comprovação numérica de resultados para investidores do mercado de luxo."
      },
      {
        id: 2,
        type: "carousel",
        title: "INVESTIMENTOS EM IMÓVEIS DE LUXO",
        strategy: "Estratégia Financeira & Patrimônio",
        likes: "1.450",
        comments: "112",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/FABIANO GOIS/POST 2 - carrossel/1.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/FABIANO GOIS/POST 2 - carrossel/2.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/FABIANO GOIS/POST 2 - carrossel/3.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/FABIANO GOIS/POST 2 - carrossel/4.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/FABIANO GOIS/POST 2 - carrossel/5.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/FABIANO GOIS/POST 2 - carrossel/6.jpg" }
        ],
        caption: "As diretrizes fundamentais para rentabilizar capital através do mercado imobiliário de altíssimo padrão. 💼🏰",
        strategyExplanation: "Análise analítica de valorização imobiliária para público investidor."
      },
      {
        id: 3,
        type: "video",
        title: "COMO FICAR MILIONÁRIO NO MERCADO IMOBILIÁRIO",
        strategy: "Mentalidade & Negócios de Luxo",
        views: "115K",
        likes: "2.890",
        comments: "240",
        videoUrl: "/CLIENTES/Prolegado/FABIANO GOIS/POST 3 - video/comoficarmilionario.mp4",
        posterUrl: "/CLIENTES/Prolegado/FABIANO GOIS/POST 3 - video/capa-comoficarmilionario.jpg",
        caption: "Visão estratégica e oportunidades no mercado imobiliário que constroem patrimônio sólido a longo prazo. 💎✨",
        strategyExplanation: "Conteúdo de alto impacto para prospecção de investidores de grande porte."
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
    bio: "🌸 Te ensino a eliminar até 12cm de cintura com o Método LPF sem cirurgias ou dietas malucas.",
    foco: "Transformação pessoal, estética corporal e autoestima feminina.",
    avatarUrl: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/logotipo-ohmycore.jpg",
    website: "renatavicenti.com.br",
    highlights: ["Resultados", "O que é LPF", "Alunas", "Exercícios"],
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
        caption: "Preparei com muito carinho o evento Meta Barriga Zero! Um projeto para você eliminar 12cm de cintura sem academia ou cirurgias! 🌺✨",
        strategyExplanation: "Vídeo de atração e topo de funil para cadastros no evento gratuito de LPF."
      },
      {
        id: 2,
        type: "carousel",
        title: "NÃO ACREDITE EM MIM",
        strategy: "Prova Social & Resultados LPF",
        likes: "2.150",
        comments: "168",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 2 - NÃO ACREDITE EM MIM/NÃO ACREDITE EM MIM (1).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 2 - NÃO ACREDITE EM MIM/NÃO ACREDITE EM MIM (2).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 2 - NÃO ACREDITE EM MIM/NÃO ACREDITE EM MIM (3).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 2 - NÃO ACREDITE EM MIM/NÃO ACREDITE EM MIM (4).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 2 - NÃO ACREDITE EM MIM/NÃO ACREDITE EM MIM (5).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 2 - NÃO ACREDITE EM MIM/NÃO ACREDITE EM MIM (6).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 2 - NÃO ACREDITE EM MIM/NÃO ACREDITE EM MIM (7).jpg" }
        ],
        caption: "Não acredite no que eu digo, veja com seus próprios olhos os antes e depois reais das nossas alunas com o LPF! 💖💥",
        strategyExplanation: "Carrossel chocante de prova social quebrando objeções de ceticismo."
      },
      {
        id: 3,
        type: "carousel",
        title: "META BARRIGA ZERO",
        strategy: "Método LPF de Cintura",
        likes: "3.420",
        comments: "245",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 3 - META BARRIGA ZERO/1.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 3 - META BARRIGA ZERO/2.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 3 - META BARRIGA ZERO/3.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 3 - META BARRIGA ZERO/4.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 3 - META BARRIGA ZERO/5.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 3 - META BARRIGA ZERO/6.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 3 - META BARRIGA ZERO/7.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 3 - META BARRIGA ZERO/8.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 3 - META BARRIGA ZERO/9.jpg" }
        ],
        caption: "Tudo o que você precisa entender sobre reposicionamento de órgãos e redução de medidas abdominais sem dor! 💃🏼🌱",
        strategyExplanation: "Conteúdo educativo detalhando a ciência por trás do hipopressivo."
      },
      {
        id: 4,
        type: "carousel",
        title: "TE ENSINO A PERDER 12 CM DE CINTURA",
        strategy: "Técnica Hipopressiva & Passo a Passo",
        likes: "4.100",
        comments: "310",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/Nova pasta/TE ENSINO A PERDER 12 CM DE CINTURA (1).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/Nova pasta/TE ENSINO A PERDER 12 CM DE CINTURA (2).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/Nova pasta/TE ENSINO A PERDER 12 CM DE CINTURA (3).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/Nova pasta/TE ENSINO A PERDER 12 CM DE CINTURA (4).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/Nova pasta/TE ENSINO A PERDER 12 CM DE CINTURA (5).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/Nova pasta/TE ENSINO A PERDER 12 CM DE CINTURA (6).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/Nova pasta/TE ENSINO A PERDER 12 CM DE CINTURA (7).jpg" }
        ],
        caption: "A postura correta faz milagres pela sua silhueta! Venha aprender como ativar o transverso do abdômen diariamente. ✨🔥",
        strategyExplanation: "Guia prático visual de posicionamento postural."
      },
      {
        id: 5,
        type: "carousel",
        title: "POSTURA E CORE SAUDÁVEL",
        strategy: "Saúde Corporal Feminina",
        likes: "1.890",
        comments: "142",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/1.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/2.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/3.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/4.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/5.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/6.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/7.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/8.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/9.png" }
        ],
        caption: "Melhore suas dores nas costas e fortaleça o assoalho pélvico com a prática constante do método LPF. 🌸💗",
        strategyExplanation: "Abordagem focada em saúde e bem-estar para atrair clientes preocupadas com qualidade de vida."
      }
    ]
  }
];

const CMS_STORAGE_KEY = "portfolio_cms_data_v4";

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

  // Global Shortcut Detector: Ctrl + V + I (ou Cmd + V + I no Mac)
  useEffect(() => {
    const keysDown = new Set<string>();
    let lastV = 0;
    let lastI = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      keysDown.add(key);

      const now = Date.now();
      const hasCtrl = e.ctrlKey || e.metaKey || keysDown.has("control") || keysDown.has("meta");

      if (key === "v") lastV = now;
      if (key === "i") lastI = now;

      // Opção 1: Segurando Ctrl e pressionou V + I no conjunto
      const hasAllThree = hasCtrl && keysDown.has("v") && keysDown.has("i");
      
      // Opção 2: Pressionou V e depois I (ou I e depois V) em até 1.5s segurando Ctrl
      const isSequence = hasCtrl && (now - lastV < 1500) && (now - lastI < 1500);

      // Opção 3: Tecla de atalho alternativa padrão Ctrl + Shift + I ou Ctrl + Shift + V
      const isAltShortcut = (e.ctrlKey || e.metaKey) && e.shiftKey && (key === "i" || key === "v");

      if (hasAllThree || isSequence || isAltShortcut) {
        e.preventDefault();
        e.stopPropagation();
        setIsAdminOpen((prev) => !prev);
        keysDown.clear();
        lastV = 0;
        lastI = 0;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      keysDown.delete(key);
    };

    window.addEventListener("keydown", handleKeyDown, true);
    window.addEventListener("keyup", handleKeyUp, true);
    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
      window.removeEventListener("keyup", handleKeyUp, true);
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
          const nextId = c.posts.length > 0 ? Math.max(...c.posts.map((p) => p.id)) + 1 : 1;
          return {
            ...c,
            posts: [{ ...newPost, id: nextId }, ...c.posts],
          };
        }
        return c;
      })
    );
  };

  const updatePost = (clientId: string, postId: number, updatedFields: Partial<PostItem>) => {
    setClients((prev) =>
      prev.map((c) => {
        if (c.id === clientId) {
          return {
            ...c,
            posts: c.posts.map((p) => (p.id === postId ? { ...p, ...updatedFields } : p)),
          };
        }
        return c;
      })
    );
  };

  const deletePost = (clientId: string, postId: number) => {
    setClients((prev) =>
      prev.map((c) => {
        if (c.id === clientId) {
          return {
            ...c,
            posts: c.posts.filter((p) => p.id !== postId),
          };
        }
        return c;
      })
    );
  };

  const resetToDefaults = () => {
    setClients(DEFAULT_CLIENTS);
    if (typeof window !== "undefined") {
      localStorage.removeItem(CMS_STORAGE_KEY);
    }
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
    throw new Error("usePortfolioCMS deve ser usado dentro de um PortfolioCMSProvider");
  }
  return context;
}
