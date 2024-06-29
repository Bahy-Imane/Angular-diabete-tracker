import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'diabete--tracker';
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    console.log('On init ...');
    this.userService.getUsers().subscribe((datas: User[]) => {
      this.users = datas;
    });
  }
}
