import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-about',
  standalone: true,  
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  private routes =inject(ActivatedRoute)
  ngOnInit():void{
    const id = this.routes.snapshot.paramMap.get('id');
    console.log(id);
    this.routes.params.subscribe(params=>{
      next:(data:{id:string})=>{
        console.log(data['id']);
      }
      error:(e:any)=>{
        console.log(e);
      }
      
    });
  }
}
