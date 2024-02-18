/*
Login
POST: {{base_url}}{{api_route}}/auth/login
*/
export interface ILogin { 
  email: string; 
  password: string; 
  encrypted: boolean; 
}