// images
import Logo from '../src/assets/img/header/logo.svg';
import ResistanceImg from '../src/assets/img/workouts/resistance.png';
import BoxingImg from '../src/assets/img/workouts/boxing.png';
import BodyPumpImg from '../src/assets/img/workouts/body-pump.png';
import YogaImg from '../src/assets/img/workouts/yoga.png';
import FullBodyImg from '../src/assets/img/workouts/full-body.png';
import FitnessImg from '../src/assets/img/workouts/fitness.png';
import BattleRopeImg from '../src/assets/img/workouts/battle-rope.png';
import CommunityImg1 from '../src/assets/img/community/img1.png';
import CommunityImg2 from '../src/assets/img/community/img2.png';
import CommunityImg3 from '../src/assets/img/community/img3.png';
import CommunityImg4 from '../src/assets/img/community/img4.png';
import JoinImg from '../src/assets/img/join/woman.png';
// icons
import UsersIcn from '../src/assets/img/about/icons/users-icn.svg';
import CalendarIcn from '../src/assets/img/workouts/icons/calendar.svg';
import PriceIcn from '../src/assets/img/pricing/icons/price.svg';
import CommunityIcn from '../src/assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from '../src/assets/img/faq/icons/question-mark.svg';

export const header = {
  logo: Logo,
  btnLoginText: 'Entrar',
  btnSignupText: 'Cadastre-se',
};



export const nav = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/' },
  { name: 'Treinos', href: '/' },
  { name: 'Preços', href: '/' },
  { name: 'Comunidade', href: '/' },
  { name: 'Perguntas frequentes', href: '/' },
];

export const banner = {
  titlePart1: 'Aproveite a melhor parte do seu dia',
  titlePart2: '– venha para melhor academia.',
  subtitle:
    'Oferecemos um treinamento sério, mas dentro de um espaço divertido, amigável e seguro.',
  textBtn: 'Junte-se Agora',
  img: '',
};


export const about = {
  icon: UsersIcn,
  title: 'Nossa missão',
  subtitle1:
    'Somos diferenciados pela nossa atmosfera motivadora incomparável, equipe qualificada e equipamentos de exercício de primeira linha, que apoiam nossos membros a alcançar seus objetivos individuais de condicionamento físico.',
  subtitle2:
    'A força de nossa identidade sincera é utilizada para inspirar cada pessoa que pisa em nossas academias a melhorar a si mesmos.',
  link: 'Junte-se Agora',
};

export const workouts = {
  icon: CalendarIcn,
  title: 'Programas de Treinamento',
  programs: [
    {
      image: ResistanceImg,
      name: 'Treinamento com Resistência',
    },
    {
      image: BoxingImg,
      name: 'Boxe',
    },
    {
      image: BodyPumpImg,
      name: 'Body Pump',
    },
    {
      image: YogaImg,
      name: 'Yoga',
    },
    {
      image: FullBodyImg,
      name: 'Treino de Corpo Inteiro',
    },
    {
      image: FitnessImg,
      name: 'Condicionamento Físico',
    },
    {
      image: BattleRopeImg,
      name: 'Treino com Corda de Batalha',
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Planos de Preços',
  plans: [
    {
      name: 'Básico',
      price: '20',
      list: [
        { name: 'Acesso ilimitado à academia' },
        { name: '1 programa de treinamento' },
        { name: 'Consulta gratuita de condicionamento físico' },
      ],
      delay: 600,
    },
    {
      name: 'Premium',
      price: '35',
      list: [
        { name: 'Acesso ilimitado à academia' },
        { name: '5 programas de treinamento' },
        { name: 'Consulta gratuita de condicionamento físico' },
        { name: 'Treinador pessoal' },
      ],
      delay: 800,
    },
    {
      name: 'Elite',
      price: '49',
      list: [
        { name: 'Acesso ilimitado à academia' },
        { name: 'Todos os programas de treinamento' },
        { name: 'Consulta gratuita de condicionamento físico' },
        { name: 'Treinador pessoal' },
        { name: '50% de desconto em bebidas' },
      ],
      delay: 1000,
    },
  ],
};


export const community = {
  icon: CommunityIcn,
  title: 'Comunidade',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Mark A.',
      message:
        '“Ótima localização, ótimo preço e pessoas excelentes e prestativas. O que mais você poderia querer?”',
    },
    {
      image: CommunityImg2,
      name: 'Lauren K.',
      message:
        '“A Gymme mudou minha vida. Não apenas fisicamente, mas mentalmente também. Sou uma mãe melhor e uma pessoa melhor em todos os aspectos por causa dessa academia.”',
    },
    {
      image: CommunityImg3,
      name: 'Jhon D.',
      message:
        '“Adoro esses treinos! Os treinadores são experientes e motivadores. A Gymme é maravilhosa!”',
    },
    {
      image: CommunityImg4,
      name: 'Anne R.',
      message:
        '“Adoro esses treinos! Os treinadores são experientes e motivadores. A Gymme é maravilhosa!”',
    },
  ],
};

export const faq = {
  icon: QuestionMarkIcn,
  title: 'Perguntas Frequentes',
  accordions: [
    {
      question: 'Como posso agendar uma aula de treinamento?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Posso pagar em dinheiro pela minha adesão?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Qual idade é necessária para participar?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Existem armários disponíveis?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Como faço para cancelar minha adesão?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
    {
      question: 'Há água disponível na academia?',
      answer:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.',
    },
  ],
};


export const join = {
  image: JoinImg,
  title: 'Quer participar e se divertir?',
  subtitle:
    'Vamos mantê-lo atualizado sobre as coisas que você precisa saber sobre a Gymme. Nada mais, nada menos.',
  btnText: 'Junte-se agora',
};

export const footer = {
  logo: Logo,
  copyrightText: 'Todos os direitos reservados. Gymme 2022.',
};
