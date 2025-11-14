import React from 'react';

const EmailManagement = () => {

  // Dummy Data (Baad me backend se fetch kar lena)
  const bookingEmails = [
    { id: 1, name: "Rohan", email: "rohan@example.com", service: "AC Repair", date: "2025-11-14" },
    { id: 2, name: "Amit", email: "amit@example.com", service: "Cleaning", date: "2025-11-13" },
  ];

  const contactEmails = [
    { id: 1, name: "Priya", email: "priya@gmail.com", message: "Need help...", date: "2025-11-14" },
    { id: 2, name: "Kabir", email: "kabir@mail.com", message: "Query about service", date: "2025-11-12" },
  ];

  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-white">Email Management</h2>
      </div>

      {/* Stats */}
      <div className="bg-gray-800 rounded-lg p-6 w-full mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Total Emails</h3>
            <p className="text-3xl font-bold text-[#D83030]">268</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Unread</h3>
            <p className="text-3xl font-bold text-yellow-500">35</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Booking Forms</h3>
            <p className="text-3xl font-bold text-blue-500">156</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-white mb-2">Contact Forms</h3>
            <p className="text-3xl font-bold text-green-500">112</p>
          </div>
        </div>
      </div>

      {/* Booking Form Table */}
      <div className="bg-gray-800 rounded-lg p-6 w-full mb-8">
        <h3 className="text-xl font-bold text-white mb-4">Booking Form Emails</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-300">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Service</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {bookingEmails.map((item) => (
                <tr key={item.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.service}</td>
                  <td className="p-3">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact Us Table */}
      <div className="bg-gray-800 rounded-lg p-6 w-full">
        <h3 className="text-xl font-bold text-white mb-4">Contact Us Emails</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-300">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Message</th>
                <th className="p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {contactEmails.map((item) => (
                <tr key={item.id} className="border-b border-gray-700 hover:bg-gray-700/50">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.message}</td>
                  <td className="p-3">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default EmailManagement;
