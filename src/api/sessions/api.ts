import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { AxiosResponse } from "axios";
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
    onSuccess: (res: AxiosResponse<User>) => {
      const user = res.data;
      queryClient.invalidateQueries({ queryKey: ["users", user.id] });
    },
  });
}
