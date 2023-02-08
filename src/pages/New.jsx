import CardsData from "../components/CardsData";

 import { useState } from "react";
export default function New() { 
  const [searchValue] = useState("new");
  return (
    <>
<h1 className="UI__static__page__title">see whats new</h1>

<div className="UI__static__page">
<CardsData searchValue={searchValue} /> 
     
</div>
    </>
  )
}