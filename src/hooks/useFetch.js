import { useEffect, useState } from "react";

const localCache = {};

export const useFetch = (initialUrl) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    if (localCache[initialUrl]) {
      console.log("using Cache");

      setState({
        data: localCache[initialUrl],
        isLoading: false,
        hasError: null,
        error: null,
      });

      return;
    }

    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(initialUrl);

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          messag: resp.statusText,
        },
      });

      return;
    }

    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: null,
      error: null,
    });

    localCache[initialUrl] = data;
  };

  useEffect(() => {
    return () => {
      getFetch();
    };
  }, [initialUrl]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
