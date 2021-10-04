
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts=()=>async despatch=>{
  const responseposts= await jsonPlaceholder.get('/posts');
    despatch({type:'FETCH_POSTS',payload:responseposts.data})
  }

export const fetchUser=(id)=>async despatch=>{
      const response=await jsonPlaceholder.get(`/users/${id}`)
      despatch({type:'FETCH_USER',payload:response.data})
  }