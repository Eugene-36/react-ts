import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './info.css';

type Books = {
  id: number;
  name: string;
  price: number;
  category: string;
};
type SlectedValue = {
  value: string;
  label: string;
};

const options = [
  { value: 'animals', label: 'Animals' },
  { value: 'tourizm', label: 'Tourizm' },
  { value: 'parfum', label: 'Parfum' },
  { value: 'music', label: 'Music' },
  { value: 'food', label: 'Food' },
];

const InfoTemplate = (bookList: { array: any }) => {
  const [sortArr, setSort] = useState<Books[]>([]);
  const [toggle, setToggle] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<SlectedValue>({
    value: '',
    label: 'Category',
  });
  const [categoryPrice, setCategoryPrice] = useState<number>(0);

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

  function toggleFunction() {
    if (toggle) {
      sortedArrayDown();
    } else {
      sortedArrayUp();
    }
    setToggle(!toggle);
  }

  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    console.log('selectedOption', selectedOption);

    setSort(
      array.filter(({ category }: Books) => {
        return category.toLowerCase() === selectedOption?.value.toLowerCase();
      })
    );
  };
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const currentPrice = Number(
      e.currentTarget.children[1].innerHTML.replace('$', '')
    );
    setCategoryPrice((prevState) => prevState + currentPrice);
  };

  return (
    <div className='wrapper'>
      <div className='container'>
        <h1>Books</h1>
        <div>
          <div className='selectContainer'>
            <div className='flexArrow'>
              <span className='priceLabel' onClick={() => toggleFunction()}>
                Price
              </span>
              <span
                className={`material-symbols-outlined  ${
                  toggle ? 'up' : 'down'
                }`}
              >
                straight
              </span>
            </div>

            <Select
              defaultValue={selectedOption}
              onChange={(selectedOption) => handleChange(selectedOption)}
              options={options}
              className='selector'
            />
          </div>
          <ul className='list'>
            {sortArr.map(({ name, id, price }: Books) => (
              <li onClick={(e) => handleClick(e)} key={id}>
                <div className='nameCategory'>
                  <span className='spaceCategory'>{id}</span>
                  <span>{name}</span>
                </div>
                <span>{price} $</span>
              </li>
            ))}

            <li>Total Count: </li>
            <li>{categoryPrice}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoTemplate;
