import React from 'react';
import Layout from '../views';

const TodoPage = ({ title, ...props }) => {

    return (
        <Layout title={title}>
            {() => {
                return (
                    <p>
                    TodoPage TodoPage TodoPage TodoPage<br />
                    TodoPage TodoPage TodoPage TodoPage<br />
                    TodoPage TodoPage TodoPage TodoPage<br />
                    TodoPage TodoPage TodoPage TodoPage<br />

                    TodoPage TodoPage TodoPage TodoPage<br />
                    TodoPage TodoPage TodoPage TodoPage<br />
                    TodoPage TodoPage TodoPage TodoPage<br />
                    TodoPage TodoPage TodoPage TodoPage<br />
                    TodoPage TodoPage TodoPage TodoPage<br />
                    TodoPage TodoPage TodoPage TodoPage<br />
                    TodoPage TodoPage TodoPage TodoPage<br />
                    TodoPage TodoPage TodoPage TodoPage<br />
                    </p>
                )
            }}
        </Layout>

    )
}

export default TodoPage;