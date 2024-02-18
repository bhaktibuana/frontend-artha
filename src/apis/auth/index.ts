import { client } from "@/helpers/functions/httpClients";

const baseURL = "/api/auth";

const me = (id: string) => {
  const url = `${baseURL}/${id}`;
  return client().get(url);
};

export const APIAuth = {
  me,
};
