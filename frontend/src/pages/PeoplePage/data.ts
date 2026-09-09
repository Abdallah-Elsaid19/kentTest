export type Expert = {
  id: string;
  name: string;
  role: string;
  organisation: string;
  bio: string;
  image: string;
  linkedIn: string;
  credentials: string;
  expertise: string[];
  profile: string[];
  highlights: string[];
};

export const peopleHeroImage = ("{{cms:experts.pages_people_page_data_people_hero_image.text_001}}" as string);
export const amgadHeroImage = ("{{cms:experts.pages_people_page_data_amgad_hero_image.text_002}}" as string);

export const experts: Expert[] = [
  {
    id: "stephen-jenner",
    name: ("{{cms:experts.pages_people_page_data_experts.name_003}}" as string),
    role: ("{{cms:experts.pages_people_page_data_experts.role_004}}" as string),
    organisation: ("{{cms:experts.pages_people_page_data_experts.organisation_005}}" as string),
    bio: ("{{cms:experts.pages_people_page_data_experts.bio_006}}" as string),
    image: ("{{cms:experts.pages_people_page_data_experts.image_007}}" as string),
    linkedIn: "https://www.linkedin.com/in/stephen-jenner-b8890213/",
    credentials: ("{{cms:experts.pages_people_page_data_experts.credentials_008}}" as string),
    expertise: [("{{cms:experts.pages_people_page_data_experts.expertise_009}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_010}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_011}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_012}}" as string)],
    profile: [
      ("{{cms:experts.pages_people_page_data_experts.profile_013}}" as string),
      ("{{cms:experts.pages_people_page_data_experts.profile_014}}" as string),
      ("{{cms:experts.pages_people_page_data_experts.profile_015}}" as string),
    ],
    highlights: [("{{cms:experts.pages_people_page_data_experts.highlights_016}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_017}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_018}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_019}}" as string)],
  },
  {
    id: "ray-mead",
    name: ("{{cms:experts.pages_people_page_data_experts.name_020}}" as string),
    role: ("{{cms:experts.pages_people_page_data_experts.role_021}}" as string),
    organisation: ("{{cms:experts.pages_people_page_data_experts.organisation_022}}" as string),
    bio: ("{{cms:experts.pages_people_page_data_experts.bio_023}}" as string),
    image: ("{{cms:experts.pages_people_page_data_experts.image_024}}" as string),
    linkedIn: "https://www.linkedin.com/in/raymead/",
    credentials: ("{{cms:experts.pages_people_page_data_experts.credentials_025}}" as string),
    expertise: [("{{cms:experts.pages_people_page_data_experts.expertise_026}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_027}}" as string), "Transformation", ("{{cms:experts.pages_people_page_data_experts.expertise_028}}" as string)],
    profile: [
      ("{{cms:experts.pages_people_page_data_experts.profile_029}}" as string),
      ("{{cms:experts.pages_people_page_data_experts.profile_030}}" as string),
      ("{{cms:experts.pages_people_page_data_experts.profile_031}}" as string),
    ],
    highlights: [("{{cms:experts.pages_people_page_data_experts.highlights_032}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_033}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_034}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_035}}" as string)],
  },
  {
    id: "amgad-badewi",
    name: ("{{cms:experts.pages_people_page_data_experts.name_036}}" as string),
    role: ("{{cms:experts.pages_people_page_data_experts.role_037}}" as string),
    organisation: ("{{cms:experts.pages_people_page_data_experts.organisation_038}}" as string),
    bio: ("{{cms:experts.pages_people_page_data_experts.bio_039}}" as string),
    image: ("{{cms:experts.pages_people_page_data_experts.image_040}}" as string),
    linkedIn: "https://www.linkedin.com/in/amgadbadewi/",
    credentials: ("{{cms:experts.pages_people_page_data_experts.credentials_041}}" as string),
    expertise: [("{{cms:experts.pages_people_page_data_experts.expertise_042}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_043}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_044}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_045}}" as string)],
    profile: [
      ("{{cms:experts.pages_people_page_data_experts.profile_046}}" as string),
      ("{{cms:experts.pages_people_page_data_experts.profile_047}}" as string),
      ("{{cms:experts.pages_people_page_data_experts.profile_048}}" as string),
    ],
    highlights: [("{{cms:experts.pages_people_page_data_experts.highlights_049}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_050}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_051}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_052}}" as string)],
  },
  {
    id: "steven-wake",
    name: ("{{cms:experts.pages_people_page_data_experts.name_053}}" as string),
    role: ("{{cms:experts.pages_people_page_data_experts.role_054}}" as string),
    organisation: ("{{cms:experts.pages_people_page_data_experts.organisation_055}}" as string),
    bio: ("{{cms:experts.pages_people_page_data_experts.bio_056}}" as string),
    image: ("{{cms:experts.pages_people_page_data_experts.image_057}}" as string),
    linkedIn: "https://www.linkedin.com/in/steve-wake-00636710/",
    credentials: ("{{cms:experts.pages_people_page_data_experts.credentials_058}}" as string),
    expertise: [("{{cms:experts.pages_people_page_data_experts.expertise_059}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_060}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_061}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_062}}" as string)],
    profile: [
      ("{{cms:experts.pages_people_page_data_experts.profile_063}}" as string),
      ("{{cms:experts.pages_people_page_data_experts.profile_064}}" as string),
      ("{{cms:experts.pages_people_page_data_experts.profile_065}}" as string),
    ],
    highlights: [("{{cms:experts.pages_people_page_data_experts.highlights_066}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_067}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_068}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_069}}" as string)],
  },
  {
    id: "andrew-millington",
    name: ("{{cms:experts.pages_people_page_data_experts.name_070}}" as string),
    role: ("{{cms:experts.pages_people_page_data_experts.role_071}}" as string),
    organisation: ("{{cms:experts.pages_people_page_data_experts.organisation_072}}" as string),
    bio: ("{{cms:experts.pages_people_page_data_experts.bio_073}}" as string),
    image: ("{{cms:experts.pages_people_page_data_experts.image_074}}" as string),
    linkedIn: "https://www.linkedin.com/in/andrew-millington-7087711/",
    credentials: ("{{cms:experts.pages_people_page_data_experts.credentials_075}}" as string),
    expertise: [("{{cms:experts.pages_people_page_data_experts.expertise_076}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_077}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_078}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_079}}" as string)],
    profile: [
      ("{{cms:experts.pages_people_page_data_experts.profile_080}}" as string),
      ("{{cms:experts.pages_people_page_data_experts.profile_081}}" as string),
      ("{{cms:experts.pages_people_page_data_experts.profile_082}}" as string),
    ],
    highlights: [("{{cms:experts.pages_people_page_data_experts.highlights_083}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_084}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_085}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_086}}" as string)],
  },
  {
    id: "femi-falodun",
    name: ("{{cms:experts.pages_people_page_data_experts.name_087}}" as string),
    role: ("{{cms:experts.pages_people_page_data_experts.role_088}}" as string),
    organisation: ("{{cms:experts.pages_people_page_data_experts.organisation_089}}" as string),
    bio: ("{{cms:experts.pages_people_page_data_experts.bio_090}}" as string),
    image: ("{{cms:experts.pages_people_page_data_experts.image_091}}" as string),
    linkedIn: "https://www.linkedin.com/in/femifalodun/",
    credentials: ("{{cms:experts.pages_people_page_data_experts.credentials_092}}" as string),
    expertise: [("{{cms:experts.pages_people_page_data_experts.expertise_093}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_094}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_095}}" as string), ("{{cms:experts.pages_people_page_data_experts.expertise_096}}" as string)],
    profile: [
      ("{{cms:experts.pages_people_page_data_experts.profile_097}}" as string),
      ("{{cms:experts.pages_people_page_data_experts.profile_098}}" as string),
      ("{{cms:experts.pages_people_page_data_experts.profile_099}}" as string),
    ],
    highlights: [("{{cms:experts.pages_people_page_data_experts.highlights_100}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_101}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_102}}" as string), ("{{cms:experts.pages_people_page_data_experts.highlights_103}}" as string)],
  },
];

export function getExpert(id: string | undefined) {
  return experts.find((expert) => expert.id === id);
}
