import { createReducer, on } from '@ngrx/store';
import { initialState } from './user.state';
import { loadUsersSuccess, addUser, editUser, deleteUser } from './user.actions';

export const userReducer = createReducer(
  initialState,
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(addUser, (state, { user }) => ({ ...state, users: [...state.users, user] })),
  on(editUser, (state, { user }) => ({
    ...state,
    users: state.users.map(u => u.id === user.id ? user : u),
  })),
  on(deleteUser, (state, { id }) => ({
    ...state,
    users: state.users.filter(u => u.id !== id),
  }))
);
