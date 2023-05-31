export default function LiveSearch(props) {
  const searchlabelText = "search for movies";
  const handleOnChangeSearch = (event) => {
    props.setSearchValue(event.target.value.toString().toLowerCase());
  };

  return (
    <div className="UI__live-search">
      <form className="UI__form__content">
        <div className="UI__form__content__input-row">
          <label
            htmlFor="search-field__input"
            className="UI__utility__screen-reader"
          >
            Search
          </label>

          <input
            onKeyDown={handleOnChangeSearch}
            onChange={handleOnChangeSearch}
            value={props.value}
            className="UI__form__content__input-search"
            name="search-field__input"
            placeholder={searchlabelText}
          />
        </div>
      </form>
    </div>
  );
}
