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
} from "lucide-react";

interface PostItem {
  id: number;
  type: "video" | "carousel";
  title: string;
  strategy: string;
  views?: string;
  likes: string;
  comments: string;
  videoUrl?: string;
  posterUrl?: string;
  carouselMedia?: {
    type: "image" | "video";
    url: string;
  }[];
  caption?: string;
  instagramUrl?: string;
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
    isAvatarPdf: true,
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
        videoUrl: "/Prolegado/ARMAZÉM ANANDDA ✅/POST 1/historia-anandda.mov",
        posterUrl: "/Prolegado/ARMAZÉM ANANDDA ✅/POST 1/capa-historia-anandda.png",
        instagramUrl: "https://www.instagram.com/armazemanandda/",
        caption: `💚🌿 Conheça a história por trás de uma das melhores lojas de produtos naturais de Alagoas, o Armazém Anandda 🙌

Nossa fundadora, Leila Amanda, compartilha sua jornada pessoal de bem-estar e paixão pela alimentação natural, que a levou a criar o Armazém Anandda em 2019. Aqui, nossa missão é promover saúde e respeito ao meio ambiente, oferecendo uma variedade de produtos naturais e sustentáveis. 🌍💪

No Armazém Anandda, procuramos proporcionar uma experiência única e um atendimento humanizado. Nossa equipe é formada por profissionais dedicados, prontos para ajudá-lo a descobrir o melhor para o seu bem-estar. 🤗

E sabe o que é Anandda? Significa “felicidade suprema”. Este é o sentimento que queremos trazer a cada pessoa que visita nosso espaço. 😊💖

Você já conhece o Armazém Anandda pessoalmente? Conte-nos nos comentários! 👇

#armazemanandda #produtosnaturais #maceio #maceioalagoas #alagoas #anandda`
      },
      {
        id: 2,
        type: "video",
        title: "INAUGURAÇÃO MASSAGUEIRA",
        strategy: "Visita & Experiência",
        views: "172.000",
        likes: "392",
        comments: "27",
        videoUrl: "/Prolegado/ARMAZÉM ANANDDA ✅/POST 2/localização-anandda.mov",
        posterUrl: "/Prolegado/ARMAZÉM ANANDDA ✅/POST 2/capa-localização-anandda.jpg",
        instagramUrl: "https://www.instagram.com/armazemanandda/",
        caption: `Que alegria foi a inauguração da nossa nova loja de produtos naturais na Massagueira. 🥰💚

Cada sorriso, cada abraço e cada palavra de carinho que recebemos tornaram esse momento ainda mais especial e inesquecível. 🙏❤️

Estamos apenas começando essa linda jornada e não poderíamos estar mais animados para o que vem pela frente. 👑🥳

É com o coração cheio de gratidão que agradecemos a cada um de vocês - clientes, amigos e parceiros - que nos apoiaram e celebraram conosco. 🫶🏻😊

Vocês são a razão pela qual continuamos a nos dedicar com tanto amor e empenho.

Vamos juntos, de mãos dadas, construir um futuro mais saudável e feliz. 🤩🙌🏻

A nossa história está só começando e é um privilégio ter vocês ao nosso lado nessa caminhada. 💚✨

🎶MÚSICOS: @quartetofinesse
🥐 BUFFET: @rsgastronomia_

#InauguraçãoArmazémAnandda #BemEstar #Saúde #CelebraçãoDaVida #Comunidade #gratidao #ArmazemAnandda`
      },
      {
        id: 3,
        type: "video",
        title: "CONHEÇA A NOSSA LOJA MAIS DE PERTINHO",
        strategy: "Educativo & Saúde",
        views: "39.900",
        likes: "318",
        comments: "20",
        videoUrl: "/Prolegado/ARMAZÉM ANANDDA ✅/POST 3/doença-celiaca.mov",
        posterUrl: "/Prolegado/ARMAZÉM ANANDDA ✅/POST 3/capa-doença-celiaca.png",
        instagramUrl: "https://www.instagram.com/armazemanandda/",
        caption: `📍🌱 Você já conhece o nosso cantinho de produtos naturais aqui em Maceió?

📍 O Armazém Anandda fica na Rua Deputado José Lages, 372 C, no vibrante coração de Ponta Verde em Maceió!

Aqui você encontra um universo de opções saudáveis, sustentáveis e deliciosas – temos tudo, desde alimentos sem glúten e sem lactose a cosméticos naturais e suplementos alimentares. 🥦🍎🧴

E se a vida estiver corrida, não se preocupe! Temos um delivery prontinho para levar nossos produtos até você, e o melhor: o frete é grátis para compras acima de R$200,00 em Maceió! 🚛✨

Mas temos uma novidade chegando... Em breve, teremos uma nova loja na cidade! E aí, já está curioso para saber onde será? 😉

📌 Deixe nos comentários se você já visitou nosso espaço atual!

#ArmazemAnandda #ProdutosNaturais #Maceio #Alagoas #PontaVerde #Saude #bemestar`
      }
    ]
  },
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
        title: "RETROSPECTIVA 2024: NOSSAS MAIORES CONQUISTAS!",
        strategy: "Storytelling & Autoridade",
        views: "5.658",
        likes: "239",
        comments: "15",
        videoUrl: "/Prolegado/FABIANO GOIS ✅/POST 1 - video/11milhoes.mp4",
        posterUrl: "/Prolegado/FABIANO GOIS ✅/POST 1 - video/capa-11milhoes.jpg",
        instagramUrl: "https://www.instagram.com/fabianogoisfx/",
        caption: `Mais um ano que chega ao fim, e só tenho a agradecer pelas incríveis realizações que vivemos juntos. 🚀

Em 2024:
✔️ Lucrei R$ 73.997,79 em um dia com operações no Forex e Cripto.
✔️ Expandi a iCapitalX em 564%, impactando mais de 465 pessoas.
✔️ Lançamos o CopytradeFX, trazendo uma média de 28,29% de rentabilidade ao mês para os parceiros.
✔️ Adotamos a tecnologia GoldFlash, garantindo consistência e resultados excepcionais.

E o melhor: geramos mais de R$ 6 milhões em receitas no mercado Forex! 🙌

E para 2025, vem muita novidade por aí! 👇
1️⃣ iCapital PAMCLUB para empreendedores;
2️⃣ iCapital CopyX para iniciantes que desejam lucrar;
3️⃣ Mentoring Gold com nossa inteligência artificial GoldFlash.

Agora estando em 2025, vamos continuar crescendo! 🔥`
      },
      {
        id: 2,
        type: "carousel",
        title: "COMO FICAR MILIONÁRIO",
        strategy: "Educativo & Funil",
        views: "15.100",
        likes: "164",
        comments: "24",
        instagramUrl: "https://www.instagram.com/fabianogoisfx/",
        carouselMedia: [
          { type: "image", url: "/Prolegado/FABIANO GOIS ✅/POST 2 - carrossel/1.jpg" },
          { type: "image", url: "/Prolegado/FABIANO GOIS ✅/POST 2 - carrossel/2.jpg" },
          { type: "image", url: "/Prolegado/FABIANO GOIS ✅/POST 2 - carrossel/3.jpg" },
          { type: "image", url: "/Prolegado/FABIANO GOIS ✅/POST 2 - carrossel/4.jpg" },
          { type: "image", url: "/Prolegado/FABIANO GOIS ✅/POST 2 - carrossel/5.jpg" },
          { type: "image", url: "/Prolegado/FABIANO GOIS ✅/POST 2 - carrossel/6.jpg" },
        ],
        caption: `Você já imaginou se tornar um milionário em apenas 5 anos, ganhando em dólar e garantindo sua liberdade financeira? Com uma ferramenta exclusiva? 📈🔝

📌 Descubra mais: 👇

💵 Ganhos em Dólar: Aproveite a valorização de uma das moedas mais fortes do mundo, aumentando seu poder de compra.
📈 Rentabilidade Consistente: Com essa metodologia, é possível obter até 5% de rentabilidade todo mês, multiplicando seu capital de forma segura.
⏳ Aposentadoria Antecipada: Alcance a independência financeira antes dos 35 anos e viva a vida dos seus sonhos sem preocupações.
🤖 Investimentos Automatizados: Reduza riscos e aumente suas chances de ganhos com uma tecnologia que trabalha por você.
💬 Suporte Personalizado: Eu e a minha equipe estará ao seu lado, oferecendo todo o suporte necessário para você alcançar seus objetivos financeiros.

Não perca essa oportunidade única de transformar sua vida financeira!

📌 Comente “MILIONÁRIO” aqui embaixo e descubra como você também pode fazer parte desse mercado lucrativo! 📈💸

#LiberdadeFinanceira #Investimento #GanheEmDólar #FabianoGóis #SejaMilionário`
      },
      {
        id: 3,
        type: "video",
        title: "JORNADA ENRIQUECENDO EM DÓLAR",
        strategy: "Quebra de Objeções",
        likes: "251",
        comments: "29",
        videoUrl: "/Prolegado/FABIANO GOIS ✅/POST 3 - video/comoficarmilionario.mp4",
        posterUrl: "/Prolegado/FABIANO GOIS ✅/POST 3 - video/capa-comoficarmilionario.jpg",
        instagramUrl: "https://www.instagram.com/fabianogoisfx/",
        caption: `Descubra o segredo que usei para me tornar um milionário em 10 anos lucrando em dólar.

💬 Se torne o próximo milionário, comente “DÓLAR” aqui embaixo que eu te mando o link para participar!

👋 Oi, eu sou Fabiano Gois! Tenho mais de mil alunos que vivem de dólar, trabalhando no mercado de câmbio. Sou bacharel em direito, tenho MBA em liderança e fui coach por cinco anos. E eu tenho uma ferramenta! Um segredo que faz eu e todos os meus alunos terem a tão sonhada liberdade financeira, lucrando em dólar! 💸

🤔 Quantas vezes você sonhou com um futuro onde pode comprar o que quiser sem olhar o preço? Eu também sei como é a frustração de viver com um salário que mal cobre as necessidades básicas. Você não acha que merece mais que isso?

🚀 Por isso, desenvolvi este método para você! JORNADA ENRIQUECENDO EM DÓLAR. Onde você terá acesso a uma FERRAMENTA que te ajudará a ter resultados com previsibilidade, além de:
- 📚 Fundamentos do Investimento
- 💵 Estratégias de Investimento em Dólar
- 📈 Plano de Ação que Multiplicará seu Capital.

❓ E SE NÃO DER CERTO? EU TE GARANTO!
Se, em 10 anos, você seguir todas as minhas instruções e NÃO ALCANÇAR os resultados promised… DEVOLVO O SEU DINHEIRO! Estou tão confiante na eficácia do meu método que estou disposto a assumir todo o risco!

🌟 Estou oferecendo uma oportunidade para pessoas como você que têm desejo de mudar. Agora, a decisão está nas suas mãos!

#LiberdadeFinanceira #InvestimentoEmDólar #AposentadoriaJovem #GanheEmDólar #RendaExtra #FabianoGois #SucessoFinanceiro #MilionárioEm10Anos`
      }
    ]
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
        title: "COMO EU ME TORNEI UM CORRETOR DE SUCESSO",
        strategy: "História de Vida & Conexão",
        views: "47,8 mil",
        likes: "928",
        comments: "350",
        videoUrl: "/Prolegado/ERICK SHEIK ✅/POST 1 - video/historia-sheik.mp4",
        posterUrl: "/Prolegado/ERICK SHEIK ✅/POST 1 - video/capa-historia-sheik.jpg",
        instagramUrl: "https://www.instagram.com/ericksheik7/",
        caption: `Você sabe como eu me tornei um corretor de sucesso? Eu te conto, do absoluto zero! 👇

Há 12 anos, comecei minha jornada no mercado imobiliário, saindo de uma situação complicada e transformando minha vida completamente. ✅

Do desemprego em 2012 a mais de R$100 milhões em vendas com minha equipe em 2024, o caminho não foi fácil, mas a chave foi virar minha mentalidade e focar no meu potencial! 💡

Eu parei de me sabotar, deixei para trás os vícios e decidi me dedicar 100% à minha carreira.

E hoje estou aqui, para te mostrar como é possível faturar R$30 mil ou mais por mês vendendo apartamentos no Minha Casa Minha Vida. 📈

Se você quer poder ter esse resultado, comenta aqui aqui embaixo “SUCESSO”, que eu vou te mostrar o caminho para chegar até lá! 🚀

#MinhaCasaMinhaVida #CorretorDeSucesso #MentalidadeDeSucesso #HistóriasDeSuperação #Imóveis`
      },
      {
        id: 2,
        type: "carousel",
        title: "DESCUBRA COMO FATURAR 30K POR MÊS COM IMÓVEIS MINHA CASA MINHA VIDA",
        strategy: "Captação & Lançamento",
        likes: "66",
        comments: "22",
        instagramUrl: "https://www.instagram.com/ericksheik7/",
        carouselMedia: [
          { type: "image", url: "/Prolegado/ERICK SHEIK ✅/POST 2 - carrossel/1.jpg" },
          { type: "image", url: "/Prolegado/ERICK SHEIK ✅/POST 2 - carrossel/2.jpg" },
          { type: "image", url: "/Prolegado/ERICK SHEIK ✅/POST 2 - carrossel/3.jpg" },
          { type: "image", url: "/Prolegado/ERICK SHEIK ✅/POST 2 - carrossel/4.jpg" },
          { type: "image", url: "/Prolegado/ERICK SHEIK ✅/POST 2 - carrossel/5.jpg" },
          { type: "image", url: "/Prolegado/ERICK SHEIK ✅/POST 2 - carrossel/6.jpg" },
          { type: "image", url: "/Prolegado/ERICK SHEIK ✅/POST 2 - carrossel/7.jpg" },
        ],
        caption: `🚨 Corretor, atenção! 🚨

Quer saber como faturar R$ 30K por mês vendendo imóveis Minha Casa Minha Vida sem experiência ou investimento?

Eu sou Erick Sheik, com mais de 10 anos no mercado e líder de equipes que venderam mais de R$ 300 milhões nos últimos 3 anos! 🔥

Nessa aula exclusiva no dia 7 de Outubro, vou te ensinar tudo que você precisa para virar o jogo nas suas vendas.

✅ Está cansado de não ter previsibilidade nas vendas?
✅ Quer aumentar sua carteira de clientes?
✅ Quer fechar vendas mais rápidas e lucrativas?
✅ Quer faturar R$ 30K por mês?

❌ Quem não precisa assistir essa aula?

Se você está 100% satisfeito com suas vendas e prefere ficar no piloto automático… essa aula não é pra você. 

Mas se quer vender mais, com mais consistência e previsibilidade, eu te espero!

Comente CORRETOR30K e garanta sua vaga agora! 👇

📅 Data: 7 de Outubro, segunda-feira!
⏰ Às 20H, no YouTube! 

#CorretorDeSucesso #MinhaCasaMinhaVida #Fature30K #AulaExclusiva #VendasImobiliárias`
      },
      {
        id: 3,
        type: "video",
        title: "COMO ELA CHEGOU A FATURAR + de 50K NO MÊS",
        strategy: "Estudo de Caso & Prova Social",
        views: "5.285",
        likes: "109",
        comments: "6",
        videoUrl: "/Prolegado/ERICK SHEIK ✅/POST 3 - video/50k.mp4",
        posterUrl: "/Prolegado/ERICK SHEIK ✅/POST 3 - video/capa-50k.jpg",
        instagramUrl: "https://www.instagram.com/ericksheik7/",
        caption: `Conheçam essa transformação real no mercado imobiliário!

Conheça a @amayaimob, uma corretora que deu uma virada na sua carreira. Antes, ela trabalhava como manicure, faturando no máximo R$2 mil por mês. Agora, com dedicação e foco, ela alcançou impressionantes R$80 mil em um único mês! 💰

👉 Você acredita que o mercado imobiliário pode mudar vidas? A @amayaimob tem a resposta: ‘Muda vidas completamente!’

E você? Também acredita que o mercado imobiliário pode mudar vidas? Responde aqui embaixo 👇`
      }
    ]
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
        title: "O QUE EU FARIA PARA RECUPERAR A MINHA BARRIGA EM 12 SEMANAS",
        strategy: "História de Superação",
        views: "1.200",
        likes: "66",
        comments: "8",
        videoUrl: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 1/historia.mp4",
        posterUrl: "/Prolegado/OH MY CORE - RENATA VICENTINI ✅/POST 1/capa-historia.jpg",
        instagramUrl: "https://www.instagram.com/p/C-3cvLGx9Gk/",
        caption: `O QUE EU FARIA PARA RECUPERAR A MINHA BARRIGA EM 12 SEMANAS 👇🎯

Tá se sentindo incomodada com aquela gordurinha teimosa que insiste em ficar ou sua barriga não voltou ao lugar depois que você teve filhos? Eu tenho a solução! 💪✨

Aprenda a respirar corretamente, focar nos músculos profundos e ganhar força no corpo todo com a combinação de exercícios certos!

👉 Então já me segue para não perder nenhuma dica essencial sobre vácuo abdominal!

#MetaBarrigaZero #TransformaçãoReal #VidaSaudável #RenataVicentini #vacuoabominal`
      },
      {
        id: 2,
        type: "carousel",
        title: "QUEM É ESSA MULHER APAIXONADA POR VÁCUO ABDOMINAL?",
        strategy: "Técnica Barriga Negativa",
        likes: "124",
        comments: "45",
        instagramUrl: "https://www.instagram.com/p/C-oNiGks2P7/",
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
        caption: `Quem é essa mulher apaixonada por Vácuo Abdominal? 😅👇

Oi, eu sou a Renata Vicentini! 🌟

Depois de uma jornada cheia de desafios, descobri minha paixão por ajudar mulheres a conquistarem a barriga dos sonhos, sem precisar de dietas radicais ou academia. 💪✨

Se conectou comigo? Então já corre para participar do Meta Barriga Zero, onde você perderá 12cm de cintura em apenas 12 semanas! ✅

Comente aqui embaixo um pouco da sua história também, já ouviu falar desta técnica?👇😊

#TransformaçãoReal #MetaBarrigaZero #VidaSaudável #vacuoabdominal`
      },
      {
        id: 3,
        type: "carousel",
        title: "O QUE É O META BARRIGA ZERO?",
        strategy: "Treinos em Casa",
        likes: "71",
        comments: "29",
        instagramUrl: "https://www.instagram.com/p/C-VY2hHs_r0/",
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
        caption: `‼️ Conheça o Meta Barriga Zero!

Você quer perder até 12cm de barriga em 12 semanas, sem academia e sem dietas radicais? Então esse evento é para você! 💪

Eu sou Renata Vicentini, mãe de dois, e criei uma metodologia que funciona para mulheres reais, com rotinas reais. Com o Meta Barriga Zero, você vai queimar gordura mesmo dormindo, eliminar a pochete, tonificar o abdômen e melhorar sua autoestima e bem-estar! 🌟

Centenas de mulheres já transformaram seus corpos e suas vidas com o Meta Barriga Zero. Não perca essa chance! O treinamento vai acontecer nos dias 12, 14 e 16 de agosto.

Para garantir sua vaga gratuita, comente “EU QUERO” e entre no nosso grupo VIP do WhatsApp para receber todas as informações.

#vacuoabdominal #lpf #emagrecimento #fitness`
      }
    ]
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
        title: "DESCUBRA NOSSOS TRATAMENTOS",
        strategy: "Institucional & Conceito",
        views: "1.840",
        likes: "84",
        comments: "12",
        videoUrl: "/Prolegado/DERMA BEAUTY ✅/POST 1/historia-dermabeauty.mp4",
        posterUrl: "/Prolegado/DERMA BEAUTY ✅/POST 1/capa-historia-dermabeauty.png",
        instagramUrl: "https://www.instagram.com/dermabeauty.uk/",
        caption: `Pronta para revelar a melhor versão da sua pele e corpo?

Meus tratamentos estéticos especializados oferecem cuidados personalizados e eficazes para você conquistar uma pele radiante, suave e rejuvenescida da cabeça aos pés. Desde o Back Detox, que realiza uma limpeza profunda, até o tratamento específico para estrias e boosters avançados para pescoço e rosto, cada sessão é projetada para atender às suas necessidades únicas e realçar sua beleza natural. 🌸

✨ Contorno Corporal & Cuidados Faciais Personalizados para Você!
De reduzir gordura localizada no queixo, abdômen e culotes até revitalizar a pele com boosters hidratantes, estou aqui para trazer à tona o seu melhor com técnicas modernas e clinicamente comprovadas.
Cada sessão promete um toque de luxo e resultados visíveis que você vai adorar.
Agende sua consulta hoje mesmo e vamos iniciar sua jornada de transformação!

🏴🏴🏴

Ready to have your best skin and body? Ready to fell like the best version of your self? My specialised aesthetic treatments that will bring you an effective and personalised care to help you achieve glowing, smooth and rejuvenated skin from head to toe. Whether it’s a deep-cleansing Back Detox, treatments targeting Stretch Marks, or advanced Neck and Face Boosters, each treatment is designed to address your unique needs and enhance your natural beauty. 🌸

✨ Body Contouring & Facial Care Tailored for You
To reduce stubborn and unwanted fat located in underneeth your chin (a.k.a double chin) abdomen, and hips to revitalise the skin with hydrating boosters, I’m here to bring out your best self with the latest, clinically proven techniques. Each session promises you a touch of luxury and visible results you’ll love.
I’m here to help you feel confident and radiant in your own skin. Book your self an appointnent today and let’s begin your transformation journey!`
      },
      {
        id: 2,
        type: "carousel",
        title: "DE UM SONHO À REALIDADE",
        strategy: "Tratamentos Estéticos",
        likes: "142",
        comments: "28",
        instagramUrl: "https://www.instagram.com/dermabeauty.uk/",
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
        caption: `Você já pensou no que realmente te faz sentir bonita? Não é só a aparência... É a confiança, é o poder de ser você mesma! ✨

Eu sou Anne, e hoje quero compartilhar a história da Derma Beauty com você. Fundada em 2021, a Derma Beauty nasceu para transformar vidas e elevar a autoconfiança. Aqui, acreditamos que a beleza é uma força que inspira e ajuda a enfrentar o mundo de cabeça erguida.

Nossa missão é ajudar você a descobrir a melhor versão de si mesma, promovendo uma transformação que vai muito além do espelho. 💖

Comente abaixo e desbloqueie 5% de desconto no seu primeiro procedimento! Porque todos merecem se sentir poderosos todos os dias.

🏴🏴🏴

Have you ever thought about what truly makes you feel beautiful? It’s not just about looks… it’s the confidence, the power of being unapologetically you! ✨

I’m Anne, and today I’d love to share the story of Derma Beauty with you. Founded in 2021, Derma Beauty was born to transform lives and uplift self-confidence. Here, we believe beauty is a force that inspires and helps us face the world with our heads held high.

Our mission is to help you discover the very best version of yourself, creating a transformation that goes far beyond the mirror. 💖

Leave a comment below and unlock 5% off your first treatment! Because everyone deserves to feel empowered every single day.

#explore #beauty #cuidadoscomapele #rejuvenescimento`
      },
      {
        id: 3,
        type: "carousel",
        title: "RESULTADOS QUE ENCANTAM",
        strategy: "Resultados Reais",
        likes: "110",
        comments: "19",
        instagramUrl: "https://www.instagram.com/dermabeauty.uk/",
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
        caption: `Na nossa clínica, cada tratamento é pensado para realçar a beleza única de cada pessoa. Quer seja a suavidade dos traços, a definição do contorno ou aquele brilho especial na pele, estamos aqui para trazer confiança e alegria ao seu reflexo no espelho.

Nosso cuidado vem durante o procedimento e toda a sua recuperação! O contato ativo com você garante um resultado muito mais duradouro e saudável!

Venha descobrir como podemos transformar o seu visual com resultados naturais e personalizados. Cada detalhe importa para nós, por que você merece se sentir ainda mais incrível!

🏴🏴🏴

At our clinic, every treatment is designed to enhance each person’s unique beauty. Whether it’s smoothing lines, contouring definition, or adding that special glow to your skin, we’re here to bring confidence and joy to your reflection.

Our care extends through the procedure and throughout your recovery! With active support, we ensure results that are both longer-lasting and healthier.

Come and discover how we can transform your look with natural, personalised results. Every detail matters to us, because you deserve to feel even more incredible! 💖`
      }
    ]
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
        title: "CONHEÇA NOSSO MÉTODO TRANSCENDER",
        strategy: "Método Transcender",
        likes: "54",
        comments: "8",
        instagramUrl: "https://www.instagram.com/estudosereforcos/",
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
        caption: `E se você pudesse garantir que seu filho tivesse as ferramentas certas para ir além? 🦋

Aqui na Academia, entendemos que cada fase do aprendizado é um passo importante rumo ao sucesso. 📈🤩

➡️ Por isso, criamos o Método Transcender, inspirado na evolução da borboleta, para ajudar crianças e jovens a descobrirem suas próprias capacidades, superarem desafios e atingirem todo o seu potencial! 📚✅

🌱 | Identificamos as dificuldades
💪 | Fortalecemos o desenvolvimento emocional e social
🦋 | Transformamos o aluno para que ele voe alto!

Seu filho merece essa transformação! Vamos juntos?

💬 Mande uma mensagem e saiba como podemos ajudar!

#MétodoTranscender #AcademiaDeEstudos #ReforçoEscolar #TransformaçãoEducacional #DesenvolvimentoInfantil #Aprendizado #crescimento`
      },
      {
        id: 2,
        type: "carousel",
        title: "CONHEÇA + SOBRE O MELHOR REFORÇO DE MACEIÓ",
        strategy: "Acolhimento & Dicas",
        likes: "86",
        comments: "14",
        instagramUrl: "https://www.instagram.com/estudosereforcos/",
        carouselMedia: [
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 2 - carrossel/1.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 2 - carrossel/2.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 2 - carrossel/3.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 2 - carrossel/4.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 2 - carrossel/5.jpg" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 2 - carrossel/6.png" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 2 - carrossel/7.png" },
        ],
        caption: `🎓 Conheça + Sobre o Melhor Reforço Escolar de Maceió! 👇

Você sabia que o acompanhamento certo pode transformar a trajetória educacional do seu filho? 💡

Na Academia de Estudos e Reforços, oferecemos muito mais do que aulas de reforço – somos parceiros no desenvolvimento completo de cada aluno! 💪✨

🔸 Atendimento personalizado
🔸 Método neuropsicopedagógico que une neurociência, psicologia e pedagogia
🔸 Relatório individualizado sobre o progresso
🔸 Acompanhamento contínuo com feedback para os pais

Aqui, o foco vai além das notas: promovemos o desenvolvimento socioemocional, o autoconhecimento e a autonomia de cada aluno. 🦋

✅ Matérias: Português, Matemática, Leitura, Letramento e mais!
✅ Horário: Segunda a sexta, das 08h às 18h
✅ Local: Galeria 60, Sala 107, Rua Nise da Silveira, Antares, Maceió

👉 Comente aqui embaixo “EU QUERO” que entramos em contato com você! 🔔 Dê o primeiro passo para o sucesso do seu filho!

#ReforçoEscolar #AcademiaDeEstudos #EducaçãoDeQualidade #SucessoAcadêmico #Maceió`
      },
      {
        id: 3,
        type: "carousel",
        title: "O QUE OS NOSSOS PAIS FALAM SOBRE NÓS",
        strategy: "Aulas Práticas & Depoimentos",
        likes: "72",
        comments: "11",
        instagramUrl: "https://www.instagram.com/estudosereforcos/",
        carouselMedia: [
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 3 - carrossel com videos/1.png" },
          { type: "video", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 3 - carrossel com videos/2.mp4" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 3 - carrossel com videos/3.png" },
          { type: "video", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 3 - carrossel com videos/4.mp4" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 3 - carrossel com videos/5.png" },
          { type: "video", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 3 - carrossel com videos/6.mp4" },
          { type: "image", url: "/Prolegado/ACADEMIA DE ESTUDOS E REFORÇOS ✅/POST 3 - carrossel com videos/7.png" },
        ],
        caption: `Descubra o que os nossos pais têm a dizer sobre nós! 💜👨👩👦

Aqui na Academia de Estudos e Reforços, cada família é parte da nossa história. ✏️💜

Os depoimentos dos pais mostram o quanto nosso método tem feito a diferença no aprendizado e no desenvolvimento das crianças. ✨📚

Quer saber como ajudamos cada aluno a alcançar o seu melhor? Vem ver o que os pais que confiam na gente têm a dizer. 💬💡

#DepoimentosReais #ReforçoEscolar #EducaçãoComCarinho #FuturoComeçaAqui #AcademiaDeEstudos #MétodoTranscender`
      }
    ]
  }
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
  const [captionExpanded, setCaptionExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    const container = carouselContainerRef.current;
    if (!container) return;
    setIsDragging(true);
    dragStartX.current = e.pageX - container.offsetLeft;
    dragScrollLeft.current = container.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = carouselContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - dragStartX.current) * 1.5; // Drag speed multiplier
    container.scrollLeft = dragScrollLeft.current - walk;
  };

  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Sincroniza a posição de rolagem quando a tela for redimensionada para manter alinhamento
  useEffect(() => {
    const handleResize = () => {
      const container = carouselContainerRef.current;
      if (container) {
        container.scrollLeft = slideIndex * container.clientWidth;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [slideIndex]);

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    const container = carouselContainerRef.current;
    if (container && slideIndex > 0) {
      const prevIdx = slideIndex - 1;
      setSlideIndex(prevIdx);
      container.scrollTo({
        left: prevIdx * container.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    const container = carouselContainerRef.current;
    if (post.carouselMedia && container && slideIndex < post.carouselMedia.length - 1) {
      const nextIdx = slideIndex + 1;
      setSlideIndex(nextIdx);
      container.scrollTo({
        left: nextIdx * container.clientWidth,
        behavior: "smooth",
      });
    }
  };

  // Trata arraste manual/swipe e atualiza o dot ativo
  const handleScroll = () => {
    const container = carouselContainerRef.current;
    if (container) {
      const scrollPosition = container.scrollLeft;
      const slideWidth = container.clientWidth;
      if (slideWidth > 0) {
        const newIndex = Math.round(scrollPosition / slideWidth);
        if (newIndex !== slideIndex) {
          setSlideIndex(newIndex);
        }
      }
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
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src={post.videoUrl}
            muted={isMuted}
            controls
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
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
      return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Trilho Contínuo (Seamless Mosaic Track) */}
          <div
            ref={carouselContainerRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            className={`flex flex-row w-full h-full overflow-x-auto select-none scrollbar-none snap-x snap-mandatory gap-0 space-x-0 p-0 border-0 ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {post.carouselMedia.map((media, idx) => (
              <div
                key={idx}
                className="flex-none w-full h-full snap-start flex items-center justify-center relative p-0 m-0 border-0 overflow-hidden"
              >
                {media.type === "video" ? (
                  <video
                    src={media.url}
                    muted={isMuted}
                    controls
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover p-0 m-0"
                  />
                ) : (
                  <img
                    src={media.url}
                    alt={`Slide ${idx + 1}`}
                    className="w-full h-full object-cover select-none p-0 m-0"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Navegação Carrossel - Setas */}
          {slideIndex > 0 && (
            <button
              onClick={handlePrevSlide}
              className="absolute left-4 bg-black/55 hover:bg-black/80 text-white p-2 rounded-full z-20 transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {slideIndex < post.carouselMedia.length - 1 && (
            <button
              onClick={handleNextSlide}
              className="absolute right-4 bg-black/55 hover:bg-black/80 text-white p-2 rounded-full z-20 transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Botão de som (se o slide ativo for vídeo) */}
          {post.carouselMedia[slideIndex]?.type === "video" && (
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full z-20 transition-all cursor-pointer shadow shadow-black/55"
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

  const captionText = post.caption || client.bio;

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
        className="bg-card border border-border/80 w-full max-w-5xl md:max-w-[1010px] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row md:h-[650px]"
      >
        {/* Lado Esquerdo: Media Viewer */}
        <div className="relative w-full aspect-square md:w-[650px] md:h-[650px] shrink-0 overflow-hidden bg-background">
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
              href={post.instagramUrl || `https://instagram.com/${client.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary font-bold hover:underline shrink-0 flex items-center gap-0.5"
            >
              Seguir
            </a>
          </div>

          {/* Corpo - Informações do Post */}
          <div className="p-5 flex-1 overflow-y-auto space-y-4 no-scrollbar">
            <div>
              <span className="inline-block text-[9px] uppercase font-mono tracking-widest text-primary font-bold bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                {post.strategy}
              </span>
              <h4 className="mt-3 font-bold text-base text-foreground leading-snug">
                {post.title}
              </h4>
            </div>

            {/* Foco Estratégico */}
            <div className="p-3.5 bg-secondary border border-border rounded-xl space-y-2">
              <span className="font-mono text-[9px] tracking-wider text-muted-foreground uppercase font-bold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                Foco Estratégico
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {client.foco}
              </p>
            </div>

            {/* Legenda do Feed com Collapse */}
            <div className="space-y-1.5 text-xs text-muted-foreground/90 font-sans">
              <p className="font-bold text-foreground">Legenda do Feed Restaurado:</p>
              <div className="italic leading-relaxed whitespace-pre-line">
                {captionExpanded || captionText.length <= 120 ? (
                  captionText
                ) : (
                  <>
                    {captionText.slice(0, 120)}...{" "}
                    <button
                      onClick={() => setCaptionExpanded(true)}
                      className="text-primary font-bold hover:underline cursor-pointer focus:outline-none ml-1 inline-block"
                    >
                      ver mais
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Botão de Link Externo */}
            <div className="pt-2">
              <a
                href={post.instagramUrl || `https://www.instagram.com/${client.username}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-primary text-primary-foreground font-sans font-bold text-xs rounded-xl hover:bg-primary/95 transition-all shadow-md active:scale-[0.98]"
              >
                <Instagram className="w-4 h-4" />
                Ver no Instagram ↗
              </a>
            </div>
          </div>

          {/* Footer - Bloco de Métricas Reais */}
          <div className="p-4 border-t border-border bg-secondary/30 flex justify-between items-center text-xs font-sans text-muted-foreground uppercase tracking-wider shrink-0 gap-2">
            <span className="flex items-center gap-1" title="Curtidas">
              <Heart className="w-4 h-4 text-red-500 fill-current shrink-0" />
              <strong>{post.likes}</strong>
            </span>
            <span className="flex items-center gap-1" title="Comentários">
              <MessageCircle className="w-4 h-4 text-foreground/70 shrink-0" />
              <strong>{post.comments}</strong>
            </span>
            <span className="flex items-center gap-1" title="Visualizações">
              <svg className="w-4 h-4 text-foreground/70 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <strong>{post.views || "N/A"}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente Principal
export default function InstagramFeedProlegado() {
  const [activeClientId, setActiveClientId] = useState<string>("armazem-ananda");
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
            <div className="text-sm space-y-1 text-left max-w-xl font-sans">
              <p className="font-bold text-foreground">{activeClient.name}</p>
              <p className="text-muted-foreground/80 text-[11px] uppercase tracking-wide">
                {activeClient.subtitle}
              </p>
              <div className="text-muted-foreground space-y-1.5 text-xs md:text-sm pt-1.5 leading-relaxed whitespace-pre-line">
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
                <span className="text-xs text-muted-foreground leading-snug font-sans">
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
              <div className="w-12 h-12 rounded-full border border-border/80 bg-secondary/50 flex items-center justify-center p-0.5">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center border border-border/40 font-mono text-[10px] text-muted-foreground font-semibold shadow-inner">
                  {highlight.slice(0, 2).toUpperCase()}
                </div>
              </div>
              <span className="text-[10px] text-muted-foreground truncate max-w-[65px] font-sans">
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
      <div className="p-6 md:p-10 bg-background/30 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
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
