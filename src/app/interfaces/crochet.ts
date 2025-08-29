export interface CrochetStep {
  image: string;
  text: string | null;
}

export interface CrochetPattern {
  url: string;
  title: string;
  featured_image: string;
  steps: CrochetStep[];
}
