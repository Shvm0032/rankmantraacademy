import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "Home - Rankmantra Academy",
  description: "Join our industry-focused Digital Marketing course and learn SEO, Social Media, Google Ads, and more with hands-on projects. Build your career with confidence!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="min-h-screen">
            <Toaster
          position="top-center"
          toastOptions={{
            style: { fontSize: "15px" },
            success: { style: { background: "#e9ffec", color: "#0f5132" } },
            error: { style: { background: "#ffe9e9", color: "#842029" } },
          }}
        />
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
