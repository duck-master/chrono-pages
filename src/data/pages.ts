import { PageData } from "@/types/page";

export const pagesData: PageData[] = [
  {
    id: 1,
    theme: "welcome",
    title: "Today's Dinner!",
  },
  {
    id: 2,
    theme: "welcome",
    title: "Today is",
    highlightedWord: "January 17th, 2026",
  },
  {
    id: 3,
    theme: "past",
    title: "Memory from",
    highlightedWord: "January 17th, 2018",
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
  },
  {
    id: 6,
    theme: "present",
    title: "Fun Facts about",
    highlightedWord: "tofu!",

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
      { name: "Agedashi Tofu" },
      { name: "Sundubu Jjigae" },
      { name: "Tahu Goreng" },
      { name: "Tofu Tikka Masala" },
      { name: "Tofu Lasagna" },
      { name: "Tofu Steak", url: "https://cookingwithayeh.com/tofu-steak/" },
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
  },
];
