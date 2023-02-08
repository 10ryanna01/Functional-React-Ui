
import { useState } from "react";
import CardsData from "../components/CardsData";

export default function Explore() {
  const [searchValue] = useState("search");
  return (
    <>
      <h1 className="UI__static__page__title">explore...</h1>

      <div className="UI__static__page">
        <CardsData searchValue={searchValue} />
      </div>
    </>
  );
}
