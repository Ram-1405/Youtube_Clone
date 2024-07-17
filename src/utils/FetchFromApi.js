import axios from "axios";
    
export const baseURL='https://youtube-v31.p.rapidapi.com'

const api={
    params: {
        maxResults: 50,
      },
      headers: {
        'x-rapidapi-key': 'f318486a66msh799173660ee0dd5p1c290bjsn26994a4bef0b',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
      },
};
export const fetchapoi = async (url) => {
    try {
      const response = await axios.get(`${baseURL}/${url}`, api);
      console.log("API response:", response); 
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };