import React, { useState } from "react";
import {
  Content,
  ImageCard,
  MovieCard,
  MovieGrid,
  Next,
  Pagination,
  Prev,
  TitleMovie,
  Wrapper,
} from "./HomePage.style";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ANIME } from "graphql/queries";
import { GetAnimes } from "graphql/response";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const { data, loading } = useQuery<GetAnimes>(GET_ANIME, {
    variables: { page, perPage: 10 },
  });
  const moviesList = data?.Page.media;
  const listPage = data?.Page.pageInfo.currentPage;
  const listPageLast = data?.Page.pageInfo.hasNextPage;

  const handleClick = (id: number) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Wrapper>
      {loading && (
        <h1
          className={css`
            text-align: center;
          `}
        >
          Loading
        </h1>
      )}
      <Content>
        <MovieGrid>
          {moviesList?.map((movie) => (
            <MovieCard key={movie.id} onClick={() => handleClick(movie?.id)}>
              <ImageCard src={movie.coverImage.large} alt="Small" />
              <TitleMovie>{movie.title.romaji}</TitleMovie>
            </MovieCard>
          ))}
        </MovieGrid>
      </Content>
      <Pagination>
        {listPage === 1 || loading ? null : (
          <Prev onClick={() => setPage(page - 1)}>Prev</Prev>
        )}

        {listPageLast ? (
          <Next onClick={() => setPage(page + 1)}>Next</Next>
        ) : null}
      </Pagination>
    </Wrapper>
  );
};
export default HomePage;
