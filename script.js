function register(){
    window.location='./register.html'
}
function login(){
    window.location='./login.html'
}



function reg(){
    const details={
        user:reg_user.value,
        Email:reg_acn.value,
        psw:reg_psw.value
    }
  psw=reg_psw.value;
  if(reg_acn.value==''||reg_psw.value==''||reg_user.value==''){
    alert("Enter full details")
  }
  else{
    if(psw in localStorage){
        alert('Account number is already exist')
        document.getElementById("form1").reset();
      }
      else{
       localStorage.setItem(details.user,JSON.stringify(details));
       window.location='./home.html';
       alert('Registration successfully');
      }
  }
 }


 function log(){
    user=log_user.value;
    psw=log_psw.value;

var username=JSON.parse(localStorage.getItem(user))
   if(user in localStorage){
       if(psw==username.psw){
        window.location='./home.html';
        alert("Login successful");
      
       }
       else{
        alert("Incorrect passward");
        document.getElementById("form2").reset();
       }
   }
   else{
          alert("Invalid Username");
          document.getElementById("form2").reset();
   }    

 }


 function cal(){

    if(Sal.value==''||Inv.value==''||OInc.value==''||Mortagage.value==''||Property.value==''||Insurance.value==''||Utilities.value==''||HomeM.value==''||Fuel.value==''||Loan.value==''||Ins.value==''||Tolls.value==''||AutoM.value==''||Ocost.value==''||Fee.value==''||Tuition.value==''||Ospn.value==''||Food.value==''||Household.value==''||Clothing.value==''||Meals.value==''||Medical.value==''||Mspen.value==''||Hobbies.value==''||Entertainment.value==''||Travel.value==''||Gifts.value==''||OM.value==''||other.value==''){
        alert("Please fill all input box (enter ZERO in empty box)")
    }
    


   var income= parseInt(Sal.value)+parseInt(Inv.value)+parseInt(OInc.value);
   console.log(income);

   var house= parseInt(Mortagage.value)+parseInt(Property.value)+parseInt(Insurance.value)+parseInt(Utilities.value)+parseInt(HomeM.value)

console.log(house);

var phouse=(house/income)*100;
console.log(phouse);


   var transport= parseInt(Fuel.value)+parseInt(Loan.value)+parseInt(Ins.value)+parseInt(Tolls.value)+parseInt(AutoM.value)+parseInt(Ocost.value);
   console.log(transport);

   var ptransport=(transport/income)*100;
   console.log(ptransport);

   var Education= parseInt(Fee.value)+parseInt(Tuition.value)+parseInt(Ospn.value);
   console.log(Education);
   var pEducation=(Education/income)*100;
   console.log(pEducation);

   var living= parseInt(Food.value)+parseInt(Household.value)+parseInt(Clothing.value)+parseInt(Meals.value)+parseInt(OL.value);
   console.log(living);

var pliving=(living/income)*100;
console.log(pliving);

   var health= parseInt(Medical.value)+parseInt(Mspen.value);
   console.log(health);

   var phealth=(health/income)*100;
   console.log(phealth);

   var miscellaneous= parseInt(Hobbies.value)+parseInt(Entertainment.value)+parseInt(Travel.value)+parseInt(Gifts.value)+parseInt(OM.value);

   console.log(miscellaneous);
   var pmiscellaneous= (miscellaneous/income)*100;
   console.log(pmiscellaneous);
   var other1= parseInt(other.value);
  var pother=(other1/income)*100;
  console.log(pother);

   console.log(other1)
   
  var exp=house+transport+Education+living+health+miscellaneous+other1;
  console.log(exp);

  var net=income-exp;
  console.log(net);

   data1.innerHTML=`<div class="mx-5 mt-3">
   
   <div style="background-color: lightblue;">
        <h5>Result :</h5>
      </div>

      <div>
        <table class="table mx-auto
        ">
          <h5>Summary :</h5>
            <thead>
              <tr>
               
                <th scope="col"></th>
                <th scope="col">Monthly</th>
                <th scope="col">Annual</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                
                <td>Total Income : </td>
                <td><b>Rs ${income}</b></td>
                <td><b>Rs ${income*12}</b></td>
                
              </tr>
              <tr>
               
                <td>Total Expenses :</td>
                <td><b>Rs ${exp}</b>  </td>
                <td><b>Rs ${exp*12}</b></td>
               
              </tr>
              <tr>
                
                <td ><b>Net Icome</b>
                <td style="color: green;" ><b>Rs ${net}</b></td>
                <td style="color: green;"><b>Rs ${net*12}</b></td>
              </tr>
            </tbody>
          </table>
      </div>


      <div>
        <table class="table">
          <h5>Expenses Breakdown :</h5>
          <thead>
            <tr>
              
              <th scope="col"></th>
              <th scope="col">Monthly</th>
              <th scope="col">Annual</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
             
              <td>Housing & Utilities :</td>
              <td><b>Rs ${house}</b></td>
              <td><b>Rs ${house*12}</b></td>
              <td> ${phouse}% of income</td>
            </tr>
            <tr>
              
              <td>Transportation :</td>
              <td><b>Rs ${transport}</b></td>
              <td><b>Rs ${transport*12}</b></td>
              <td>${ptransport}% of income</td>
            </tr>
            <tr>
              
              <td >Education :</td>
              <td><b>Rs ${Education}</b></td>
              <td><b>Rs ${Education*12}</b></td>
              <td>${pEducation}% of income</td>
            </tr>
            <tr>
              
              <td >Living Expenses :</td>
              <td><b>Rs ${living}</b></td>
              <td><b>Rs ${living*12}</b></td>
              <td>${pliving}% of income</td>
            </tr>
            <tr>
              
              <td >Healthcare :</td>
              <td><b>Rs ${health}</b></td>
              <td><b>Rs ${health*12}</b></td>
              <td>${phealth}% of income</td>
            </tr>
            <tr>
              
              <td >Miscellaneous Expenses :</td>
              <td><b>Rs ${miscellaneous}</b></td>
              <td><b>Rs ${miscellaneous*12}</b></td>
              <td>${pmiscellaneous}% of income</td>
            </tr>
            <tr>
              
              <td >Other Expenses :</td>
              <td><b>Rs ${other1}</b></td>
              <td><b>Rs ${other1*12}</b></td>
              <td>${pother}% of income</td>
            </tr>
          </tbody>
        </table>
      </div>
   
   </div>`
} 


