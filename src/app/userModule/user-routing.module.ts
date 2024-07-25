import { RouterModule, Routes } from "@angular/router";
import { UserDashboardComponent } from "./_components/user-dashboard/user-dashboard.component";
import { NgModule } from "@angular/core";

const routes:Routes=[
    {path:'',component:UserDashboardComponent}
]

@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class UserRoutingModule{}