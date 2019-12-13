import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
const LoginLayout = (props) => {
    return (
        <Fragment>
            {props.children}
        </Fragment>
    )
}
const LoginTemplate = ({ Component, ...props }) => (
    <Route {...props} render={componentProps => (
        <LoginLayout>
            <Component {...componentProps} />
        </LoginLayout>
    )}
    />
)
export default LoginTemplate