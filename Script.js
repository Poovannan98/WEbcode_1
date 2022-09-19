function about(){
    document.querySelector(`.navbar-about`).style.display ="flex"; //display about navbar
    var print = document.querySelector('#about-result'); // display abount content
    print.innerHTML = `This Web Site created by "Poovannan", In this page you are enter the name and then click Search button, 
    display the Natinality, top two countries, probability value, counts, gender, age etc..  `;
    
}

async function Nationalize(){
    var Name= document.querySelector('#search').value;        // getting value of text bos
   
    let data1 = await fetch(`https://api.nationalize.io?name=${Name}`) //fetch API
    let result = await data1.json() // store API data to JSON 
    console.log(result) // print JSON in console

    let data2 = await fetch(`https://api.genderize.io/?name=${Name}`) //fetch API
    let gender = await data2.json()
    console.log(gender)

    let data3 = await fetch(`https://api.agify.io/?name=${Name}`) //fetch API
    let age = await data3.json()
    console.log(age)

    var api = document.querySelector('#Nationalize') // Print JSON values to HTML page
    var gender_print =`${gender.gender}`; // find gender of given Name
    
    try{ // creating Elements using DOM
    api.innerHTML=`<div class="card text-center h-100 text-bg-info" style="width: 20rem;"> 
    <div class="card-header">
        <h1 class="text-center" >${result.name}</h1>
    </div>            
        <div class="card-body">
             <img src="./${gender_print}.png" class="card-img-top" alt="${gender_print}">
        <div class="card-text">       
                <p><span id="sp">Top Country one: </span><span id="sp1">${result.country[0].country_id}</span></p>
                <p><span id="sp">Top Country two: </span><span id="sp1">${result.country[1].country_id}</span></p>
                <p><span id="sp">Probability of 1st Country: </span><span id="sp1">${result.country[0].probability}</span></p>
                <p><span id="sp">Probability of 2nd Country: </span><span id="sp1">${result.country[1].probability}</span></p> 
                <p><span id="sp">Type of gender: </span><span id="sp1">${gender.gender}</span></p>
                <p><span id="sp">World count: </span><span id="sp1">${gender.count}</span></p>
                <p><span id="sp">Overall Probability in world: </span><span id="sp1">${gender.probability}</span></p>
                <p><span id="sp">Age of <span id="sp1">${result.name}</span> in world: </span><span id="sp1">${age.age}</span></p>
                <p><span id="sp">Age count in World: </span><span id="sp1">${age.count}</span></p> 

        </div>            
        </div>
    </div>`
    }catch(err){ // catch the error of API data
        api.innerHTML=`<div class="card text-center h-100 text-bg-info" style="width: 20rem;">
    <div class="card-header">
        <h1 class="text-center" >Error Code: ${result.cod}</h1>
    </div>            
        <div class="card-body">
             <img src="./error.png" class="card-img-top" alt="no">
        <div class="card-text">       
                <p><span id="sp" >Message: </span><span id="sp1">${result.message}</span></p>
        </div>            
        </div>
    </div>`
    }
}