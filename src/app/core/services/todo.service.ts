import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  const todos:ITodo = [{
    id:1,
    title:'test title',
    description:'test discription',
    status:'OPEN'
  }];
  constructor() { }

}
