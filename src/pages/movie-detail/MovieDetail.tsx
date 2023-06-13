import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GetAnimes } from "graphql/response";
import { GET_ANIME } from "graphql/queries";
import { useCollection } from "hooks/useCollection";

import { css } from "@emotion/css";
import { Grid, Image, Wrapper } from "./MovieDetail.style";

const MovieDetail: React.FC = () => {
  const { id } = useParams<string>();
  const { data, loading } = useQuery<GetAnimes>(GET_ANIME, {
    variables: { id },
  });
  const animeDetailData = data?.Page?.media[0];
  const animeImage = animeDetailData?.coverImage.large;
  const animeTitle = animeDetailData?.title.romaji;
  const animeDesc = animeDetailData?.description;
  const { addCollection } = useCollection(animeDetailData);

  const handleCollection = () => {
    // addCollection(animeDetailData);
    console.log(animeDetailData);
    // localStorage.setItem("collection", JSON.parse(animeDetailData))
  };

  return (
    <Wrapper>
      <Grid>
        <Image>
          {loading && (
            <h1
              className={css`
                text-align: center;
              `}
            >
              Loading
            </h1>
          )}
          <img
            src={animeImage}
            alt="Desc"
            className={css`
              display: flex;
              justify-content: flex-start;
              border-radius: 6px;
              width: 350px;
              height: 450px;
              object-fit: cover;
            `}
          />
        </Image>
        <div>
          <div>{animeTitle}</div>
          <div>{animeDesc}</div>
        </div>
        <button onClick={handleCollection}>Add to Collection</button>
      </Grid>
    </Wrapper>
  );
};
export default MovieDetail;
