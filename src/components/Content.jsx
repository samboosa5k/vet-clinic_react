import React from 'react';
import Search from './subcomponents/Search';

class Content extends React.Component {
    constructor( props ) {
        super( props );
    }

    handleSubmit(input){
        console.log(input);
    }

    render() {
        return (
            <div id="content">
                <Search 
                    submitProps={this.handleSubmit}
                />
            </div>
        )
    }

}

export default Content;