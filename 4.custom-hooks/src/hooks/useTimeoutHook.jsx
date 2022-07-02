import { useEffect } from "react";
import { useState } from "react";

const useTimeoutHook = (timeout) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      return setReady(true);
    }, timeout);
  }, []);

  return { ready };
};

export default useTimeoutHook;
