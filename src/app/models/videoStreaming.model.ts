type TBaseMedia = {
  id: string,
  title: string,
  description: string,
  year: number,
  genre: Array<string>,
  rating: number,
  imageUrl: string,
  iframe: string

}

type TMovie = TBaseMedia & {
  type: "movie"

}

type TSerie = TBaseMedia & {
  type: "serie",
  seasons: number,
  episodes: number

}

type TAnimation = TBaseMedia & {
  type: "animation",
  studio: string

}

type TCategorie = TMovie | TSerie | TAnimation

export type TContent = {
  sectionTitle: string,
  items: Array<TCategorie>

}

type TContentDivision = "Catalog" | "MostWatched" | "Releases";

export type TVideoStreaming = {
  [ K in TContentDivision ]: TContent

};
