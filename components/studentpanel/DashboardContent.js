import { BookOpen, FileText, CheckCircle2, Target, Clock, UserPlus, CheckCheck, Users } from "lucide-react";

export default function DashboardContent() {
  const stats = [
    { label: "Total Courses", value: "5", color: "purple", icon: BookOpen },
    { label: "Pending Assignments", value: "3", color: "orange", icon: FileText },
    { label: "Completed Courses", value: "2", color: "green", icon: CheckCircle2 },
    { label: "Average Grade", value: "85%", color: "blue", icon: Target },
  ];

  const recentActivities = [
    { action: "Submitted Math Assignment", time: "2 hours ago", icon: CheckCheck },
    { action: "Enrolled in Physics Course", time: "1 day ago", icon: UserPlus },
    { action: "Received Grade for English", time: "2 days ago", icon: Target },
    { action: "Joined Study Group", time: "3 days ago", icon: Users },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
        <div className="text-sm text-gray-500">Last updated: Today</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-linear-to-br from-white to-gray-50 border rounded-2xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                <p className={`text-2xl font-bold text-${stat.color}-600 mt-2`}>
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-xl bg-${stat.color}-100`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activities
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl"
              >
                <activity.icon className="w-5 h-5 text-purple-600" />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Upcoming Deadlines
          </h3>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50 rounded-r-xl">
              <p className="font-medium text-gray-800">Physics Assignment</p>
              <p className="text-sm text-gray-600">Due: Tomorrow, 11:59 PM</p>
            </div>
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-xl">
              <p className="font-medium text-gray-800">Math Quiz</p>
              <p className="text-sm text-gray-600">Due: In 2 days</p>
            </div>
            <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-xl">
              <p className="font-medium text-gray-800">Project Submission</p>
              <p className="text-sm text-gray-600">Due: Next week</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
