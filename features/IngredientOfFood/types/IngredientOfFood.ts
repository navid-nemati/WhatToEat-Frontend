export interface IIngredientsOfFoodDto {
    id: string;
    ingredientId: string;
    ingredientName: string;
    value: string;
}

export interface ICreateIngredientsOfFood {
    foodId: string
    ingredientId: string;
    value: string;
}

export interface IUpdateIngredientsOfFood {
    id: string
    ingredientId: string;
    value: string;
}