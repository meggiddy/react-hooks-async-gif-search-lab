import { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifList, setGifList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=NT4BFUnKXu8r5edNbh78SeZtyjuStIV9&limit=25&rating=g"
    )
      .then((response) => response.json())
      .then((data) => setGifList(data.data));
  }, [searchTerm]);
  console.log(gifList);

  function handleSearch(search) {
    const searchedGif = gifList.filter((gif) => {
      if (search !== "") {
        return gif.title.toLowerCase().includes(search.toLowerCase());
      } else {
        return true;
      }
    });
    setGifList(searchedGif);
  }

  return (
    <>
      <GifSearch onSearch={handleSearch} />
      <GifList gifs={gifList} />
    </>
  );
}

export default GifListContainer;
