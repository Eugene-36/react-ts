import React from 'react';
import './info.module.css';

type Books = {
  id: number;
  name: string;
  price: number;
};

const InfoTemplate = (bookList: { array: any }) => {
  const { array } = bookList;
  console.log(array);

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
            {array.map(({ name, id, price }: Books) => (
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
