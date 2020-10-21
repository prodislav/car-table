import React, { useEffect, useState, useCallback } from 'react';
import TableItem from '../table-item/component';
import {dataRequest} from './actions';
import { useSelector, useDispatch, useStore } from 'react-redux';
import './style.css';

function TableWrapper() {
    const dispatch = useDispatch();
    
    const data = useSelector(state => state.carsData)
    const isLoading = useSelector(state => state.isLoading)
    
    const pullAsyncDataFunc = useCallback(() => {
        dispatch(dataRequest());
    }, []);
    
    useEffect(() => {
        pullAsyncDataFunc();
    }, [])

    if(isLoading) {
        return 'loading...'
    }

    return(
        <div className="table-wrapper">
            <div className="table-head">
                <div className="table-head__name brand">Brand</div>
                <div className="table-head__name model">Model</div>
                <div className="table-head__name production-year">Production year</div>
                <div className="table-head__name production-country">Production country</div>
                <div className="table-head__name color">Color</div>
                <div className="table-head__name price">Price</div>
            </div>
            <div className="table-content">
                <TableItem data={data}/>
                <button onClick ={pullAsyncDataFunc}>Add</button>
            </div>
        </div>
    )
}

export default TableWrapper;