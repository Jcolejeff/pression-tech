import Link from "next/link";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import Footer from "@/components/Footer";
import NavBar from "@/components/Nav";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
   title: "PressionTech",
   description: "Get the Best technews!",
};

interface RootLayoutProps {
   children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
   return (
      <html lang="en">
         <head>
            <link rel="icon" href="/favicon.png" />
         </head>
         <body
            className={`h-[100vh] min-h-screen w-screen overflow-hidden bg-white  text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50 ${montserrat.className}`}
         >
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
               <div className="relative h-full w-full overflow-x-hidden scroll-smooth">
                  {/* <header
                     className={`fixed left-0 top-0 z-50 w-full bg-white/30 backdrop-blur-sm dark:bg-slate-950 dark:bg-opacity-30`}
                  ></header> */}
                  <header className={`fixed left-0 top-0 z-50 w-full bg-primary-4/60 `}>
                     <NavBar />
                  </header>
                  <main>{children}</main>
                  <footer className="w-full bg-primary-4 pb-[1.5rem]">
                     <Footer />
                  </footer>
                  <ToastContainer
                     position="top-right"
                     autoClose={5000}
                     hideProgressBar={false}
                     newestOnTop={false}
                     closeOnClick
                     rtl={false}
                     pauseOnFocusLoss
                     draggable
                     pauseOnHover
                     theme="colored"
                  />
               </div>
               <Analytics />
            </ThemeProvider>
         </body>
      </html>
   );
}
