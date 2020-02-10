import { Component } from '@angular/core';
import { icon, latLng, marker, polyline, tileLayer } from 'leaflet';
// import { MarkerClusterGroup } from 'leaflet.markercluster';
import { MaskDataService } from '../mask-data.service';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: [ './map.component.sass' ]
})
export class MapComponent {
	public map;
	public data;
	markers = [25.0174719, 121.3662934];
	/**
	 *
	 */
	constructor(private maskDataService: MaskDataService) {
		this.data = this.maskDataService.getMaskData;
		this.markers = this.maskDataService.markers;
	}
	streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		detectRetina: true,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	});
	
	

	options = {
		layers: [ this.streetMaps, this.markers ],
		zoom: 10,
		center: latLng([ 25.0174719, 121.3662934 ])
	};
}
