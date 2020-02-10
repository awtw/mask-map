import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapService } from './map.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
	declarations: [ AppComponent, MapComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatSelectModule,
		MaterialModule,
		HttpClientModule,
		FormsModule
	],
	providers: [ MapService, { provide: LocationStrategy, useClass: HashLocationStrategy } ],
	bootstrap: [ AppComponent ],
	exports: [ MatToolbarModule, MatSelectModule ]
})
export class AppModule {}
