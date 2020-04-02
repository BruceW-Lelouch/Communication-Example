import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../service/data-service.service';

@Component({
  selector: 'app-stranger-beta',
  templateUrl: './stranger-beta.component.html',
  styleUrls: ['./stranger-beta.component.scss']
})
export class StrangerBetaComponent implements OnInit {

  constructor(
  		public service: DataServiceService
  	) { }

  ngOnInit() {
  }

  changeInfo() {
  	this.service.info = this.service.info + 'Add by beta! '
  }

}
