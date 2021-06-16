import { CuerpoMecatronicaComponent } from './components/sections/carrera/profesion/IngenieriaMecatronica/cuerpo-mecatronica/cuerpo-mecatronica.component';
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/sections/home/home.component';

//import carreras
import { CuerpoComponent } from './components/sections/carrera/cuerpo/cuerpo.component';
import { CuerpoContadorComponent } from './components/sections/carrera/profesion/ContadorPublico/cuerpo-contador/cuerpo-contador.component';
import { CuerpoBioquimicaComponent } from './components/sections/carrera/profesion/IngenieriaBioquimica/cuerpo-bioquimica/cuerpo-bioquimica.component';
import { CuerpoElectronicaComponent } from './components/sections/carrera/profesion/IngenieriaElectronica/cuerpo-electronica/cuerpo-electronica.component';
import { CuerpoGestionComponent } from './components/sections/carrera/profesion/IngenieriaGestionEmpresarial/cuerpo-gestion/cuerpo-gestion.component';
import { CuerpoIndustrialComponent } from './components/sections/carrera/profesion/IngenieriaIndustrial/cuerpo-industrial/cuerpo-industrial.component';
import { CuerpoInformaticaComponent } from './components/sections/carrera/profesion/IngenieriaInformatica/cuerpo-informatica/cuerpo-informatica.component';
import { CuerpoQuimicaComponent } from './components/sections/carrera/profesion/IngenieriaQuimica/cuerpo-quimica/cuerpo-quimica.component';
import { CuerpoMecanicaComponent } from './components/sections/carrera/profesion/IngenieriaMecanica/cuerpo-mecanica/cuerpo-mecanica.component';
import { CuerpoSistemasComponent } from './components/sections/carrera/profesion/SistemasComputacionales/cuerpo-sistemas/cuerpo-sistemas.component';

// Rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Carreras', component: CuerpoComponent},
    { path: 'Carreras/Contador', component: CuerpoContadorComponent },
    { path: 'Carreras/Bioquimica', component: CuerpoBioquimicaComponent },
    { path: 'Carreras/Electronica', component: CuerpoElectronicaComponent },
    { path: 'Carreras/Gestion', component: CuerpoGestionComponent },
    { path: 'Carreras/Industrial', component: CuerpoIndustrialComponent },
    { path: 'Carreras/Informatica', component: CuerpoInformaticaComponent },
    { path: 'Carreras/Mecanica', component: CuerpoMecanicaComponent },
    { path: 'Carreras/Quimica', component: CuerpoQuimicaComponent },
    { path: 'Carreras/Mecatronica', component: CuerpoMecatronicaComponent },
    { path: 'Carreras/Gestion', component: CuerpoGestionComponent },
    { path: 'Carreras/Sistemas', component: CuerpoSistemasComponent }
];

// Exportar el modulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
