import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store/useFormStore";

const Step2 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormStore();

  // Guard: ถ้ายังไม่กรอก Step 1 ให้กลับไป
  useEffect(() => {
    if (!formData.email) {
      navigate("/apply/step-1");
    }
  }, [formData.email, navigate]);

  const [localData, setLocalData] = useState({
    position: formData.position,
    experience: formData.experience,
    skills: formData.skills,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!localData.position.trim()) newErrors.position = "Position is required";
    if (!localData.experience.trim()) newErrors.experience = "Experience is required";
    if (!localData.skills.trim()) newErrors.skills = "Skills are required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      updateFormData(localData);
      navigate("/apply/review");
    }
  };

  const handleBack = () => {
    updateFormData(localData); // บันทึกก่อนย้อนกลับ
    navigate("/apply/step-1");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Step 2: Experience & Skills</h2>

      <div>
        <label className="block text-sm font-medium mb-2">Position Applying For *</label>
        <input
          type="text"
          name="position"
          value={localData.position}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600"
          placeholder="e.g., Frontend Developer"
        />
        {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Years of Experience *</label>
        <input
          type="text"
          name="experience"
          value={localData.experience}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600"
          placeholder="e.g., 3 years"
        />
        {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Skills *</label>
        <textarea
          name="skills"
          value={localData.skills}
          onChange={handleChange}
          rows="4"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600"
          placeholder="e.g., React, JavaScript, Tailwind CSS"
        />
        {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills}</p>}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleBack}
          className="flex-1 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          ← Back
        </button>
        <button
          onClick={handleNext}
          className="flex-1 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Review Application →
        </button>
      </div>
    </div>
  );
};

export default Step2;
