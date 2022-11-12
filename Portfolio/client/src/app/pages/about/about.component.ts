import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasepageComponent } from 'src/app/components/basepage/basepage.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends BasepageComponent implements OnInit {

  constructor(route: ActivatedRoute) { 
    super(route)
  }
  override ngOnInit(): void {
  }

}
