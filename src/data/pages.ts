import { PageData } from "@/types/page";

import mapoTofu from "@/assets/mapo-tofu.jpg";
import calendar from "@/assets/calendar.jpg";
import family from "@/assets/family.png";
import tofu from "@/assets/tofu.jpg";
import tofu1 from "@/assets/tofu1-agedashi.jpg";
import tofu2 from "@/assets/tofu2-sundubu.jpg";
import tofu3 from "@/assets/tofu3-tahugoreng.jpg";
import tofu4 from "@/assets/tofu4-tikkamasala.jpg";
import tofu5 from "@/assets/tofu5-lasagna.jpg";
import tofu6 from "@/assets/tofu6-steak.jpg";
import spongebob from "@/assets/spongebob.jpg";

export const pagesData: PageData[] = [
  {
    id: 1,
    theme: "welcome",
    title: "Today's Dinner!",
    imageUrl: mapoTofu,
  },
  {
    id: 2,
    theme: "welcome",
    title: "Today is",
    highlightedWord: "January 17th, 2026",
    imageUrl: calendar,
  },
  {
    id: 3,
    theme: "past",
    title: "Memory from",
    highlightedWord: "January 17th, 2018",
    imageUrl: family,
  },
  {
    id: 4,
    theme: "past",
    title: "Do you remember ...",
    prompts: [
      "where we went for dinner?",
      "what we bought at Disneyland?",
      "what rides we went on?",
    ],
  },
  {
    id: 5,
    theme: "present",
    title: "Today's dinner has",
    highlightedWord: "tofu!",
    imageUrl: tofu,
  },
  {
    id: 6,
    theme: "present",
    title: "Fun Facts about",
    highlightedWord: "tofu!",
    imageUrl: tofu,
    funFacts: [
      "Tofu was discovered 2,000 years ago by accident!",
      "Tofu was first introduced to America as cheese!",
      "Tofu has a layered, sponge-like texture when it's frozen!",
    ],
  },
  {
    id: 7,
    theme: "present",
    title: "These are dishes made with",
    highlightedWord: "tofu",
    question: "Which dish do you want to try?",
    dishes: [
      { name: "Agedashi Tofu", image: tofu1 },
      { name: "Sundubu Jjigae", image: tofu2 },
      { name: "Tahu Goreng", image: tofu3 },
      { name: "Tofu Tikka Masala", image: tofu4 },
      { name: "Tofu Lasagna", image: tofu5 },
      { name: "Tofu Steak", image: tofu6, url: "https://cookingwithayeh.com/tofu-steak/" },
    ],
  },
  {
    id: 8,
    theme: "future",
    question: "What's the first thing you're going to do when you wake up?",
  },
  {
    id: 9,
    theme: "future",
    title:
      "What's the first thing you're going to do when you wake up if you are a",
    highlightedWord: "SpongeBob?",
    imageUrl: spongebob,
  },
];
