import { IIngredientsOfFoodDto } from "../../ingredientsOfFoods/types/IngredientOfFood";


export interface IFoodDto {
    id: string;
    name: string;
    categoryId: string;
    categoryName: string;
}

export interface IFoodDetailDto extends IFoodDto{
    ingredients: IIngredientsOfFoodDto[];
}

export interface ICreateFoodDto {
    name: string;
    categoryId: string;
}

export interface IUpdateFoodDto {
    id: string;
    name: string;
    categoryId: string;
}