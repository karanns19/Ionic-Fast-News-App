import { Component, inject } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { Router } from "@angular/router";
import { IonicModule } from "@ionic/angular";

@Component({
  templateUrl: "./about-popover.html",
  styleUrls: ["./about-popover.scss"],
  standalone: true,
  imports: [IonicModule],
})
export class PopoverPage {
  private router = inject(Router);
  private popoverCtrl = inject(PopoverController);

  public urlHome = "https://karan-singh-portfolio.web.app/";
  public urlContact = "https://karan-singh-portfolio.web.app/";
  public urlGithub = "https://github.com/karanns19";

  async openContactForm() {
    await this.router.navigate(["app/tabs/contact"]);
    await this.popoverCtrl.dismiss();
  }

  openUrl(url: string) {
    window.open(url, "_blank");
    this.popoverCtrl.dismiss();
  }
}
