import {Todo} from './models/todo.model';

export interface AppState {
    readonly todoList: Todo[];
}