export interface Item {
  id: string;
  name: string;
  imgURL: string;
  ingredients: Array<Ingredient>;
}

export interface Material {
  id: string;
  name: string;
  imgURL: string;
}

export interface Ingredient {
  name: string,
  material: Material,
  quantity: number
}