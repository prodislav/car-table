import React, { useState } from 'react';
import TableWrapper from './components/blocks/table-wrapper/component';
import Modal from './components/blocks/modal/component';
import { useSelector, useDispatch } from 'react-redux';
import { addCar } from './store/actions';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const data = useSelector(
    (state) => state.carsData,
    );
  
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleSave = (e) => {
    e.preventDefault();

    const dataFromForm = [
      {
        id: `${data.length}-${e.target.childNodes[5].value}`,
        brand: e.target.childNodes[0].value,
        model: e.target.childNodes[1].value,
        year: Number(e.target.childNodes[2].value),
        country: e.target.childNodes[3].value,
        color: e.target.childNodes[4].value,
        price: Number(e.target.childNodes[5].value),
      },
    ];

    const newData = [...data, ...dataFromForm ]

    dispatch(addCar(newData));

    setShowModal(false);
  };

  

  const handleClose = () => {
    setShowModal(false);

  };

  return (
    <div className="App">
      <div className="container">
        {showModal && <Modal onSave={handleSave} onClose={handleClose} />}
        <TableWrapper onOpen={handleOpen} />
      </div>
    </div>
  );
}

export default App;
