import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterLink, RouterOutlet]
})
export class AppComponent{
  // title = 'project-1';
  // val:number  = 20;
  // ngOnInit(): void {
  //   this.changeTitle();
  // }
  // changeTitle() {
  //   this.title = 'Title Changed!';
  // }
}
