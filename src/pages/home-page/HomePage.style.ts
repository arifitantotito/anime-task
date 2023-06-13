import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex-col;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 50px;
`;

export const MovieCard = styled.div`
  display: flex-col;
  justify-content: center;
  /* border: 1px solid red; */
  padding: 1.5rem;
  /* border-radius: 6px; */
  cursor: pointer;
  max-width: 300px;
  transition-duration: 500ms;
  &:hover {
    transition-duration: 500ms;
    transform: scale(1.05);
  }
`;

export const ImageCard = styled.img`
  border-radius: 6px;
  width: 250px;
  height: 350px;
  object-fit: cover;
`;

export const TitleMovie = styled.p`
  text-align: center;
  font-weight: bold;
  inline-size: 250px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Prev = styled.div`
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
  padding: 10px;
  font-weight: bold;
  max-width: 50px;
  cursor: pointer;
  border: 2px solid #ededed;
  transition-duration: 500ms;
  &:hover {
    transition-duration: 500ms;
    background-color: #ededed;
  }
`;
export const Next = styled.div`
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  padding: 10px;
  font-weight: bold;
  max-width: 50px;
  cursor: pointer;
  border: 2px solid #ededed;
  transition-duration: 500ms;
  &:hover {
    transition-duration: 500ms;
    background-color: #ededed;
  }
`;
