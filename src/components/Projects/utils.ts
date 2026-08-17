import imageShopLogo from '@/assets/images/shop/logo.png'
import imageShop01 from '@/assets/images/shop/01.png'
import imageShop02 from '@/assets/images/shop/02.png'
import imageShop03 from '@/assets/images/shop/03.png'
import imageShop04 from '@/assets/images/shop/04.png'

import imageDevQuizLogo from '@/assets/images/devQuiz/logo.png'
import imageDevQuiz01 from '@/assets/images/devQuiz/01.jpeg'
import imageDevQuiz02 from '@/assets/images/devQuiz/02.jpeg'
import imageDevQuiz03 from '@/assets/images/devQuiz/03.jpeg'
import imageDevQuiz04 from '@/assets/images/devQuiz/04.jpeg'
import imageDevQuiz05 from '@/assets/images/devQuiz/05.jpeg'
import imageDevQuiz06 from '@/assets/images/devQuiz/06.jpeg'
import imageDevQuiz07 from '@/assets/images/devQuiz/07.jpeg'
import imageDevQuiz08 from '@/assets/images/devQuiz/08.jpeg'
import imageDevQuiz09 from '@/assets/images/devQuiz/09.jpeg'
import imageDevQuiz010 from '@/assets/images/devQuiz/010.jpeg'
import imageDevQuiz011 from '@/assets/images/devQuiz/011.jpeg'

import imageDevFitnessLogo from '@/assets/images/devFitness/logo.png'
import imageDevFitness01 from '@/assets/images/devFitness/01.jpeg'
import imageDevFitness02 from '@/assets/images/devFitness/02.jpeg'
import imageDevFitness03 from '@/assets/images/devFitness/03.jpeg'
import imageDevFitness04 from '@/assets/images/devFitness/04.jpeg'
import imageDevFitness05 from '@/assets/images/devFitness/05.jpeg'
import imageDevFitness06 from '@/assets/images/devFitness/06.jpeg'
import imageDevFitness07 from '@/assets/images/devFitness/07.jpeg'
import imageDevFitness08 from '@/assets/images/devFitness/08.jpeg'
import imageDevFitness09 from '@/assets/images/devFitness/09.jpeg'
import imageDevFitness010 from '@/assets/images/devFitness/010.jpeg'
import imageDevFitness011 from '@/assets/images/devFitness/011.jpeg'
import imageDevFitness012 from '@/assets/images/devFitness/012.jpeg'
import imageDevFitness013 from '@/assets/images/devFitness/013.jpeg'
import imageDevFitness014 from '@/assets/images/devFitness/014.jpeg'
import imageDevFitness015 from '@/assets/images/devFitness/015.jpeg'

import imageGPTLogo from '@/assets/images/chatgpt/logo.png'
import imageGPT01 from '@/assets/images/chatgpt/01.png'
import imageGPT02 from '@/assets/images/chatgpt/02.png'
import imageGPT03 from '@/assets/images/chatgpt/03.png'
import imageGPT04 from '@/assets/images/chatgpt/04.png'
import imageGPT05 from '@/assets/images/chatgpt/05.png'

import imageTimerJobLogo from '@/assets/images/timer-job/logo.png'
import imageTimerJob01 from '@/assets/images/timer-job/01.png'
import imageTimerJob02 from '@/assets/images/timer-job/02.png'
import imageTimerJob03 from '@/assets/images/timer-job/03.png'
import imageTimerJob04 from '@/assets/images/timer-job/04.png'

import imageBlog01 from '@/assets/images/blog/01.png'
import imageBlog02 from '@/assets/images/blog/02.png'
import imageBlog03 from '@/assets/images/blog/03.png'
import imageBlog04 from '@/assets/images/blog/04.png'

