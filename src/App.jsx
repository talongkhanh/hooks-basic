import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import './App.scss';
import Pagination from './components/Pagination';

function App() {
  const [postList, setPostList] = useState([]);

  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  })

  useEffect(() => {
    async function fetchPostList() {
      try {
        const queryParams = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${queryParams}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const { data, pagination } = responseJSON;
        setPagination(pagination);
        setPostList(data);
      } catch (error) {
        console.log('Erro fetching post list ..', error.message);
      }
    }
    fetchPostList();
  }, [filters]);

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      _page: newPage,
    })
  }
  return (
    <div className="app">
      {
        postList.map(post => (
          <li key={post.id}>{post.title}</li>
        ))
      }
      <Pagination
        pagination={pagination}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;