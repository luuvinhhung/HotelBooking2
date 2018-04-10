import { UserService } from './../../../../../core/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IHotel } from '../../../../../core/models/IHotel';
import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: String = '';
  img: String = '';
  name: String = '';
  overview: String = '';
  price: Number;
  wifi: Boolean;
  restaurant: Boolean;
  parking: Boolean;
  bar: Boolean;
  room: Boolean;
  username: String = localStorage.getItem('username');
  password: String = localStorage.getItem('password');
  date: String;
  checkin: String;
  checkout: String;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || 'root';
    this.name = this.route.snapshot.paramMap.get('name');
    this.img = this.route.snapshot.paramMap.get('img');
    this.price = Number(this.route.snapshot.paramMap.get('price'));
    this.overview = this.route.snapshot.paramMap.get('overview');
    this.wifi = String(this.route.snapshot.paramMap.get('wifi')) === 'true';
    this.bar = String(this.route.snapshot.paramMap.get('bar')) === 'true';
    this.parking = String(this.route.snapshot.paramMap.get('parking')) === 'true';
    this.restaurant = String(this.route.snapshot.paramMap.get('restaurant')) === 'true';
    this.room = String(this.route.snapshot.paramMap.get('room')) === 'true';
  }
  back() {
    this.router.navigate(['/home/hotels']);
  }
  addUser() {
    this.date = this.userService.loadDate();
    this.checkin = this.date.substr(0, 10);
    this.checkout = this.date.substr(10, 10);
    this.userService.pushUser({
      login: this.username, password: this.password, checkin: this.checkin, checkout: this.checkout
    });
    // console.log(this.checkin);
    // console.log(this.checkout);
  }
}
