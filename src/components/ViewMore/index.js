import React from "react";
import { Wrapper, Button } from "./styled";

export const ViewMore = (props) => {
  const { setCoinsCount, coinsCount } = props;

  return (
    <Wrapper>
      <Button onClick={() => setCoinsCount(coinsCount + 40)}>View More</Button>
    </Wrapper>
  );
};
