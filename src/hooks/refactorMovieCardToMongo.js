function refactorMovieCardToMongo(initialCard) {
  let imageUrl =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpikabu.ru%2Fstory%2Fzdes_dolzhna_byila_byit_dver_4239566&psig=AOvVaw2wGagfKi01zhZzdnihuRVR&ust=1622182718592000&source=images&cd=vfe&ved=2ahUKEwjq7PHWm-nwAhVk_SoKHVOQDkcQjRx6BAgAEAc";
  let imageThumbnail =
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpikabu.ru%2Fstory%2Fzdes_dolzhna_byila_byit_dver_4239566&psig=AOvVaw2wGagfKi01zhZzdnihuRVR&ust=1622182718592000&source=images&cd=vfe&ved=2ahUKEwjq7PHWm-nwAhVk_SoKHVOQDkcQjRx6BAgAEAc";
  if (initialCard.image) {
    imageUrl = `https://api.nomoreparties.co${initialCard.image.url}`;
    imageThumbnail = `https://api.nomoreparties.co${initialCard.image.formats.thumbnail.url}`;
  }

  return {
    country: initialCard.country,
    director: initialCard.director,
    duration: initialCard.duration,
    year: initialCard.year,
    description: initialCard.description,
    image: imageUrl,
    trailer: initialCard.trailerLink,
    nameRU: initialCard.nameRU,
    nameEN: initialCard.nameEN,
    thumbnail: imageThumbnail,
    movieId: initialCard.id,
  };
}
export default refactorMovieCardToMongo;
