import { useEffect, useState } from 'react';
import axios from 'axios';

const useGet = ({url}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API = `https://api-menu.70yil.info${url}`

  useEffect(() => {
    let isMounted = true;

    axios.get(API)
      .then(response => {
        if (isMounted) {
          setData(response.data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message || 'Ошибка при загрузке данных');
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
};

// Как использовать этот хук в компоненте

// import React from 'react';
// import useGet from './useGet'; 

// function ?????() {
//   const { data, loading, error } = useGet({ url: '/????' });

//   if (loading) return <p>Загрузка...</p>;
//   if (error) return <p>Ошибка: {error}</p>;

//   return (
//     <div>
//       <h2>Категории</h2>
//       <ul>
//         {data?.map((category) => (
//           <li key={category.id}>{category.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ?????;

