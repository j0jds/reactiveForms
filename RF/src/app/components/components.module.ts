import { NgModule } from "@angular/core";
import { PipesModule } from "../pipes/pipes.module";
import { UsersListComponent } from './users-list/users-list.component';
import { AngularMaterialModule } from "../angular-material/angular-material.module";

@NgModule({
    declarations: [    
      UsersListComponent
  ],
    imports: [
        AngularMaterialModule,
        PipesModule
    ],
    exports: [
      UsersListComponent
    ],
})

export class ComponentsModule {}