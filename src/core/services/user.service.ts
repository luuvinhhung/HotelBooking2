import { IUser } from './../models/IUser';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class UserService {
    usersCollection: AngularFirestoreCollection<IUser>;
    _users: BehaviorSubject<Array<IUser>> = new BehaviorSubject(new Array());
    nhanPhong: String;
    traPhong: String;
    date: String;
    constructor(private db: AngularFirestore) {
        this.usersCollection = this.db.collection<IUser>('user');
        this.usersCollection.snapshotChanges().subscribe(actions => {
            const items = actions.map(a => {
                const data = a.payload.doc.data() as IUser;
                const id = a.payload.doc.id;
                return { id, ...data };
            });
            this._users.next(items);
        });
    }
    get users() {
        return this._users.asObservable();
    }
    pushUser(user: IUser) {
        const temp = this._users.getValue();
        temp.push(user);
        this._users.next(temp);
        this.usersCollection.add(user);
    }
    addDate(nhan: String, tra: String) {
        this.nhanPhong = nhan;
        this.traPhong = tra;
    }
    loadDate() {
        return this.date = this.nhanPhong.concat(this.traPhong as string);
    }
}
