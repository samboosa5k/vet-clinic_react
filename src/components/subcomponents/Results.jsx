import React from 'react';

class Results extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            results: '',
        }

        this.handleChange = this.handleChange.bind( this );
        this.handleSubmit = this.handleSubmit.bind( this );
    }

    handleChange( event ) {
        event.preventDefault();
        this.setState( { searchQuery: event.target.value } );
    }

    handleSubmit( event ) {
        event.preventDefault();
        this.props.submitProps( this.state.searchQuery );
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
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

export default Results;