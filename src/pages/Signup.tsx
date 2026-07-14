import { Navigate } from "react-router-dom";

// /signup now redirects to the unified auth page with the signup tab open
const Signup = () => <Navigate to="/login?tab=signup" replace />;

export default Signup;
