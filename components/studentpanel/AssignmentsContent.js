export default function AssignmentsContent() {
  const assignments = [
    { title: 'Algebra Problem Set', course: 'Mathematics', dueDate: 'Tomorrow', status: 'pending' },
    { title: 'Physics Lab Report', course: 'Physics', dueDate: 'In 2 days', status: 'pending' },
    { title: 'Chemical Equations', course: 'Chemistry', dueDate: 'Next week', status: 'completed' },
    { title: 'Essay Writing', course: 'English', dueDate: 'Yesterday', status: 'overdue' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Assignments</h2>
      <div className="space-y-4">
        {assignments.map((assignment, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-2xl hover:bg-gray-50 transition-colors duration-200">
            <div className="flex items-center space-x-4">
              <div className={`w-3 h-3 rounded-full ${
                assignment.status === 'completed' ? 'bg-green-500' :
                assignment.status === 'overdue' ? 'bg-red-500' : 'bg-orange-500'
              }`}></div>
              <div>
                <h3 className="font-semibold text-gray-800">{assignment.title}</h3>
                <p className="text-gray-600 text-sm">{assignment.course} • Due: {assignment.dueDate}</p>
              </div>
            </div>
            <button className={`px-4 py-2 rounded-lg font-medium text-sm ${
              assignment.status === 'completed' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-purple-100 text-purple-800 hover:bg-purple-200'
            }`}>
              {assignment.status === 'completed' ? 'Submitted' : 'Start Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}