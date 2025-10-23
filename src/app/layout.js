import { Suspense } from "react";
import Footer from "./footer";
import "./globals.css";
import Navbar from "./navbar";
import { Providers } from "./theme-provider";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-screen flex bg-bg min-h-screen flex-col items-center">
        <Providers>
          <Navbar />
          {/* Layout UI */}
          {/* Place children where you want to render a page or nested layout */}
          <div className="2xl:w-1/2 px-4 lg:w-3/4">
            <Suspense
              fallback={
                <div className="text-primary py-12 text-xl animate-fade">
                  Loading...
                </div>
              }
            >
              <main>{children}</main>
            </Suspense>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
