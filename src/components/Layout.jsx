import { Outlet } from "react-router";
import portfolioData from "@/data/portfolio.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout() {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background text-foreground font-display">
      <div className="layout-container flex h-full grow flex-col">
        <Header data={portfolioData.header} />
        <main className="flex-1 px-4 sm:px-10 py-5">
          <div className="layout-content-container flex flex-col max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
        <Footer data={portfolioData.footer} />
      </div>
    </div>
  );
}
