import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material/material.module';
import { BannerPComponent } from './banner-p/banner-p.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CuerpoComponent } from './carrera/cuerpo/cuerpo.component';
import { MenuComponent } from './carrera/menu/menu.component';
import { CarouselContadorComponent } from './carrera/profesion/ContadorPublico/carousel-contador/carousel-contador.component';
import { CuerpoContadorComponent } from './carrera/profesion/ContadorPublico/cuerpo-contador/cuerpo-contador.component';
import { CuerpoAeronauticaComponent } from './carrera/profesion/IngenieriaAeronautica/cuerpo-aeronautica/cuerpo-aeronautica.component';
import { CarouselAeronauticaComponent } from './carrera/profesion/IngenieriaAeronautica/carousel-aeronautica/carousel-aeronautica.component';
import { CarouselBioquimicaComponent } from './carrera/profesion/IngenieriaBioquimica/carousel-bioquimica/carousel-bioquimica.component';
import { CuerpoBioquimicaComponent } from './carrera/profesion/IngenieriaBioquimica/cuerpo-bioquimica/cuerpo-bioquimica.component';
import { CuerpoElectronicaComponent } from './carrera/profesion/IngenieriaElectronica/cuerpo-electronica/cuerpo-electronica.component';
import { CarouselElectronicaComponent } from './carrera/profesion/IngenieriaElectronica/carousel-electronica/carousel-electronica.component';
import { CarouselGestionComponent } from './carrera/profesion/IngenieriaGestionEmpresarial/carousel-gestion/carousel-gestion.component';
import { CuerpoGestionComponent } from './carrera/profesion/IngenieriaGestionEmpresarial/cuerpo-gestion/cuerpo-gestion.component';
import { CuerpoIndustrialComponent } from './carrera/profesion/IngenieriaIndustrial/cuerpo-industrial/cuerpo-industrial.component';
import { CarouselIndustrialComponent } from './carrera/profesion/IngenieriaIndustrial/carousel-industrial/carousel-industrial.component';
import { CarouselInformaticaComponent } from './carrera/profesion/IngenieriaInformatica/carousel-informatica/carousel-informatica.component';
import { CuerpoInformaticaComponent } from './carrera/profesion/IngenieriaInformatica/cuerpo-informatica/cuerpo-informatica.component';
import { CarouselMecatronicaComponent } from './carrera/profesion/IngenieriaMecatronica/carousel-mecatronica/carousel-mecatronica.component';
import { CuerpoMecatronicaComponent } from './carrera/profesion/IngenieriaMecatronica/cuerpo-mecatronica/cuerpo-mecatronica.component';
import { CarouselMecanicaComponent } from './carrera/profesion/IngenieriaMecanica/carousel-mecanica/carousel-mecanica.component';
import { CuerpoMecanicaComponent } from './carrera/profesion/IngenieriaMecanica/cuerpo-mecanica/cuerpo-mecanica.component';
import { CuerpoQuimicaComponent } from './carrera/profesion/IngenieriaQuimica/cuerpo-quimica/cuerpo-quimica.component';
import { CarouselQuimicaComponent } from './carrera/profesion/IngenieriaQuimica/carousel-quimica/carousel-quimica.component';
import { CarouselSistemasComponent } from './carrera/profesion/SistemasComputacionales/carousel-sistemas/carousel-sistemas.component';
import { CuerpoSistemasComponent } from './carrera/profesion/SistemasComputacionales/cuerpo-sistemas/cuerpo-sistemas.component';
import { CarouselCarrerasComponent } from './carrera/carousel-carreras/carousel-carreras.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerPComponent,
    CarouselComponent,
    CuerpoComponent,
    MenuComponent,
    CarouselContadorComponent,
    CuerpoContadorComponent,
    CuerpoAeronauticaComponent,
    CarouselAeronauticaComponent,
    CarouselBioquimicaComponent,
    CuerpoBioquimicaComponent,
    CuerpoElectronicaComponent,
    CarouselElectronicaComponent,
    CarouselGestionComponent,
    CuerpoGestionComponent,
    CuerpoIndustrialComponent,
    CarouselIndustrialComponent,
    CarouselInformaticaComponent,
    CuerpoInformaticaComponent,
    CarouselMecatronicaComponent,
    CuerpoMecatronicaComponent,
    CarouselMecanicaComponent,
    CuerpoMecanicaComponent,
    CuerpoQuimicaComponent,
    CarouselQuimicaComponent,
    CarouselSistemasComponent,
    CuerpoSistemasComponent,
    CarouselCarrerasComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    HomeComponent,
    CarouselComponent
  ]
})
export class SectionsModule { }
