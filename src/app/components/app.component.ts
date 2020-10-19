import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {environment} from '../../environments/environment';
import {v4 as uuidv4} from 'uuid';
import {Observable} from 'rxjs';
import {AppState} from '../app.state';
import {Store} from '@ngrx/store';
import {Todo} from '../models/todo.model';
import * as TodoActions from '../actions/todo.actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
    appName = environment.appName;
    formData = new FormGroup({
        name: new FormControl('')
    });
    todoList: Observable<Todo[]>;

    constructor(private store: Store<AppState>) {
        this.todoList = store.select('todoList');
    }

    // tslint:disable-next-line:typedef
    addTodo() {
        const todoName = this.formData.value.name;

        if (!todoName) {
            return;
        }

        const payload = {
            id: uuidv4(),
            name: todoName
        };

        this.store.dispatch(new TodoActions.AddTodo(payload));
        this.formData.reset();
    }

    // tslint:disable-next-line:typedef
    removeTodo(todo) {
        this.store.dispatch(new TodoActions.RemoveTodo(todo));
    }

    // tslint:disable-next-line:typedef
    ngOnInit() {
    }
}
