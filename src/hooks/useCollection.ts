import { Media } from "graphql/response";

export const useCollection = (data?: Media) => {
  const addCollection = (data: any) => {
    localStorage.setItem("collection", data);
  };
  const getCollection = () => {
    const collection = localStorage.getItem("collection");
    return collection;
  };
  const removeCollection = () => {
    localStorage.removeItem("collection");
  };
  return {
    addCollection,
    getCollection,
    removeCollection,
  };
};
