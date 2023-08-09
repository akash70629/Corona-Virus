
        // ---------- global data ------



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








// --------------------------dark mode ------------


let body = document.querySelector("body");



function change() {
    if (body.classList.contains("light")) {
        body.classList.remove("light")
        body.classList.add("dark")
    } else {
        body.classList.remove("dark")
        body.classList.add("light")
    }
}

// --------------------------dark mode ------------









//  --------------------------search country -----------


