import { Outlet } from "react-router";
import portfolioData from "@/data/portfolio.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout() {
  return (
    <div className="group/design-root relative flex min-h-screen w-full min-w-0 overflow-x-clip bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(circle_at_top,black,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(30,64,175,0.16),transparent_50%)]" />
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
