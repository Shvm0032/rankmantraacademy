"use client";

import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomLoader from "@/components/layout/CustomLoader";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isStudentPanel = pathname.startsWith("/student-panel");

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
          <CustomLoader>
        
        {/* 👇 Admin me Header/Footer hide */}
        {!isAdmin && !isStudentPanel && <Header />}

        <main className="min-h-screen">
          <Toaster
            position="top-center"
            toastOptions={{
              style: { fontSize: "15px" },
              success: { background: "#e9ffec", color: "#0f5132" },
              error: { background: "#ffe9e9", color: "#842029" },
            }}
          />
          {children}


          
        </main>


        {/* 👇 Admin me Footer hide */}
        {!isAdmin && !isStudentPanel && <Footer />}
          </CustomLoader>


      </body>
    </html>
  );
}
