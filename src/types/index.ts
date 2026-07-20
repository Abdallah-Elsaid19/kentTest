export interface College {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  programmes: string[];
  image: string;
  color: string;
}

export interface Programme {
  id: string;
  title: string;
  slug: string;
  collegeId: string;
  collegeName: string;
  level: string;
  duration: string;
  fundingStatus: "Fully Funded" | "Partially Funded" | "Self-Funded";
  qualification: string;
  professionalRecognition: string[];
  description: string;
  image: string;
  features: string[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  outline: string[];
  duration: string;
  level: string;
  image?: string;
}

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  isOnline: boolean;
  registrationUrl?: string;
  detailsUrl?: string;
  status: "upcoming" | "ended";
  image: string;
  description: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organisation: string;
  quote: string;
  image?: string;
  rating?: number;
}

export interface CaseStudy {
  id: string;
  name: string;
  role: string;
  programme: string;
  quote: string;
  image?: string;
  slug: string;
  linkedinUrl?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedinUrl?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  children?: NavigationItem[];
  megaMenu?: boolean;
  external?: boolean;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}

export interface ContactEnquiry {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: "general" | "employer" | "course" | "support";
}

export interface Application {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  programmeId?: string;
  employer?: string;
  jobTitle?: string;
  status?: "draft" | "submitted" | "reviewing" | "accepted" | "rejected";
}

export interface SupportMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface Pagination {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface FilterState {
  search: string;
  college: string;
  level: string;
  funding: string;
  category: string;
}

export interface Achievement {
  id: string;
  name: string;
  role: string;
  company: string;
  programme: string;
  linkedinUrl?: string;
  image?: string;
}