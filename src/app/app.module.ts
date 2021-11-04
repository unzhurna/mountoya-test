import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    ProductModule,
    HttpClientModule,
  ],
  providers: [
    {
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptor,
			multi: true,
		}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
