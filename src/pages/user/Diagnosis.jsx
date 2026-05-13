import { Navigate } from "react-router-dom";

/**
 * Diagnosis content now lives on Sleep test after assessment. Route kept for
 * bookmarks; product data may be wired here later.
 */
const Diagnosis = () => <Navigate to="/dashboard/user" replace />;

export default Diagnosis;
