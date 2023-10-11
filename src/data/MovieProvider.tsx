export const movies: MovieInterface[] = [
  {
    id: 6,
    title: "The Shining",
    year: 1980,
    director: "Stanley Kubrick",
    rating: "R",
    runtime: 120,
  },
  {
    id: 7,
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    rating: "PG-13",
    runtime: 148,
  },
  {
    id: 8,
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    rating: "R",
    runtime: 154,
  },
  {
    id: 9,
    title: "The Matrix",
    year: 1999,
    director: "The Wachowskis",
    rating: "R",
    runtime: 136,
  },
];

export interface MovieInterface {
  id: number;
  title: string;
  year: number;
  director: string;
  rating: string;
  runtime: number;
}
