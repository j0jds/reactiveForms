import { Component, Input } from '@angular/core';
import { UsersListResponse } from '../../types/user-list-response.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})

export class UsersListComponent {
  @Input({ required: true }) usersList: UsersListResponse = [];
}
