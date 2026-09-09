import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "@/router/router";
import { PageLoadingState } from "@/components/ui/AsyncState";

export default function App() {
  return <Suspense fallback={<PageLoadingState />}><RouterProvider router={router} /></Suspense>;
}
