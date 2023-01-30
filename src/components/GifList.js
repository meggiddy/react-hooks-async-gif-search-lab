function GifList({ gifs }) {
  const list = gifs.map((gif) => (
    <li key={gif.id} style={{listStyleType: "none"}}>
      <img src={gif.images.original.url} alt={gif.title} />
    </li>
  ));

  return <ul>{list}</ul>;
}

export default GifList;
