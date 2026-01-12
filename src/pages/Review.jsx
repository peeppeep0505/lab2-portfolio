import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store/useFormStore";

const Review = () => {
  const navigate = useNavigate();
  const { formData, resetForm } = useFormStore();

  // Guard: ถ้ายังไม่กรอกข้อมูลครบให้กลับไป Step 1
  useEffect(() => {
    if (!formData.email || !formData.skills) {
      navigate("/apply/step-1");
    }
  }, [formData, navigate]);

  const handleSubmit = () => {
    alert("✅ Application submitted successfully!");
    navigate("/");
    // Reset form หลังจาก navigate เสร็จ
    setTimeout(() => resetForm(), 100);
  };

  const handleBack = () => {
    navigate("/apply/step-2");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Review Your Application</h2>

      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 space-y-4">
        <div className="border-b dark:border-gray-600 pb-3">
          <h3 className="font-semibold text-lg mb-3">Personal Information</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600 dark:text-gray-400">First Name:</span>
              <p className="font-medium">{formData.firstName}</p>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Last Name:</span>
              <p className="font-medium">{formData.lastName}</p>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Email:</span>
              <p className="font-medium">{formData.email}</p>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Phone:</span>
              <p className="font-medium">{formData.phone}</p>
            </div>
          </div>
        </div>

        <div className="pt-3">
          <h3 className="font-semibold text-lg mb-3">Experience & Skills</h3>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-gray-600 dark:text-gray-400">Position:</span>
              <p className="font-medium">{formData.position}</p>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Experience:</span>
              <p className="font-medium">{formData.experience}</p>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">Skills:</span>
              <p className="font-medium whitespace-pre-wrap">{formData.skills}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4">
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          ⚠️ Please review all information carefully before submitting. Once submitted, you cannot edit this application.
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleBack}
          className="flex-1 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          ← Back to Edit
        </button>
        <button
          onClick={handleSubmit}
          className="flex-1 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
        >
          ✓ Confirm & Submit
        </button>
      </div>
    </div>
  );
};

export default Review;
