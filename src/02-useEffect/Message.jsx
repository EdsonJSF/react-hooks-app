import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Message mounter");

    return () => {
      console.log("Message unmounted");
    };
  }, []);

  return (
    <>
      <hr />
      <h3>User already exist</h3>
      <hr />
    </>
  );
};
