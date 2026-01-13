import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const ProtectedRoute = ({ children, requiredRole }) => {
  const user = useAuthStore((state) => state.user);
  const location = useLocation();

  // Guard 1: ถ้ายังไม่ Login ให้ไปหน้า Login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Guard 2: ถ้า Login แล้ว แต่สิทธิ์ไม่ถึง (ต้องการ admin แต่เป็น user)
  // หาก redirect เก็บ query parameters ไว้
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/dashboard" replace state={{ from: location }} />;
  }

  // ถ้าผ่านทุก Guard ให้แสดงหน้าที่ต้องการ
  return children;
};

export default ProtectedRoute;
