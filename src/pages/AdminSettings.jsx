import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const AdminSettings = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              ⚙️ Admin Settings
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Manage system configuration and user permissions
            </p>
          </div>
          
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition font-medium"
          >
            ← Back to Dashboard
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Admin Info Banner */}
        <div className="bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700 rounded-lg p-4 mb-6">
          <p className="text-purple-800 dark:text-purple-200">
            👑 <strong>Admin Access Granted</strong> - You are logged in as <strong>{user?.name}</strong>
          </p>
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Management */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
              <span className="text-2xl mr-2">👥</span>
              User Management
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Manage user accounts, roles, and permissions.
            </p>
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              Manage Users
            </button>
          </div>

          {/* System Configuration */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
              <span className="text-2xl mr-2">🔧</span>
              System Configuration
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Configure system settings and preferences.
            </p>
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              Configure System
            </button>
          </div>

          {/* Security Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
              <span className="text-2xl mr-2">🔒</span>
              Security Settings
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Manage security policies and access controls.
            </p>
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              Security Settings
            </button>
          </div>

          {/* Reports & Analytics */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
              <span className="text-2xl mr-2">📊</span>
              Reports & Analytics
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              View system reports and analytics data.
            </p>
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              View Reports
            </button>
          </div>

          {/* Database Management */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
              <span className="text-2xl mr-2">🗄️</span>
              Database Management
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Manage database backups and maintenance.
            </p>
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              Database Tools
            </button>
          </div>

          {/* Audit Logs */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 border dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center dark:text-white">
              <span className="text-2xl mr-2">📝</span>
              Audit Logs
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              View system activity and audit trails.
            </p>
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              View Logs
            </button>
          </div>
        </div>

        {/* Warning Box */}
        <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <p className="text-sm text-red-800 dark:text-red-200">
            ⚠️ <strong>Admin Only:</strong> This page is only accessible to users with admin role. 
            Regular users will be redirected to the dashboard if they try to access this page.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AdminSettings;
