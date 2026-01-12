import { create } from 'zustand';

export const useFormStore = create((set) => ({
  formData: {
    // Step 1: Personal Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Step 2: Experience & Skills
    experience: '',
    skills: '',
    position: '',
  },

  // อัปเดตข้อมูลทีละส่วน
  updateFormData: (data) => set((state) => ({
    formData: { ...state.formData, ...data }
  })),

  // รีเซ็ตฟอร์มทั้งหมด
  resetForm: () => set({
    formData: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      skills: '',
      position: '',
    }
  }),
}));
