import { useState } from "react";
import CardsData from "../components/CardsData";
export default function Home() {
  const [searchValue, setSearchValue] = useState("big");
  return (
    <>
      <CardsData searchValue={searchValue} />
    </>
  );
}
