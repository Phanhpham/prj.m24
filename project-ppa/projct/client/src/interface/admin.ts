export interface Admin{
    userName: string,
    password: string,
}
export interface Admins {
    email: string,
    password:string,
}

export interface Users{
    id: number
    userName: string
    email: string,
    created_at: string,
    password: string,
    confirmPassword: string,
    status: number
}
export interface AddUser{
    userName: string
    email: string,
    password: string,
    confirmPassword: string,
}

export interface Product{
    id: number,
    nameProduct: string,
    image: string,
    price: string,
    stock: number,
    status: string,
}