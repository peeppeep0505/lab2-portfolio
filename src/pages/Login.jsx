import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { user, login } = useAuthStore();

  // ถ้า Login แล้ว redirect ไปหน้า Dashboard
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleLogin = (role) => {
    login(role);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            🔐 Login
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Choose your role to continue
          </p>
        </div>

        <div className="space-y-4">
          {/* Login as Admin */}
          <button
            onClick={() => handleLogin('admin')}
            className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">👑</span>
              <div className="text-left">
                <div className="font-bold">Login as Admin</div>
                <div className="text-sm opacity-90">Full access to all features</div>
              </div>
            </div>
          </button>

          {/* Login as User */}
          <button
            onClick={() => handleLogin('user')}
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-2xl">👤</span>
              <div className="text-left">
                <div className="font-bold">Login as User</div>
                <div className="text-sm opacity-90">Standard user access</div>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            💡 <strong>Tip:</strong> Admin can access all pages including settings. 
            Regular users have limited access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
