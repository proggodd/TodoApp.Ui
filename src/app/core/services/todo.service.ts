import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   todos:ITodo[] = [{
    id:1,
    title:'test title',
    description:'test discription',
    status:'OPEN',
  },
  {
    id:2,
    title:'test2 title',
    description:'test2 discription',
    status:'DONE',
  }];
  constructor() { }

  getAllTodo(){
    return this.todos;
  }
}
