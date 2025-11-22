type Info = {
  title: string,
  description?: string,
  year: number,
  genre?: Array<string>,
  rating: number,
  imageUrl: string

}

export type Movie = Info & {
  duration?: number

}

export type Serie = Info & {
  seasons?: number,
  episodes?: number

}

export type Animation = (Movie | Serie) & {
  animationStudio?: string

}

export type Categorie = Movie | Serie | Animation

export type Catalog<T extends Categorie> = {
  sectionTitle: string,
  items: Array<T>

}
