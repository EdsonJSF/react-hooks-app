import { useEffect, useState } from "react";

export const useFetch = (initialUrl) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async (url) => {
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    return () => {
      getFetch(initialUrl);
    };
  }, [initialUrl]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
