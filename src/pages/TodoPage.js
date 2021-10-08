import React from 'react';
import Layout from '../views';
import Tables from "../views/Tables";

const TodoPage = ({ title, ...props }) => {

    return (
        <Layout title={title}>
            {() => {
                return (<>
                    <Tables.TodoTable />
                </>
                )
            }}
        </Layout>

    )
}

export default TodoPage;