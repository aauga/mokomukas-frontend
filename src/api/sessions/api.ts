import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { BASE_URL } from "../../config/constants";
import { SignupFormProps } from "./types";
import { User } from "../../types/user";
import { axiosInstance } from "../../config/axiosInstance";

export function useAuthenticatedUser() {
  return useQuery<User>({
    queryFn: async () => (await axiosInstance.get("/users/auth")).data,
    queryKey: ["users"],
  });
}

export function useSignup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SignupFormProps) =>
      axiosInstance.post("/users", { user: data }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
}

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SignupFormProps) =>
      axiosInstance.post("/users/login", { user: data }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
}

export function useLogout(userId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => axiosInstance.post(`/users/${userId}/logout`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users", userId] });
      window.location.replace(BASE_URL);
    },
  });
}
