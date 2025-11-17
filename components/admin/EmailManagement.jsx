"use client";

import React, { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import api from "@/utils/api";
import ConfirmDeleteModal from "@/components/admin/ConfirmDeleteModal"; // <-- import modal

const EmailManagement = () => {
  const [bookingEmails, setBookingEmails] = useState([]);
  const [contactEmails, setContactEmails] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(false);
  const [loadingContacts, setLoadingContacts] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState(null);

  // Modal States
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState({ type: null, id: null });

  // Fetch bookings
  const fetchBookings = async () => {
    setLoadingBookings(true);
    try {
      const { data } = await api.get("/booking");
      setBookingEmails(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load bookings");
    } finally {
      setLoadingBookings(false);
    }
  };

  // Fetch contacts
  const fetchContacts = async () => {
    setLoadingContacts(true);
    try {
      const { data } = await api.get("/contact");
      setContactEmails(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load contacts");
    } finally {
      setLoadingContacts(false);
    }
  };

  useEffect(() => {
    fetchBookings();
    fetchContacts();
  }, []);

  // -------------------------
  // Open Modal for delete
  // -------------------------
  const openDeleteModal = (type, id) => {
    setDeleteTarget({ type, id });
    setShowModal(true);
  };

  // -------------------------
  // Confirm Delete
  // -------------------------
  const handleConfirmDelete = async () => {
    const { type, id } = deleteTarget;
    setDeletingId(id);

    try {
      if (type === "booking") {
        await api.delete(`/booking/${id}`);
        setBookingEmails((prev) => prev.filter((item) => item._id !== id));
      } else if (type === "contact") {
        await api.delete(`/contact/${id}`);
        setContactEmails((prev) => prev.filter((item) => item._id !== id));
      }
    } catch (err) {
      alert("Delete failed. Try again.");
      console.error(err);
    } finally {
      setDeletingId(null);
      setShowModal(false);
    }
  };

  // Stats
  const totalEmails = bookingEmails.length + contactEmails.length;
  const unreadEmails = 0;
  const bookingCount = bookingEmails.length;
  const contactCount = contactEmails.length;

  return (
    <div className="p-6 w-full">
      {/* Delete Modal */}
      <ConfirmDeleteModal
        isOpen={showModal}
        onCancel={() => setShowModal(false)}
        onConfirm={handleConfirmDelete}
      />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Email Management</h2>
      </div>

      {error && (
        <div className="bg-red-600 p-3 rounded mb-4 text-white font-semibold">
          {error}
        </div>
      )}

      {/* Stats */}
      <div className="bg-gray-800 rounded-lg p-6 w-full mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Total Emails</h3>
            <p className="text-3xl font-bold text-[#D83030]">{totalEmails}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Unread</h3>
            <p className="text-3xl font-bold text-yellow-500">{unreadEmails}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Booking Forms</h3>
            <p className="text-3xl font-bold text-blue-500">{bookingCount}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Contact Forms</h3>
            <p className="text-3xl font-bold text-green-500">{contactCount}</p>
          </div>
        </div>
      </div>

      {/* Booking Table */}
      <div className="bg-gray-800 rounded-lg p-6 w-full mb-8">
        <h3 className="text-xl font-bold text-white mb-4">Booking Form Emails</h3>

        {loadingBookings ? (
          <p className="text-white">Loading bookings...</p>
        ) : bookingEmails.length === 0 ? (
          <p className="text-white">No bookings found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-300">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="p-3">Full Name</th>
                  <th className="p-3">Phone Number</th>
                  <th className="p-3">Selected Course</th>
                  <th className="p-3">Date</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {bookingEmails.map((item) => (
                  <tr key={item._id} className="border-b border-gray-700 hover:bg-gray-700/50">
                    <td className="p-3">{item.fullName}</td>
                    <td className="p-3">{item.phoneNumber}</td>
                    <td className="p-3">{item.selectedCourse}</td>
                    <td className="p-3">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-3 text-center">
                      <button
                        disabled={deletingId === item._id}
                        onClick={() => openDeleteModal("booking", item._id)}
                        className="text-red-500 hover:text-red-600 disabled:opacity-50 cursor-pointer"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Contact Table */}
      <div className="bg-gray-800 rounded-lg p-6 w-full">
        <h3 className="text-xl font-bold text-white mb-4">Contact Us Emails</h3>

        {loadingContacts ? (
          <p className="text-white">Loading contacts...</p>
        ) : contactEmails.length === 0 ? (
          <p className="text-white">No contacts found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-300">
              <thead>
                <tr className="bg-gray-700 text-white">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Message</th>
                  <th className="p-3">Date</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {contactEmails.map((item) => (
                  <tr key={item._id} className="border-b border-gray-700 hover:bg-gray-700/50">
                    <td className="p-3">{item.name}</td>
                    <td className="p-3">{item.email}</td>
                    <td className="p-3">{item.message}</td>
                    <td className="p-3">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-3 text-center">
                      <button
                        disabled={deletingId === item._id}
                        onClick={() => openDeleteModal("contact", item._id)}
                        className="text-red-500 hover:text-red-600 disabled:opacity-50 cursor-pointer"
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailManagement;
