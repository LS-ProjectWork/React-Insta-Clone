import React from 'react';

const withAuthenticate = Component => class ClassComponent extends React.Component {
    render() {
        return (
            <Component />
        )
    }
}