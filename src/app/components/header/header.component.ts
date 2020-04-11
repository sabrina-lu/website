import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public screenWidth  = window.screen.width
  public sideMenu = false
 
  @HostListener('window:resize', ['$event'])
  public onResize (event) {
    this.setScreenWidth()
  }

  public isCpuSize(): boolean {
    return this.screenWidth > 740
  }

  public setScreenWidth() {
    this.screenWidth = window.screen.width
  }
}
