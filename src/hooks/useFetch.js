import { useEffect, useState } from "react";

export const useFetch = (initialUrl) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
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
