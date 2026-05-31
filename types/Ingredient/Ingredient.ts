export interface IIngredientItem {
    id: string
    name: string
}

export interface ICreateIngredient {
    name: string
}

export interface IUpdateIngredient {
    id: string
    name: string
}

export interface IngredientQueryParams {
    name?: string
}