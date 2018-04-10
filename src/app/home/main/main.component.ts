import { Component, OnInit, Input } from '@angular/core';
import { KsService } from '../../../core/services/ks.service';
import { IHotel } from '../../../core/models/IHotel';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  id: String;
  ks: IHotel[] = [];
  constructor(private ksService: KsService) {
  }
  ngOnInit() {
    this.ksService.hotels.subscribe((ks) => {
      this.ks = ks;
    });
  }
}
