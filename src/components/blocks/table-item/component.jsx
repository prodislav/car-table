import React from 'react';
import './style.css';

function TableItem(props) {
  const { data } = props;

  return (
    <React.Fragment>
      {data.map((item) => (
        <div className="table-item" key={item.id}>
          <div className="table-item__name">{item.brand}</div>
          <div className="table-item__name">{item.model}</div>
          <div className="table-item__name">{item.year}</div>
          <div className="table-item__name">{item.country}</div>
          <div className="table-item__name">{item.color}</div>
          <div className="table-item__name">{`${item.price}$`}</div>
          <button className = 'btn-del' onClick={() => {props.onDelete(item.id)}}>х</button>
        </div>
      ))}
    </React.Fragment>
  );
}

export default TableItem;
