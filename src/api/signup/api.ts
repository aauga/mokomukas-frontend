import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AxiosResponse } from "axios";
import { SignupFormProps } from "./types";
import { User } from "../../types/user";
import { axiosInstance } from "../../config/axiosInstance";

export function useSignup() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SignupFormProps) =>
      axiosInstance.post("/users", { user: data }),
    onSuccess: (res: AxiosResponse<User>) =>
      queryClient.invalidateQueries({ queryKey: ["users", res.data.id] }),
  });
}
