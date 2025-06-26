import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const API_BASE = 'https://api-menu.70yil.info';

export default function AxiosIntellision() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        url: API_BASE + '/categories',
        method: 'get',
      });
      setData(response.data);
    } catch (err) {
      setError(err.message || 'Ошибка при выполнении запроса');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [fetchData]);

  return (
    <div>
      <h1>Axios Intellision</h1>
      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

// Пример использования:
// const { data, loading, error, refetch } = useAxiosIntellision({
//   url: '/categories',
//   method: 'get',
// });
//
// Для POST:
// const { data, loading, error } = useAxiosIntellision({
//   url: '/categories',
//   method: 'post',
//   body: { name: 'Новая категория' },
// });
//
// Для DELETE:
// const { data, loading, error, refetch } = useAxiosIntellision({
//   url: `/categories/${id}`,
//   method: 'delete',
//   trigger: id, // чтобы повторно вызвать при изменении id
// });
