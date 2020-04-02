import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
	@ViewChild(ChildrenComponent) private childcomponent: ChildrenComponent;
	info: any;
	childrenSays: string = '';
  constructor() { }

  ngOnInit() {
  }


	getInfo() {
	  this.info = this.childcomponent.sendInfo();
	}

	accept(msg: string) {
		this.childrenSays = msg;
	}

}
