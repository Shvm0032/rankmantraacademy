export default function GradesContent() {
  const grades = [
    { subject: 'Mathematics', grade: 'A', percentage: 92, trend: 'up' },
    { subject: 'Physics', grade: 'B+', percentage: 88, trend: 'up' },
    { subject: 'Chemistry', grade: 'B', percentage: 85, trend: 'stable' },
    { subject: 'English', grade: 'A-', percentage: 90, trend: 'down' },
    { subject: 'Computer Science', grade: 'A', percentage: 95, trend: 'up' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Academic Performance</h2>
      <div className="space-y-4">
        {grades.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-2xl">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold">
                {item.grade}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{item.subject}</h3>
                <p className="text-gray-600 text-sm">{item.percentage}% Overall</p>
              </div>
            </div>
            <div className="text-right">
              <span className={`text-xl ${
                item.trend === 'up' ? 'text-green-500' :
                item.trend === 'down' ? 'text-red-500' : 'text-yellow-500'
              }`}>
                {item.trend === 'up' ? '↗' : item.trend === 'down' ? '↘' : '→'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}