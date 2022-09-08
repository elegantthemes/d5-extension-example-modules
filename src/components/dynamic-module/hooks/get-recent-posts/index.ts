import { fetch } from '@divi/ajax';
import { useEffect, useState } from 'react';

export const useGetRecentPosts = () => {
  const [posts, setPosts]       = useState([]);
  const [isLoading, setLoading] = useState(false);
  const apiFetchController      = new AbortController();


  useEffect(() => () => {
    apiFetchController.abort();
  }, []);

  const getPosts = (postsPerPage = 3) => {
    setLoading(true);
    console.log('Called 1');
    
    fetch({
      restRoute: `wp/v2/posts?context=view&per_page=${postsPerPage}`,
      method:    'GET',
      signal: apiFetchController.signal, 
    }).then((res) => {
      console.log(res);
      console.log('Called 2');
      
      setPosts(res);
      setLoading(false);
    });
  }

  return {
    getPosts,
    posts,
    isLoading,
  }
}