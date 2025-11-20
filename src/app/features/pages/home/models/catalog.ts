export type Catalog = {
  [ option: string ]: {
    items: Array<{ title: string, content: Array<{ contentTitle: string, star: number, year: number, season: number }> }>
  }

}
