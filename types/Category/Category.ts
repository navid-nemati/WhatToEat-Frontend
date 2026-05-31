export interface ICategoryItem {
    id: string,
    name: string,
}

export interface ICreateCategory {
    name: string
}

export interface IUpdateCategory {
    id: string,
    name: string,
}

export interface ICategoryQueryParams {
    name?: string
}