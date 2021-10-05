import React from 'react';
import Layout from '../views';
import AchiveTable from '../views/ArchiveTable'

const ArchivePage = ({title, ...props }) => {

    return (
        <Layout title={title}>
            {() => {
                return (
                    <AchiveTable />
                )
            }}
        </Layout>

    )
}

export default ArchivePage;