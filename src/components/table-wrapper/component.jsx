import React, { useEffect, useCallback } from 'react';
import TableItem from '../table-item/component';
import { dataRequest, deleteCar } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

function TableWrapper(props) {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.carsData);

  const isLoading = useSelector((state) => state.isLoading);

  const pullAsyncDataFunc = useCallback(() => {
    dispatch(dataRequest());
  }, []);

  useEffect(() => {
    pullAsyncDataFunc();
  }, []);

  if (isLoading) {
    return 'loading...';
  }

  const handleDelete = (id) => {
    const searchingIndex = data.findIndex((el) => el.id === id);
    const beforeIndex = data.slice(0, searchingIndex);
    const afterIndex = data.slice(searchingIndex + 1);
    const newData = [...beforeIndex, ...afterIndex];
    dispatch(deleteCar(newData));
  };

  return (
    <div className="table-wrapper">
      <div className="table-head">
        <div className="table-head__name brand">Brand</div>
        <div className="table-head__name model">Model</div>
        <div className="table-head__name production-year">Production year</div>
        <div className="table-head__name production-country">
          Production country
        </div>
        <div className="table-head__name color">Color</div>
        <div className="table-head__name price">Price</div>
      </div>
      <div className="table-content">
        <TableItem data={data} onDelete={handleDelete} />
      </div>
      <button className="button add-item" onClick={props.onOpen}>
        Add
      </button>
      <div className="sort-wrapper">
        <div className="sort">
          <div className="sort-by-year">
            <p>Сортировать по году выпуска:</p>
            <select>
              <option>Сначала новые</option>
              <option>Сначала старые</option>
            </select>
          </div>
          <div className="sort-by-prise">
            <p>Сортировать по цене:</p>
            <select>
              <option>Сначала дорогие</option>
              <option>Сначала дешевые</option>
            </select>
          </div>
        </div>
        <div className="filter">rgerg</div>
      </div>
    </div>
  );
}

export default TableWrapper;
