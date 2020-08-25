import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pvp-admin-tool',
  templateUrl: './pvp-admin-tool.component.html',
  styleUrls: ['./pvp-admin-tool.component.scss']
})
export class PvpAdminToolComponent implements OnInit {
  gridData: any = [];
  viewGridMode: boolean = true;
  viewDetailMode: boolean;

  constructor() { }

  ngOnInit(): void {
    this.initializePage();
  }

  initializePage() {
    this.gridData = [
      {name: 'Application', id: '123234345', nameCrop: '-', type: 'Pink Strawberry',
      aStatus: 'Application Status update', progress: 'paid', panelOpenState: false},
      {name: 'Application', id: '123234345', nameCrop: '-', type: 'Pink Strawberry',
      aStatus: 'Application Status update', progress: 'paid', panelOpenState: false},
      {name: 'Application', id: '123234345', nameCrop: '-', type: 'Pink Strawberry',
      aStatus: 'Application Status update', progress: 'paid', panelOpenState: false}
    ];
  }

  togglePanel(index) {
    this.gridData[index].panelOpenState = !this.gridData[index].panelOpenState;
}

toggleViewGridMode () {
  this.viewGridMode = true;
  this.viewDetailMode = false;
}

toggleViewDetailMode () {
  this.viewGridMode = false;
  this.viewDetailMode = true;
}

}
