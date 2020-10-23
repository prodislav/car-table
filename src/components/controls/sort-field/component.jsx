import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select } from 'antd';
import { filterCarByPrice, sortCarByYear, sortCarByPrice } from '../../../store/actions';
import 'antd/dist/antd.css';

import './style.css';

function Sort() {
  const inputMinPrice = useRef(null);
  const inputMaxPrice = useRef(null);

  const data = useSelector(state => state.carsData);
  const dispatch = useDispatch();

  const { Option } = Select;

  function handleChangeYear(value) {
    const newData = [...data];
    if (value === 'old') {
      newData.sort((a, b) => (a.year > b.year ? 1 : -1));
    }
    if (value === 'new') {
      newData.sort((a, b) => (a.year < b.year ? 1 : -1));
    }
    dispatch(sortCarByYear(newData));
  }

  function handleChangePrice(value) {
    const newData = [...data];
    if (value === 'cheap') {
      newData.sort((a, b) => (a.year < b.year ? 1 : -1));
    }
    if (value === 'expensive') {
      newData.sort((a, b) => (a.price > b.price ? 1 : -1));
    }
    dispatch(sortCarByPrice(newData));
  }

  const handleCleanInputMinOnFocus = () => {
    inputMinPrice.current.value = '';
  };

  const handleCleanInputMaxOnFocus = () => {
    inputMaxPrice.current.value = '';
  };

  const handleBlurInputMin = () => (!inputMinPrice.current.value
    ? (inputMinPrice.current.value = '0')
    : inputMinPrice.current.value);

  const handleBlurInputMax = () => (!inputMaxPrice.current.value
    ? (inputMaxPrice.current.value = '0')
    : inputMaxPrice.current.value);

  const handleFilter = e => {
    e.preventDefault();
    const newData = [];
    data.map(item => (item.price >= inputMinPrice.current.value
        && item.price <= inputMaxPrice.current.value
      ? newData.push(item)
      : newData));
    dispatch(filterCarByPrice(newData));
  };

  return (
    <div className="sort-wrapper">
      <div className="sort">
        <div className="sort-by-year">
          <Select
            placeholder="Сортировать по году выпуска:"
            style={{ width: 250 }}
            onChange={handleChangeYear}
          >
            <Option value="new">Сначала новые</Option>
            <Option value="old">Сначала старые</Option>
          </Select>
        </div>
        <div className="sort-by-price">
          <Select
            placeholder="Сортировать по цене:"
            style={{ width: 250 }}
            onChange={handleChangePrice}
          >
            <Option value="cheap">Сначала дорогие</Option>
            <Option value="expensive">Сначала дешевые</Option>
          </Select>
        </div>
      </div>
      <form className="filter" onSubmit={handleFilter}>
        <div className="price-from">
          <p>Цена от:</p>
          <input
            type="number"
            defaultValue="0"
            ref={inputMinPrice}
            onFocus={handleCleanInputMinOnFocus}
            onBlur={handleBlurInputMin} />
        </div>
        <div className="price-to">
          <p>Цена до:</p>
          <input
            type="number"
            defaultValue="0"
            ref={inputMaxPrice}
            onFocus={handleCleanInputMaxOnFocus}
            onBlur={handleBlurInputMax} />
        </div>
        <button className="button btn-filter" type="submit">
          Show
        </button>
      </form>
    </div>
  );
}

export default Sort;
