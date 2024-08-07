"use client";
import ThemeProvider from "@/components/theme-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={true}>
      {children}
    </ThemeProvider>
  );
};

export default Providers;
