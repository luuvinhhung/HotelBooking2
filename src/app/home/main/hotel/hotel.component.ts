import { Router, ActivatedRoute } from '@angular/router';
import { KsService } from './../../../../core/services/ks.service';
import { IHotel } from '../../../../core/models/IHotel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  @Input() hotelIn;
  ks: IHotel[] = [];
  hotelPoster: String = '';
  name: String = '';
  overview: String = '';
  price: Number;
  id: String = '';
  img: String = '';
  rate: Number;
  restaurant: Boolean;
  parking: Boolean;
  wifi: Boolean;
  bar: Boolean;
  room: Boolean;
  constructor(private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() {
    this.overview = this.hotelIn.overview;
    this.hotelPoster = this.hotelIn.poster;
    this.price = this.hotelIn.price;
    this.id = this.hotelIn.id;
    this.name = this.hotelIn.name;
    this.img = this.hotelIn.img;
    this.rate = this.hotelIn.rate;
    this.wifi = this.hotelIn.wifi;
    this.bar = this.hotelIn.bar;
    this.parking = this.hotelIn.parking;
    this.restaurant = this.hotelIn.restaurant;
    this.room = this.hotelIn.room;
  }
  temp() {
    this.router.navigate(['/home/details', {id: this.id, name: this.name, img: this.img, price: this.price,
      wifi: this.wifi, bar: this.bar, parking: this.parking, restaurant: this.restaurant, room: this.room, overview: this.overview}]);
  }
}
