import { Component, AfterViewInit, OnInit } from '@angular/core';
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
	markers = [];
	/**
	 *
	 */
	constructor(private maskDataService: MaskDataService) {
		this.data = this.maskDataService.getMaskData;
		this.getMarker();
	}
	streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		detectRetina: true,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	});
	// markerClusterReady(markerCluster: MarkerClusterGroup) {
	// 	// Do stuff with group
	// }
	greenIcon = icon({
		iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
		shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
		iconSize: [ 25, 41 ],
		iconAnchor: [ 12, 41 ],
		popupAnchor: [ 1, -34 ],
		shadowSize: [ 41, 41 ]
	});
	redIcon = icon({
		iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
		shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
		iconSize: [ 25, 41 ],
		iconAnchor: [ 12, 41 ],
		popupAnchor: [ 1, -34 ],
		shadowSize: [ 41, 41 ]
	});
	getMarker() {
		for (let i = 0; this.data.features.length > i; i++) {
			let mask;
			if (this.data.features[i].properties.mask_adult == 0)
				mask = icon({
					iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
					shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
					iconSize: [ 25, 41 ],
					iconAnchor: [ 12, 41 ],
					popupAnchor: [ 1, -34 ],
					shadowSize: [ 41, 41 ]
				});
			else
				mask = icon({
					iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
					shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
					iconSize: [ 25, 41 ],
					iconAnchor: [ 12, 41 ],
					popupAnchor: [ 1, -34 ],
					shadowSize: [ 41, 41 ]
				});
			marker([ this.data.features[i].geometry.coordinates[1], this.data.features[i].geometry.coordinates[0] ], {
				icon: mask
			}).bindPopup(
				'<h1>' +
					this.data.features[i].properties.name +
					'</h1>' +
					'<p>成人口罩數量' +
					this.data.features[i].properties.mask_adult +
					'</p>' +
					'<p>小孩口罩數量' +
					this.data.features[i].properties.mask_child +
					'</p>'
			);
			this.markers.push(mask);
		}
	}

	options = {
		layers: [ this.streetMaps, this.markers ],
		zoom: 10,
		center: latLng([ 25.0174719, 121.3662934 ])
	};
}
