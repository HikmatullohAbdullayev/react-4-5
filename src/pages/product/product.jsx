import React from 'react';
import { Card } from '../home/card';
import productStyle from './product.module.css'
import { MainLayout } from '../../layout/main-layout';
export const  Product = () =>{
    return(
        <>
        <div className={productStyle.container}>
        <div className={productStyle.box}> <h1>Maxsulotlar</h1></div>
            <Card/>
        </div>
        </>
    )
}