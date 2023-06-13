import { useCollection } from "hooks/useCollection";
import React from "react";

const MyCollection = () => {
  const { getCollection } = useCollection();
  console.log(getCollection);
  return <div>This is Collection Page</div>;
};

export default MyCollection;
