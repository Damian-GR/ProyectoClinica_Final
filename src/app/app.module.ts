import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from 'src/app/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ClientesComponent } from './clientes/clientes.component';
import { ListarComponent } from './listar/listar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './service/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HelpComponent } from './help/help.component';
import { SafedomPipe } from './safe-dom.pipe';
import { QRCodeModule } from 'angularx-qrcode'; 



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    PhoneLoginComponent,
    ClientesComponent,
    ListarComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent,
    DoctorComponent,
    HelpComponent,
    SafedomPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    QRCodeModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
