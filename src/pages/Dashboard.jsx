import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

// Mock data: รายการโปรเจกต์ตัวอย่าง
const mockProjects = [
  { id: 1, name: "Website Redesign", status: "todo", owner: "John" },
  { id: 2, name: "Mobile App Development", status: "done", owner: "Sarah" },
  { id: 3, name: "API Integration", status: "todo", owner: "Mike" },
  { id: 4, name: "Database Migration", status: "done", owner: "Emma" },
  { id: 5, name: "UI/UX Improvement", status: "todo", owner: "Alex" },
  { id: 6, name: "Security Audit", status: "done", owner: "Chris" },
];

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  
  // ใช้ useSearchParams เพื่ออ่านและเขียน URL parameters
  const [searchParams, setSearchParams] = useSearchParams();
  const statusFilter = searchParams.get("status") || "all"; // ค่า default = "all"

  const [projects, setProjects] = useState(mockProjects);

  // กรองข้อมูลตาม status จาก URL
  const filteredProjects = statusFilter === "all" 
    ? projects 
    : projects.filter((p) => p.status === statusFilter);

  // ฟังก์ชันเปลี่ยน Filter และ Sync กับ URL
  const handleFilterChange = (newStatus) => {
    setSearchParams({ status: newStatus });
  };

  // ฟังก์ชันลบโปรเจกต์ (เฉพาะ Admin)
  const handleDeleteProject = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              📊 Dashboard
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Welcome back, <span className="font-semibold">{user?.name}</span>
              <span className="ml-2 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                {user?.role}
              </span>
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* แสดงเมนู Admin Settings เฉพาะ Admin */}
            {user?.role === 'admin' && (
              <Link
                to="/admin-settings"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium"
              >
                ⚙️ Admin Settings
              </Link>
            )}
            
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
            >
               Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Filter Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4 dark:text-white">Filter Projects</h2>
          <div className="flex gap-3">
            <button
              onClick={() => handleFilterChange("all")}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                statusFilter === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => handleFilterChange("todo")}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                statusFilter === "todo"
                  ? "bg-orange-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              📝 To Do ({projects.filter(p => p.status === "todo").length})
            </button>
            <button
              onClick={() => handleFilterChange("done")}
              className={`px-6 py-2 rounded-lg font-medium transition ${
                statusFilter === "done"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              ✅ Done ({projects.filter(p => p.status === "done").length})
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition border dark:border-gray-700"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold dark:text-white">
                  {project.name}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "done"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
                  }`}
                >
                  {project.status === "done" ? "✅ Done" : "📝 To Do"}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                👤 Owner: <span className="font-medium">{project.owner}</span>
              </p>

              {/* ปุ่ม Delete แสดงเฉพาะ Admin */}
              {user?.role === 'admin' && (
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="w-full py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition font-medium"
                >
                  🗑️ Delete Project
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found for this filter.
            </p>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            💡 <strong>Current URL:</strong> {window.location.href}
            <br />
            Try copying this URL and opening in a new tab - the filter will persist!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
