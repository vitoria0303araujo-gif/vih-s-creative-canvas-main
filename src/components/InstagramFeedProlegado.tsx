import { usePortfolioCMS, ClientProfile, PostItem } from "@/contexts/PortfolioCMSContext";
import { FileText, Lightbulb } from "lucide-react";
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
  Link as LinkIcon,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  MoveVertical,
  CheckCheck,
  ArrowLeftRight,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import { useCoverPosition } from "@/hooks/useCoverPosition";
import { usePostOrder } from "@/hooks/usePostOrder";





const CLIENTS_DATA: ClientProfile[] = [
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
        caption: `💚🌿 Conheça a história por trás de uma das melhores lojas de produtos naturais de Alagoas, o Armazém Anandda 🙌\n\nNossa fundadora, Leila Amanda, compartilha sua jornada pessoal de bem-estar e paixão pela alimentação natural, que a levou a criar o Armazém Anandda em 2019. Aqui, nossa missão é promover saúde e respeito ao meio ambiente, oferecendo uma variedade de produtos naturais e sustentáveis. 🌍💪\n\n#armazemanandda #produtosnaturais #maceio #alagoas`
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
        caption: `Que alegria foi a inauguração da nossa nova loja de produtos naturais na Massagueira. 🥰💚\n\nCada sorriso, cada abraço e cada palavra de carinho que recebemos tornaram esse momento ainda mais especial e inesquecível. 🙏❤️`
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
        caption: `📍🌱 Você já conhece o nosso cantinho de produtos naturais aqui em Maceió?\n\nO Armazém Anandda fica na Rua Deputado José Lages, Ponta Verde! Alimentos sem glúten, sem lactose, cosméticos e suplementos. 🥦🍎`
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
        instagramUrl: "https://www.instagram.com/reel/C7fHvD-Pp4j/",
        caption: `Temos Novidades no Ar! 💚\nO Armazém Anandda renovou a identidade visual para trazer mais vibração e credibilidade à marca que você já ama! 💖`
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
        caption: `Os preparativos para a grande abertura estão a todo vapor! Bastidores exclusivos da preparação da nossa nova unidade. ✨🌱`
      },
      {
        id: 6,
        type: "video",
        title: "GRANDE INAUGURAÇÃO ANANDDA",
        strategy: "Evento & Cobertura",
        views: "45.2K",
        likes: "512",
        comments: "45",
        videoUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 6/06. inauguração.mp4",
        posterUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 6/06. capa-inauguração.jpg",
        caption: `Dia inesquecível de celebração e saúde! Abrimos as portas para receber cada um de vocês em um espaço feito com muito amor. 🎉💚`
      },
      {
        id: 7,
        type: "video",
        title: "TOUR COMPLETO PELA LOJA",
        strategy: "Apresentação de Loja",
        views: "18.6K",
        likes: "290",
        comments: "19",
        videoUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 7/07. tour-inauguração.mp4",
        posterUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 7/07. capa-tour-inauguração.jpg",
        caption: `Venha fazer um tour guiado pelas prateleiras recheadas do Armazém Anandda. Produtos a granel, marcas exclusivas e atendimento afetivo. 🌾✨`
      },
      {
        id: 8,
        type: "video",
        title: "TUDO SOBRE DOENÇA CELÍACA",
        strategy: "Educação & Autoridade",
        views: "9.8K",
        likes: "165",
        comments: "14",
        videoUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 8/08. doença-celiaca.mov",
        posterUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 8/08. capa-doença-celiaca.png",
        caption: `Informação essencial sobre alimentação sem glúten e cuidados para celíacos. Tudo o que você precisa saber para viver bem. 🌾🚫`
      },
      {
        id: 9,
        type: "video",
        title: "COBERTURA DA NATURALTECH",
        strategy: "Feiras & Tendências",
        views: "7.2K",
        likes: "142",
        comments: "8",
        videoUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 9/naturaltech.mp4",
        posterUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 9/capa-naturaltech.jpg",
        caption: `Acompanhe nossa equipe buscando os lançamentos mais saudáveis na Naturaltech para trazer em primeira mão para Alagoas! ✈️🌱`
      },
      {
        id: 10,
        type: "video",
        title: "OPÇÕES E PRODUTOS VEGANOS",
        strategy: "Linha de Produtos",
        views: "11.5K",
        likes: "198",
        comments: "11",
        videoUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 10/produtos-veganos.mp4",
        posterUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 10/capa-produtos-veganos.jpg",
        caption: `Variedade incrível de produtos 100% livres de origem animal. Alimentação consciente e saborosa! 🌱💚`
      },
      {
        id: 11,
        type: "carousel",
        title: "NOSSO JEITO DE SER ANANDDA",
        strategy: "Cultura de Marca",
        likes: "210",
        comments: "15",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 11/1.  nosso-jeito-de-ser (1).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 11/1.  nosso-jeito-de-ser (2).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 11/1.  nosso-jeito-de-ser (3).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 11/1.  nosso-jeito-de-ser (4).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 11/1.  nosso-jeito-de-ser (5).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 11/1.  nosso-jeito-de-ser (6).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 11/1.  nosso-jeito-de-ser (7).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 11/1.  nosso-jeito-de-ser (8).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 11/1.  nosso-jeito-de-ser (9).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 11/1.  nosso-jeito-de-ser (10).jpg" },
        ],
        caption: `Conheça os pilares que guiam a essência do Armazém Anandda em cada atendimento e escolha de produto.`
      },
      {
        id: 12,
        type: "carousel",
        title: "O QUE É CONTAMINAÇÃO CRUZADA?",
        strategy: "Educação & Alerta",
        likes: "340",
        comments: "28",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 12/contaminação-cruzada (1).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 12/contaminação-cruzada (2).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 12/contaminação-cruzada (3).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 12/contaminação-cruzada (4).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 12/contaminação-cruzada (5).jpg" },
        ],
        caption: `Carrossel educativo abordando o risco da contaminação cruzada para alérgicos e intolerantes a glúten.`
      },
      {
        id: 13,
        type: "video",
        title: "DEPOIMENTO WENDY BARBOSA",
        strategy: "Prova Social",
        views: "6.8K",
        likes: "175",
        comments: "9",
        videoUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 13/13. Wendy Barbosa.mp4",
        posterUrl: "/CLIENTES/Prolegado/ARMAZÉM ANANDDA/POST 13/13. capa-Wendy Barbosa.jpg",
        caption: `História emocionante de cliente que transformou a saúde e qualidade de vida no Armazém Anandda. 💚`
      }
    ]
  },
  {
    id: "academia-de-estudos",
    name: "Academia de Estudos",
    username: "academiadeestudosereforcos",
    subtitle: "Reforço Escolar Neuropedagógico",
    followersCount: "5,8k",
    postsCount: "94",
    followingCount: "210",
    verified: false,
    bio: "🎓 O Melhor Reforço Escolar de Maceió | 🧠 Método Neuropsicopedagógico | Acompanhamento Individualizado",
    foco: "Comunicação empática voltada para pais que buscam excelência acadêmica.",
    avatarUrl: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/logotipo-academiadeestudosereforços.jpg",
    isAvatarPdf: false,
    website: "academiadeestudos.com.br",
    highlights: ["Método", "Depoimentos", "Horários", "Estrutura"],
    posts: [
      {
        id: 1,
        type: "carousel",
        title: "CONHEÇA NOSSO MÉTODO TRANSCENDER",
        strategy: "Apresentação de Metodologia",
        likes: "145",
        comments: "18",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/1.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/2.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/3.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/4.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/5.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/6.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/7.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/8.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 1 - carrossel/9.jpg" },
        ],
        caption: `E se você pudesse garantir que seu filho tivesse as ferramentas certas para ir além? 🦋\n\nCriamos o Método Transcender, inspirado na evolução da borboleta, para ajudar crianças e jovens a atingirem todo o seu potencial! 📚✅`
      },
      {
        id: 2,
        type: "carousel",
        title: "O MELHOR REFORÇO ESCOLAR DE MACEIÓ",
        strategy: "Institucional & Diferenciais",
        likes: "190",
        comments: "24",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 2 - carrossel/1.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 2 - carrossel/2.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 2 - carrossel/3.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 2 - carrossel/4.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 2 - carrossel/5.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 2 - carrossel/6.png" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 2 - carrossel/7.png" },
        ],
        caption: `Você sabia que o acompanhamento certo pode transformar a trajetória educacional do seu filho? 💡\n\nAtendimento personalizado, método neuropsicopedagógico e relatórios de progresso contínuos.`
      },
      {
        id: 3,
        type: "carousel",
        title: "DEPOIMENTOS DE PAIS E ALUNOS",
        strategy: "Prova Social Dinâmica",
        likes: "310",
        comments: "42",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 3 - carrossel com videos/1.png" },
          { type: "video", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 3 - carrossel com videos/2.mp4" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 3 - carrossel com videos/3.png" },
          { type: "video", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 3 - carrossel com videos/4.mp4" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 3 - carrossel com videos/5.png" },
          { type: "video", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 3 - carrossel com videos/6.mp4" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 3 - carrossel com videos/7.png" },
        ],
        caption: `Descubra o que os nossos pais têm a dizer sobre nós! Cada família é parte fundamental da história da Academia. 💜👨‍👩‍👦`
      },
      {
        id: 4,
        type: "video",
        title: "PROCURANDO O REFORÇO IDEAL?",
        strategy: "Captação & Convite",
        views: "8.4K",
        likes: "178",
        comments: "15",
        videoUrl: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 4/VOCE ESTÁ PROCURANDO UM REFORÇO PARA O SEU FILHO.mp4",
        posterUrl: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 4/CAPA-VOCE ESTÁ PROCURANDO UM REFORÇO PARA O SEU FILHO.jpg",
        caption: `Está procurando o reforço ideal para o seu filho? Acreditamos no potencial único de cada criança com métodos leves e estimulantes. 🎯✨`
      },
      {
        id: 5,
        type: "carousel",
        title: "COMO INCENTIVAR SEU FILHO A ESTUDAR",
        strategy: "Educação Parental",
        likes: "240",
        comments: "31",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 5/MANEIRA CERTA DE INCENTIVAR OS FILHOS (1).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 5/MANEIRA CERTA DE INCENTIVAR OS FILHOS (2).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 5/MANEIRA CERTA DE INCENTIVAR OS FILHOS (3).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 5/MANEIRA CERTA DE INCENTIVAR OS FILHOS (4).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 5/MANEIRA CERTA DE INCENTIVAR OS FILHOS (5).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 5/MANEIRA CERTA DE INCENTIVAR OS FILHOS (6).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 5/MANEIRA CERTA DE INCENTIVAR OS FILHOS (7).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 5/MANEIRA CERTA DE INCENTIVAR OS FILHOS (8).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 5/MANEIRA CERTA DE INCENTIVAR OS FILHOS (9).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 5/MANEIRA CERTA DE INCENTIVAR OS FILHOS (10).jpg" },
        ],
        caption: `Dicas valiosas de como incentivar os estudos de forma leve e saudável, criando rotina e autonomia.`
      },
      {
        id: 6,
        type: "carousel",
        title: "PRIMEIRO PASSO PARA A TRANSFORMAÇÃO",
        strategy: "Conversão & Onboarding",
        likes: "165",
        comments: "19",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 6/PRIMEIRO PASSO (1).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 6/PRIMEIRO PASSO (2).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 6/PRIMEIRO PASSO (3).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 6/PRIMEIRO PASSO (4).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 6/PRIMEIRO PASSO (5).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS/POST 6/PRIMEIRO PASSO (6).jpg" },
        ],
        caption: `Passo a passo simples de como agendar uma avaliação psicopedagógica para o seu filho na Academia.`
      }
    ]
  },
  {
    id: "derma-beauty",
    name: "Derma Beauty",
    username: "dermabeauty.uk",
    subtitle: "Clínica de Estética & Rejuvenescimento",
    followersCount: "4,2k",
    postsCount: "68",
    followingCount: "180",
    verified: false,
    bio: "✨ Advanced Aesthetic Treatments | 💖 Rejuvenation & Skin Boosters | London & UK",
    foco: "Posicionamento internacional sofisticado em português e inglês.",
    avatarUrl: "/CLIENTES/Prolegado/DERMA BEAUTY/logotipo-dermabeauty.jpg",
    isAvatarPdf: false,
    website: "dermabeauty.co.uk",
    highlights: ["Treatments", "Before/After", "Reviews", "Clinic"],
    posts: [
      {
        id: 1,
        type: "video",
        title: "HISTÓRIA DA DERMA BEAUTY",
        strategy: "Storytelling & Fundadores",
        views: "6.2K",
        likes: "185",
        comments: "22",
        videoUrl: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 1/historia-dermabeauty.mp4",
        posterUrl: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 1/capa-historia-dermabeauty.png",
        instagramUrl: "https://www.instagram.com/p/DCR95napUYc/",
        caption: `Você já pensou no que realmente te faz sentir bonita? Fundada em 2021, a Derma Beauty nasceu para transformar vidas e elevar a autoconfiança. ✨💖`
      },
      {
        id: 2,
        type: "carousel",
        title: "DESCUBRA NOSSOS TRATAMENTOS",
        strategy: "Menu de Serviços",
        likes: "210",
        comments: "35",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/1.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/2.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/3.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/4.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/5.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/6.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/7.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 2 - carrossel/8.jpg" },
        ],
        caption: `Meus tratamentos estéticos especializados oferecem cuidados personalizados para você conquistar uma pele radiante e rejuvenescida da cabeça aos pés. 🌸`
      },
      {
        id: 3,
        type: "carousel",
        title: "RESULTADOS QUE ENCANTAM - FEEDBACKS",
        strategy: "Prova Social & Depoimentos",
        likes: "290",
        comments: "48",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/1.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/2.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/3.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/4.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/5.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/6.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/7.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/8.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/DERMA BEAUTY/POST 3 - carrossel/9.jpg" },
        ],
        caption: `Na nossa clínica, cada tratamento é pensado para realçar a beleza única de cada pessoa com resultados naturais e duradouros. 💖`
      }
    ]
  },
  {
    id: "erick-sheik",
    name: "Erick Sheik",
    username: "erick.sheik",
    subtitle: "Mentoria Imobiliária & Minha Casa Minha Vida",
    followersCount: "42,8k",
    postsCount: "312",
    followingCount: "520",
    verified: true,
    bio: "🏢 Mentor de Corretores de Sucesso | 🏆 +300 Milhões em Vendas | Ensinando a Faturar 30K/Mês no Imobiliário",
    foco: "Autoridade agressiva de vendas e quebra de objeções para corretores.",
    avatarUrl: "/CLIENTES/Prolegado/ERICK SHEIK/logotipo-ericksheik.jpg",
    isAvatarPdf: false,
    website: "ericksheik.com.br",
    highlights: ["Mentoria", "Casos 30K", "Aulas", "Resultados"],
    posts: [
      {
        id: 1,
        type: "video",
        title: "COMO ME TORNEI UM CORRETOR DE SUCESSO",
        strategy: "Storytelling & Superação",
        views: "47.8K",
        likes: "928",
        comments: "350",
        videoUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 1 - video/historia-sheik.mp4",
        posterUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 1 - video/capa-historia-sheik.jpg",
        instagramUrl: "https://www.instagram.com/p/DAowQLIppqN/",
        caption: `Você sabe como eu me tornei um corretor de sucesso? Eu te conto, do absoluto zero! Do desemprego em 2012 a mais de R$100 milhões em vendas em 2024. 🚀`
      },
      {
        id: 2,
        type: "carousel",
        title: "FATURANDO 30K POR MÊS COM IMÓVEIS",
        strategy: "Metodologia Comercial",
        likes: "66",
        comments: "22",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/ERICK SHEIK/POST 2 - carrossel/30K POR MES (1).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ERICK SHEIK/POST 2 - carrossel/30K POR MES (2).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ERICK SHEIK/POST 2 - carrossel/30K POR MES (3).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ERICK SHEIK/POST 2 - carrossel/30K POR MES (4).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ERICK SHEIK/POST 2 - carrossel/30K POR MES (5).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ERICK SHEIK/POST 2 - carrossel/30K POR MES (6).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/ERICK SHEIK/POST 2 - carrossel/30K POR MES (7).jpg" },
        ],
        caption: `Quer saber como faturar R$ 30K por mês vendendo imóveis Minha Casa Minha Vida sem experiência prévia? Passo a passo completo.`
      },
      {
        id: 3,
        type: "video",
        title: "COMO ELA CHEGOU A FATURAR +50K NO MÊS",
        strategy: "Estudo de Caso Aluno",
        views: "5.2K",
        likes: "109",
        comments: "6",
        videoUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 3 - video/50k.mp4",
        posterUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 3 - video/capa-50k.jpg",
        caption: `Conheça a transformação da @amayaimob: de manicure faturando R$2 mil para o topo do mercado imobiliário faturando R$80 mil em um único mês! 💰`
      },
      {
        id: 4,
        type: "carousel",
        title: "MENTALIDADE DE ALTO IMPACTO",
        strategy: "Mindset & Motivação",
        likes: "140",
        comments: "18",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/ERICK SHEIK/POST 4/04. MENTALIDADE.jpg" }
        ],
        caption: `Corretor de Imóveis, você já tem MENTALIDADE para faturar 30K por mês? Descubra o que separa quem bate metas de quem fica pelo caminho.`
      },
      {
        id: 5,
        type: "video",
        title: "POR QUE SEUS CONTEÚDOS NÃO VIRALIZAM?",
        strategy: "Quebra de Objeções",
        views: "18.5K",
        likes: "310",
        comments: "45",
        videoUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 5/SEUS CONTEÚDOS NAO VIRALIZAM.mp4",
        posterUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 5/CAPA - SEUS CONTEÚDOS NAO VIRALIZAM.jpg",
        caption: `Entenda o erro crucial de comunicação que impede corretores de atraírem compradores qualificados nas redes sociais. 🔥`
      },
      {
        id: 6,
        type: "video",
        title: "ESTRATÉGIA DE MARKETING IMOBILIÁRIO",
        strategy: "Estratégia de Captação",
        views: "12.1K",
        likes: "220",
        comments: "30",
        videoUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 6/CAPA - ESTRATEGIA DE MARKETING.mp4",
        posterUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 6/ESTRATÉGIA DE MARKETING.jpg",
        caption: `Estrutura de funil de vendas simples para gerar leads quentes todos os dias para corretores de imóveis.`
      },
      {
        id: 7,
        type: "video",
        title: "SUA MENTE ESTÁ PREPARADA PARA GANHAR 30K?",
        strategy: "Desafio & Convite",
        views: "28.4K",
        likes: "480",
        comments: "62",
        videoUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 7/SUA MENTE ESTÁ PREPARADA PARA GANHAR 30K POR MES.mp4",
        posterUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 7/CAPA - SUA MENTE ESTÁ PREPARADA PARA GANHAR 30K POR MES.jpg",
        caption: `A virada de chave que você precisa dar hoje para mudar de patamar financeiro no mercado imobiliário.`
      },
      {
        id: 8,
        type: "video",
        title: "É POSSÍVEL FATURAR COM MINHA CASA MINHA VIDA",
        strategy: "Educação de Nicho",
        views: "22.8K",
        likes: "390",
        comments: "51",
        videoUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 8/É POSSÍVEL FATURAR VENDENDO MINHA CASA MINHA VIDA.mp4",
        posterUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 8/CAPA- É POSSÍVEL FATURAR VENDENDO MINHA CASA MINHA VIDA.jpg",
        caption: `Desmistificando o nicho mais rentável e previsível do mercado imobiliário brasileiro.`
      },
      {
        id: 9,
        type: "video",
        title: "COMO VENDER 30 UNIDADES EM UM MÊS",
        strategy: "Aceleração de Vendas",
        views: "34.1K",
        likes: "540",
        comments: "78",
        videoUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 9/30 UNIDADES.mp4",
        posterUrl: "/CLIENTES/Prolegado/ERICK SHEIK/POST 9/CAPA - 30 UNIDADES.jpg",
        caption: `Estrutura de equipe e execução comercial para fechar lançamentos imobiliários recordes.`
      }
    ]
  },
  {
    id: "fabiano-gois",
    name: "Fabiano Gois",
    username: "fabianogois.imoveis",
    subtitle: "Consultoria Imobiliária de Alto Padrão",
    followersCount: "14,5k",
    postsCount: "140",
    followingCount: "380",
    verified: false,
    bio: "🏡 Imóveis de Luxo & Investimentos Seguros | 💼 R$ 11M+ em Vendas Geradas | Maceió & Região",
    foco: "Elegância visual e autoridade no mercado imobiliário de alto valor.",
    avatarUrl: "/CLIENTES/Prolegado/FABIANO GOIS/logotipo-fabianogois.jpg",
    isAvatarPdf: false,
    website: "fabianogois.com.br",
    highlights: ["Imóveis", "Casos 11M", "Investimentos"],
    posts: [
      {
        id: 1,
        type: "video",
        title: "COMO VENDEMOS R$ 11 MILHÕES EM IMÓVEIS",
        strategy: "Case de Sucesso & Autoridade",
        views: "9.5K",
        likes: "66",
        comments: "22",
        videoUrl: "/CLIENTES/Prolegado/FABIANO GOIS/POST 1 - video/11milhoes.mp4",
        posterUrl: "/CLIENTES/Prolegado/FABIANO GOIS/POST 1 - video/capa-11milhoes.jpg",
        caption: `Como alcançamos o marco de R$ 11 milhões em VGV através de posicionamento estratégico e tráfego altamente segmentado.`
      },
      {
        id: 2,
        type: "carousel",
        title: "ESTRATÉGIA DE VENDAS DE ALTO VALOR",
        strategy: "Estratégia de Posicionamento",
        likes: "88",
        comments: "14",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/FABIANO GOIS/POST 2 - carrossel/1.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/FABIANO GOIS/POST 2 - carrossel/2.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/FABIANO GOIS/POST 2 - carrossel/3.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/FABIANO GOIS/POST 2 - carrossel/4.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/FABIANO GOIS/POST 2 - carrossel/5.jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/FABIANO GOIS/POST 2 - carrossel/6.jpg" },
        ],
        caption: `Os pilares fundamentais para atrair investidores e compradores de imóveis de luxo com alta taxa de conversão.`
      },
      {
        id: 3,
        type: "video",
        title: "COMO FICAR MILIONÁRIO NO MERCADO IMOBILIÁRIO",
        strategy: "Educação de Investimento",
        views: "14.2K",
        likes: "145",
        comments: "28",
        videoUrl: "/CLIENTES/Prolegado/FABIANO GOIS/POST 3 - video/comoficarmilionario.mp4",
        posterUrl: "/CLIENTES/Prolegado/FABIANO GOIS/POST 3 - video/capa-comoficarmilionario.jpg",
        caption: `Estratégia de investimento imobiliário focada em valorização de ativos e rentabilidade de longo prazo.`
      }
    ]
  },
  {
    id: "oh-my-core",
    name: "Oh My Core",
    username: "renatavicentini.lpf",
    subtitle: "Método Barriga Zero & LPF",
    followersCount: "21,3k",
    postsCount: "205",
    followingCount: "410",
    verified: false,
    bio: "🧘‍♀️ Método Barriga Zero | ✨ Perca até 12cm de Cintura sem Cirurgia | LPF & Saúde Feminina",
    foco: "Transformação pessoal, estética corporal e autoestima feminina.",
    avatarUrl: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/logotipo-ohmycore.jpg",
    isAvatarPdf: false,
    website: "renatavicentini.com.br",
    highlights: ["Depoimentos", "LPF", "Resultados", "Desafio"],
    posts: [
      {
        id: 1,
        type: "video",
        title: "TE ENSINO A PERDER 12CM DE CINTURA",
        strategy: "Captação & Lançamento",
        views: "18.9K",
        likes: "190",
        comments: "150",
        videoUrl: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 1 - Quem é RENATA VICENTINI/historia.mp4",
        posterUrl: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 1 - Quem é RENATA VICENTINI/capa-historia.jpg",
        caption: `Preparei com muito carinho o evento “Meta Barriga Zero”! Um projeto para você eliminar 12cm de cintura sem academia, cirurgia ou dietas restritas! 💖`
      },
      {
        id: 2,
        type: "carousel",
        title: "RESULTADOS REAIS DO MÉTODO BARRIGA ZERO",
        strategy: "Antes & Depois / Prova Social",
        likes: "240",
        comments: "38",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/1.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/2.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/3.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/4.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/5.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/6.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/7.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/8.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/9.png" },
        ],
        caption: `Transformações incríveis de alunas reais que recuperaram a autoestima e alinharam a postura com o método LPF.`
      },
      {
        id: 3,
        type: "carousel",
        title: "NÃO ACREDITE EM MIM: VEJA OS DEPOIMENTOS",
        strategy: "Depoimentos Reais",
        likes: "310",
        comments: "52",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 2 - NÃO ACREDITE EM MIM/NÃO ACREDITE EM MIM (1).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 2 - NÃO ACREDITE EM MIM/NÃO ACREDITE EM MIM (2).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 2 - NÃO ACREDITE EM MIM/NÃO ACREDITE EM MIM (3).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 2 - NÃO ACREDITE EM MIM/NÃO ACREDITE EM MIM (4).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 2 - NÃO ACREDITE EM MIM/NÃO ACREDITE EM MIM (5).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 2 - NÃO ACREDITE EM MIM/NÃO ACREDITE EM MIM (6).jpg" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 2 - NÃO ACREDITE EM MIM/NÃO ACREDITE EM MIM (7).jpg" },
        ],
        caption: `Mensagens emocionantes de mulheres que redescobriram o bem-estar e a confiança no próprio corpo.`
      },
      {
        id: 4,
        type: "video",
        title: "COMO O VÁCUO ABDOMINAL TRANSFORMA SUA CINTURA",
        strategy: "Educação Técnica",
        views: "11.4K",
        likes: "175",
        comments: "29",
        videoUrl: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 1 - Quem é RENATA VICENTINI/historia.mp4",
        posterUrl: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 1 - Quem é RENATA VICENTINI/capa-historia.jpg",
        caption: `A ciência por trás do vácuo abdominal e por que ele ativa a musculatura profunda do core.`
      },
      {
        id: 5,
        type: "carousel",
        title: "DESAFIO BARRIGA ZERO EM CASA",
        strategy: "Desafio Interativo",
        likes: "280",
        comments: "41",
        carouselMedia: [
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/1.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/2.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/3.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/4.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/5.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/6.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/7.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/8.png" },
          { type: "image", url: "/CLIENTES/Prolegado/OH MY CORE - RENATA VICENTINI/POST 5 - carrossel/9.png" },
        ],
        caption: `Passo a passo com rotina diária de 5 minutos de LPF para praticar em casa.`
      }
    ]
  }
];

