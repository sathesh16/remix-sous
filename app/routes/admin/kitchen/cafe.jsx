import React from 'react'
import ProductsTable from '../../../components/ProductGrid'
import { getSession } from '../../../sessionHandler.server';
import { redirect } from '@remix-run/node';


function Cafe() {
    return (
        <ProductsTable />
    )
}

export default Cafe
