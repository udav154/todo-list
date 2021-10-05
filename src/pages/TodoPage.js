import React from 'react';
import Layout from '../views';
import TodoTable from '../views/TodoTable'

const TodoPage = ({ title, ...props }) => {

    return (
        <Layout title={title}>
            {() => {
                return (<>
                    <TodoTable />
                </>
                )
            }}
        </Layout>

    )
}

export default TodoPage;