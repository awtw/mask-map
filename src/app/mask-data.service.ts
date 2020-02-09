import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class MaskDataService {
	constructor(private http: HttpClient) {}
	// public data;

	getMaskData() {
		this.http.get('https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json').subscribe((x) => {
			return x;
		});
	}
}
