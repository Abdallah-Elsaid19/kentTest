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
  title: ("{{cms:bookshop.pages_bookshop_page_data_bookshop_seo.title_001}}" as string),
  description: ("{{cms:bookshop.pages_bookshop_page_data_bookshop_seo.description_002}}" as string),
};

export const bookshopHero = {
  cover: {
    image: ("{{cms:bookshop.pages_bookshop_page_data_bookshop_hero.cover_image_003}}" as string),
    imageAlt: ("{{cms:bookshop.pages_bookshop_page_data_bookshop_hero.cover_image_alt_004}}" as string),
    imageWidth: 1292,
    imageHeight: 1218,
  },
  eyebrow: ("{{cms:bookshop.pages_bookshop_page_data_bookshop_hero.eyebrow_005}}" as string),
  title: ("{{cms:bookshop.pages_bookshop_page_data_bookshop_hero.title_006}}" as string),
  description: ("{{cms:bookshop.pages_bookshop_page_data_bookshop_hero.description_007}}" as string),
  actions: [
    { label: ("{{cms:bookshop.pages_bookshop_page_data_bookshop_hero.actions_label_008}}" as string), href: ("{{cms:bookshop.pages_bookshop_page_data_bookshop_hero.actions_href_009}}" as string) },
  ],
};

export const featuredTitle = {
  bookId: "strategy",
  eyebrow: ("{{cms:bookshop.pages_bookshop_page_data_featured_title.eyebrow_012}}" as string),
  badge: ("{{cms:bookshop.pages_bookshop_page_data_featured_title.badge_013}}" as string),
  description: ("{{cms:bookshop.pages_bookshop_page_data_featured_title.description_014}}" as string),
  copy: ("{{cms:bookshop.pages_bookshop_page_data_featured_title.copy_015}}" as string),
};

export const appliedLearning = {
  mark: "KBC",
  title: ("{{cms:bookshop.pages_bookshop_page_data_applied_learning.title_016}}" as string),
  description: ("{{cms:bookshop.pages_bookshop_page_data_applied_learning.description_017}}" as string),
};

export const catalogue = {
  eyebrow: ("{{cms:bookshop.pages_bookshop_page_data_catalogue.eyebrow_018}}" as string),
  title: ("{{cms:bookshop.pages_bookshop_page_data_catalogue.title_019}}" as string),
  description: ("{{cms:bookshop.pages_bookshop_page_data_catalogue.description_020}}" as string),
  searchLabel: ("{{cms:bookshop.pages_bookshop_page_data_catalogue.search_label_021}}" as string),
  searchPlaceholder: ("{{cms:bookshop.pages_bookshop_page_data_catalogue.search_placeholder_022}}" as string),
  detailsAction: ("{{cms:bookshop.pages_bookshop_page_data_catalogue.details_action_023}}" as string),
  requestAction: ("{{cms:bookshop.pages_bookshop_page_data_catalogue.request_action_024}}" as string),
  requestHref: "https://mail.google.com/mail/?view=cm&fs=1&to=office%40kentbusinesscollege.org",
  emptyTitle: ("{{cms:bookshop.pages_bookshop_page_data_catalogue.empty_title_026}}" as string),
  emptyDescription: ("{{cms:bookshop.pages_bookshop_page_data_catalogue.empty_description_027}}" as string),
  resetLabel: ("{{cms:bookshop.pages_bookshop_page_data_catalogue.reset_label_028}}" as string),
};

export const bookCategories = [
  { key: "all", label: ("{{cms:bookshop.pages_bookshop_page_data_book_categories.label_029}}" as string) },
  { key: "level4", label: ("{{cms:bookshop.pages_bookshop_page_data_book_categories.label_030}}" as string) },
  { key: "level6", label: ("{{cms:bookshop.pages_bookshop_page_data_book_categories.label_031}}" as string) },
  { key: "social", label: ("{{cms:bookshop.pages_bookshop_page_data_book_categories.label_032}}" as string) },
] as const satisfies readonly { key: BookCategory; label: string }[];

export const bookMetadata = [
  { label: ("{{cms:bookshop.pages_bookshop_page_data_book_metadata.label_033}}" as string), value: "Handbook" },
  { label: ("{{cms:bookshop.pages_bookshop_page_data_book_metadata.label_034}}" as string), value: "Contact KBC" },
  { label: ("{{cms:bookshop.pages_bookshop_page_data_book_metadata.label_035}}" as string), value: "On request" },
] as const;

export const cohortCta = {
  title: ("{{cms:bookshop.pages_bookshop_page_data_cohort_cta.title_036}}" as string),
  backLabel: ("{{cms:bookshop.pages_bookshop_page_data_cohort_cta.back_label_037}}" as string),
};

export const books: readonly Book[] = [
  {
    "id": "social",
    "title": ("{{cms:bookshop.pages_bookshop_page_data_books.title_038}}" as string),
    "kicker": ("{{cms:bookshop.pages_bookshop_page_data_books.kicker_039}}" as string),
    "description": ("{{cms:bookshop.pages_bookshop_page_data_books.description_040}}" as string),
    "detailDescription": ("{{cms:bookshop.pages_bookshop_page_data_books.detail_description_041}}" as string),
    "categories": [
      "level4",
      "social"
    ],
    "searchTerms": ("{{cms:bookshop.pages_bookshop_page_data_books.search_terms_042}}" as string),
    "image": ("{{cms:bookshop.pages_bookshop_page_data_books.image_043}}" as string),
    "imageAlt": ("{{cms:bookshop.pages_bookshop_page_data_books.image_alt_044}}" as string),
    "imageWidth": 1122,
    "imageHeight": 1402
  },
  {
    "id": "strategy",
    "title": ("{{cms:bookshop.pages_bookshop_page_data_books.title_045}}" as string),
    "kicker": ("{{cms:bookshop.pages_bookshop_page_data_books.kicker_046}}" as string),
    "description": ("{{cms:bookshop.pages_bookshop_page_data_books.description_047}}" as string),
    "detailDescription": ("{{cms:bookshop.pages_bookshop_page_data_books.detail_description_048}}" as string),
    "categories": [
      "level4",
      "level6"
    ],
    "searchTerms": ("{{cms:bookshop.pages_bookshop_page_data_books.search_terms_049}}" as string),
    "image": ("{{cms:bookshop.pages_bookshop_page_data_books.image_050}}" as string),
    "imageAlt": ("{{cms:bookshop.pages_bookshop_page_data_books.image_alt_051}}" as string),
    "imageWidth": 1122,
    "imageHeight": 1402
  }
];
