import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basepage',
  templateUrl: './basepage.component.html',
  styleUrls: ['./basepage.component.css']
})
export class BasepageComponent implements OnInit {
  title!: string;
  // private route: ActivatedRoute; <-- this can be simplified into the constructor as below

  constructor(private route: ActivatedRoute) {
    // this.route = route; <-- from the simplification above
   }

  ngOnInit(): void {
    this.title = this.route.snapshot.data['title'];
  }

}
