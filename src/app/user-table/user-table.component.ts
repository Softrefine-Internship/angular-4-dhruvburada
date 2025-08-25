import { AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from './User.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements AfterViewInit {
  users!: User[];
  searchTerm!: string;

  selectedColumn: string = "Sort By..";
  constructor(private userService: UserService) { }
  ngAfterViewInit(): void {
    this.userService.getUserData().then((data) => this.users = data);

  }

  ChangeOrder(value: string): void {

    this.userService.sortBy(value as keyof User)
  }

  SearchValue() {
    this.users = this.userService.searchValue(this.searchTerm);
  }

}
