import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasepageComponent } from 'src/app/components/basepage/basepage.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BasepageComponent implements OnInit {

  constructor(route: ActivatedRoute) {
    super(route);
   }

  override ngOnInit(): void {
  }

}
