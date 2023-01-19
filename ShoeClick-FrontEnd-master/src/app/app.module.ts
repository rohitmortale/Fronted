import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CartComponent } from './user/cart/cart.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { PlaceOrderComponent } from './user/place-order/place-order.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { MyOrdersComponent } from './user/my-orders/my-orders.component';
import { ShopComponent } from './user/shop/shop.component';
import { UsersComponent } from './admin/users/users.component';
import { LandingComponent } from './landing/landing.component';
import { UserSidebarComponent } from './user/user-sidebar/user-sidebar.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AddCategoriesComponent } from './admin/add-categories/add-categories.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { CategoyWiseComponent } from './categoy-wise/categoy-wise.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';


import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptorProviders } from './services/auth.interceptor';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';
import { ShowProductImagesComponent } from './show-product-images/show-product-images.component';
import { ShowSingleProductComponent } from './show-single-product/show-single-product.component';
import { SearchProductComponent } from './search-product/search-product.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    CartComponent,
    AddProductComponent,
    ManageProductsComponent,
    PlaceOrderComponent,
    OrdersComponent,
    MyOrdersComponent,
    ShopComponent,
    UsersComponent,
    LandingComponent,
    UserSidebarComponent,
    AdminSidebarComponent,
    UserNavbarComponent,
    AdminNavbarComponent,
    AddCategoriesComponent,
    CategoriesComponent,
    CategoyWiseComponent,
    NavbarComponent,
    AllCategoriesComponent,
    AllProductsComponent,
    UpdateProductComponent,
    ManageProductComponent,
    ShowProductImagesComponent,
    ShowSingleProductComponent,
    SearchProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule, 
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatGridListModule,
    MatTableModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    




  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
