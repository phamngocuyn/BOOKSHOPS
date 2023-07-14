import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TagsComponent } from './tags/tags.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import { BookPageComponent } from './book-page/book-page.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { FooterComponent } from './footer/footer.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TagsComponent,
    SearchComponent,
    BookPageComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    CartPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
