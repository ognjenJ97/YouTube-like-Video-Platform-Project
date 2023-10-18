import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VideosComponent } from "./videos.component";

const routes: Routes = [
    {
        path: '',
        component: VideosComponent,
        // canActivate: [AuthGuard],
        children: [
        //   { path: '', component: RecipeStartComponent },
        //   { path: 'new', component: RecipeEditComponent },

        //   {
        //     path: ':id/edit',
        //     component: RecipeEditComponent,
        //     resolve: [RecipesResolverService]
        //   }
        ]
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VideosRoutingModule {

}