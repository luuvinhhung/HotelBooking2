import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { KsService } from '../../core/services/ks.service';
import { IHotel } from '../../core/models/IHotel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  temp: String;
  location: any;
  ks: IHotel[] = [];
  constructor(private ksService: KsService, private router: Router) { }

  ngOnInit() {
  }
  search() {
    this.router.navigate(['/home/hotels']);
    this.location = this.temp.toLowerCase();
    this.ksService.load(this.location);
    this.ksService.hotels.subscribe((ks) => {
      this.ks = ks;
    });
  }
}
