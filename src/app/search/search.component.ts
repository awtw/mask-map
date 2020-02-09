import { Component, OnInit } from '@angular/core';
import { MapService } from '../map.service';
interface Food {
	value: number[];
	viewValue: string;
}
@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: [ './search.component.sass' ]
})
export class SearchComponent implements OnInit {
	constructor(private mapService: MapService) {}

	selected: number[];
	ngOnInit() {}
	foods: Food[] = [
		{ value: [ 25.0174719, 121.3662934 ], viewValue: '台北' },
		{ value: [ 24.2204731, 120.675687 ], viewValue: '台中' },
		{ value: [ 23.1229948, 120.1312995 ], viewValue: '台南' },
		{ value: [ 21.9931018, 117.7365356 ], viewValue: '高雄' },
		{ value: [ 25.0374821, 121.8489636 ], viewValue: '宜蘭' }
	];
	search(selected) {
		this.mapService.searchArea(selected);
	}
}
