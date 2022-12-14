import React from 'react';
import Layout from '../views';
import Tables from "../views/Tables";

const BasketPage = ({title, ...props }) => {

    return (
        <Layout title={title}>
            {() => {
                return (
                    <Tables.BasketTable />
                )
            }}
        </Layout>

    )
}

export default BasketPage;