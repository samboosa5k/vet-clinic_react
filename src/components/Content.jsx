import React from 'react';
import Search from './subcomponents/Search';

class Content extends React.Component {
    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <>
                <Search />
            </>
        )
    }

}

export default Content;