import { useEffect } from "react";

export const useTitle = (title) => {
    useEffect(() => {
        document.title=`${title} - InterView Questions`
    },[title])
  return null;
}
