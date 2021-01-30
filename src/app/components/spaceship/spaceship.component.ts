import { Component, OnInit, Directive, Input, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { SpaceshipService } from '../../services/spaceship.service';
import { Spaceship } from '../../models/spaceship.model';
import { SearchResponse } from '../../models/search-response.model';
import { SearchRequest } from 'src/app/models/search-request.model';


@Component({
  selector: 'app-spaceship',
  templateUrl: './spaceship.component.html'
})
export class SpaceshipComponent implements OnInit {
  
  request = new SearchRequest<Spaceship>();
  spaceshipPage = new SearchResponse<Spaceship>();
  loading = false;
  page = 1;
  ascDirection = false;

  constructor(private spaceshipService: SpaceshipService) { }

  ngOnInit(): void {
    this.request.filter = new Spaceship();
    this.loadSpaceships();
  }
  
  loadSpaceships(): void {
    this.loading = true;
    this.request.pageNumber = this.page -1;
    this.spaceshipService.search(this.request).subscribe((response: SearchResponse<Spaceship>) => {
      this.spaceshipPage  = response;
      this.loading = false;
    });
  }
  
  sort() {
    this.ascDirection = !this.ascDirection;
    this.request.sortField = 'name';
    this.request.sortDirection = this.ascDirection ? 'ASC' : 'DESC';
    this.loadSpaceships();
  }
}
