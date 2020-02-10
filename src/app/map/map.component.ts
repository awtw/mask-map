import { Component, Input } from '@angular/core';
import * as L from 'leaflet';

import { MapService } from '../map.service';
interface local {
	value: number[];
	viewValue: string;
}
@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: [ './map.component.sass' ]
})
export class MapComponent {
	public map;
	selected;
	@Input() searchPlace;
	@Input() searchPlace2;
	initPlace: { value: [25.0174719, 121.3662934]; viewValue: '台北' };

	constructor(private mapService: MapService) {
		this.mapService.initMap();
		this.map = this.mapService.map;
	}
	search() {
		this.mapService.map.setView({ lat: this.selected[0], lng: this.selected[1] }, 14);
	}
	searchPlaceMethod() {
		this.mapService.map.setView({ lat: this.searchPlace, lng: this.searchPlace2 }, 14);
	}

	location: local[] = [
		{ value: [ 25.0174719, 121.3662934 ], viewValue: '台北' },
		{ value: [ 24.2204731, 120.675687 ], viewValue: '台中' },
		{ value: [ 23.1229948, 120.1312995 ], viewValue: '台南' },
		{ value: [ 22.6557732, 120.2456294 ], viewValue: '高雄' },
		{ value: [ 25.0374821, 121.8489636 ], viewValue: '宜蘭' }
	];
}
