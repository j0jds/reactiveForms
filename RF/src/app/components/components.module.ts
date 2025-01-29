import { NgModule } from "@angular/core";
import { PipesModule } from "../pipes/pipes.module";
import { UsersListComponent } from './users-list/users-list.component';
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [    
      UsersListComponent
  ],
    imports: [
        AngularMaterialModule,
        PipesModule,
        CommonModule
    ],
    exports: [
      UsersListComponent
    ],
})

export class ComponentsModule {}