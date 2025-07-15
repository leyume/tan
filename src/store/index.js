import { API, qc } from "../config";
import { useQuery, useMutation } from "@tanstack/vue-query";

export const gQ = (url) =>
  useQuery(
    {
      queryKey: [url],
      queryFn: async () => {
        const res = await API.get(`/${url}`);
        // await new Promise((r) => setTimeout(r, 4000));
        return res.data;
      },
    },
    qc
  );

export const mPost = () =>
  useMutation(
    {
      mutationFn: async (payload) => {
        const res = await API.post(`posts`, payload);
        console.log({ res });
        return res.data;
      },
      onSuccess: (data) => {
        console.log({ data });
      },
      onError: (error) => {
        console.log({ error });
      },
    },
    qc
  );
