import React from 'react';
import { Card } from '../home/card';
import productStyle from './product.module.css'
import { MainLayout } from '../../layout/main-layout';
export const  Product = () =>{
    return(
        <>
        <div className={productStyle.container}>
            <Card/>
        </div>
        </>
    )
}