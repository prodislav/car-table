import React, {  useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select } from 'antd';
import { filterCarByPrice } from '../../../store/actions';
import 'antd/dist/antd.css';

import './style.css';

function Sort() {

  const inputMinPrice = useRef(null);
  const inputMaxPrice = useRef(null);

  const data = useSelector(state => state.carsData)
  const dispatch = useDispatch();
  
  const { Option } = Select;
  
  function handleChangeYear(value) {
    console.log(`selected ${value}`);
  }
  
  function handleChangePrice(value) {
    console.log(`selected ${value}`);
  }
  

  const handleCleanInputMinOnFocus = () => {
    inputMinPrice.current.value = '';
  }

  const handleCleanInputMaxOnFocus = () => {
    inputMaxPrice.current.value = '';
  }

  const handleFilter = (e) => {
    e.preventDefault();
    const newData = [];
    data.map((item) => {
      return item.price >= inputMinPrice.current.value && item.price <= inputMaxPrice.current.value ? newData.push(item) : newData;
    })
    dispatch(filterCarByPrice(newData));
  }

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
          <input type="number" defaultValue='0' ref={inputMinPrice} onFocus={handleCleanInputMinOnFocus} ></input>
        </div>
        <div className="price-to">
          <p>Цена до:</p>
          <input type="number" defaultValue='0' ref={inputMaxPrice} onFocus={handleCleanInputMaxOnFocus}  ></input>
        </div>
        <button className="button btn-filter" type='submit' >Show</button>
      </form>
    </div>
  );
}

export default Sort;
