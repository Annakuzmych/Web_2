

class Model {

  constructor() {}

  results(res, lifestyle, weight, age, gender) {
    var male_less50=35, male_after50=32;
    var female_less50=32,female_after50=30;
    
      if (lifestyle ==='' || weight === '' || age === '' || gender ==='' ) res.innerHTML = "Error";
      else {
        if (age<50)
        {
          if(gender==0)
          {
            if(lifestyle==0) res.innerHTML = male_less50*weight + " ml";
            else if(lifestyle==1) res.innerHTML =male_less50*weight+100+ " ml";
            else if(lifestyle==2) res.innerHTML = male_less50*weight+200+ " ml";
            else if(lifestyle==3) cres.innerHTML = male_less50*weight+300+ " ml";
          }
          else 
          {
            if(lifestyle==0) res.innerHTML =  female_less50*weight+ " ml";
            else if(lifestyle==1) res.innerHTML = female_less50*weight+100+ " ml";
            else if(lifestyle==2) res.innerHTML = female_less50*weight+200+ " ml";
            else if(lifestyle==3) res.innerHTML = female_less50*weight+300+ " ml";
          }
        }
        else 
        {
          if(gender==0)
          {
            if(lifestyle==0) res.innerHTML = male_after50*weight+ " ml";
            else if(lifestyle==1) res.innerHTML = male_after50*weight+100+ " ml";
            else if(lifestyle==2) res.innerHTML = male_after50*weight+200+ " ml";
            else if(lifestyle==3) res.innerHTML = male_after50*weight+300+ " ml";
          }
          else 
          {
            if(lifestyle==0) res.innerHTML = female_after50*weight+ " ml";
            else if(lifestyle==1) res.innerHTML = female_after50*weight+100+ " ml";
            else if(lifestyle==2) res.innerHTML = female_after50*weight+200+ " ml";
            else if(lifestyle==3) res.innerHTML = female_after50*weight+300+ " ml";
          }
        } 
      }
  
      res.style.display = "block";
  
  }
}

class View {

  constructor() {}
  fun1() {
   var rng=document.getElementById('r1'); //rng - это ползунок
   var i1=document.getElementById('i1'); // i1 - input
  i1.value=rng.value;
}
  put() {
      var res = document.getElementById("rezult");
      var lifestyle =document.querySelector('input[name="optionsRadios"]:checked').value;
      var weight = document.getElementById('weight').value;
      var age = document.getElementById('r1').value;
      var gender = document.getElementById('country').value;

      var myModel = new Model();
      myModel.results(res,lifestyle, weight, age, gender);
  }

}

class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }
}
const app = new Controller(new Model(), new View())