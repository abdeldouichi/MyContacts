import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
};
export class Provider extends Component {

    state = {
        contacts: [
            {id: 1, name: "abdel douichi", email: "abdel.douichi@gmail.com", tel: "0669541001"},
            {id: 2, name: "ilias douichi", email: "ilias.douichi@gmail.com", tel: "0669541051"},
            {id: 3, name: "zakria douichi", email: "zakria.douichi@gmail.com", tel: "0669541041"},
            {id: 4, name: "boutaina douichi", email: "boutaina.douichi@gmail.com", tel: "066954d141"},
            {id: 5, name: "ghizlane douichi", email: "zakria.douichi@gmail.com", tel: "0669571041"},
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    };
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;