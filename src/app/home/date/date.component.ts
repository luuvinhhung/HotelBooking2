import { UserService } from './../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  dayNow: Date = new Date(Date.now());
  nhanPhong: String = '';
  traPhong: String = '';
  date: String;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  temp() {
   this.userService.addDate(this.nhanPhong, this.traPhong);
  }
}
