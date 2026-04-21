import { Facebook, Youtube, Instagram, Package, Handshake, Leaf } from 'lucide-react';
import Sider1 from '../assets/slider-images/slider-image-a.jpg';
import Sider2 from '../assets/slider-images/slider-image-b.jpg';
import Sider3 from '../assets/slider-images/slider-image-c.jpg';

export const HERO_SLIDES = [
  {
    image: Sider1,
    alt: 'Bamboo forest',
    subtitle: 'Natural, robust and weatherproof – Bambuam brings bamboo decking to the Mühlviertel region and all of Austria.',
    title: 'Your sustainable bamboo terrace – durable & stylish!',
  },
  {
    image: Sider2,
    alt: 'Bamboo terrace',
    subtitle: 'Personal consultation',
    title: 'Personal, honest, competent – advice you deserve',
  },
  {
    image: Sider3,
    alt: 'Bamboo deck',
    subtitle: 'Sustainable living starts outdoors – discover the terrace that suits you!',
    title: 'Naturally beautiful – bamboo decking for all of Austria',
  },
];

export const HERO_FEATURES = [
  {
    number: '01',
    text: 'Direct Sales in Austria',
    icon: Package,
  },
  {
    number: '02',
    text: 'Personal Consultation',
    icon: Handshake,
  },
  {
    number: '03',
    text: 'High-Quality Bamboo Decks',
    icon: Leaf,
  },
];

export const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://www.facebook.com/bambuambambus/', label: 'Facebook' },
  { icon: Youtube, href: 'https://www.youtube.com/@Bambuam/', label: 'Youtube' },
  { icon: Instagram, href: 'https://www.instagram.com/bambu_am/', label: 'Instagram' },
];
