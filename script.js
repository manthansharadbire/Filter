const names = ["Manthan Bire", "Suraj Shende", "Karan Masram", "Dilesh Kurve", "Prashant Shende", "Abhishek Shende", "Parag Thakre"]

const namesContainer = document.getElementById('namescontainer');
 names.forEach((contributor)=>{
namesContainer.innerHTML += `<div class= 'contributor-names'>${contributor}</div>`
 })

 function loadSearchResult(){
    const inputElement = document.getElementById('searchpeoplebox');
    const searchText = inputElement.value.toLowerCase();
    namesContainer.innerHTML = '';

    const filteredNames = names.filter((contributor)=>{
        if(contributor.toLowerCase().includes(searchText)){
            return true;
        }

    })

    filteredNames.forEach((contributor)=>{
        namesContainer.innerHTML += `<div class= 'contributor-names'>${contributor}</div>`
    })
 
}