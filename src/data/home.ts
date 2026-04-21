import img1 from '../assets/side-banner/105-imageslider-a.jpg';
import img2 from '../assets/side-banner/106-imageslider-b-1.jpg';
import servicesBg from '../assets/banner-image-b.jpg';

// Projects Images
import project1 from '../assets/images/131.jpg';
import project2 from '../assets/images/132.jpg';
import project3 from '../assets/images/133.jpg';
import project4 from '../assets/images/134.jpg';

// Story Images
import story1 from '../assets/images/image-a-1.jpg';
import story2 from '../assets/images/107.jpg';
import story3 from '../assets/images/108.jpg';
import story4 from '../assets/images/109.jpg';

// Terrace Planner Image
import terracePlannerImg from "../assets/productservice/110.jpg";

// Product Images
import p1 from '../assets/productservice/100.jpg';
import p2 from '../assets/productservice/101.jpg';
import p3 from '../assets/productservice/102.jpg';
import p4 from '../assets/productservice/103.jpg';
import p5 from '../assets/productservice/104.jpg';

export const ABOUT_HOME_CONTENT = {
  title: 'The perfect bamboo terrace –',
  subtitle: 'sustainable, durable & with personal advice',
  paragraphs: [
    {
      text: 'Bamboo is the perfect choice for your patio: extremely robust, weather-resistant, and sustainable. With Bambuam, you get top quality – honest advice, personal support, and delivery directly from Austria.',
      highlight: 'Bambuam'
    },
    {
      text: "Our bamboo decking boards are exceptionally durable, slip-resistant, and virtually non-split. I'll guide you with honest advice and genuine expertise – ensuring your project is a success and you can be proud of the result. Whether you're building a new home or renovating, with the right materials and clear tips, constructing your bamboo terrace will be an experience you'll enjoy for years to come.",
      highlight: ''
    }
  ],
  cta: {
    text: 'Learn more about me!',
    link: '/about-us'
  },
  images: [img1, img2]
};

export const SERVICES_HOME_CONTENT = {
  title: 'Our',
  highlight: 'services',
  description: "Our services – all from a single source! From the initial idea to the finished terrace: At Bambuam, you not only get high-quality materials, but also honest support and personal guidance. With experience, expertise, and enthusiasm, I'll help you make your project a reality.",
  backgroundImage: servicesBg,
  services: [
    {
      title: "Advice",
      desc: "Personal, honest, and on equal terms – I'll help you find the best solution for your bamboo terrace. With practical tips and extensive experience, I'll guide you so you can happily implement your project yourself.",
    },
    {
      title: "Planning",
      desc: "Tailored to your individual wishes and circumstances – for a terrace that suits you, your style, and your lifestyle. With thoughtful planning, building your own terrace becomes an enjoyable experience.",
    },
    {
      title: "Sale",
      desc: "Top quality at fair prices – sustainable bamboo decking without intermediaries, directly from Austria. Tested materials you can rely on.",
    },
    {
      title: "Delivery",
      desc: "Reliable, fast and uncomplicated – so your project can start stress-free. Everything you need comes directly to your home.",
    },
  ]
};

export const PROJECTS_HOME_CONTENT = {
  header: "This is what it looks like at our customers' homes now. Our bamboo decking transforms patios into true oases of well-being. Here's a look at",
  highlight: "how our customers have designed their outdoor spaces sustainably and personally with Bambuam.",
  items: [
    {
      img: project1,
      title: "Wonderful views – bamboo by the pool in St. Oswald",
      desc: "One of the first families to place their trust in me – and thus help launch Bambuam. For their new building, they chose bamboo as a natural, durable solution for the pool surround. The result: a dream terrace full of sustainability, style, and a welcoming atmosphere.",
    },
    {
      img: project2,
      title: "Outdoor wellness oasis – sauna meets bamboo",
      desc: "In Freistadt, one of the most beautiful terraces I've ever had the pleasure of working on was created: A freestanding outdoor sauna was transformed into a stylish oasis of well-being with elegant bamboo decking. Natural, harmonious, and a true example of how elegant sustainability can be.",
    },
    {
      img: project3,
      title: "Harmony with a view – Renovation in Liebenau",
      desc: "At an altitude of around 1000 meters, an old larch terrace was renovated with bamboo decking – perfectly blending into the natural surroundings. Nestled in a garden with a pond and panoramic views, a true haven of tranquility has been created. The small stove completes the harmonious overall picture – a passion project for a dear friend.",
    },
    {
      img: project4,
      title: "More than a terrace – a home for life",
      desc: "More than just a terrace – a home for life. This young family from Freistadt has fulfilled their dream of owning their own home – with a modern bamboo terrace under a stylish wooden pergola. I was privileged to accompany them from the initial consultation to the completion of the project – and in the process, not just complete a project, but build a true friendship.",
    },
  ]
};

export const STORY_HOME_CONTENT = {
  title: "I bring bamboo directly from China to our home in the Mühlviertel region –",
  highlight: "Andi from Bambuam",
  paragraphs: [
    "It all started with the search for a terrace that was durable, natural, and sustainable. Like many others, I was looking for the \"jack-of-all-trades\" – a terrace that could do everything.",
    "It's not that simple, but bamboo fulfills many of these criteria: robust, sustainable, splinter-free, and beautiful. My own needs and many hours of research led me down this path – and ultimately to my company, Bambuam.",
    "Today I import high-quality bamboo decking directly from China to Austria – without intermediaries, but with genuine conviction. From my own experience, I know what really matters – and I will support you honestly and personally with your project."
  ],
  images: [story1, story2, story3, story4]
};

export const TERRACE_PLANNER_CONTENT = {
  title: "Plan your terrace yourself –",
  highlight: "easy & straightforward",
  description: "With our online planning tool, you can easily design your own patio and gather initial ideas. This way, you'll have a clear picture in your mind before you even start.",
  link: "https://terrassenplaner.terrassen-montagesysteme.de/#/?cid=501",
  linkText: "Get started now",
  features: [
    "Plan it yourself",
    "Simple & intuitive",
    "Free & no obligation",
    "Perfectly tailored to your project",
  ],
  image: terracePlannerImg
};

export const PRODUCTS_HOME_CONTENT = {
  title: "At Bambuam you can get everything",
  highlight: "for your terrace.",
  description: "Bamboo decking, substructures, fastening & care – coordinated, tested & with personal advice.",
  products: [
    {
      id: 1,
      name: 'Water-based decking oil, light bamboo, 2.5 liters',
      price: '€69.95',
      image: p1,
    },
    {
      id: 2,
      name: 'Terrace cleaner',
      price: '€44.95',
      image: p2,
    },
    {
      id: 3,
      name: 'Pad holder for telescopic handle',
      price: '€19.90',
      image: p3,
    },
    {
      id: 4,
      name: 'Oil sponge',
      price: '€9.90',
      image: p4,
    },
    {
      id: 5,
      name: 'Silicon brush',
      price: '€69.90',
      image: p5,
    },
  ]
};
