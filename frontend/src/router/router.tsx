import { ManagedPage } from "@/features/cms/publicContent";
import { lazy } from "react";
import { createBrowserRouter, Navigate, redirect } from "react-router-dom";

import { MainLayout } from "@/components/layout/MainLayout";

const ArticlePage = lazy(() => import("@/pages/ArticlePage/page"));
const AIProjectControlsCertificatePage = lazy(() => import("@/pages/AIProjectControlsCertificatePage/page"));
const AssociateProjectManagerPage = lazy(() => import("@/pages/AssociateProjectManagerPage/page"));
const ApprenticeStoriesPage = lazy(() => import("@/pages/ApprenticeStoriesPage/page"));
const ApprenticeStoryDetailPage = lazy(() => import("@/pages/ApprenticeStoryDetailPage/page"));
const AboutPage = lazy(() => import("@/pages/AboutPage/page"));
const AwardsPage = lazy(() => import("@/pages/AwardsPage/page"));
const BlogPage = lazy(() => import("@/pages/BlogPage/page"));
const NewsArticlePage = lazy(() => import("@/pages/BlogPage/article"));
const BookConsultationPage = lazy(() => import("@/pages/BookConsultationPage/page"));
const BookshopPage = lazy(() => import("@/pages/BookshopPage/page"));
const CollegeDetailPage = lazy(() => import("@/pages/CollegeDetailPage/page"));
const CharteredPathwayPage = lazy(() => import("@/pages/CharteredPathwayPage/page"));
const CollegesPage = lazy(() => import("@/pages/CollegesPage/page"));
const CommercePage = lazy(() => import("@/pages/CommercePage/page"));
const ConstructionInfrastructurePage = lazy(() => import("@/pages/ConstructionInfrastructurePage/page"));
const ContentPage = lazy(() => import("@/pages/ContentPage/page"));
const EventDetailPage = lazy(() => import("@/pages/EventDetailPage/page"));
const EventsPage = lazy(() => import("@/pages/EventsPage/page"));
const EmployerAgreementPage = lazy(() => import("@/pages/EmployerAgreementPage/page"));
const EmployersHomePage = lazy(() => import("@/pages/employers/page"));
const EnergyUtilitiesPage = lazy(() => import("@/pages/EnergyUtilitiesPage/page"));
const EngineeringManufacturingPage = lazy(() => import("@/pages/EngineeringManufacturingPage/page"));
const ExpertDetailPage = lazy(() => import("@/pages/ExpertDetailPage/page"));
const EmptyPage = lazy(() => import("@/pages/EmptyPage/page"));
const FormPage = lazy(() => import("@/pages/FormPage/page"));
const FundingEligibilityPage = lazy(() => import("@/pages/FundingEligibilityPage/page"));
const GovernanceBoardPage = lazy(() => import("@/pages/GovernanceBoardPage/page"));
const HomePage = lazy(() => import("@/pages/home/page"));
const Dashboard = lazy(() => import("@/features/cms/Dashboard"));
const InformationPage = lazy(() => import("@/pages/InformationPage/page"));
const LearnersHomePage = lazy(() => import("@/pages/learners/page"));
const LeadershipCollegePage = lazy(() => import("@/pages/LeadershipCollegePage/page"));
const MarketingCollegePage = lazy(() => import("@/pages/MarketingCollegePage/page"));
const MarketingManagerLevel6Page = lazy(() => import("@/pages/MarketingManagerLevel6Page/page"));
const MarketingExecutiveLevel4Page = lazy(() => import("@/pages/MarketingExecutiveLevel4Page/page"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/page"));
const PeoplePage = lazy(() => import("@/pages/PeoplePage/page"));
const ProgrammeDetailPage = lazy(() => import("@/pages/ProgrammeDetailPage/page"));
const ProgrammeListingPage = lazy(() => import("@/pages/ProgrammeListingPage/page"));
const ProjectControlsPage = lazy(() => import("@/pages/ProjectControlsPage/page"));
const ProjectControlsProfessionalLevel6Page = lazy(() => import("@/pages/ProjectControlsProfessionalLevel6Page/page"));
const PathwayPage = lazy(() => import("@/pages/PathwayPage/page"));
const SearchPage = lazy(() => import("@/pages/SearchPage/page"));
const SectorsPage = lazy(() => import("@/pages/SectorsPage/page"));
const SectorDetailPage = lazy(() => import("@/pages/SectorDetailPage/page"));
const StoriesPage = lazy(() => import("@/pages/StoriesPage/page"));
const StoryDetailPage = lazy(() => import("@/pages/StoryDetailPage/page"));

export const router = createBrowserRouter([
  { path: "/dashboard/*", element: <Dashboard /> },
  { path: "/about", element: <ManagedPage page="about"><AboutPage /></ManagedPage> },
  { path: "/", element: <MainLayout />, children: [
    { index: true, element: <HomePage /> },
    { path: "learners", element: <ManagedPage page="learners"><LearnersHomePage /></ManagedPage> },
    { path: "employers", element: <ManagedPage page="employers"><EmployersHomePage /></ManagedPage> },
    { path: "employer-agreement", element: <EmployerAgreementPage /> },
    { path: "employer-dashboard", element: <InformationPage kind="employerDashboard" /> },
    { path: "college-of-leadership", element: <LeadershipCollegePage /> },
    { path: "college-of-marketing", element: <ManagedPage page="college_marketing"><MarketingCollegePage /></ManagedPage> },
    { path: "marketing-executive-level-4", element: <ManagedPage page="programme_marketing_l4"><MarketingExecutiveLevel4Page /></ManagedPage> },
    { path: "fully-funded-marketing-executive-level-4-apprenticeship", loader: () => redirect("/marketing-executive-level-4") },
    { path: "marketing-manager-level-6", element: <ManagedPage page="programme_marketing_l6"><MarketingManagerLevel6Page /></ManagedPage> },
    { path: "marketing-manager-level-6-apprenticeship", loader: () => redirect("/marketing-manager-level-6") },
    { path: "colleges", element: <CollegesPage /> },
    { path: "colleges/:collegeSlug", element: <CollegeDetailPage /> },
    { path: "programmes", element: <ManagedPage page="programmes"><ProgrammeListingPage /></ManagedPage> },
    { path: "programmes/:programmeSlug", element: <ProgrammeDetailPage /> },
    { path: "college-of-project-controls-and-project-management", element: <ManagedPage page="college_project_controls"><ProjectControlsPage /></ManagedPage> },
    { path: "chartered-pathway", element: <CharteredPathwayPage /> },
    { path: "chartered_pathway", element: <CharteredPathwayPage /> },
    { path: "college-of-project-controls-and-project-management/chartered", element: <CharteredPathwayPage /> },
    { path: "college-of-project-controls-and-project-management/chartered-pathway", element: <CharteredPathwayPage /> },
    { path: "project-controls-professional-level-6/chartered", element: <CharteredPathwayPage /> },
    { path: "project-controls-professional-level-6/chartered-pathway", element: <CharteredPathwayPage /> },
    { path: "college-of-project-controls-and-project-management/:pathwaySlug", element: <PathwayPage /> },
    { path: "college-of-project-management-and-controls", loader: () => redirect("/college-of-project-controls-and-project-management") },
    { path: "college-of-project-management-and-controls/:pathwaySlug", loader: ({ params }) => redirect(`/college-of-project-controls-and-project-management/${params.pathwaySlug || ""}`) },
    { path: "project-controls-professional-level-6", element: <ManagedPage page="programme_pcp_l6"><ProjectControlsProfessionalLevel6Page /></ManagedPage> },
    { path: "project-control-professional-level-6", loader: () => redirect("/project-controls-professional-level-6") },
    { path: "project-controls-professional-level-6/:pathwaySlug", loader: ({ params }) => redirect(`/college-of-project-controls-and-project-management/${params.pathwaySlug || ""}`) },
    { path: "college-of-project-management", loader: () => redirect("/college-of-project-controls-and-project-management") },
    { path: "college-of-project-controls", loader: () => redirect("/college-of-project-controls-and-project-management") },
    { path: "associate-project-manager-level-4", element: <ManagedPage page="programme_apm_l4"><AssociateProjectManagerPage /></ManagedPage> },
    { path: "ai-in-project-controls-certificate", element: <AIProjectControlsCertificatePage /> },
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
    { path: "events", element: <ManagedPage page="events"><EventsPage /></ManagedPage> },
    { path: "events/:eventSlug", element: <EventDetailPage /> },
    { path: "people", element: <PeoplePage /> },
    { path: "our-experts", element: <ManagedPage page="experts"><PeoplePage /></ManagedPage> },
    { path: "our-experts/:expertSlug", element: <ExpertDetailPage /> },
    { path: "star-learners", element: <StoriesPage /> },
    { path: "case-studies", element: <ManagedPage page="case_studies"><StoriesPage /></ManagedPage> },
    { path: "case-studies/:storySlug", element: <StoryDetailPage /> },
    { path: "stories", loader: () => redirect("/case-studies") },
    { path: "stories/:storySlug", loader: ({ params }) => redirect(`/case-studies/${params.storySlug || ""}`) },
    { path: "apprentices/stories", element: <ApprenticeStoriesPage /> },
    { path: "apprentices/stories/:storySlug", element: <ApprenticeStoryDetailPage /> },
    { path: "blogs-and-news", element: <ManagedPage page="news"><BlogPage /></ManagedPage> },
    { path: "blogs-and-news/:articleSlug", element: <NewsArticlePage /> },
    { path: "blogsandnews", loader: () => redirect("/blogs-and-news") },
    { path: "blogsandnews/:articleSlug", loader: ({ params }) => redirect(`/blogs-and-news/${params.articleSlug || ""}`) },
    { path: "blog", loader: () => redirect("/blogs-and-news") },
    { path: "news", loader: () => redirect("/blogs-and-news") },
    { path: "news/:articleSlug", loader: ({ params }) => redirect(`/blogs-and-news/${params.articleSlug || ""}`) },
    { path: "blog/:articleSlug", element: <ArticlePage /> },
    { path: "contact", element: <ManagedPage page="contact"><FormPage kind="contact" /></ManagedPage> },
    { path: "support", element: <ManagedPage page="support"><FormPage kind="support" /></ManagedPage> },
    { path: "eligibility", element: <Navigate to="/funding-eligibility" replace /> },
    { path: "funding-eligibility", element: <ManagedPage page="funding"><FundingEligibilityPage /></ManagedPage> },
    { path: "awards", element: <ManagedPage page="awards"><AwardsPage /></ManagedPage> },
    { path: "apply", element: <Navigate to="/employer-agreement" replace /> },
    { path: "search", element: <SearchPage /> },
    { path: "sectors", element: <SectorsPage /> },
    { path: "sectors/construction-infrastructure", element: <ConstructionInfrastructurePage /> },
    { path: "sectors/energy-utilities", element: <EnergyUtilitiesPage /> },
    { path: "sectors/engineering-advanced-manufacturing", element: <EngineeringManufacturingPage /> },
    { path: "sectors/:sectorSlug", element: <SectorDetailPage /> },
    { path: "bookshop", element: <ManagedPage page="bookshop"><BookshopPage /></ManagedPage> },
    { path: "store", loader: () => redirect("/bookshop") },
    { path: "textbooks", loader: () => redirect("/bookshop") },
    { path: "cart", element: <CommercePage title="Cart" /> },
    { path: "checkout", element: <CommercePage title="Checkout" /> },
    { path: "privacy", element: <ContentPage slug="privacy-policy" /> },
    { path: "terms", element: <ContentPage slug="terms" /> },
    { path: "cookies", element: <ContentPage slug="cookie-policy" /> },
    { path: "book-session", element: <BookConsultationPage /> },
    { path: "book-consultation", element: <BookConsultationPage /> },
    { path: "faq", element: <ManagedPage page="faq"><InformationPage kind="faq" /></ManagedPage> },
    { path: "our-partners", element: <ManagedPage page="partners"><InformationPage kind="partners" /></ManagedPage> },
    { path: "governance-board", element: <ManagedPage page="governance"><GovernanceBoardPage /></ManagedPage> },
    { path: "safeguarding-handbook", element: <ManagedPage page="safeguarding"><InformationPage kind="safeguarding" /></ManagedPage> },
    { path: "apprentices", element: <InformationPage kind="apprentices" /> },
    { path: "explore-jobs", element: <InformationPage kind="jobs" /> },
    { path: "pages/:pageSlug", element: <ContentPage /> },
    { path: "*", element: <NotFoundPage /> },
  ]},
], { basename: __BASE_PATH__ });
