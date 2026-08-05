import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "@/app/router";
import { LoadingState } from "@/components/ui/AsyncState";

export default function App() {
  return <Suspense fallback={<LoadingState />}><RouterProvider router={router} /></Suspense>;
}
