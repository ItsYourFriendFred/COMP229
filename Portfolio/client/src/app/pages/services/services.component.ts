import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasepageComponent } from 'src/app/components/basepage/basepage.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent extends BasepageComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    super(route);
   }

  override ngOnInit(): void {
  }

}
