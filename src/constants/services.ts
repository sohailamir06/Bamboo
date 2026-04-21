import Sider1 from '../assets/productservice/service-page-banner-1-1536x775.jpg';
import Sider2 from '../assets/productservice/service-page-banner-2-1536x775.jpg';
import Sider3 from '../assets/productservice/service-page-banner-3-1536x775.jpg';
import { Package, Handshake, Leaf } from 'lucide-react';

export const SERVICES_HERO_SLIDES = [
  {
    image: Sider1,
    alt: 'Bamboo forest',
    title: 'Everything\'s there – you just need to get started.',
  },
  {
    image: Sider2,
    alt: 'Bamboo terrace',
    title: 'Top quality - fairly priced',
  },
  {
    image: Sider3,
    alt: 'Bamboo deck',
    title: 'Always there for you – personal & uncomplicated',
  },
];

export const SERVICES_HERO_FEATURES = [
  {
    number: '01',
    text: 'Direct Sales in Austria',
    icon: Package,
  },
  {
    number: '02',
    text: 'Best Price',
    icon: Handshake,
  },
  {
    number: '03',
    text: 'Personal Support',
    icon: Leaf,
  },
];
