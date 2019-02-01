import React, {Component} from 'react';

class Smurf extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.smurf.name,
            age: this.props.smurf.age,
            height: this.props.smurf.height,
            formClass: 'inactive'
        }
    }

    handleUpdateChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    formToggle = e => {
        e.preventDefault();
        if(this.state.formClass === 'inactive'){
            this.setState({
                ...this.state,
                formClass: 'active'
            })
        }
        else {
            this.setState({
                ...this.state,
                formClass: 'inactive'
            })
        }
    };

    updateSmurf = e => {
        this.props.updateSmurf(e, this.props.smurf.id, this.state);
        this.setState({
            ...this.state,
            formClass: 'inactive'
        })
    }
    
    render(){return (
        <div className='smurf' key={this.props.smurf.id}>
            <div className='top-box'>
                <div className='smurf-box'>
                    <h4>NAME: {this.props.smurf.name}</h4>
                    <p>AGE: {this.props.smurf.age}</p>
                    <p>HEIGHT: {this.props.smurf.height}</p>
                </div>
                <div className='button-box'>
                    <button onClick={this.formToggle}>Update Smurf</button>
                    <button onClick={e => this.props.exileSmurf(e, this.props.smurf.id)}>Exile Smurf</button>
                </div>
            </div>
            <form className={`update-form ${this.state.formClass}`} onSubmit={this.updateSmurf}>
                    <input
                        onChange={this.handleUpdateChange}
                        placeholder='Name'
                        value={this.state.name}
                        name='name'
                        type='text'
                    />
                    <input
                        onChange={this.handleUpdateChange}
                        placeholder='Age'
                        value={this.state.age}
                        name='age'
                        type='number'
                    />
                    <input
                        onChange={this.handleUpdateChange}
                        placeholder='Height'
                        value={this.state.height}
                        name='height'
                        type='text'
                    />
                    <button type='submit'>Submit</button>
            </form>
        </div>
    )}
}

export default Smurf;