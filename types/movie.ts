export interface Director {
  peopleNm: string;
}

export interface Company {
  companyCd: string;
  companyNm: string;
}

export interface Movie {
  movieCd: string;
  movieNm: string;
  movieNmEn: string;
  prdtYear: string;
  openDt: string;
  typeNm: string;
  prdtStatNm: string;
  nationAlt: string;
  genreAlt: string;
  repNationNm: string;
  repGenreNm: string;
  directors: Director[];
  companys: Company[];
}

export interface MovieData {
  boxOfficeResult?: {
    boxofficeType: string;
    range: string;
    totCnt: number;
    movieList: Movie[];
  };
  movieListResult?: {
    message: string;
    range: string;
    totCnt: number;
    movieList: Movie[];
  };
}
