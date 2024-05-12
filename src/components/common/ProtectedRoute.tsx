import { Spinner } from "react-bootstrap";
import { useAuthenticatedUser } from "../../api/sessions/api";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  unauthorizedOnly?: boolean;
  children: React.ReactNode;
}

export default function ProtectedRoute({
  unauthorizedOnly,
  children,
}: ProtectedRouteProps) {
  const navigate = useNavigate();
  const user = useAuthenticatedUser();

  const loggedIn = user.data && user.isSuccess;

  if (user.isLoading) {
    return <Spinner />;
  }

  if (!loggedIn || (loggedIn && unauthorizedOnly)) {
    navigate("/");
  }

  return <>{children}</>;
}
