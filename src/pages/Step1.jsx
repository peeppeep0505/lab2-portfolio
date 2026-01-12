import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store/useFormStore";

const Step1 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormStore();

  const [localData, setLocalData] = useState({
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!localData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!localData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!localData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(localData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!localData.phone.trim()) newErrors.phone = "Phone is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      updateFormData(localData);
      navigate("/apply/step-2");
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Step 1: Personal Information</h2>

      <div>
        <label className="block text-sm font-medium mb-2">First Name *</label>
        <input
          type="text"
          name="firstName"
          value={localData.firstName}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600"
          placeholder="Enter your first name"
        />
        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Last Name *</label>
        <input
          type="text"
          name="lastName"
          value={localData.lastName}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600"
          placeholder="Enter your last name"
        />
        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email *</label>
        <input
          type="email"
          name="email"
          value={localData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Phone Number *</label>
        <input
          type="tel"
          name="phone"
          value={localData.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:border-gray-600"
          placeholder="Enter your phone number"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <button
        onClick={handleNext}
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Next: Experience & Skills →
      </button>
    </div>
  );
};

export default Step1;
