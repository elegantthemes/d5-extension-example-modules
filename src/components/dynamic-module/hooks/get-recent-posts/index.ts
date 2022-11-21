import { fetch } from '@divi/ajax';
import { useEffect, useState } from 'react';

export const useGetRecentPosts = () => {
  const [posts, setPosts]       = useState([]);
  const [isLoading, setLoading] = useState(false);
  const apiFetchController      = new AbortController();


  useEffect(() => () => {
    apiFetchController.abort();
  }, []);

  const getPosts = (postsPerPage = 5) => {
    setLoading(true);
    
    fetch({
      restRoute: `wp/v2/posts?context=view&per_page=${postsPerPage}`,
      method:    'GET',
      signal: apiFetchController.signal, 
    }).then((res) => {
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