import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  users: User[] = [];
  user: User = new User();
  
  onSubmit(form){
    this.user.created_at = new Date();
    this.user.updated_at = new Date();
    delete this.user.confirm_password;
    this.users.push(this.user);
    this.user = new User();
    form.resetForm();
  }
}
