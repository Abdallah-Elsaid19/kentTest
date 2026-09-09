// Content extracted from the supplied Readdy News reference; page label renamed at the user's request.
// See tests/fixtures/news-source.json for source copy and image associations.

export const newsPath = "/blogs-and-news";

export const newsCategories = ["All","News","Blog","Case Studies","Guides","Events"] as const;
export type NewsCategory = typeof newsCategories[number];

export interface NewsArticle {
  id: string;
  category: Exclude<NewsCategory, "All">;
  featured?: boolean;
  title: string;
  excerpt: string;
  body: readonly string[];
  keyPoints?: readonly string[];
  date: string;
  publishedAt: string;
  readTime: string;
  author: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  href: string;
}

export const newsHero = {
  "eyebrow": ("{{cms:news.pages_blog_page_data_news_hero.eyebrow_001}}" as string),
  "title": ("{{cms:news.pages_blog_page_data_news_hero.title_002}}" as string),
  "titleAccent": ("{{cms:news.pages_blog_page_data_news_hero.title_accent_003}}" as string),
  "description": ("{{cms:news.pages_blog_page_data_news_hero.description_004}}" as string),
  "image": ("{{cms:news.pages_blog_page_data_news_hero.image_005}}" as string),
  "imageWidth": 1792,
  "imageHeight": 1000
};

export const newsCatalogue = {
  "eyebrow": ("{{cms:news.pages_blog_page_data_news_catalogue.eyebrow_006}}" as string),
  "title": ("{{cms:news.pages_blog_page_data_news_catalogue.title_007}}" as string),
  "readAction": ("{{cms:news.pages_blog_page_data_news_catalogue.read_action_008}}" as string),
  "empty": ("{{cms:news.pages_blog_page_data_news_catalogue.empty_009}}" as string)
};

export const newsNewsletter = {
  "eyebrow": ("{{cms:news.pages_blog_page_data_news_newsletter.eyebrow_010}}" as string),
  "title": ("{{cms:news.pages_blog_page_data_news_newsletter.title_011}}" as string),
  "description": ("{{cms:news.pages_blog_page_data_news_newsletter.description_012}}" as string),
  "label": ("{{cms:news.pages_blog_page_data_news_newsletter.label_013}}" as string),
  "placeholder": ("{{cms:news.pages_blog_page_data_news_newsletter.placeholder_014}}" as string),
  "action": ("{{cms:news.pages_blog_page_data_news_newsletter.action_015}}" as string),
  "success": ("{{cms:news.pages_blog_page_data_news_newsletter.success_016}}" as string)
};

export const newsCta = {
  "eyebrow": ("{{cms:news.pages_blog_page_data_news_cta.eyebrow_017}}" as string),
  "title": ("{{cms:news.pages_blog_page_data_news_cta.title_018}}" as string),
  "description": ("{{cms:news.pages_blog_page_data_news_cta.description_019}}" as string),
  "actions": [
    {
      "label": ("{{cms:news.pages_blog_page_data_news_cta.actions_label_020}}" as string),
      "href": ("{{cms:news.pages_blog_page_data_news_cta.actions_href_021}}" as string)
    },
    {
      "label": ("{{cms:news.pages_blog_page_data_news_cta.actions_label_022}}" as string),
      "href": ("{{cms:news.pages_blog_page_data_news_cta.actions_href_023}}" as string)
    }
  ]
};

export const newsDetail = {
  "keyPoints": ("{{cms:news.pages_blog_page_data_news_detail.key_points_024}}" as string),
  "relatedEyebrow": ("{{cms:news.pages_blog_page_data_news_detail.related_eyebrow_025}}" as string),
  "relatedTitle": ("{{cms:news.pages_blog_page_data_news_detail.related_title_026}}" as string),
  "allAction": ("{{cms:news.pages_blog_page_data_news_detail.all_action_027}}" as string),
  "notFoundTitle": ("{{cms:news.pages_blog_page_data_news_detail.not_found_title_028}}" as string),
  "notFoundDescription": ("{{cms:news.pages_blog_page_data_news_detail.not_found_description_029}}" as string),
  "backAction": ("{{cms:news.pages_blog_page_data_news_detail.back_action_030}}" as string)
};

