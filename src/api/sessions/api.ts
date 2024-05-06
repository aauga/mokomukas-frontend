import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { SignupFormProps } from "./types";
import { User } from "../../types/user";
import { axiosInstance } from "../../config/axiosInstance";

export function useAuthenticatedUser() {
  return useQuery<User>({
    queryFn: async () => (await axiosInstance.get("/sessions")).data,
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
      axiosInstance.post("/sessions", { session: data }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => axiosInstance.delete("/sessions"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
