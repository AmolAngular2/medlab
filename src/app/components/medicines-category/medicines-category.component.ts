import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { UtilityService } from 'src/app/core/utility.service';

@Component({
  selector: 'app-medicines-category',
  templateUrl: './medicines-category.component.html',
  styleUrls: ['./medicines-category.component.scss']
})
export class MedicinesCategoryComponent {

  medicinesList:any = [];
  pincodeDetails:any;
  constructor(private api:ApiService,private utility:UtilityService){

  }

  ngOnInit(){ 
   this.pincodeDetails = this.utility.getPinCodeDetails(); 
   this.getMedicinesByCategory();
  }

  getMedicinesByCategory() {
   this.api.getDataFromServer("top-deals-by-category").subscribe({
    next:(response:any)=>{
     if(response && response.length > 0){
      this.medicinesList = response;
     }
    },
   error:(error)=>{
    console.log(error);
   }
     
   })
  }

}
