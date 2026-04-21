import step1Img from "../assets/slider-images/slider-image-a.jpg"; 
import step2Img from "../assets/slider-images/slider-image-b.jpg";
import step3Img from "../assets/slider-images/slider-image-c.jpg";
import step4Img from "../assets/slider-images/slider-image-d.jpg";
import step5Img from "../assets/slider-images/slider-image-e.jpg";

export const JOURNEY_STEPS = [
  {
    subtitle: "From bamboo tube to raw material",
    description: "It all starts with the bamboo cane. After harvesting, the canes are split lengthwise, peeled, and then rolled. This process creates uniform strips of raw material that later form the basis for our high-quality bamboo decking.",
    extraInfo: "The strips are then dried to optimally prepare them for further processing – an important step for quality and durability.",
    bullets: [
      "Formation of uniform raw strips – basis for stable bamboo planks",
      "Drying the strips ensures shape stability and longevity",
      "Optimal preparation for thermal treatment – quality from the start"
    ],
    image: step1Img,
    timelineLabel: "From bamboo tube to raw material"
  },
  {
    subtitle: "Heat resistance: Thermal treatment",
    description: "Deprivation of sugar and starch makes bamboo resistant. Protection against pests, fungi and rot – perfect for outdoor use.",
    extraInfo: "The foundation for long-lasting bamboo terraces – natural and robust.",
    bullets: [
      "Thermal treatment process",
      "Sugar and starch removal",
      "Natural pest resistance"
    ],
    image: step2Img,
    timelineLabel: "Thermal treatment"
  },
  {
    subtitle: "Glued, pressed, damn stable",
    description: "The strips are then pressed into solid sheets under extremely high pressure. The result: a particularly dense, dimensionally stable and durable material.",
    extraInfo: "Ideal for outdoor use and heavy foot traffic.",
    bullets: [
      "High-pressure compression",
      "Maximized density",
      "Structural integrity"
    ],
    image: step3Img,
    timelineLabel: "Compression"
  },
  {
    subtitle: "Tested down to the last detail",
    description: "Every batch undergoes rigorous testing to ensure it meets our standards for the European climate. We leave nothing to chance when it comes to your home.",
    extraInfo: "Final surface finishing and climate adaptation checks.",
    bullets: [
      "Rigorous stress tests",
      "Climate adaptation checks",
      "Final surface finishing"
    ],
    image: step4Img,
    timelineLabel: "Testing"
  },
  {
    subtitle: "Direct to you",
    description: "The final product travels directly from our production site to the Mühlviertel region, ensuring no middleman costs.",
    extraInfo: "Sustainable logistics for a sustainable product.",
    bullets: [
      "Direct shipping",
      "Local distribution",
      "Personal delivery"
    ],
    image: step5Img,
    timelineLabel: "To Austria"
  }
];

// Sample Terrace Images
import imgLarge from "../assets/image-a.jpg"; 
import imgTopRight from "../assets/image-b.jpg"; 
import imgBottomLeft from "../assets/image-c.jpg"; 
import imgBottomRight from "../assets/image-d.jpg"; 

export const SAMPLE_TERRACE_CONTENT = {
  title: "Experience bamboo on a sample terrace",
  highlight: "as it really is.",
  paragraphs: [
    "Want to know what bamboo really feels like? No problem! On my sample terrace in Kaltenberg, you can experience it all firsthand: different bamboo decking boards, various surface treatments, and even aged decking that has withstood wind and weather for years.",
    "You'll see not only the finished surfaces but also the substructure – for viewing, touching, and comparing. And all this in a relaxed atmosphere, with honest advice and a willingness to answer all your questions.",
    "Come by – and get real inspiration for your own project!"
  ],
  cta: "Enquire now!",
  images: {
    large: imgLarge,
    topRight: imgTopRight,
    bottomLeft: imgBottomLeft,
    bottomRight: imgBottomRight
  }
};
