import { isAxiosError } from "axios";
import ErrorNotify from "./ErrorNotify";

export const handleError = (error: any, setCity: (s: string) => void) => {
  if (isAxiosError(error) && error.response) {
    ErrorNotify(error.response.data.message);
    if (error.response.status === 404) {
      setCity("");
    }
  } else if (isAxiosError(error) && error.message) {
    ErrorNotify(error.message);
  } else throw error;
};
