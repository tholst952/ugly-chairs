import { icons } from "./icons.js";

// Array of bestselling chairs
export const bestsellers = [
  {
    id: 1,
    image: "./img/best-01.jpg",
    title: "The Side Sitter",
    alt: "a teal chair, upholstery ripped and frayed",
    price: "$640",
    features: [
      { icon: icons.threeStars, label: "YouTube and Dinner" },
      { icon: icons.comfortableForDays, label: "Comfortable for 2 Days" },
      { icon: icons.singleStar, label: "Recycled Microfiber" },
      { icon: icons.weightScale, label: "Weighs 45lbs/20.4kg" },
    ],
  },
  {
    id: 2,
    image: "./img/best-02.jpg",
    title: "The Grandpa Jer-Jer",
    alt: "a heavily distressed leather chair on a beach",
    price: "$520",
    features: [
      { icon: icons.scissors, label: "Haircuts and Guitar" },
      { icon: icons.timerClock, label: "Comfortable for 8 Hours" },
      { icon: icons.thumbsUp, label: "Cow Leather" },
      { icon: icons.weightScale, label: "Approx 0.095 Tonnage" },
    ],
  },
  {
    id: 3,
    image: "./img/best-03.jpg",
    title: "The Epic Gamer",
    alt: "the remains of a broken wooden chair",
    price: "$300",
    features: [
      { icon: icons.oneHand, label: "Gaming and VR" },
      { icon: icons.exclamationTriangle, label: "Comfortable for 1-2 Mins." },
      { icon: icons.fireFlame, label: "Burnt up Wood" },
      { icon: icons.weighsNothing, label: "Weighs Almost Nothing" },
    ],
  },
];
