import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  noticias=[{
    titulo:"Asalto de sorpresa a la delincuencia",
    description:
    "La estrategia de asalto de sorpresa a la delincuencia representa una valiente y decidida respuesta a los desafíos de seguridad que enfrentamos en nuestras comunidades. Este enfoque innovador y proactivo busca abordar los problemas de manera directa, sin comprometer la seguridad pública.",
    imagen:"/../../assets/foto1.jpg" ,
  },
  {
    titulo2:"asalto al canal TC",
    description2:"La Fiscalía General del Estado informó que la tarde de este miércoles, 10 de enero del 2024, arrancó la audiencia de formulación de cargos por terrorismo contra un grupo de sujetos armados que en la víspera irrumpió en la sede de TC televisión, en Guayaquil. Según el organismo, esta diligencia se da vía telemática contra 11 de los 13 sujetos armados que fueron detenidos por el hecho violento.Para hacer uso de este contenido cite la fuente y haga un enlace a la nota original en Primicia",
    imagen2:"/../../assets/foto2.jpeg",
  },
  {
    titulo3:"Muerte Cruzada",
    description3:"En la política de Ecuador, «muerte cruzada» es el nombre comúnmente dado a un mecanismo que rige el proceso de destitución al presidente del Ecuador y la disolución de la Asamblea Nacional previsto en los artículos 130 y 148 de la Constitución de 2008.​​​",
    imagen3:"/../../assets/foto3.jpg",
  },  
      
  
  
  ];
  constructor() {}

}