export default function InstagramFeedProlegado() {
  const [activeClient, setActiveClient] = useState<ClientProfile>(CLIENTS_DATA[0]);
  const [selectedPost, setSelectedPost] = useState<PostItem | null>(null);
  const [modalTab, setModalTab] = useState<"caption" | "strategy">("caption");
  const { clients, activeClientId, setActiveClientId, getClient } = usePortfolioCMS();
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  // Hook de ajuste vertical de capa por 4 cliques
  const {
    editingPostId,
    setEditingPostId,
    updatePosition,
    handlePostClick,
    getObjectPosition,
    positions,
  } = useCoverPosition();

  // Hook de reordenação por 2 cliques com botão direito
  const {
    orderedPosts,
    swappingPostId,
    setSwappingPostId,
    swapPosts,
    movePostStep,
    handleContextMenu,
  } = usePostOrder(activeClient.id, activeClient.posts);

  // Ref para o scroll continuo do carrossel no modal
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = (post: PostItem) => {
    setSelectedPost(post);
    setCarouselIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  const scrollToSlide = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const slideWidth = container.clientWidth;
    container.scrollTo({
      left: index * slideWidth,
      behavior: "smooth",
    });
    setCarouselIndex(index);
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const slideWidth = container.clientWidth;
    if (slideWidth === 0) return;
    const newIdx = Math.round(container.scrollLeft / slideWidth);
    if (newIdx !== carouselIndex) {
      setCarouselIndex(newIdx);
    }
  };

  return (
    <div className="mt-12 w-full font-sans">
      {/* SELETOR DE CLIENTES DO GRUPO PROLEGADO */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
            Clientes Atendidos via Grupo Prolegado ({CLIENTS_DATA.length})
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {(clients && clients.length > 0 ? clients.filter(c => c.id !== "4uviagens" && c.id !== "qviagem") : CLIENTS_DATA).map((client) => {
            const isActive = client.id === activeClient.id;
            return (
              <button
                key={client.id}
                onClick={() => setActiveClient(client)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-background text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                <img
                  src={client.avatarUrl}
                  alt={client.name}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span>{client.name}</span>
                <span className="text-[10px] opacity-75 font-mono">({client.posts.length})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* CABEÇALHO ESTILO INSTAGRAM DO CLIENTE SELECIONADO */}
      <div className="bg-card text-card-foreground border border-border rounded-2xl p-6 md:p-8 shadow-xl mb-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Avatar do Perfil */}
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 shadow-lg">
              <img
                src={activeClient.avatarUrl}
                alt={activeClient.name}
                className="w-full h-full object-cover rounded-full border-2 border-background"
              />
            </div>
            {activeClient.verified && (
              <span className="absolute bottom-1 right-1 bg-primary text-primary-foreground p-1 rounded-full shadow">
                <Check className="w-3.5 h-3.5" />
              </span>
            )}
          </div>

          {/* Dados e Bio */}
          <div className="flex-1 text-center md:text-left space-y-3">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <h3 className="text-xl font-bold tracking-tight text-foreground flex items-center justify-center md:justify-start gap-2">
                @{activeClient.username}
                {activeClient.verified && <Check className="w-4 h-4 text-blue-500 fill-blue-500/20" />}
              </h3>
              <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium w-fit mx-auto md:mx-0">
                {activeClient.subtitle}
              </span>
            </div>

            <div className="flex justify-center md:justify-start gap-6 text-xs text-muted-foreground">
              <div>
                <strong className="text-foreground text-sm font-bold">{orderedPosts.length}</strong> publicações
              </div>
              <div>
                <strong className="text-foreground text-sm font-bold">{activeClient.followersCount}</strong> seguidores
              </div>
              <div>
                <strong className="text-foreground text-sm font-bold">{activeClient.followingCount}</strong> seguindo
              </div>
            </div>

            <p className="text-xs text-muted-foreground max-w-xl leading-relaxed whitespace-pre-line">
              {activeClient.bio}
            </p>

            <div className="pt-1 text-[11px] text-muted-foreground italic border-t border-border/50">
              <strong className="text-foreground font-semibold">Foco da Estratégia:</strong> {activeClient.foco}
            </div>
          </div>
        </div>
      </div>

      {/* GRADE 3X3 DE POSTS DO CLIENTE */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {orderedPosts.map((post) => {
          const isVideo = post.type === "video";
          const cover = post.posterUrl || (post.carouselMedia && post.carouselMedia[0]?.url) || "";
          const pIdKey = `${activeClient.id}-${post.id}`;
          const isEditingThisCover = editingPostId === pIdKey;
          const isSwappingThisPost = swappingPostId === post.id;
          const currentY = positions[pIdKey] ?? 50;

          return (
            <div
              key={post.id}
              onClick={() => {
                if (swappingPostId !== null && swappingPostId !== post.id) {
                  // Se a reordenação está ativa em outro post, clica neste para trocar as posições!
                  swapPosts(swappingPostId, post.id);
                  setSwappingPostId(null);
                  return;
                }
                if (!isEditingThisCover) {
                  handlePostClick(pIdKey, () => handleOpenModal(post));
                }
              }}
              onContextMenu={(e) => handleContextMenu(e, post.id)}
              className={`group relative aspect-square bg-muted rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 border ${
                isSwappingThisPost
                  ? "border-2 border-amber-400 shadow-xl scale-[1.02] z-20"
                  : "border-border/40"
              }`}
            >
              <img
                src={cover}
                alt={post.title}
                className="w-full h-full object-cover transition-all duration-300"
                style={{ objectPosition: getObjectPosition(pIdKey) }}
                loading="lazy"
              />

              {/* Badges de Tipo (Limpos sem borda ou riscos pretos) */}
              <div className="absolute top-2 right-2 z-10 pointer-events-none flex items-center">
                {isVideo ? (
                  <span className="w-6.5 h-6.5 rounded-lg bg-black/75 backdrop-blur-md text-white flex items-center justify-center shadow-md overflow-hidden border-0">
                    <Play className="w-3.5 h-3.5 fill-white text-white shrink-0 stroke-0 translate-x-[0.5px]" />
                  </span>
                ) : (
                  <span className="h-6.5 px-2 rounded-lg bg-black/75 backdrop-blur-md text-white text-[10px] font-bold flex items-center justify-center shadow-md overflow-hidden border-0">
                    {post.carouselMedia?.length || "1"} slides
                  </span>
                )}
              </div>

              {/* PAINEL DE REORDENAÇÃO (2 CLIQUES COM BOTÃO DIREITO) */}
              {isSwappingThisPost && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute inset-0 z-30 p-2 bg-black/80 backdrop-blur-sm rounded-xl flex flex-col justify-between items-center text-white animate-in fade-in"
                >
                  <div className="flex items-center gap-1 text-[10px] font-bold text-amber-300 text-center">
                    <ArrowLeftRight className="w-3.5 h-3.5" />
                    <span>Mover ou Trocar Ordem</span>
                  </div>

                  {/* Botoes Mover para Frente / Trás */}
                  <div className="flex items-center justify-center gap-2 w-full">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        movePostStep(post.id, -1);
                      }}
                      className="p-2 rounded-lg bg-white/20 hover:bg-white/40 text-white transition-colors"
                      title="Mover 1 posição para a esquerda"
                    >
                      <MoveLeft className="w-4 h-4" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        movePostStep(post.id, 1);
                      }}
                      className="p-2 rounded-lg bg-white/20 hover:bg-white/40 text-white transition-colors"
                      title="Mover 1 posição para a direita"
                    >
                      <MoveRight className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[9px] text-white/70 text-center">
                    Clique em outro post para trocar de posição
                  </p>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSwappingPostId(null);
                    }}
                    className="w-full py-1 rounded-md bg-amber-500 hover:bg-amber-600 text-white font-bold text-[10px]"
                  >
                    OK
                  </button>
                </div>
              )}

              {/* CONTROLE DE AJUSTE DA CAPA (4 CLIQUES) - 100% TRANSPARENTE SEM FUNDO PRETO */}
              {isEditingThisCover && !isSwappingThisPost && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    const startY = e.clientY;
                    const startVal = currentY;
                    const targetEl = e.currentTarget;
                    const rect = targetEl.getBoundingClientRect();
                    const height = rect.height || 100;

                    const handleMouseMove = (moveEvent: MouseEvent) => {
                      const diffY = moveEvent.clientY - startY;
                      const deltaPercent = (diffY / height) * 100;
                      const nextY = Math.max(0, Math.min(100, startVal - deltaPercent));
                      updatePosition(pIdKey, nextY);
                    };

                    const handleMouseUp = () => {
                      window.removeEventListener("mousemove", handleMouseMove);
                      window.removeEventListener("mouseup", handleMouseUp);
                    };

                    window.addEventListener("mousemove", handleMouseMove);
                    window.addEventListener("mouseup", handleMouseUp);
                  }}
                  onTouchStart={(e) => {
                    e.stopPropagation();
                    const startY = e.touches[0].clientY;
                    const startVal = currentY;
                    const targetEl = e.currentTarget;
                    const rect = targetEl.getBoundingClientRect();
                    const height = rect.height || 100;

                    const handleTouchMove = (moveEvent: TouchEvent) => {
                      const diffY = moveEvent.touches[0].clientY - startY;
                      const deltaPercent = (diffY / height) * 100;
                      const nextY = Math.max(0, Math.min(100, startVal - deltaPercent));
                      updatePosition(pIdKey, nextY);
                    };

                    const handleTouchEnd = () => {
                      window.removeEventListener("touchmove", handleTouchMove);
                      window.removeEventListener("touchend", handleTouchEnd);
                    };

                    window.addEventListener("touchmove", handleTouchMove);
                    window.addEventListener("touchend", handleTouchEnd);
                  }}
                  className="absolute inset-0 z-30 p-2 flex flex-col justify-between items-center cursor-ns-resize border-2 border-amber-400/80 rounded-xl animate-in fade-in"
                >
                  <div className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-sm text-amber-300 text-[10px] font-bold flex items-center gap-1 shadow-md pointer-events-none">
                    <MoveVertical className="w-3 h-3 text-amber-400" />
                    <span>Arraste a imagem para enquadrar ({currentY}%)</span>
                  </div>

                  <div className="w-full space-y-1.5 bg-black/75 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-lg pointer-events-auto">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={currentY}
                      onChange={(e) => updatePosition(pIdKey, Number(e.target.value))}
                      className="w-full accent-emerald-400 cursor-pointer h-1.5 bg-white/20 rounded-lg"
                    />

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingPostId(null);
                      }}
                      className="w-full py-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-[11px] flex items-center justify-center gap-1 transition-colors shadow"
                    >
                      <CheckCheck className="w-3.5 h-3.5" />
                      Concluir Enquadramento
                    </button>
                  </div>
                </div>
              )}

              {/* Overlay Padrão no Hover */}
              {!isEditingThisCover && !isSwappingThisPost && (
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 text-white pointer-events-none">
                  <div className="text-[11px] font-bold line-clamp-2 leading-tight">
                    {post.title}
                  </div>

                  <div className="flex items-center justify-between text-xs font-semibold">
                    <div className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-white" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* MODAL DETALHADO DO POST COM VISUALIZADOR DE CARROSSEL CONTÍNUO ESTILO INSTAGRAM */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-card text-card-foreground rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-border">
            {/* Fechar */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            {/* MÍDIA: SLIDER DE CARROSSEL CONTINUO SEM GAPS (ESTILO NATIVO INSTAGRAM PANORÂMICO) */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] md:min-h-[480px] overflow-hidden">
              {selectedPost.type === "video" ? (
                // PLAYER DE REEL
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    src={selectedPost.videoUrl}
                    poster={selectedPost.posterUrl}
                    controls
                    autoPlay
                    loop
                    muted={isMuted}
                    className="max-h-[480px] max-w-full object-contain"
                  />
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="absolute bottom-4 right-4 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              ) : (
                // CARROSSEL CONTÍNUO (PANORAMA CONTINUO INTEGRADO)
                <div className="relative w-full h-full flex items-center justify-center group/slider">
                  <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scrollbar-none touch-pan-x select-none gap-0"
                    style={{ scrollBehavior: "smooth" }}
                  >
                    {selectedPost.carouselMedia?.map((media, idx) => (
                      <div
                        key={idx}
                        className="min-w-full h-full flex-shrink-0 snap-center flex items-center justify-center bg-black"
                      >
                        {media.type === "video" ? (
                          <video
                            src={media.url}
                            controls
                            autoPlay
                            loop
                            className="max-h-[480px] max-w-full object-contain"
                          />
                        ) : (
                          <img
                            src={media.url}
                            alt={`Slide ${idx + 1}`}
                            className="max-h-[480px] max-w-full object-contain"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Controles de Navegação de Carrossel */}
                  {selectedPost.carouselMedia && selectedPost.carouselMedia.length > 1 && (
                    <>
                      {carouselIndex > 0 && (
                        <button
                          onClick={() => scrollToSlide(carouselIndex - 1)}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 text-white hover:bg-black transition-all duration-200 shadow-lg hover:scale-110"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                      )}
                      {carouselIndex < selectedPost.carouselMedia.length - 1 && (
                        <button
                          onClick={() => scrollToSlide(carouselIndex + 1)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/70 text-white hover:bg-black transition-all duration-200 shadow-lg hover:scale-110"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      )}

                      {/* Contador de Slides */}
                      <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/80 text-white text-xs font-mono backdrop-blur-md shadow-md">
                        {carouselIndex + 1} / {selectedPost.carouselMedia.length}
                      </span>

                      {/* Indicadores de Pontos (Dots) */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md">
                        {selectedPost.carouselMedia.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => scrollToSlide(idx)}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              idx === carouselIndex ? "w-4 bg-primary" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Informações & Legenda */}
            <div className="w-full md:w-[360px] p-6 bg-card flex flex-col justify-between overflow-y-auto border-t md:border-t-0 md:border-l border-border">
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <img
                    src={activeClient.avatarUrl}
                    alt={activeClient.name}
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-foreground flex items-center gap-1">
                      {activeClient.name}
                    </h4>
                    <p className="text-[11px] text-muted-foreground">@{activeClient.username}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-primary">
                    {selectedPost.strategy}
                  </span>
                  <h5 className="font-bold text-base text-foreground leading-tight">
                    {selectedPost.title}
                  </h5>

                  {/* ABA DE LEGENDA vs ESTRATÉGIA DA POSTAGEM */}
                  <div className="flex border-b border-border text-xs font-bold font-mono">
                    <button
                      onClick={() => setModalTab("caption")}
                      className={`flex-1 py-1.5 flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
                        modalTab === "caption"
                          ? "border-primary text-primary font-bold"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Legenda
                    </button>

                    <button
                      onClick={() => setModalTab("strategy")}
                      className={`flex-1 py-1.5 flex items-center justify-center gap-1.5 border-b-2 transition-colors ${
                        modalTab === "strategy"
                          ? "border-amber-400 text-amber-400 font-bold"
                          : "border-transparent text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Lightbulb className="w-3.5 h-3.5" />
                      Estratégia
                    </button>
                  </div>

                  {modalTab === "caption" ? (
                    <p className="text-xs text-muted-foreground whitespace-pre-line leading-relaxed max-h-[180px] overflow-y-auto pr-1 animate-in fade-in">
                      {selectedPost.caption || "Conteúdo criado com estratégia de posicionamento, engajamento e conversão."}
                    </p>
                  ) : (
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-1.5 animate-in fade-in">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Estratégia da Postagem:</span>
                      </div>
                      <p className="text-xs text-amber-100/90 whitespace-pre-line leading-relaxed max-h-[160px] overflow-y-auto pr-1 font-sans">
                        {selectedPost.strategyExplanation || selectedPost.strategy || "Estratégia focada em atração de audiência qualificada, fortalecimento de autoridade e conversão."}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-border mt-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-foreground">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                    {selectedPost.likes} curtidas
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-blue-500 fill-blue-500" />
                    {selectedPost.comments} comentários
                  </span>
                </div>

                {selectedPost.instagramUrl && (
                  <a
                    href={selectedPost.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="w-4 h-4" />
                    Ver Publicação Original no Instagram
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
