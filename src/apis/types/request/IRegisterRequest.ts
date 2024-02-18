/*
Register
POST: {{base_url}}{{api_route}}/auth/register
*/
export interface IRegister { 
  name: string; 
  email: string; 
  password: string; 
  encrypted: boolean; 
}