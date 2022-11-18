export type Recipe = {
  name: string;
  author: string;
  isVegan: boolean;
  ingredients: RecipeIngredient[];
  cookingTime: number;
}

export type RecipeIngredient = {
  name: string;
  amount: string | number;
}