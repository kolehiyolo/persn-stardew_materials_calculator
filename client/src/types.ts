export interface Item {
  id: string;
  name: string;
  imgURL: string;
  ingredients: Array<Ingredient>;
  quantity: number;
}

export interface Material {
  id: string;
  name: string;
  imgURL: string;
  quantity: number;
}

export interface Ingredient {
  name: string,
  material: Material,
  quantity: number
}