import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavMenuComponent, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'A3-Web';
}
