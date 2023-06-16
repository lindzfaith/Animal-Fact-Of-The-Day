import { Otter, Cat } from "./Components";

export const facts = [
  {
    name: "Cat",
    component: <Cat />,
    facts: [
      "On average, cats spend around two-thirds of each day asleep. The average 12-year-old cat has been awake for only 4 years.",
      "Cats can jump 5 times their own height.",
      "House cats share 95.6% of their genetic makeup with tigers.",
    ],
  },
  {
    name: "Otter",
    component: <Otter />,
    facts: [
      "Otters hold hands while sleeping to prevent them from floating away from each other",
    ],
  },
];
