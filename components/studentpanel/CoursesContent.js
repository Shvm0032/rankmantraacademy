export default function CoursesContent() {
  const courses = [
    { name: 'Mathematics', progress: 75, instructor: 'Dr. Sharma', color: 'purple' },
    { name: 'Physics', progress: 60, instructor: 'Prof. Gupta', color: 'blue' },
    { name: 'Chemistry', progress: 45, instructor: 'Dr. Verma', color: 'green' },
    { name: 'English', progress: 90, instructor: 'Ms. Patel', color: 'orange' },
    { name: 'Computer Science', progress: 30, instructor: 'Mr. Kumar', color: 'red' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="border rounded-2xl p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg text-gray-800">{course.name}</h3>
                <p className="text-gray-600 text-sm">Instructor: {course.instructor}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${course.color}-100 text-${course.color}-800`}>
                {course.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`bg-${course.color}-500 h-2 rounded-full`} 
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-4">
              <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                Continue Learning
              </button>
              <button className="text-gray-600 hover:text-gray-700 text-sm">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}