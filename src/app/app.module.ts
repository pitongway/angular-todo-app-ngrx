import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './router/app-routing.module';
import {AppComponent} from './components/app.component';

import {StoreModule} from '@ngrx/store';
import {reducer} from './reducers/todo.reducer';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
            todoList: reducer
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
