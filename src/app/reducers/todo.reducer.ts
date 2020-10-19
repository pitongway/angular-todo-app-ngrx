import {Todo} from '../models/todo.model';
import * as TodoActions from '../actions/todo.actions';
import {v4 as uuidv4} from 'uuid';

const initialState: Todo = {
    id: uuidv4(),
    name: 'Initial Todo State'
};

// tslint:disable-next-line:typedef
export function reducer(state: Todo[] = [initialState], action: TodoActions.Actions) {
    switch (action.type) {
        case TodoActions.ADD_TODO:
            return [...state, action.payload];
        case TodoActions.REMOVE_TODO:
            state = state.filter(todo => todo.id !== action.payload.id);
            return state;
        default:
            return state;
    }
}
