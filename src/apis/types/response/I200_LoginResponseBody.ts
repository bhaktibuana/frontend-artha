/*
200 - Login ResponseBody
*/
export interface I200_LoginResponseBody { 
  message: string; 
  status: boolean; 
  data: {  id: number; 
  artha_id: string; 
  token: string; 
}; 
}