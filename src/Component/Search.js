import React from "react";
const Search = React.memo(props => {
  return (
    <section className="search">
      <div>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" />
        </div>
      </div>
    </section>
  );
});
export default Search;
