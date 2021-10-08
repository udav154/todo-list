import React from 'react';
import Layout from '../views';
import Components from '../components'

const AuthenticationPage = ({title, ...props }) => {

    return (
        <Layout title={title}>
            {() => {
                return (
                  <Components.AuthenticationComponent />
                )
            }}
        </Layout>

    )
}

export default AuthenticationPage;