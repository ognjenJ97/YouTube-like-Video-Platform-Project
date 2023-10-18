import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ChannelsComponent } from "./channels.component";

@NgModule({
    declarations: [
  ],
    imports: [
        RouterModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
    ],
    bootstrap: [ChannelsComponent]
})
export class ChannelsModule {}