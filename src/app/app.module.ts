import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapService } from './map.service';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';

@NgModule({
	declarations: [ AppComponent, MapComponent, SearchComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatSelectModule,
		MaterialModule,
		HttpClientModule,
		LeafletModule.forRoot(),
		LeafletMarkerClusterModule
	],
	providers: [ MapService ],
	bootstrap: [ AppComponent ],
	exports: [ MatToolbarModule, MatSelectModule ]
})
export class AppModule {}
