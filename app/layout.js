import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Home - Rankmantra Academy",
  description: "Join our industry-focused Digital Marketing course and learn SEO, Social Media, Google Ads, and more with hands-on projects. Build your career with confidence!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
