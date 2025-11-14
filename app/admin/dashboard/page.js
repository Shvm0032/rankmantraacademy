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

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const [courses, setCourses] = useState([]);
  const [emails, setEmails] = useState([]);
  const [students, setStudents] = useState([]);

  // Just load data (NO AUTH CHECK HERE)
  useEffect(() => {
    setCourses([
      { id: 1, name: "Web Development", students: 45, status: "Active", date: "2024-01-15" },
      { id: 2, name: "Data Science", students: 32, status: "Active", date: "2024-02-01" },
      { id: 3, name: "Mobile App Development", students: 28, status: "Inactive", date: "2024-01-20" },
      { id: 4, name: "UI/UX Design", students: 19, status: "Active", date: "2024-03-10" },
    ]);

    setEmails([
      { id: 1, from: "john@example.com", subject: "Course Inquiry", date: "2024-03-15", status: "Unread" },
      { id: 2, from: "sarah@edu.com", subject: "Registration Issue", date: "2024-03-14", status: "Read" },
      { id: 3, from: "mike@tech.org", subject: "Partnership Proposal", date: "2024-03-14", status: "Unread" },
      { id: 4, from: "admin@system.com", subject: "System Update", date: "2024-03-13", status: "Read" },
    ]);

    setStudents([
      { id: 1, name: "John Doe", email: "john@example.com", course: "Web Development", joinDate: "2024-01-20" },
      { id: 2, name: "Sarah Smith", email: "sarah@edu.com", course: "Data Science", joinDate: "2024-02-05" },
      { id: 3, name: "Mike Johnson", email: "mike@tech.org", course: "Mobile App", joinDate: "2024-01-25" },
      { id: 4, name: "Emily Brown", email: "emily@design.com", course: "UI/UX Design", joinDate: "2024-03-12" },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex w-full">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 w-full ml-0 lg:ml-64">
        <AdminHeader activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="w-full p-2 sm:p-4 lg:p-6">
          {activeTab === "dashboard" && (
            <>
              <StatsCards />
              <CoursesTable courses={courses} />
              <EmailsTable emails={emails} />
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
