import { Spinner } from "react-bootstrap";
import { useAuthenticatedUser } from "../../api/sessions/api";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  unauthorizedOnly: boolean;
  children: React.ReactNode;
}

export default function ProtectedRoute({
  unauthorizedOnly,
  children,
}: ProtectedRouteProps) {
  const user = useAuthenticatedUser();
  const navigate = useNavigate();

  if (user.isLoading) {
    return <Spinner />;
  }

  if (!!user || (user && unauthorizedOnly)) {
    navigate("/");
  }

  return <>{children}</>;
}
