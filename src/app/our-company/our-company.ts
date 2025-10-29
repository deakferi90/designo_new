import { Component } from "@angular/core";

@Component({
  selector: "app-our-company",
  imports: [],
  templateUrl: "./our-company.html",
  styleUrl: "./our-company.scss",
})
export class OurCompany {
  mainDesktop: string = "assets/images/main-desktop.png";
  webDesign: string = "assets/images/web-design-desktop.png";
  appDesign: string = "assets/images/app-design-desktop.jpg";
  graphicDesign: string = "assets/images/graphic-design-desktop.jpg";
  rightArrow: string = "assets/images/right-arrow.png";
}
