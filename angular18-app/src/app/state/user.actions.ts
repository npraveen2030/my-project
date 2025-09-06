import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const addUser = createAction('[User] Add User', props<{ user: User }>());
export const editUser = createAction('[User] Edit User', props<{ user: User }>());
export const deleteUser = createAction('[User] Delete User', props<{ id: number }>());
