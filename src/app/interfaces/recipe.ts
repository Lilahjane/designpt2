
export interface Recipe {
  author: string;
  canonical_url: string;
  category: string;
  cook_time: number;
  cuisine: string;
  description: string;
  host: string;
  image: string;
  ingredient_groups: { ingredients: string[]; purpose: string | null }[];
  ingredients: string[];
  instructions: string;
  instructions_list: string[];
  nutrients: Record<string, string>;
  prep_time: number;
  ratings: number;
  ratings_count: number;
  site_name: string;
  yeilds: string;
  title: string;
  total_time: number;
  url: string;
}