import imageDSLogo from '@/assets/images/design-system/logo.png'
import imageDS01 from '@/assets/images/design-system/01.png'
import imageDS02 from '@/assets/images/design-system/02.png'
import imageDS03 from '@/assets/images/design-system/03.png'
import imageDS04 from '@/assets/images/design-system/04.png'
import imageDS05 from '@/assets/images/design-system/05.png'
import imageDS06 from '@/assets/images/design-system/06.png'
import imageDS07 from '@/assets/images/design-system/07.png'
import imageDS08 from '@/assets/images/design-system/08.png'
import imageDS09 from '@/assets/images/design-system/09.png'
import imageDS010 from '@/assets/images/design-system/010.png'
import imageDS011 from '@/assets/images/design-system/011.png'
import imageDS012 from '@/assets/images/design-system/012.png'
import imageDS013 from '@/assets/images/design-system/013.png'
import imageDS014 from '@/assets/images/design-system/014.png'
import imageDS015 from '@/assets/images/design-system/015.png'
import imageDS016 from '@/assets/images/design-system/016.png'
import imageDS017 from '@/assets/images/design-system/017.png'
import imageDS018 from '@/assets/images/design-system/018.png'
import imageDS019 from '@/assets/images/design-system/019.png'
import imageDS020 from '@/assets/images/design-system/020.png'
import imageDS021 from '@/assets/images/design-system/021.png'
import imageDS022 from '@/assets/images/design-system/022.png'
import imageDS023 from '@/assets/images/design-system/023.png'
import imageDS024 from '@/assets/images/design-system/024.png'
import imageDS025 from '@/assets/images/design-system/025.png'
import imageDS026 from '@/assets/images/design-system/026.png'
import imageDS027 from '@/assets/images/design-system/027.png'
import imageDS028 from '@/assets/images/design-system/028.png'
import imageDS029 from '@/assets/images/design-system/029.png'
import imageDS030 from '@/assets/images/design-system/030.png'

