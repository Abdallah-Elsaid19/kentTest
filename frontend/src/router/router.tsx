import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";

const ArticlePage = lazy(() => import("@/pages/ArticlePage/page"));
const AssociateProjectManagerPage = lazy(() => import("@/pages/AssociateProjectManagerPage/page"));
const ApprenticeStoriesPage = lazy(() => import("@/pages/ApprenticeStoriesPage/page"));
const ApprenticeStoryDetailPage = lazy(() => import("@/pages/ApprenticeStoryDetailPage/page"));
const AboutPage = lazy(() => import("@/pages/AboutPage/page"));
const BlogPage = lazy(() => import("@/pages/BlogPage/page"));
const BookConsultationPage = lazy(() => import("@/pages/BookConsultationPage/page"));
const CollegeDetailPage = lazy(() => import("@/pages/CollegeDetailPage/page"));
const CollegesPage = lazy(() => import("@/pages/CollegesPage/page"));
const CommercePage = lazy(() => import("@/pages/CommercePage/page"));
const ConstructionInfrastructurePage = lazy(() => import("@/pages/ConstructionInfrastructurePage/page"));
const ContentPage = lazy(() => import("@/pages/ContentPage/page"));
const EventDetailPage = lazy(() => import("@/pages/EventDetailPage/page"));
const EventsPage = lazy(() => import("@/pages/EventsPage/page"));
const EmployerAgreementPage = lazy(() => import("@/pages/EmployerAgreementPage/page"));
const EnergyUtilitiesPage = lazy(() => import("@/pages/EnergyUtilitiesPage/page"));
const EngineeringManufacturingPage = lazy(() => import("@/pages/EngineeringManufacturingPage/page"));
const ExpertDetailPage = lazy(() => import("@/pages/ExpertDetailPage/page"));
const EmptyPage = lazy(() => import("@/pages/EmptyPage/page"));
const FormPage = lazy(() => import("@/pages/FormPage/page"));
const HomePage = lazy(() => import("@/pages/home/page"));
const InformationPage = lazy(() => import("@/pages/InformationPage/page"));
const LearnersHomePage = lazy(() => import("@/pages/home/learners/page"));
const LeadershipCollegePage = lazy(() => import("@/pages/LeadershipCollegePage/page"));
const MarketingCollegePage = lazy(() => import("@/pages/MarketingCollegePage/page"));
const MarketingManagerLevel6Page = lazy(() => import("@/pages/MarketingManagerLevel6Page/page"));
const MarketingProgrammePage = lazy(() => import("@/pages/MarketingProgrammePage/page"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/page"));
const PeoplePage = lazy(() => import("@/pages/PeoplePage/page"));
const ProgrammeDetailPage = lazy(() => import("@/pages/ProgrammeDetailPage/page"));
const ProgrammeListingPage = lazy(() => import("@/pages/ProgrammeListingPage/page"));
const ProjectControlsPage = lazy(() => import("@/pages/ProjectControlsPage/page"));
const PathwayPage = lazy(() => import("@/pages/PathwayPage/page"));
const SearchPage = lazy(() => import("@/pages/SearchPage/page"));
const SectorsPage = lazy(() => import("@/pages/SectorsPage/page"));
const SectorDetailPage = lazy(() => import("@/pages/SectorDetailPage/page"));
const StoriesPage = lazy(() => import("@/pages/StoriesPage/page"));
const StoryDetailPage = lazy(() => import("@/pages/StoryDetailPage/page"));

export const router = createBrowserRouter([
  { path: "/", element: <MainLayout />, children: [
    { index: true, element: <HomePage /> },
    { path: "learners", element: <LearnersHomePage /> },
    { path: "employer-agreement", element: <EmployerAgreementPage /> },
    { path: "employer-dashboard", element: <InformationPage kind="employerDashboard" /> },
    { path: "college-of-leadership", element: <LeadershipCollegePage /> },
    { path: "college-of-marketing", element: <MarketingCollegePage /> },
    { path: "marketing-executive-level-4", element: <MarketingProgrammePage /> },
    { path: "marketing-manager-level-6", element: <MarketingManagerLevel6Page /> },
    { path: "colleges", element: <CollegesPage /> },
    { path: "colleges/:collegeSlug", element: <CollegeDetailPage /> },
    { path: "programmes", element: <ProgrammeListingPage /> },
    { path: "programmes/:programmeSlug", element: <ProgrammeDetailPage /> },
    { path: "project-controls-professional-level-6", element: <ProjectControlsPage /> },
    { path: "project-controls-professional-level-6/:pathwaySlug", element: <PathwayPage /> },
    { path: "college-of-project-management", element: <EmptyPage /> },
    { path: "associate-project-manager-level-4", element: <AssociateProjectManagerPage /> },
    { path: "mba-diploma-level-7", element: <EmptyPage /> },
    { path: "strategic-management", element: <EmptyPage /> },
    { path: "human-resources", element: <EmptyPage /> },
    { path: "strategic-marketing", element: <EmptyPage /> },
    { path: "advanced-research-methods", element: <EmptyPage /> },
    { path: "strategic-leadership", element: <EmptyPage /> },
    { path: "strategic-financial-management", element: <EmptyPage /> },
    { path: "login-lms", element: <EmptyPage /> },
    { path: "login-aptem", element: <EmptyPage /> },
    { path: "video-library", element: <EmptyPage /> },
    { path: "social/:network", element: <EmptyPage /> },
    { path: "courses", element: <ContentPage slug="courses" /> },
    { path: "courses/:pageSlug", element: <ContentPage /> },
    { path: "events", element: <EventsPage /> },
    { path: "events/:eventSlug", element: <EventDetailPage /> },
    { path: "people", element: <PeoplePage /> },
    { path: "our-experts", element: <PeoplePage /> },
    { path: "our-experts/:expertSlug", element: <ExpertDetailPage /> },
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
    { path: "sectors", element: <SectorsPage /> },
    { path: "sectors/construction-infrastructure", element: <ConstructionInfrastructurePage /> },
    { path: "sectors/energy-utilities", element: <EnergyUtilitiesPage /> },
    { path: "sectors/engineering-advanced-manufacturing", element: <EngineeringManufacturingPage /> },
    { path: "sectors/:sectorSlug", element: <SectorDetailPage /> },
    { path: "store", element: <CommercePage title="Store" /> },
    { path: "cart", element: <CommercePage title="Cart" /> },
    { path: "checkout", element: <CommercePage title="Checkout" /> },
    { path: "privacy", element: <ContentPage slug="privacy-policy" /> },
    { path: "terms", element: <ContentPage slug="terms" /> },
    { path: "cookies", element: <ContentPage slug="cookie-policy" /> },
    { path: "book-session", element: <BookConsultationPage /> },
    { path: "book-consultation", element: <BookConsultationPage /> },
    { path: "about", element: <AboutPage /> },
    { path: "faq", element: <InformationPage kind="faq" /> },
    { path: "our-partners", element: <InformationPage kind="partners" /> },
    { path: "governance-board", element: <InformationPage kind="governance" /> },
    { path: "safeguarding-handbook", element: <InformationPage kind="safeguarding" /> },
    { path: "apprentices", element: <InformationPage kind="apprentices" /> },
    { path: "explore-jobs", element: <InformationPage kind="jobs" /> },
    { path: "pages/:pageSlug", element: <ContentPage /> },
    { path: "*", element: <NotFoundPage /> },
  ]},
], { basename: __BASE_PATH__ });
