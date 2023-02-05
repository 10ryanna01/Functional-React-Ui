export default function LiveSearch(props) {
  // const searchlabelText = "starwars";
     const handleOnChangeSearch = (event) => {
      console.log(props.searchValue)
      props.setSearchValue(event.target.value);
  }; 

  return (
    <div>
      <div className="UI__form__content__input-row">
        <label htmlFor="search-field__input">Search</label>

        <input
          onChange={handleOnChangeSearch}
          value={props.value} 
          name="search-field__input"
         
        />
      </div>
    </div>
  );
}
