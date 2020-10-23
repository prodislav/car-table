import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableItem from '../table-item/component';
import Sort from '../../controls/sort-field/component';
import { dataRequest, deleteCar } from '../../../store/actions';

import './style.css';

function TableWrapper({ onOpen }) {
  const dispatch = useDispatch();

  const data = useSelector(state => state.carsData);

  const isLoading = useSelector(state => state.isLoading);

  const pullAsyncDataFunc = useCallback(() => {
    dispatch(dataRequest());
  }, [dispatch]);

  useEffect(() => {
    pullAsyncDataFunc();
  }, [pullAsyncDataFunc]);

  if (isLoading) {
    return 'loading...';
  }

  const handleDelete = id => {
    const searchingIndex = data.findIndex(el => el.id === id);
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
      <button type="button" className="button add-item" onClick={onOpen}>
        Add
      </button>
      <Sort />
    </div>
  );
}

export default TableWrapper;
