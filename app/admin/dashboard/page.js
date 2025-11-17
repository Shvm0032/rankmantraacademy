"use client";

import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import AdminHeader from "../../../components/admin/AdminHeader";
import StatsCards from "../../../components/admin/StatsCards";
import CoursesTable from "../../../components/admin/CoursesTable";
import EmailsTable from "../../../components/admin/EmailsTable";
import CoursesManagement from "../../../components/admin/CoursesManagement";
import StudentsManagement from "../../../components/admin/StudentsManagement";
import EmailManagement from "../../../components/admin/EmailManagement";
import ProfileSettings from "../../../components/admin/ProfileSettings";
import api from "@/utils/api";  // <-- Import your axios instance

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const [courses, setCourses] = useState([]);
  const [emails, setEmails] = useState([]); // This will be combined emails
  const [students, setStudents] = useState([]);
  const [loadingEmails, setLoadingEmails] = useState(false);
  const [emailError, setEmailError] = useState(null);

  useEffect(() => {
    // Sample courses and students (you can keep or fetch from backend)
    setCourses([
      { id: 1, name: "Web Development", students: 45, status: "Active", date: "2024-01-15" },
      { id: 2, name: "Data Science", students: 32, status: "Active", date: "2024-02-01" },
      { id: 3, name: "Mobile App Development", students: 28, status: "Inactive", date: "2024-01-20" },
      { id: 4, name: "UI/UX Design", students: 19, status: "Active", date: "2024-03-10" },
    ]);
    setStudents([
      { id: 1, name: "John Doe", email: "john@example.com", course: "Web Development", joinDate: "2024-01-20" },
      { id: 2, name: "Sarah Smith", email: "sarah@edu.com", course: "Data Science", joinDate: "2024-02-05" },
      { id: 3, name: "Mike Johnson", email: "mike@tech.org", course: "Mobile App", joinDate: "2024-01-25" },
      { id: 4, name: "Emily Brown", email: "emily@design.com", course: "UI/UX Design", joinDate: "2024-03-12" },
    ]);
  }, []);

  // Fetch booking and contact emails and combine them
  useEffect(() => {
    const fetchEmails = async () => {
      setLoadingEmails(true);
      setEmailError(null);

      try {
        const [bookingRes, contactRes] = await Promise.all([
          api.get("/booking"),
          api.get("/contact"),
        ]);

        // Map bookings and contacts into unified structure for display
        // Add a "type" field to distinguish email source
        const bookings = bookingRes.data.map((item) => ({
          id: item._id,
          from: item.fullName,
          email: item.email || "", // add email if available in booking
          subject: `Booking: ${item.selectedCourse}`,
          date: item.createdAt,
          type: "Booking",
        }));

        const contacts = contactRes.data.map((item) => ({
          id: item._id,
          from: item.name,
          email: item.email,
          subject: item.message.length > 50 ? item.message.slice(0, 47) + "..." : item.message,
          date: item.createdAt,
          type: "Contact",
        }));

        // Combine and sort by date descending
        const combined = [...bookings, ...contacts].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        // Limit to 10 emails
        setEmails(combined.slice(0, 10));
      } catch (err) {
        setEmailError("Failed to load emails");
        console.error(err);
      } finally {
        setLoadingEmails(false);
      }
    };

    fetchEmails();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex w-full">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 w-full ml-0 lg:ml-64">
        <AdminHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="w-full p-2 sm:p-4 lg:p-6">
          {activeTab === "dashboard" && (
            <>
              <StatsCards totalEmails={emails.length} />
              <CoursesTable courses={courses} />

              {loadingEmails ? (
                <p className="text-white">Loading emails...</p>
              ) : emailError ? (
                <p className="text-red-500">{emailError}</p>
              ) : (
                <EmailsTable emails={emails} />
              )}
            </>
          )}

          {activeTab === "courses" && <CoursesManagement />}
          {activeTab === "students" && <StudentsManagement />}
          {activeTab === "emails" && <EmailManagement />}
          {activeTab === "profile" && <ProfileSettings />}
        </main>
      </div>
    </div>
  );
}
