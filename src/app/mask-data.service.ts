import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { icon, latLng, marker, polyline, tileLayer, MarkerOptions } from 'leaflet';
@Injectable({
	providedIn: 'root'
})
export class MaskDataService {
	constructor(private http: HttpClient) {}
	public data;
	public markers: [];
	public options ;

	streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		detectRetina: true,
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	});

	getMaskData() {
		this.http.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json').subscribe((x) => {
			return x;
			this.data = x;
			var markers = [];
			
			//loop marker
			for (let i = 0; this.data.features.length > i; i++) {
				var mask;
				var temp;
				if (this.data.features[i].properties.mask_adult == 0)
					{
					mask = icon({
						iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
						shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
						iconSize: [25, 41],
						iconAnchor: [12, 41],
						popupAnchor: [1, -34],
						shadowSize: [41, 41]
					});
					}
				else
					{
					mask = icon({
						iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
						shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
						iconSize: [25, 41],
						iconAnchor: [12, 41],
						popupAnchor: [1, -34],
						shadowSize: [41, 41]
					});
					}
				temp = marker([this.data.features[i].geometry.coordinates[1], this.data.features[i].geometry.coordinates[0]], {
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
				markers.push(temp);
			}

			this.options = {
				layers: [this.streetMaps, this.markers],
				zoom: 10,
				center: latLng([25.0174719, 121.3662934])
			}
			
		});
	}
	
	


}
