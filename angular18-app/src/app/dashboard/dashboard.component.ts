// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [],
//   templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.scss'
// })
// export class DashboardComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { loadUsersSuccess, addUser, editUser, deleteUser } from '../state/user.actions';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  users$: Observable<User[]>;

  constructor(private store: Store<{ users: { users: User[] } }>) {
    this.users$ = store.select(state => state.users.users);
    this.store.dispatch(loadUsersSuccess({ users: [] }));
  }

  addUser() {
    const user: User = { id: Date.now(), name: 'New User', email: 'user@example.com' };
    this.store.dispatch(addUser({ user }));
  }

  editUser(user: User) {
    const updatedUser = { ...user, name: user.name + ' Edited' };
    this.store.dispatch(editUser({ user: updatedUser }));
  }

  deleteUser(id: number) {
    this.store.dispatch(deleteUser({ id }));
  }
}
