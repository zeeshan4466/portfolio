import type { ReactNode } from "react";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./theme-provider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
        {children}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;