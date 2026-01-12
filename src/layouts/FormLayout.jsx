import { Outlet, useLocation } from "react-router-dom";

const FormLayout = () => {
  const location = useLocation();

  // คำนวณ Progress จาก URL Path
  const getProgress = () => {
    if (location.pathname.includes("step-1")) return 33;
    if (location.pathname.includes("step-2")) return 66;
    if (location.pathname.includes("review")) return 100;
    return 0;
  };

  const progress = getProgress();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Job Application Portal</h1>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2 text-sm font-medium">
            <span className={progress >= 33 ? "text-blue-600 dark:text-blue-400" : "text-gray-400"}>
              Personal Info
            </span>
            <span className={progress >= 66 ? "text-blue-600 dark:text-blue-400" : "text-gray-400"}>
              Experience
            </span>
            <span className={progress >= 100 ? "text-blue-600 dark:text-blue-400" : "text-gray-400"}>
              Review
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-center mt-2 text-sm text-gray-500 dark:text-gray-400">
            {progress}% Complete
          </div>
        </div>

        {/* เนื้อหาหน้าย่อย (Step1, Step2, Review) */}
        <Outlet />
      </div>
    </div>
  );
};

export default FormLayout;
