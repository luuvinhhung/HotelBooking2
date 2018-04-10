import { Injectable } from '@angular/core';
import { IHotel } from '../models/IHotel';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class KsService {
  // location: any = 'tphcm';
  hotelsCollection: AngularFirestoreCollection<IHotel>;
  _hotels: BehaviorSubject<Array<IHotel>> = new BehaviorSubject(new Array());

  constructor(private db: AngularFirestore) {
  }
  load(location: any) {
    this.hotelsCollection = this.db.collection<IHotel>(location);
    this.hotelsCollection.snapshotChanges().subscribe(actions => {
      const items = actions.map(a => {
        const data = a.payload.doc.data() as IHotel;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
      this._hotels.next(items);
    });
  }
  get hotels() {
    return this._hotels.asObservable();
  }

}
