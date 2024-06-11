import { Component } from '@angular/core';
import { DataGridViewComponent } from '../data-grid-view/data-grid-view.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    DataGridViewComponent,
    RouterLink
  ],
  providers:[DataGridViewComponent],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  constructor(private grid : DataGridViewComponent) {}
  Refresh() {
    console.log('Tasks refresh called')
    // this.grid.Refresh('Active')
  }

  HiddenMenuToggle() {
    const menu = document.getElementById('hamburger-menu');
    const Hmenu = document.getElementById('hidden-menu');
    if(menu != undefined && menu != null && Hmenu != undefined && Hmenu != null) {
      menu.classList.toggle('active')
      Hmenu.classList.toggle('active')
    }
  }
}
