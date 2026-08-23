import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";

const ArticlePage = lazy(() => import("@/pages/ArticlePage/page"));
const ApprenticeStoriesPage = lazy(() => import("@/pages/ApprenticeStoriesPage/page"));
const ApprenticeStoryDetailPage = lazy(() => import("@/pages/ApprenticeStoryDetailPage/page"));
const AboutPage = lazy(() => import("@/pages/AboutPage/page"));
const BlogPage = lazy(() => import("@/pages/BlogPage/page"));
const BookConsultationPage = lazy(() => import("@/pages/BookConsultationPage/page"));
const CollegeDetailPage = lazy(() => import("@/pages/CollegeDetailPage/page"));
const CollegesPage = lazy(() => import("@/pages/CollegesPage/page"));
const CommercePage = lazy(() => import("@/pages/CommercePage/page"));
const ContentPage = lazy(() => import("@/pages/ContentPage/page"));
const EventDetailPage = lazy(() => import("@/pages/EventDetailPage/page"));
const EventsPage = lazy(() => import("@/pages/EventsPage/page"));
const EmployerAgreementPage = lazy(() => import("@/pages/EmployerAgreementPage/page"));
const FormPage = lazy(() => import("@/pages/FormPage/page"));
const HomePage = lazy(() => import("@/pages/home/page"));
const LearnersHomePage = lazy(() => import("@/pages/home/learners/page"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/page"));
const PeoplePage = lazy(() => import("@/pages/PeoplePage/page"));
const ProgrammeDetailPage = lazy(() => import("@/pages/ProgrammeDetailPage/page"));
const ProgrammeListingPage = lazy(() => import("@/pages/ProgrammeListingPage/page"));
const SearchPage = lazy(() => import("@/pages/SearchPage/page"));
const StoriesPage = lazy(() => import("@/pages/StoriesPage/page"));
const StoryDetailPage = lazy(() => import("@/pages/StoryDetailPage/page"));

export const router = createBrowserRouter([
  { path: "/employer-agreement", element: <EmployerAgreementPage /> },
  { path: "/", element: <MainLayout />, children: [
    { index: true, element: <HomePage /> },
    { path: "learners", element: <LearnersHomePage /> },
    { path: "colleges", element: <CollegesPage /> },
    { path: "colleges/:collegeSlug", element: <CollegeDetailPage /> },
    { path: "programmes", element: <ProgrammeListingPage /> },
    { path: "programmes/:programmeSlug", element: <ProgrammeDetailPage /> },
    { path: "courses", element: <ContentPage slug="courses" /> },
    { path: "courses/:pageSlug", element: <ContentPage /> },
    { path: "events", element: <EventsPage /> },
    { path: "events/:eventSlug", element: <EventDetailPage /> },
    { path: "people", element: <PeoplePage /> },
    { path: "our-experts", element: <PeoplePage /> },
    { path: "star-learners", element: <StoriesPage /> },
    { path: "stories", element: <StoriesPage /> },
    { path: "stories/:storySlug", element: <StoryDetailPage /> },
    { path: "apprentices/stories", element: <ApprenticeStoriesPage /> },
    { path: "apprentices/stories/:storySlug", element: <ApprenticeStoryDetailPage /> },
    { path: "blog", element: <BlogPage /> },
    { path: "blog/:articleSlug", element: <ArticlePage /> },
    { path: "contact", element: <FormPage kind="contact" /> },
    { path: "support", element: <FormPage kind="support" /> },
    { path: "eligibility", element: <FormPage kind="eligibility" /> },
    { path: "apply", element: <Navigate to="/employer-agreement" replace /> },
    { path: "search", element: <SearchPage /> },
    { path: "store", element: <CommercePage title="Store" /> },
    { path: "cart", element: <CommercePage title="Cart" /> },
    { path: "checkout", element: <CommercePage title="Checkout" /> },
    { path: "privacy", element: <ContentPage slug="privacy-policy" /> },
    { path: "terms", element: <ContentPage slug="terms" /> },
    { path: "cookies", element: <ContentPage slug="cookie-policy" /> },
    { path: "book-session", element: <BookConsultationPage /> },
    { path: "book-consultation", element: <BookConsultationPage /> },
    { path: "about", element: <AboutPage /> },
    { path: "faq", element: <ContentPage slug="faq" /> },
    { path: "our-partners", element: <ContentPage slug="our-partners" /> },
    { path: "governance-board", element: <ContentPage slug="governance-board" /> },
    { path: "safeguarding-handbook", element: <ContentPage slug="safeguarding-handbook" /> },
    { path: "apprentices", element: <ContentPage slug="apprentices" /> },
    { path: "explore-jobs", element: <ContentPage slug="explore-jobs" /> },
    { path: "pages/:pageSlug", element: <ContentPage /> },
    { path: "*", element: <NotFoundPage /> },
  ]},
], { basename: __BASE_PATH__ });
