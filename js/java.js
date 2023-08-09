// function displayTime() {
//     time = new Date();
//     document.getElementById("time").innerHTML = time;
// }


// setInterval(displayTime, 1000);




// api section 




const tbody = document.querySelector('#tbody');

// const getdata = async () => {
//     const endpoint = "https://api.covid19api.com/summary",
//         response = await fetch(endpoint),
//         data = await response.json(),
//         Countries = data.Countries;





//     Countries.forEach(countryObj => {
//         let { Country, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered, Date } = countryObj;
//         tbody.innerHTML += `<tr>
//         <td>${Country}</td>
//         <td>${NewConfirmed}</td>
//         <td>${TotalConfirmed}</td>
//         <td>${NewDeaths}</td>
//         <td>${TotalDeaths}</td>
//         <td>${NewRecovered}</td>
//         <td>${TotalRecovered}</td>
//         <td>${Date}</td>
//     </tr>`;
//     });



// }


// getdata();




let countriesData = [];

const getdata = async () => {
  const endpoint = "https://api.covid19api.com/summary",
        response = await fetch(endpoint),
        data = await response.json();

  countriesData = data.Countries;
  _DisplayCountries();
}

const _DisplayCountries = (c = "") => {
  let tbody = document.querySelector("#tbody");
  tbody.innerHTML = ``;
  countriesData.filter(country => country.Country.toLowerCase().includes(c.toLowerCase())).forEach(result => {
    tbody.innerHTML += `<tr>
        <td>${result.Country}</td>
        <td>${result.NewConfirmed}</td>
        <td>${result.TotalConfirmed}</td>
        <td>${result.NewDeaths}</td>
        <td>${result.TotalDeaths}</td>
        <td>${result.NewRecovered}</td>
        <td>${result.TotalRecovered}</td>
        <td>${result.Date}</td>
    </tr>`;
  });
}

getdata();

document.querySelector("#mySubmit").addEventListener("click", e => {
  _DisplayCountries(document.querySelector("#myInput").value);
});



// Global data 


const total = document.querySelector('.total')

const getdataa = async () => {
    const endpoint = "https://api.covid19api.com/summary",
        responsee = await fetch(endpoint),
        data = await responsee.json(),
        Global = data.Global;


    const { TotalConfirmed, TotalDeaths, NewDeaths } = Global
    total.innerHTML = `
      <p class="higher">Total Coronavirus Cases : ${TotalConfirmed}</p>
        <p class="higher">Total Deaths :  ${TotalDeaths}</p> 
        <p class="lower">New Deaths : ${NewDeaths}</p>`
}

getdataa();



