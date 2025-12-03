export default function ProfileContent() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Profile</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Profile Photo Section */}
        <div className="lg:col-span-1">
          <div className="text-center">
            <div className="w-32 h-32 bg-linear-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold">
              S
            </div>
            <h3 className="text-xl font-bold text-gray-800">Student Name</h3>
            <p className="text-gray-600">Computer Science</p>
            <p className="text-sm text-gray-500 mt-2">Student ID: STU2024001</p>
          </div>
        </div>

        {/* Right Details Section */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-800"
                  value="student@edu.com"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mobile</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg bg-gray-800"
                  value="9876543210"
                  readOnly
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg bg-gray-800"
                rows="3"
                readOnly
              >
                123 College Street, Education City
              </textarea>
            </div>

            

          </div>
        </div>

      </div>
    </div>
  );
}
