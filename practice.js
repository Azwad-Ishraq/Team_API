// const searchFood = () => {
//     const searchField = document.getElementById('search-field');
//     const searchText = searchField.value;
     
//     searchField.value = ''

//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displaySearchResult(data.meals))
    

// }
// const displaySearchResult = meals => {
//     console.log(meals)
// }






const loadData = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const spinner = document.getElementById('spinner');
    spinner.removeAttribute('hidden');

    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
    searchField.value = ''


    fetch(url)
    .then(res => res.json())
    .then(data => {
        spinner.setAttribute('hidden', '');
        displaySearchResult(data);
    });

    
}
const teamName = document.getElementById('team-name');
const teamDes = document.getElementById('team-des');
const teamBanner = document.getElementById('team-banner');
const fb = document.getElementById('fb');
const insta = document.getElementById('insta');
const twit = document.getElementById('twit');
const errorH1  = document.getElementById('error');

const displaySearchResult = data => {
    
        console.log(data.teams);
        if(data.teams != null){
            const teamArray = [];
   for(const team of data.teams){
       if(team.strSport == 'Soccer'){
           
           teamArray.push(team);
           
       }
   }
//    console.log(teamArray[0]);
const teamItem = teamArray[0];
console.log(teamItem);


teamDes.innerText = teamItem.strDescriptionEN;
teamName.innerText = teamItem.strTeam;
teamBanner.src = teamItem.strTeamBanner;
errorH1.textContent = ''











fb.innerHTML = `<i class="fab fa-facebook"></i>`;
insta.innerHTML = `<i class="fab fa-instagram"></i>`;
twit.innerHTML = `<i class="fab fa-twitter"></i>`

const fbUrl = teamItem.strFacebook;
const twitUrl = teamItem.strTwitter;

fb.href =  `https://${fbUrl}`;
twit.href = `https://${twitUrl}`;
console.log(twit.href)
        }else{
            console.log('not found');
            
            errorH1.style.color = 'red';
            errorH1.innerText = `Team Not Found`;
            teamDes.textContent = '';
            teamName.textContent = '';
            teamBanner.src = '';
            fb.textContent = ``;
            insta.textContent = ``;
            twit.textContent = ``

        }
    









    
}