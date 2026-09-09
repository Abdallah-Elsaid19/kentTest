import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { subscribeToPublishedContent } from "@/features/cms/liveUpdates";

import { queryClient } from "./queryClient";
import { store } from "./store";

export function AppProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => subscribeToPublishedContent(queryClient), []);
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>{children}</HelmetProvider>
      </QueryClientProvider>
    </Provider>
  );
}
