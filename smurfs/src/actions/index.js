import axios from 'axios';

export const FAIL = 'FAIL';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const SAVING = 'SAVING';
export const SAVED = 'SAVED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCHING});
    axios.get('http://localhost:3333/smurfs')
        .then(res => dispatch({type: FETCHED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const addSmurf = x => dispatch => {
    dispatch({ type: SAVING});
    axios.post('http://localhost:3333/smurfs', x)
        .then(res => dispatch({type: SAVED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const updateSmurf = (id, x) => dispatch => {
    dispatch({ type: UPDATING });
    axios.put(`http://localhost:3333/smurfs/${id}`, x)
        .then(res => dispatch({type: UPDATED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const exileSmurf = id => dispatch => {
    dispatch({ type: DELETING});
    axios.delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => dispatch({type: DELETED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}