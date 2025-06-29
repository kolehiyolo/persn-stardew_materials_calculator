export interface Item {
  id: string;
  name: string;
  imgURL: string;
  ingredients: Array<Material>;
}

export interface Material {
  id: string;
  name: string;
  imgURL: string;
  quantity: number;
}