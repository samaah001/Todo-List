import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'applicaation/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  //limit = '?_limit=6';
  //Get Todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl);
  }
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
}
