import { useEffect } from "react";
import { useState } from "react";

function useWillMount(callback: () => void) {
  const [willMount, setWillMount] = useState(true);
  if (willMount) {
    callback();
  }
  useEffect(() => {
    setWillMount(false);
  }, []);
}

export default useWillMount;
