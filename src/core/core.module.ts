import { UserService } from './services/user.service';
import { NgModule } from '@angular/core';
import { KsService } from './services/ks.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
    ],
    exports: [],
    declarations: [],
    providers: [KsService, UserService],
})
export class CoreModule { }

