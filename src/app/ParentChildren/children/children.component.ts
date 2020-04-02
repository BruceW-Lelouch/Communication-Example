import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
	@Input() childTitle: string;
	@Output() childEmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  	this.childEmit.emit("Message using EventEmitter from children");
  }

  childPrint() {
	  alert("This is caused by children component!");
	}

	sendInfo() {
		return 'Message from child 1.';
	}

}
