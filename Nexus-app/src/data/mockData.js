// ─── USERS ───────────────────────────────────────────────────────────────────
export const USERS = {
  1: {
    id: 1,
    name: "John clane",
    handle: "alexr",
    avatar: "AR",
    bio: "Full-stack dev. Coffee addict. ☕",
    following: 128,
    followers: 340,
  },
  2: {
    id: 2,
    name: "Priya Mehta",
    handle: "priyam",
    avatar: "PM",
    bio: "UI/UX designer & React enthusiast 🎨",
    following: 94,
    followers: 512,
  },
  3: {
    id: 3,
    name: "James Bourne",
    handle: "jwu",
    avatar: "JW",
    bio: "Building things on the internet 🛠️",
    following: 60,
    followers: 199,
  },
};

// ─── SEED POSTS ──────────────────────────────────────────────────────────────
export const SEED_POSTS = [
  {
    id: 1,
    userId: 2,
    content:
      "Just shipped a new design system for our React app. Dark mode, tokens, the works 🎉",
    likes: 24,
    comments: [],
    time: "2h ago",
    image: null,
  },
  {
    id: 2,
    userId: 3,
    content:
      "Hot take: useReducer is underrated for medium complexity state. Context + useReducer > Redux for most apps.",
    likes: 41,
    comments: [{ id: 1, userId: 1, text: "100% agree. Less boilerplate too." }],
    time: "4h ago",
    image: null,
  },
  {
    id: 3,
    userId: 1,
    content:
      "React Router v7 is actually really clean. Loader functions feel like magic ✨",
    likes: 18,
    comments: [],
    time: "6h ago",
    image: null,
  },
  {
    id: 4,
    userId: 2,
    content:
      "Reminder: CSS :has() selector is a game changer. Parent selection in CSS is finally here.",
    likes: 57,
    comments: [{ id: 2, userId: 3, text: "Been waiting for this for years!" }],
    time: "1d ago",
    image: null,
  },
];
