import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../service/data-service.service';

@Component({
  selector: 'app-stranger-alpha',
  templateUrl: './stranger-alpha.component.html',
  styleUrls: ['./stranger-alpha.component.scss']
})
export class StrangerAlphaComponent implements OnInit {

  constructor(
  		public service: DataServiceService
  	) { }

  ngOnInit() {
  }

  changeInfo() {
    this.service.info = this.service.info + 'Add by alpha! '
  }

}
