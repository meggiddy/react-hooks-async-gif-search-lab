import { useState } from "react";

function GifSearch({onSearch}) {
    const [searchField, setSearchField] = useState("");

  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
    onSearch(e.target.value);
  };
  return (
    <div className=" mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Type here to search."
        onChange={handleSearchChange}
        value={searchField}
      />
    </div>
  );
}

export default GifSearch;
