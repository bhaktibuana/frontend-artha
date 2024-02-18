/*
200 - Me ResponseBody
*/
export interface I200_MeResponseBody { 
  message: string; 
  status: boolean; 
  data: {  id: number; 
  name: string; 
  username: string; 
  tag_line: string; 
  account_id: string; 
  email: string; 
  status: string; 
  image_url: string; 
  role_id: number; 
  role: string; 
}; 
}