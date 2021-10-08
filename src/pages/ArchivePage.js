import React from 'react';
import Layout from '../views';
import Tables from "../views/Tables";

const ArchivePage = ({title, ...props }) => {

    return (
        <Layout title={title}>
            {() => {
                return (
                    <Tables.AchiveTable />
                )
            }}
        </Layout>

    )
}

export default ArchivePage;