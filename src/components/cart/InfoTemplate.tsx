import React, { useState, useEffect } from 'react';
import './info.css';

type Books = {
  id: number;
  name: string;
  price: number;
};

const InfoTemplate = (bookList: { array: any }) => {
  const [sortArr, setSort] = useState<Books[]>([]);
  const [toggle, setToggle] = useState<boolean>(false);
  // props.changedLogging();

  const { array } = bookList;

  useEffect(() => {
    setSort(array);
  }, [array]);

  const sortedArrayDown = () => {
    setSort(() => sortArr.sort((a, b) => a.price - b.price));
  };

  const sortedArrayUp = () => {
    setSort(() => sortArr.sort((a, b) => b.price - a.price));
  };

  console.log('sortArr', sortArr);

  return (
    <div className='wrapper'>
      <div className='container'>
        <h1>Books</h1>

        <div>
          <div className='selectContainer'>
            <span>Price</span>
            <span>Animals</span>
          </div>
          <ul className='list'>
            {sortArr.map(({ name, id, price }: Books) => (
              <li key={id}>
                <div className='nameCategory'>
                  <span className='spaceCategory'>{id}</span>
                  <span>{name}</span>
                </div>
                <span>{price} $</span>
              </li>
            ))}

            <li>Total Count: </li>
            <li>0</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoTemplate;
