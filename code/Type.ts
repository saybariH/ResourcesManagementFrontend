export type User = {
  id: number
  firstname: string
  lastname: string
  email: string
  role: string
  password:string
}
export type NewUser = {
  firstname: string
  lastname: string
  email: string
  password: string
}
export const new_user0: NewUser = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
}

export type AuthType = {
  email:string
  password:string
}

export type TokenState = {
  token :string
  email :string
  role  :string
  expiration : number
}

export const initialToken:TokenState = {
  token :'',
  email :'',
  role  :'',
  expiration : 0
}

export type registerType = {
   email : string
   password :string
   firstname:string
   lastname :string
}

export const initRegister:registerType ={
  email : "",
  password :"",
  firstname:"",
  lastname :""
}
