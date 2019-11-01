import React from 'react';

class Search extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            searchQuery: '',
        }

        this.handleChange = this.handleChange.bind( this );
    }

    handleChange( event ) {
        event.preventDefault();

        this.setState( { searchQuery: event.target.value } );
    }

    render() {
        return (
            <>
                <form onSubmit="">
                    <label>
                        Name:
                    <input type="text" value={this.state.searchQuery} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }

}

export default Search;