export const newsArticles: readonly NewsArticle[] = [
  {
    "id": "pc-commercial-access",
    "category": "News",
    "featured": true,
    "title": ("{{cms:news.pages_blog_page_data_news_articles.title_031}}" as string),
    "excerpt": ("{{cms:news.pages_blog_page_data_news_articles.excerpt_032}}" as string),
    "body": [
      ("{{cms:news.pages_blog_page_data_news_articles.body_033}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_034}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_035}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_036}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_037}}" as string)
    ],
    "keyPoints": [
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_038}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_039}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_040}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_041}}" as string)
    ],
    "date": "21 Aug 2026",
    "readTime": ("{{cms:news.pages_blog_page_data_news_articles.read_time_042}}" as string),
    "author": ("{{cms:news.pages_blog_page_data_news_articles.author_043}}" as string),
    "image": ("{{cms:news.pages_blog_page_data_news_articles.image_044}}" as string),
    "imageWidth": 1350,
    "imageHeight": 900,
    "publishedAt": "2026-08-21",
    "href": ("{{cms:news.pages_blog_page_data_news_articles.href_045}}" as string)
  },
  {
    "id": "dfe-funding-explained",
    "category": "Blog",
    "title": ("{{cms:news.pages_blog_page_data_news_articles.title_046}}" as string),
    "excerpt": ("{{cms:news.pages_blog_page_data_news_articles.excerpt_047}}" as string),
    "body": [
      ("{{cms:news.pages_blog_page_data_news_articles.body_048}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_049}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_050}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_051}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_052}}" as string)
    ],
    "keyPoints": [
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_053}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_054}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_055}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_056}}" as string)
    ],
    "date": "18 Aug 2026",
    "readTime": ("{{cms:news.pages_blog_page_data_news_articles.read_time_057}}" as string),
    "author": ("{{cms:news.pages_blog_page_data_news_articles.author_058}}" as string),
    "image": ("{{cms:news.pages_blog_page_data_news_articles.image_059}}" as string),
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-08-18",
    "href": ("{{cms:news.pages_blog_page_data_news_articles.href_060}}" as string)
  },
  {
    "id": "chpp-preparation",
    "category": "Guides",
    "title": ("{{cms:news.pages_blog_page_data_news_articles.title_061}}" as string),
    "excerpt": ("{{cms:news.pages_blog_page_data_news_articles.excerpt_062}}" as string),
    "body": [
      ("{{cms:news.pages_blog_page_data_news_articles.body_063}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_064}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_065}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_066}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_067}}" as string)
    ],
    "keyPoints": [
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_068}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_069}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_070}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_071}}" as string)
    ],
    "date": "14 Aug 2026",
    "readTime": ("{{cms:news.pages_blog_page_data_news_articles.read_time_072}}" as string),
    "author": ("{{cms:news.pages_blog_page_data_news_articles.author_073}}" as string),
    "image": ("{{cms:news.pages_blog_page_data_news_articles.image_074}}" as string),
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-08-14",
    "href": ("{{cms:news.pages_blog_page_data_news_articles.href_075}}" as string)
  },
  {
    "id": "forecasting-capability",
    "category": "Case Studies",
    "title": ("{{cms:news.pages_blog_page_data_news_articles.title_076}}" as string),
    "excerpt": ("{{cms:news.pages_blog_page_data_news_articles.excerpt_077}}" as string),
    "body": [
      ("{{cms:news.pages_blog_page_data_news_articles.body_078}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_079}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_080}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_081}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_082}}" as string)
    ],
    "date": "11 Aug 2026",
    "readTime": ("{{cms:news.pages_blog_page_data_news_articles.read_time_083}}" as string),
    "author": ("{{cms:news.pages_blog_page_data_news_articles.author_084}}" as string),
    "image": ("{{cms:news.pages_blog_page_data_news_articles.image_085}}" as string),
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-08-11",
    "href": ("{{cms:news.pages_blog_page_data_news_articles.href_086}}" as string)
  },
  {
    "id": "marketing-progression",
    "category": "Blog",
    "title": ("{{cms:news.pages_blog_page_data_news_articles.title_087}}" as string),
    "excerpt": ("{{cms:news.pages_blog_page_data_news_articles.excerpt_088}}" as string),
    "body": [
      ("{{cms:news.pages_blog_page_data_news_articles.body_089}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_090}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_091}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_092}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_093}}" as string)
    ],
    "keyPoints": [
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_094}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_095}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_096}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_097}}" as string)
    ],
    "date": "8 Aug 2026",
    "readTime": ("{{cms:news.pages_blog_page_data_news_articles.read_time_098}}" as string),
    "author": ("{{cms:news.pages_blog_page_data_news_articles.author_099}}" as string),
    "image": ("{{cms:news.pages_blog_page_data_news_articles.image_100}}" as string),
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-08-08",
    "href": ("{{cms:news.pages_blog_page_data_news_articles.href_101}}" as string)
  },
  {
    "id": "ipc-bursary-explained",
    "category": "News",
    "title": ("{{cms:news.pages_blog_page_data_news_articles.title_102}}" as string),
    "excerpt": ("{{cms:news.pages_blog_page_data_news_articles.excerpt_103}}" as string),
    "body": [
      ("{{cms:news.pages_blog_page_data_news_articles.body_104}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_105}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_106}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_107}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_108}}" as string)
    ],
    "keyPoints": [
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_109}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_110}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_111}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_112}}" as string)
    ],
    "date": "4 Aug 2026",
    "readTime": ("{{cms:news.pages_blog_page_data_news_articles.read_time_113}}" as string),
    "author": ("{{cms:news.pages_blog_page_data_news_articles.author_114}}" as string),
    "image": ("{{cms:news.pages_blog_page_data_news_articles.image_115}}" as string),
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-08-04",
    "href": ("{{cms:news.pages_blog_page_data_news_articles.href_116}}" as string)
  },
  {
    "id": "employer-das-guide",
    "category": "Guides",
    "title": ("{{cms:news.pages_blog_page_data_news_articles.title_117}}" as string),
    "excerpt": ("{{cms:news.pages_blog_page_data_news_articles.excerpt_118}}" as string),
    "body": [
      ("{{cms:news.pages_blog_page_data_news_articles.body_119}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_120}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_121}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_122}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_123}}" as string)
    ],
    "keyPoints": [
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_124}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_125}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_126}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_127}}" as string)
    ],
    "date": "30 Jul 2026",
    "readTime": ("{{cms:news.pages_blog_page_data_news_articles.read_time_128}}" as string),
    "author": ("{{cms:news.pages_blog_page_data_news_articles.author_129}}" as string),
    "image": ("{{cms:news.pages_blog_page_data_news_articles.image_130}}" as string),
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-07-30",
    "href": ("{{cms:news.pages_blog_page_data_news_articles.href_131}}" as string)
  },
  {
    "id": "leadership-development",
    "category": "Blog",
    "title": ("{{cms:news.pages_blog_page_data_news_articles.title_132}}" as string),
    "excerpt": ("{{cms:news.pages_blog_page_data_news_articles.excerpt_133}}" as string),
    "body": [
      ("{{cms:news.pages_blog_page_data_news_articles.body_134}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_135}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_136}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_137}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_138}}" as string)
    ],
    "keyPoints": [
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_139}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_140}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_141}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_142}}" as string)
    ],
    "date": "25 Jul 2026",
    "readTime": ("{{cms:news.pages_blog_page_data_news_articles.read_time_143}}" as string),
    "author": ("{{cms:news.pages_blog_page_data_news_articles.author_144}}" as string),
    "image": ("{{cms:news.pages_blog_page_data_news_articles.image_145}}" as string),
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-07-25",
    "href": ("{{cms:news.pages_blog_page_data_news_articles.href_146}}" as string)
  },
  {
    "id": "info-session-apm",
    "category": "Events",
    "title": ("{{cms:news.pages_blog_page_data_news_articles.title_147}}" as string),
    "excerpt": ("{{cms:news.pages_blog_page_data_news_articles.excerpt_148}}" as string),
    "body": [
      ("{{cms:news.pages_blog_page_data_news_articles.body_149}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_150}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_151}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_152}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_153}}" as string)
    ],
    "keyPoints": [
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_154}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_155}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_156}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_157}}" as string)
    ],
    "date": "17 Aug 2026",
    "readTime": ("{{cms:news.pages_blog_page_data_news_articles.read_time_158}}" as string),
    "author": ("{{cms:news.pages_blog_page_data_news_articles.author_159}}" as string),
    "image": ("{{cms:news.pages_blog_page_data_news_articles.image_160}}" as string),
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-08-17",
    "href": ("{{cms:news.pages_blog_page_data_news_articles.href_161}}" as string)
  },
  {
    "id": "earned-value-matters",
    "category": "Blog",
    "title": ("{{cms:news.pages_blog_page_data_news_articles.title_162}}" as string),
    "excerpt": ("{{cms:news.pages_blog_page_data_news_articles.excerpt_163}}" as string),
    "body": [
      ("{{cms:news.pages_blog_page_data_news_articles.body_164}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_165}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_166}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_167}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.body_168}}" as string)
    ],
    "keyPoints": [
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_169}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_170}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_171}}" as string),
      ("{{cms:news.pages_blog_page_data_news_articles.key_points_172}}" as string)
    ],
    "date": "20 Jul 2026",
    "readTime": ("{{cms:news.pages_blog_page_data_news_articles.read_time_173}}" as string),
    "author": ("{{cms:news.pages_blog_page_data_news_articles.author_174}}" as string),
    "image": ("{{cms:news.pages_blog_page_data_news_articles.image_175}}" as string),
    "imageWidth": 900,
    "imageHeight": 600,
    "publishedAt": "2026-07-20",
    "href": ("{{cms:news.pages_blog_page_data_news_articles.href_176}}" as string)
  }
];
