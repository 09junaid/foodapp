// src/redux/ReduxProvider.tsx
"use client";
import { SnackbarProvider } from "notistack";

import { Provider } from "react-redux";
import { store } from "@/store";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SnackbarProvider><Provider store={store}>{children}</Provider></SnackbarProvider> ;
}
