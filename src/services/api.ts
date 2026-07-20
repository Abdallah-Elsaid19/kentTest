import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  College,
  Programme,
  Course,
  EventItem,
  BlogArticle,
  Testimonial,
  CaseStudy,
  Partner,
  TeamMember,
  Achievement,
  ApiResponse,
} from "../types";
import {
  colleges,
  programmes,
  courses,
  events,
  blogArticles,
  testimonials,
  caseStudies,
  partners,
  teamMembers,
  achievements,
} from "../mocks/data";

export const api = createApi({
  baseQuery: fakeBaseQuery(),
  tagTypes: [
    "Colleges",
    "Programmes",
    "Courses",
    "Events",
    "Blog",
    "Testimonials",
    "CaseStudies",
    "Partners",
    "Team",
    "Achievements",
  ],
  endpoints: (builder) => ({
    getColleges: builder.query<ApiResponse<College[]>, void>({
      queryFn: () => ({ data: { data: colleges, success: true } }),
      providesTags: ["Colleges"],
    }),
    getCollegeBySlug: builder.query<ApiResponse<College | undefined>, string>({
      queryFn: (slug) => {
        const college = colleges.find((c) => c.slug === slug);
        return { data: { data: college, success: !!college } };
      },
      providesTags: ["Colleges"],
    }),
    getProgrammes: builder.query<ApiResponse<Programme[]>, void>({
      queryFn: () => ({ data: { data: programmes, success: true } }),
      providesTags: ["Programmes"],
    }),
    getProgrammeBySlug: builder.query<ApiResponse<Programme | undefined>, string>({
      queryFn: (slug) => {
        const programme = programmes.find((p) => p.slug === slug);
        return { data: { data: programme, success: !!programme } };
      },
      providesTags: ["Programmes"],
    }),
    getProgrammesByCollege: builder.query<ApiResponse<Programme[]>, string>({
      queryFn: (collegeId) => {
        const filtered = programmes.filter((p) => p.collegeId === collegeId);
        return { data: { data: filtered, success: true } };
      },
      providesTags: ["Programmes"],
    }),
    getCourses: builder.query<ApiResponse<Course[]>, void>({
      queryFn: () => ({ data: { data: courses, success: true } }),
      providesTags: ["Courses"],
    }),
    getCourseBySlug: builder.query<ApiResponse<Course | undefined>, string>({
      queryFn: (slug) => {
        const course = courses.find((c) => c.slug === slug);
        return { data: { data: course, success: !!course } };
      },
      providesTags: ["Courses"],
    }),
    getEvents: builder.query<ApiResponse<EventItem[]>, void>({
      queryFn: () => ({ data: { data: events, success: true } }),
      providesTags: ["Events"],
    }),
    getEventBySlug: builder.query<ApiResponse<EventItem | undefined>, string>({
      queryFn: (slug) => {
        const event = events.find((e) => e.slug === slug);
        return { data: { data: event, success: !!event } };
      },
      providesTags: ["Events"],
    }),
    getBlogArticles: builder.query<ApiResponse<BlogArticle[]>, void>({
      queryFn: () => ({ data: { data: blogArticles, success: true } }),
      providesTags: ["Blog"],
    }),
    getBlogArticleBySlug: builder.query<ApiResponse<BlogArticle | undefined>, string>({
      queryFn: (slug) => {
        const article = blogArticles.find((a) => a.slug === slug);
        return { data: { data: article, success: !!article } };
      },
      providesTags: ["Blog"],
    }),
    getTestimonials: builder.query<ApiResponse<Testimonial[]>, void>({
      queryFn: () => ({ data: { data: testimonials, success: true } }),
      providesTags: ["Testimonials"],
    }),
    getCaseStudies: builder.query<ApiResponse<CaseStudy[]>, void>({
      queryFn: () => ({ data: { data: caseStudies, success: true } }),
      providesTags: ["CaseStudies"],
    }),
    getCaseStudyBySlug: builder.query<ApiResponse<CaseStudy | undefined>, string>({
      queryFn: (slug) => {
        const study = caseStudies.find((s) => s.slug === slug);
        return { data: { data: study, success: !!study } };
      },
      providesTags: ["CaseStudies"],
    }),
    getPartners: builder.query<ApiResponse<Partner[]>, void>({
      queryFn: () => ({ data: { data: partners, success: true } }),
      providesTags: ["Partners"],
    }),
    getTeamMembers: builder.query<ApiResponse<TeamMember[]>, void>({
      queryFn: () => ({ data: { data: teamMembers, success: true } }),
      providesTags: ["Team"],
    }),
    getAchievements: builder.query<ApiResponse<Achievement[]>, void>({
      queryFn: () => ({ data: { data: achievements, success: true } }),
      providesTags: ["Achievements"],
    }),
    submitContact: builder.mutation<ApiResponse<{ id: string }>, { name: string; email: string; phone?: string; message: string; type: string }>({
      queryFn: async (body) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return { data: { data: { id: `contact-${Date.now()}` }, success: true, message: "Message sent successfully" } };
      },
    }),
    submitApplication: builder.mutation<ApiResponse<{ id: string }>, { firstName: string; lastName: string; email: string; phone: string; programmeId?: string; employer?: string; jobTitle?: string }>({
      queryFn: async (body) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return { data: { data: { id: `app-${Date.now()}` }, success: true, message: "Application submitted successfully" } };
      },
    }),
  }),
});

export const {
  useGetCollegesQuery,
  useGetCollegeBySlugQuery,
  useGetProgrammesQuery,
  useGetProgrammeBySlugQuery,
  useGetProgrammesByCollegeQuery,
  useGetCoursesQuery,
  useGetCourseBySlugQuery,
  useGetEventsQuery,
  useGetEventBySlugQuery,
  useGetBlogArticlesQuery,
  useGetBlogArticleBySlugQuery,
  useGetTestimonialsQuery,
  useGetCaseStudiesQuery,
  useGetCaseStudyBySlugQuery,
  useGetPartnersQuery,
  useGetTeamMembersQuery,
  useGetAchievementsQuery,
  useSubmitContactMutation,
  useSubmitApplicationMutation,
} = api;