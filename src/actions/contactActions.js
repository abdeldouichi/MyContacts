import axios from 'axios'

export const getContacts = () => async dispatch => {

    const res = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch(
        {
            type: 'GET_CONTACTS',
            payload: res.data
        }
    );

};
export const getContact = (id) => async dispatch => {

    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch(
        {
            type: 'GET_CONTACT',
            payload: res.data
        }
    );

};
export const deleteContact = (id) => dispatch => {
    try {
        const res = axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                    dispatch({
                        type: 'DELETE_CONTACT',
                        payload: id
                    })
                })
            .catch(error => {
                alert(error);
                })


    } catch (error) {
        alert(error)
    }
};
export const addContact = (contact) => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', contact);
    dispatch({
        type: 'ADD_CONTACT',
        payload: res.data
    });
};
export const updateContact = (contact) => async dispatch => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact).then(
        res => dispatch({
            type: 'UPDATE_CONTACT',
            payload: res.data
        }))
        .then(error => {console.log(error)});
};