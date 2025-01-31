import { NgModule } from "@angular/core";
import { PipesModule } from "../pipes/pipes.module";
import { CommonModule } from "@angular/common";
import { ContactsComponent } from './contacts/contacts.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserInfoItemComponent } from './user-info-item/user-info-item.component';
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { GeneralInformationsComponent } from './general-informations/general-informations.component';

@NgModule({
    declarations: [    
      ContactsComponent,
      UsersListComponent, 
      UserInfoItemComponent,
      GeneralInformationsComponent,
  ],
    imports: [
        AngularMaterialModule,
        PipesModule,
        CommonModule,
    ],
    exports: [
      ContactsComponent,
      UsersListComponent,
      GeneralInformationsComponent,
    ],
})

export class ComponentsModule {}