import React from 'react';
import Layout from '../views';
import BasketTable from '../views/BasketTable'

const BasketPage = ({title, ...props }) => {

    return (
        <Layout title={title}>
            {() => {
                return (
                    <BasketTable />
                )
            }}
        </Layout>

    )
}

export default BasketPage;