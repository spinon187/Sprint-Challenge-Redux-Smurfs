import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs, addSmurf, updateSmurf, exileSmurf} from '../actions';
import Smurf from './Smurf';


class SmurfList extends Component {

    state = {
        name: '',
        age: '',
        height: '',
        formClass: 'inactive' 
    }

    componentDidMount(){
        this.props.fetchSmurfs();
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    addSmurf = e => {
        e.preventDefault();
        this.props.addSmurf(this.state);
    }

    exileSmurf = (e, id) => {
        e.preventDefault();
        console.log(id);
        this.props.exileSmurf(id);
    }

    updateSmurf = (e, id, x) => {
        e.preventDefault();
        console.log(id, x);
        this.props.updateSmurf(id, x);
    }

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

    render(){
        return(
            <div className='big-box'>
                <div className='smurf-form'>
                    <button className='smurf-form-button' onClick={this.formToggle}>New Smurf</button>
                    <form className={`add-smurf ${this.state.formClass}`} onSubmit={this.addSmurf}>
                        <input
                            onChange={this.handleInputChange}
                            placeholder='Name'
                            value={this.state.name}
                            name='name'
                            type='text'
                        />
                        <input
                            onChange={this.handleInputChange}
                            placeholder='Age'
                            value={this.state.age}
                            name='age'
                            type='number'
                        />
                        <input
                            onChange={this.handleInputChange}
                            placeholder='Height'
                            value={this.state.height}
                            name='height'
                            type='text'
                        />
                        <button type='submit'>Add Smurf</button>
                    </form>
                </div>
                <div className='smurfs-list'>
                    {this.props.smurfs.map(smurf => {
                        return <Smurf
                            smurf={smurf}
                            exileSmurf={this.exileSmurf}
                            updateSmurf={this.updateSmurf}
                            handleInputChange = {this.handleInputChange}
                        />;
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        fetchingSmurfs: state.fetchingSmurfs,
        addingSmurfs: state.addingSmurfs,
        updatingSmurf: state.updatingSmurf,
        exilingSmurf: state.exilingSmurf,
        smurfs: state.smurfs,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchSmurfs, addSmurf, updateSmurf, exileSmurf})(SmurfList);