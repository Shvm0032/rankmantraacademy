export default function Certificate() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Apply for Certificate</h2>

      <form className="space-y-4 p-6 border rounded-2xl bg-white shadow-sm">
        
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Roll No */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Roll No</label>
          <input
            type="text"
            placeholder="Enter your roll number"
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Certificate Course */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Certificate Course</label>
          <input
            type="text"
            placeholder="Enter certificate course"
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Duration of Course */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Duration of Course</label>
          <input
            type="text"
            placeholder="Enter duration (e.g., 6 months)"
            className="w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#D83030] hover:cursor-pointer text-white py-2 rounded-xl font-semibold hover:bg-[#c10e0e] transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
