import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingcontainerComponent } from "./landingpage/landingcontainer/landingcontainer.component";
import { DashboardcontainerComponent } from "./crud/dashboardcontainer/dashboardcontainer.component";
import { HomeComponent } from "./landingpage/home/home.component";
import { AboutComponent } from "./landingpage/about/about.component";
import { ServicesComponent } from "./landingpage/services/services.component";
import { ContactComponent } from "./landingpage/contact/contact.component";
import { TakeorderComponent } from "./crud/takeorder/takeorder.component";
import { MembershipComponent } from "./crud/membership/membership.component";

const routes: Routes = [
    {
        path: '', component: LandingcontainerComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'contact', component: ContactComponent }
        ]
    },
    {
        path: 'dashboard', component: DashboardcontainerComponent, children: [
            { path: 'takeorder', component: TakeorderComponent },
            { path: 'membership', component: MembershipComponent },
        ]
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}