export const LIST_PROJECT_DATA = [
  {
    id: 1,
    title: 'Shop',
    image: imageShopLogo,
    description:
      'Sistema de e-commerce com Next.js e NodeJS. Esse sistema tem integração com o Stripe para pagamentos. E tem um sistema de carrinho de compras com o Stripe Checkout.',
    stacks: [
      {
        text: 'NodeJS',
        backgroundColor: '#DC2626',
      },
      {
        text: 'React.js',
        backgroundColor: '#2C63C8',
      },
      {
        text: 'Next.js',
        backgroundColor: '#2563EB',
      },
    ],
    about: {
      description:
        'Esse projeto foi com intuito de treinar o uso de Next.js e NodeJS. E foi usado o Stripe para pagamentos e o Stripe Checkout para o carrinho de compras.',
      list: [
        'Pagamentos com Stripe',
        'Carrinho de compras com Stripe Checkout',
      ],
      proccessEnvironment: [
        {
          title: 'Ambiente de desenvolvimento',
          description: 'Pesquisa e Validação',
        },
        {
          title: 'Design UX/UI',
          description:
            'Criação de uma interface amigável e acessível, com design minimalista e moderno.',
        },
        {
          title: 'Desenvolvimento Next.js',
          description:
            'Implementação do sistema utilizando Next.js para garantir performance e SEO.',
        },
      ],
      information: {
        duration: '10 dias',
        team: '1 pessoa',
        client: 'Eu mesmo',
      },
    },
    projectLink: '',
    projectLinkGithub: 'https://github.com/luan-junior/nextjs-shop',
    inDevelopment: false,
    images: [
      {
        src: imageShop01,
        alt: 'Imagem do app de shop',
      },
      {
        src: imageShop02,
        alt: 'Imagem do app de shop',
      },
      {
        src: imageShop03,
        alt: 'Imagem do app de shop',
      },
      {
        src: imageShop04,
        alt: 'Imagem do app de shop',
      },
    ],
    impact: [
      {
        title: 'Pagamentos com Stripe',
        value: '100%',
      },
      {
        title: 'Carrinho de compras com Stripe Checkout',
        value: '100%',
      },
    ],
  },
  {
    id: 2,
    title: 'DEV QUIZ',
    image: imageDevQuizLogo,
    description:
      'Quiz simples para testar conhecimentos em programação e tecnologia.',
    stacks: [
      {
        text: 'NodeJS',
        backgroundColor: '#DC2626',
      },
      {
        text: 'React Native',
        backgroundColor: '#DC2626',
      },
    ],
    about: {
      description:
        'Esse projeto foi com objetivo de treinar o uso de React Native e NodeJS. Foi usado o Reanimated para animações e o React Native Navigation para navegação.',
      list: [
        'Uso de Reanimated para animações',
        'Uso de React Native Navigation para navegação',
      ],
      proccessEnvironment: [
        {
          title: 'Ambiente de desenvolvimento',
          description: 'Pesquisa e Validação',
        },
        {
          title: 'Design UX/UI',
          description:
            'Criação de uma interface amigável e acessível, com design minimalista e moderno.',
        },
        {
          title: 'Desenvolvimento React Native',
          description:
            'Implementação do sistema utilizando React Native com o Expo.',
        },
      ],
      information: {
        duration: '18 dias',
        team: '1 pessoa',
        client: 'Eu mesmo',
      },
    },
    projectLink: '',
    projectLinkGithub: 'https://github.com/luan-junior/devQuiz',
    inDevelopment: false,
    images: [
      {
        src: imageDevQuiz01,
        alt: 'Imagem do app de dev quiz',
      },
      {
        src: imageDevQuiz02,
        alt: 'Imagem do app de dev quiz',
      },
      {
        src: imageDevQuiz03,
        alt: 'Imagem do app de dev quiz',
      },
      {
        src: imageDevQuiz04,
        alt: 'Imagem do app de dev quiz',
      },
      {
        src: imageDevQuiz05,
        alt: 'Imagem do app de dev quiz',
      },
      {
        src: imageDevQuiz06,
        alt: 'Imagem do app de dev quiz',
      },
      {
        src: imageDevQuiz07,
        alt: 'Imagem do app de dev quiz',
      },
      {
        src: imageDevQuiz08,
        alt: 'Imagem do app de dev quiz',
      },
      {
        src: imageDevQuiz09,
        alt: 'Imagem do app de dev quiz',
      },
      {
        src: imageDevQuiz010,
        alt: 'Imagem do app de dev quiz',
      },
      {
        src: imageDevQuiz011,
        alt: 'Imagem do app de dev quiz',
      },
    ],
  },
  {
    id: 3,
    title: 'DEV Fitness',
    description:
      'Aplicativo que ajuda a criar rotina e fazer exercícios físicos todos os dias.',
    stacks: [
      {
        text: 'NodeJS',
        backgroundColor: '#DC2626',
      },
      {
        text: 'React Native',
        backgroundColor: '#DC2626',
      },
      {
        text: 'Redux',
        backgroundColor: '#0891B2',
      },
      {
        text: 'Redux Persist',
        backgroundColor: '#0891B2',
      },
    ],
    about: {
      description:
        'Esse projeto foi com objetivo de treinar o uso de React Native e NodeJS. Foi usado o Reanimated para animações e o React Native Navigation para navegação. E foi usado o Redux para gerenciamento de estado.',
      list: [
        'Uso de Reanimated para animações',
        'Uso de React Native Navigation para navegação',
        'Uso de Redux para gerenciamento de estado',
        'Uso de Redux Persist para persistência de estado',
      ],
      proccessEnvironment: [
        {
          title: 'Ambiente de desenvolvimento',
          description: 'Pesquisa e Validação',
        },
        {
          title: 'Design UX/UI',
          description:
            'Criação de uma interface amigável e acessível, com design minimalista e moderno.',
        },
        {
          title: 'Desenvolvimento React Native',
          description: 'Implementação do sistema utilizando React Native.',
        },
        {
          title: 'Desenvolvimento Redux',
          description:
            'Implementação do sistema utilizando Redux para gerenciamento de estado.',
        },
        {
          title: 'Desenvolvimento Redux Persist',
          description:
            'Implementação do sistema utilizando Redux Persist para persistência de estado.',
        },
      ],
      information: {
        duration: '25 dias',
        team: '1 pessoa',
        client: 'Eu mesmo',
      },
    },
    projectLink: '',
    projectLinkGithub: 'https://github.com/luan-junior/devFit1.0',
    inDevelopment: false,
    image: imageDevFitnessLogo,
    images: [
      {
        src: imageDevFitness01,
        alt: 'Imagem do app de dev fitness',
      },
      {
        src: imageDevFitness02,
        alt: 'Imagem do app de dev fitness',
      },
      {
        src: imageDevFitness03,
        alt: 'Imagem do app de dev fitness',
      },
      {
        src: imageDevFitness04,
        alt: 'Imagem do app de dev fitness',
      },
      {
        src: imageDevFitness05,
        alt: 'Imagem do app de dev fitness',
      },
      {
        src: imageDevFitness06,
        alt: 'Imagem do app de dev fitness',
      },
      {
        src: imageDevFitness07,
        alt: 'Imagem do app de dev fitness',
      },
      {
        src: imageDevFitness08,
        alt: 'Imagem do app de dev fitness',
      },
      {
        src: imageDevFitness09,
        alt: 'Imagem do app de dev fitness',
      },
      {
        src: imageDevFitness010,
        alt: 'Imagem do app de dev fitness',
      },
      {
        src: imageDevFitness011,
        alt: 'Imagem do app de dev fitness',
      },
      {
        src: imageDevFitness012,
        alt: 'Imagem do app de dev fitness',
      },
      {
        src: imageDevFitness013,
        alt: 'Imagem do app de dev fitness',
      },
      {
        src: imageDevFitness014,
        alt: 'Imagem do app de dev fitness',
      },
      {
        src: imageDevFitness015,
        alt: 'Imagem do app de dev fitness',
      },
    ],
  },
  {
    id: 4,
    title: 'Clone Chat GPT',
    image: imageGPTLogo,
    description:
      'Clone Chat GPT feito com NodeJS, Next.js e React.js. É um clone do Chat GPT feito com o objetivo de treinar o uso de Next.js e React.js e também para treinar o uso de API do Chat GPT.',
    stacks: [
      {
        text: 'NodeJS',
        backgroundColor: '#DC2626',
      },
      {
        text: 'Next.js',
        backgroundColor: '#2563EB',
      },
      {
        text: 'React.js',
        backgroundColor: '#0891B2',
      },
    ],
    about: {
      description:
        'Esse projeto é um projeto simples com integração com a API do Chat GPT. Com ele é possível ver que é possível usar backend sem a necessidade de usar uma API em NodeJS.',
      list: [
        'Integração com a API do Chat GPT',
        'Uso de Next.js e React.js',
        'Conversas com o Chat GPT',
        'Armazenamento de conversas',
        'Edição e exclusão de conversas',
        'IA responsiva e inteligente',
      ],
      proccessEnvironment: [
        {
          title: 'Ambiente de desenvolvimento',
          description: 'Pesquisa e Validação',
        },
        {
          title: 'Design UX/UI',
          description:
            'Criação de uma interface amigável e acessível, com design minimalista e moderno.',
        },
        {
          title: 'Desenvolvimento Next.js',
          description:
            'Implementação do sistema utilizando Next.js para garantir performance e SEO.',
        },
        {
          title: 'Integração com a API do Chat GPT',
          description:
            'Integração com a API do Chat GPT para garantir que o sistema funcione corretamente.',
        },
        {
          title: 'Desenvolvimento React.js',
          description:
            'Implementação do sistema utilizando Next.js para garantir performance e SEO.',
        },
      ],
      information: {
        duration: '1 mês',
        team: '1 pessoa',
        client: 'Eu mesmo',
      },
    },
    projectLink: '',
    projectLinkGithub: 'https://github.com/luan-junior/chatgpt-clone',
    inDevelopment: false,
    images: [
      {
        src: imageGPT01,
        alt: 'Imagem do app de chat gpt',
      },
      {
        src: imageGPT02,
        alt: 'Imagem do app de chat gpt',
      },
      {
        src: imageGPT03,
        alt: 'Imagem do app de chat gpt',
      },
      {
        src: imageGPT04,
        alt: 'Imagem do app de chat gpt',
      },
      {
        src: imageGPT05,
        alt: 'Imagem do app de chat gpt',
      },
    ],
  },
  {
    id: 5,
    title: 'Timer Job',
    image: imageTimerJobLogo,
    description:
      'Timer Job é um projeto simples com o objetivo de Fazer um contador para executar determinadas tarefas.',
    stacks: [
      {
        text: 'NodeJS',
        backgroundColor: '#DC2626',
      },
      {
        text: 'React.js',
        backgroundColor: '#0891B2',
      },
    ],
    about: {
      description:
        'Este projeto foi feito com o objetivo de treinar o uso de React.js e NodeJS. Usando um Timer para executar determinadas tarefas.',
      list: [
        'Uso de Timer para executar determinadas tarefas',
        'Uso de React.js para a interface do usuário',
      ],
      proccessEnvironment: [
        {
          title: 'Ambiente de desenvolvimento',
          description: 'Pesquisa e Validação',
        },
        {
          title: 'Design UX/UI',
          description:
            'Criação de uma interface amigável e acessível, com design minimalista e moderno.',
        },
        {
          title: 'Desenvolvimento React.js',
          description: 'Implementação do sistema utilizando React.js com Vite.',
        },
      ],
      information: {
        duration: '1 mês',
        team: '1 pessoa',
        client: 'Eu mesmo',
      },
    },
    projectLink: '',
    projectLinkGithub: 'https://github.com/luan-junior/timer-job',
    inDevelopment: false,
    images: [
      {
        src: imageTimerJob01,
        alt: 'Imagem do app de chat gpt',
      },
      {
        src: imageTimerJob02,
        alt: 'Imagem do app de chat gpt',
      },
      {
        src: imageTimerJob03,
        alt: 'Imagem do app de chat gpt',
      },
      {
        src: imageTimerJob04,
        alt: 'Imagem do app de chat gpt',
      },
    ],
  },
  {
    id: 6,
    title: 'Blog',
    image: imageTimerJobLogo,
    description:
      'Sistema de blog simples mostrando como funciona a interação de um comentário e um like.',
    stacks: [
      {
        text: 'React.js',
        backgroundColor: '#0891B2',
      },
    ],
    about: {
      description:
        'Esse projeto foi feito com objetivo de mostrar o funcionamento de um blog simples. Foi usado o React.js para a interface do usuário junto com interações do usuário para a publicação do comentário.',
      list: [
        'Uso de React.js para a interface do usuário',
        'Interações do usuário para a publicação do comentário',
        'Interações do usuário para o like do comentário',
      ],
      proccessEnvironment: [
        {
          title: 'Ambiente de desenvolvimento',
          description: 'Pesquisa e Validação',
        },
        {
          title: 'Design UX/UI',
          description:
            'Criação de uma interface amigável e acessível, com design minimalista e moderno.',
        },
        {
          title: 'Desenvolvimento React.js',
          description: 'Implementação do sistema utilizando React.js com Vite.',
        },
      ],
      information: {
        duration: '5 dias',
        team: '1 pessoa',
        client: 'Eu mesmo',
      },
    },
    projectLink: '',
    projectLinkGithub: 'https://github.com/luan-junior/mini-blog',
    inDevelopment: false,
    images: [
      {
        src: imageBlog01,
        alt: 'Imagem do app de blog',
      },
      {
        src: imageBlog02,
        alt: 'Imagem do app de blog',
      },
      {
        src: imageBlog03,
        alt: 'Imagem do app de blog',
      },
      {
        src: imageBlog04,
        alt: 'Imagem do app de blog',
      },
    ],
  },
  {
    id: 7,
    title: 'Design System',
    image: imageDSLogo,
    description: '',
    stacks: [
      {
        text: 'React.js',
        backgroundColor: '#0891B2',
      },
    ],
    about: {
      description: '',
      list: [
        'Uso de Tipografia para o design system',
        'Uso de Token para as cores do design system',
        'Uso de Token para as fontes do design system',
        'Uso de Token para as dimensões do design system',
        'Uso de Token para as bordas do design system',
        'Uso de Token para os raios do design system',
        'Uso de Token para os espaçamentos do design system',
        'Uso de Token para os efeitos do design system',
        'Uso de Token para os animações do design system',
        'Uso de imagem avatar para o perfil do usuário',
        'Componente de Box',
        'Componente de Button',
        'Componente de Checkbox',
        'Componente de Multi Step',
        'Componente de Textarea',
        'Componente de Input',
      ],
      proccessEnvironment: [
        {
          title: 'Ambiente de desenvolvimento',
          description: 'Pesquisa e Validação',
        },
        {
          title: 'Design UX/UI',
          description:
            'Criação de uma interface amigável e acessível, com design minimalista e moderno.',
        },
        {
          title: 'Desenvolvimento React.js',
          description: 'Implementação do sistema utilizando React.js com Vite.',
        },
        {
          title: 'Adicionado Storybook no github pages',
          description:
            'Adicionado Storybook no github pages para visualização dos componentes.',
        },
      ],
      information: {
        duration: '1 mês',
        team: '1 pessoa',
        client: 'Eu mesmo',
      },
    },
    projectLink: '',
    projectLinkGithub: 'https://github.com/luan-junior/mini-blog',
    inDevelopment: false,
    images: [
      {
        src: imageDS01,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS02,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS03,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS04,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS05,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS06,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS07,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS08,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS09,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS010,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS011,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS012,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS013,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS014,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS015,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS016,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS017,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS018,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS019,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS020,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS021,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS022,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS023,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS024,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS025,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS026,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS027,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS028,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS029,
        alt: 'Imagem do app de design system',
      },
      {
        src: imageDS030,
        alt: 'Imagem do app de design system',
      },
    ],
  },
]
