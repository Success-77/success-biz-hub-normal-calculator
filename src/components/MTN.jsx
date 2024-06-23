import React, { useMemo } from "react";
import Calculator from "./Calculator";

const MTN = () => {
  const initialAgentPrices = useMemo(
    () => ({
      1: 4.9,
      2: 9.6,
      3: 14.6,
      4: 18.5,
      5: 23,
      6: 27.8,
      7: 32.5,
      8: 37,
      10: 43.5,
      15: 65,
      20: 86,
      25: 103.5,
      30: 125,
      40: 160,
      50: 192,
      60: 208,
      70: 242,
      80: 270,
      100: 342,
    }),
    []
  );
  return (
    <div>
      <Calculator initialAgentPrices={initialAgentPrices} network={"MTN"} />
    </div>
  );
};

export default MTN;
