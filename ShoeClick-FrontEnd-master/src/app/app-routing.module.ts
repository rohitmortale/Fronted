import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriesComponent } from './admin/add-categories/add-categories.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CategoriesComponent } from './admin/categories/categories.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { UpdateProductComponent } from './admin/update-product/update-product.component';
import { AllCategoriesComponent } from './all-categories/all-categories.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CategoyWiseComponent } from './categoy-wise/categoy-wise.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';
import { ShowSingleProductComponent } from './show-single-product/show-single-product.component';
import { CartComponent } from './user/cart/cart.component';
import { MyOrdersComponent } from './user/my-orders/my-orders.component';
import { PlaceOrderComponent } from './user/place-order/place-order.component';
import { ShopComponent } from './user/shop/shop.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'allProducts',
    component: AllProductsComponent
  },
  {
    path: 'addProduct',
    component: AddProductComponent
  },
  {
    path:'product/:pId',
    component:ShowSingleProductComponent
  },
  {
    path:'allCategories',
    component:AllCategoriesComponent
  },
  {
    path: 'category/:cId',
    component: CategoyWiseComponent
  },
  {
    path:'search',
    component:SearchProductComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'add',
        component: AddProductComponent
      },
      {
        path: 'update/:pId',
        component: UpdateProductComponent
      },
      {
        path: 'manage',
        component: ManageProductComponent
      },
      {
        path:'categories',
        component:CategoriesComponent
      },
      {
        path:'add-cat',
        component:AddCategoriesComponent
      }
    ]
  },
  {
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [UserGuard],
    children: [
      {
        path: 'orders',
        component: MyOrdersComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'place-order',
        component: PlaceOrderComponent
      },
      {
        path: 'shop',
        component: ShopComponent
      },
      {
        path: 'shop/:cid',
        component: CategoyWiseComponent
      }
    ]
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
