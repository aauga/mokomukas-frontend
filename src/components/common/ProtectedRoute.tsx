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
  const { data: user, isLoading } = useAuthenticatedUser();
  const navigate = useNavigate();

  const loggedIn = !!user;

  if (isLoading) {
    return <Spinner />;
  }

  if (loggedIn || (loggedIn && unauthorizedOnly)) {
    navigate("/");
    return null;
  }

  return <>{children}</>;
}
