
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts=()=>async despatch=>{
  const responseposts= await jsonPlaceholder.get('/posts');
    despatch({type:'FETCH_POSTS',payload:responseposts.data})
  }
