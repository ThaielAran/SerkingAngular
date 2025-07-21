import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemList } from './item-list/item-list';
import { Carrito } from './carrito/carrito';
import { Products } from './products/products';
import { Contact } from './contact/contact';

@NgModule({
  declarations: [
    AppComponent,
    ItemList,
    Carrito,
    Products,
    Contact
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
