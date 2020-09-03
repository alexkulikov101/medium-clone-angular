import { Component, Input } from "@angular/core";

@Component({
  selector: "mc-tag-list",
  templateUrl: "./tagList.components.html",
})
export class TagListComponent {
  @Input("tags") tagsProps: string[];
}
