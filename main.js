let countries = JSON.parse(localStorage.getItem('countries')) ? JSON.parse(localStorage.getItem('countries')):[
    {name:'South Africa',
    continent:'Africa'},
    {name:'Sweden',
    continent:'Europe'},
    {name:'Mexico',
    continent:'North America'},
    {name:'Norway',
    continent:'Europe'},
    {name:'Japan',
    continent:'Asia'},
    {name:'Australia',
    continent:'Australia'},
    {name:'Namibia',
    continent:'Africa'},
    {name:'Jamaica',
    continent:'North America'},
    ];
  
  function readCountries(countries){
  document.querySelector("#countries").innerHTML = "" ;
  
  countries.map((country, position) =>{
    document.querySelector("#countries").innerHTML += ` <li>
    ${country.name} is in ${country.continent}
    <span>
      <button class="custom-btn btn-9" data-bs-toggle="modal" data-bs-target="#exampleModal${position}">Update</button>
      <button class="custom-btn btn-9" onclick="deleteCountry(${position})">Delete</button>
    </span>
    </li>
    <div class="modal fade" id="exampleModal${position}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Country names</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <input type = "text" id="updateCountry${position}" placeholder="Enter Country Name" value="${ country.name}"/>
          <select name="Continent" id="update-continent-${position}">
        <option value=""></option>
    <option value="North America">North America</option>
    <option value="South America">South America</option>
    <option value="Africa">Africa</option>
    <option value="Europe">Europe</option>
       <option value="Asia">Asia</option>
       <option value="Anartica">Anartica</option>
       <option value="Australia">Australia</option>
  </select> 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" onclick="updateCountry(${position})" data-bs-toggle="modal" data-bs-target="#exampleModal${position}" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    `;
  });
  }
  
  readCountries(countries);
  
  //create
  function createCountry() {
      let country = document.querySelector("#addCountry").value;
    let continent = document.querySelector("#continent").value;
      try {
          if (!country) throw new Error ("No country input");
          countries.push({
           name:country,
            continent,}); localStorage.setItem("countries", JSON.stringify(countries))
          readCountries(countries);
      }
      catch(err){
          alert(err);
      }
  }
  
      //DELETE
      function deleteCountry(position) {
          countries.splice(position,1);
          readCountries(countries);
      }
  
      //update
  
      function updateCountry(position){
        let country =document.querySelector(`#updateCountry${position}`).value
         let continent = document.querySelector(`#update-continent-${position}`).value;
      try {
              if (country === '') {
                  throw new Error('Please input country name')
              }
              countries[position]={
                name:country,
      continent,
      };
            localStorage.setItem("countries", JSON.stringify(countries))
              readCountries(countries);
          } catch (error) {
              alert(error)
          }
  
      }  
        
       
  