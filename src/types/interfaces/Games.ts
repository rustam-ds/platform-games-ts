import { UNSAFE_ANY_TYPE } from '../types';

export interface Games {
  count: number;
  next: string;
  previous: string;
  results: {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: UNSAFE_ANY_TYPE;
    ratings_count: number;
    reviews_text_count: string;
    added: number;
    added_by_status: UNSAFE_ANY_TYPE;
    metacritic: number;
    playtime: number;
    suggestions_count: number;
    updated: string;
    esrb_rating: {
      id: number;
      slug: string;
      name: string;
    };
    platforms: {
      platform: {
        id: number;
        slug: string;
        name: string;
      };
      released_at: string;
      requirements: {
        minimum: string;
        recommended: string;
      };
    }[];
  }[];
}
