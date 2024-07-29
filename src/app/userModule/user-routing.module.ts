import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { UsernavtabsComponent } from "./_components/usernavtabs/usernavtabs.component";
import { UserdashboardComponent } from "./_components/userdashboard/userdashboard.component";

const routes: Routes = [
    {
        path: '', component: UserdashboardComponent, children: [
            { path: 'user-tabs', component: UsernavtabsComponent }
        ]
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }