import { Component, OnInit, Inject } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
 getdata;pno;temp=0;varselecteddata;cat1
  constructor(@Inject(S1Service) public ser) { 
    this.funGetCat()
  }

 // to fetch data from collection
  funGetCat(){
   
    this.ser.serGetCat().subscribe(dt=>{
      this.getdata = dt;
    })
  }


// action click on button save and cancel button will come


funedit(seldata){
  this.temp=seldata._id;
  this.varselecteddata=seldata;
}
//to update the category data
update_fun(){
  
  var oldobj={_id:this.varselecteddata._id}
  var newobj={catname:this.varselecteddata.catname,status:this.varselecteddata.status}
  this.ser.serUpdateCat([oldobj,newobj]).subscribe(dt=>{  
    this.temp=0
    
    this.funGetCat()
  })
}


//  to insert in collection  
funInsertCat(){
  alert("hfh")
  var obj={catname:this.cat1,status:1}
  alert(obj.catname)
  this.ser.serInsertCat(obj).subscribe(dt=>{
    this.cat1=""
    this.funGetCat()
  })
} 
  
  ngOnInit() {
  }

}
