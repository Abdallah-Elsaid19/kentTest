// Product copy and cover associations extracted from kbc_bookshop.html.
export type BookCategory = "all" | "level4" | "level6" | "social";
export interface Book {
  id: string;
  title: string;
  kicker: string;
  description: string;
  detailDescription: string;
  categories: Exclude<BookCategory, "all">[];
  searchTerms: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export const bookshopSeo = {
  title: "Kent Business College Bookshop",
  description: "Kent Business College Bookshop — marketing handbooks and learning resources.",
};

export const bookshopHero = {
  cover: {
    image: "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/d0589fa8f0be41f2864944972b4dc1ef.webp",
    imageAlt: "Marketing Strategy and Planning handbook framed by purple and gold olive branches",
    imageWidth: 1292,
    imageHeight: 1218,
  },
  eyebrow: "Kent Business College",
  title: "KBC Bookshop",
  description: "Explore professionally designed marketing handbooks and practical learning resources for apprentices, managers and working professionals.",
  actions: [
    { label: "Browse latest releases", href: "#releases" },
    { label: "View featured title", href: "#featured" },
  ],
};

export const featuredTitle = {
  bookId: "strategy",
  eyebrow: "Featured",
  badge: "Featured title",
  description: "A practical handbook for structured marketing thinking, strategic planning and applied workplace learning.",
  copy: "For Marketing Executive Level 4 and Marketing Manager Level 6 learners. Developed as a clear, practical guide with a strong professional focus.",
};

export const appliedLearning = {
  mark: "KBC",
  title: "Built for applied learning.",
  description: "These handbooks are designed to support structured study, workplace application and programme delivery across marketing pathways.",
};

export const catalogue = {
  eyebrow: "Book catalogue",
  title: "Latest releases",
  description: "Browse the current handbook collection. Use the search box to find a title.",
  searchLabel: "Search books",
  searchPlaceholder: "Search books…",
  detailsAction: "Details & pricing",
  requestAction: "Request a copy",
  requestHref: "/contact",
  emptyTitle: "No books found",
  emptyDescription: "Try another search.",
  resetLabel: "Clear search",
};

export const bookCategories = [
  { key: "all", label: "All" },
  { key: "level4", label: "Level 4" },
  { key: "level6", label: "Level 6" },
  { key: "social", label: "Social media" },
] as const satisfies readonly { key: BookCategory; label: string }[];

export const bookMetadata = [
  { label: "Format", value: "Handbook" },
  { label: "Availability", value: "Contact KBC" },
  { label: "Pricing", value: "On request" },
] as const;

export const cohortCta = {
  title: "Need a handbook for your cohort?",
  backLabel: "Back to top",
};

export const books: readonly Book[] = [
  {
    "id": "social",
    "title": "Social Media — Marketing Executive Handbook",
    "kicker": "Marketing Executive · Level 4",
    "description": "A focused handbook for social media marketing learning, structured around practical professional development.",
    "detailDescription": "A focused handbook for social media marketing learning and practical professional development.",
    "categories": [
      "level4",
      "social"
    ],
    "searchTerms": "social media marketing executive handbook level 4",
    "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/a6f2eabd6d8a47b6a2844dca0d7fae06.webp",
    "imageAlt": "Social Media Marketing Executive Handbook 3D book",
    "imageWidth": 1122,
    "imageHeight": 1402
  },
  {
    "id": "strategy",
    "title": "Marketing Strategy & Planning",
    "kicker": "Marketing · Levels 4 & 6",
    "description": "Strategic thinking, planning structure and practical marketing application for executive and manager pathways.",
    "detailDescription": "A practical guide to strategic marketing thinking, planning and applied workplace learning for executive and manager pathways.",
    "categories": [
      "level4",
      "level6"
    ],
    "searchTerms": "marketing strategy planning marketing executive manager",
    "image": "https://jokdxsdbxorzciulkdyl.supabase.co/storage/v1/object/public/images/2690dd5dafe74a679b3f56f3f268b33f.webp",
    "imageAlt": "Marketing Strategy and Planning 3D book",
    "imageWidth": 1122,
    "imageHeight": 1402
  }
];
