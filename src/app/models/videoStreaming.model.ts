type TBaseMedia = {
  type: Array<"movie" | "serie" | "animation">,
  id: string,
  title: string,
  description: string,
  year: number,
  genre: Array<string>,
  rating: number,
  imagesUrl: Array<string>,
  iframe: string

};

type TMovie = TBaseMedia;

type TSerie = TBaseMedia & {
  seasons: number,
  episodes: number

};

type TAnimation = TBaseMedia & {
  studio: string

};

type TCategorie = TMovie | TSerie | TAnimation;

export type TContent = {
  sectionTitle: string,
  items: Array<TCategorie>

};

type TContentDivision = "All" | "MainContent" | "MostWatched" | "Releases" | "Movies" | "Series" | "Animations";

export type TVideoStreaming = {
  [ K in TContentDivision ]: TContent

};
