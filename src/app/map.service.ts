import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class MapService {
	constructor(private http: HttpClient) {}
	public map;
	private data;
	// Position: number[];

	getPosition(Pos: number[]) {
		const tempMap = L.map('map', {
			// center: Pos,
			zoom: 16
		});
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(tempMap);

		//Icon
		var greenIcon = new L.Icon({
			iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
			shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
			iconSize: [ 25, 41 ],
			iconAnchor: [ 12, 41 ],
			popupAnchor: [ 1, -34 ],
			shadowSize: [ 41, 41 ]
		});
		var redIcon = new L.Icon({
			iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
			shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
			iconSize: [ 25, 41 ],
			iconAnchor: [ 12, 41 ],
			popupAnchor: [ 1, -34 ],
			shadowSize: [ 41, 41 ]
		});

		//markersCluster
		// var markers = new L.MarkerClusterGroup().addTo(tempMap);
		// this.http.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json').subscribe((x) => {
		// 	this.data = x;
		// 	// console.log(this.data.features);
		// 	for (let i = 0; this.data.features.length > i; i++) {
		// 		let mask;
		// 		if (this.data.features[i].properties.mask_adult == 0) mask = redIcon;
		// 		else mask = greenIcon;
		// 		markers.addLayer(
		// 			L.marker(
		// 				[
		// 					this.data.features[i].geometry.coordinates[1],
		// 					this.data.features[i].geometry.coordinates[0]
		// 				],
		// 				{
		// 					icon: mask
		// 				}
		// 			).bindPopup(
		// 				'<h1>' +
		// 					this.data.features[i].properties.name +
		// 					'</h1>' +
		// 					'<p>成人口罩數量' +
		// 					this.data.features[i].properties.mask_adult +
		// 					'</p>' +
		// 					'<p>小孩口罩數量' +
		// 					this.data.features[i].properties.mask_child +
		// 					'</p>'
		// 			)
		// 		);
		// 		tempMap.addLayer(markers);
		// 	}
		// });
		this.map = tempMap;
	}

	initMap(): void {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				this.getPosition([ position.coords.latitude, position.coords.longitude ]);
			});
		}
	}

	searchArea(Pos: number[]) {
		// this.map.setView(new L.LatLng(Pos));
		this.map.setView({ lat: Pos[0], lng: Pos[1] }, 16);
	}
}
