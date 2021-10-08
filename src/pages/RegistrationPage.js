import React from 'react';
import Layout from '../views';
import Components from '../components'

const RegistrationPage = ({title, ...props }) => {

    return (
        <Layout title={title}>
            {() => {
                return (
                  <Components.RegistrationComponent />
                )
            }}
        </Layout>

    )
}

export default RegistrationPage;