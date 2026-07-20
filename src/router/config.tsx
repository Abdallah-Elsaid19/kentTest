import type { RouteObject } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/home/page";
import Colleges from "@/pages/Colleges/page";
import CollegeDetail from "@/pages/CollegeDetail/page";
import Programmes from "@/pages/Programmes/page";
import ProgrammeDetail from "@/pages/ProgrammeDetail/page";
import Courses from "@/pages/Courses/page";
import CourseDetail from "@/pages/CourseDetail/page";
import Events from "@/pages/Events/page";
import EventDetail from "@/pages/EventDetail/page";
import About from "@/pages/About/page";
import FAQ from "@/pages/FAQ/page";
import Blog from "@/pages/Blog/page";
import BlogDetail from "@/pages/BlogDetail/page";
import StarLearners from "@/pages/StarLearners/page";
import OurExperts from "@/pages/OurExperts/page";
import OurPartners from "@/pages/OurPartners/page";
import Governance from "@/pages/Governance/page";
import Safeguarding from "@/pages/Safeguarding/page";
import Contact from "@/pages/Contact/page";
import Support from "@/pages/Support/page";
import Apprentices from "@/pages/Apprentices/page";
import ApprenticeStories from "@/pages/ApprenticeStories/page";
import ExploreJobs from "@/pages/ExploreJobs/page";
import EmployerAgreement from "@/pages/EmployerAgreement/page";
import Apply from "@/pages/Apply/page";
import BookSession from "@/pages/BookSession/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/colleges", element: <Colleges /> },
      { path: "/colleges/:collegeSlug", element: <CollegeDetail /> },
      { path: "/programmes", element: <Programmes /> },
      { path: "/programmes/:programmeSlug", element: <ProgrammeDetail /> },
      { path: "/courses", element: <Courses /> },
      { path: "/courses/:courseSlug", element: <CourseDetail /> },
      { path: "/events", element: <Events /> },
      { path: "/events/:eventSlug", element: <EventDetail /> },
      { path: "/who-we-are", element: <About /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:articleSlug", element: <BlogDetail /> },
      { path: "/star-learners", element: <StarLearners /> },
      { path: "/our-experts", element: <OurExperts /> },
      { path: "/our-partners", element: <OurPartners /> },
      { path: "/governance-board", element: <Governance /> },
      { path: "/safeguarding-handbook", element: <Safeguarding /> },
      { path: "/contact", element: <Contact /> },
      { path: "/support", element: <Support /> },
      { path: "/apprentices", element: <Apprentices /> },
      { path: "/apprentices/stories", element: <ApprenticeStories /> },
      { path: "/explore-jobs", element: <ExploreJobs /> },
      { path: "/employer-agreement", element: <EmployerAgreement /> },
      { path: "/apply", element: <Apply /> },
      { path: "/book-session", element: <BookSession /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;