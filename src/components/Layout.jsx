import { Outlet } from "react-router";
import portfolioData from "@/data/portfolio.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout() {
  return (
    <div className="group/design-root relative flex min-h-screen w-full min-w-0 overflow-x-clip bg-background text-foreground">
      <div className="layout-container flex h-full min-w-0 grow flex-col">
        <Header data={portfolioData.header} />
        <main className="min-w-0 flex-1 px-4 py-5 sm:px-8">
          <div className="layout-content-container mx-auto flex w-full min-w-0 max-w-6xl flex-col">
            <Outlet />
          </div>
        </main>
        <Footer data={portfolioData.footer} />
      </div>
    </div>
  );
}
