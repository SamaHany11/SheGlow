
const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const closeSearch = document.getElementById('close-search');
const searchInput = document.getElementById('search-input');
const suggestionsContainer = document.getElementById('suggestions-container');

searchIcon.addEventListener('click', () => {
    searchBar.style.display = 'block';
});

closeSearch.addEventListener('click', () => {
    searchBar.style.display = 'none';
    suggestionsContainer.innerHTML = ''; 
    suggestionsContainer.style.display = 'none';
});


function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}


window.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    if (!dropdown.contains(event.target) && event.target !== dropbtn) {
        dropdown.classList.remove('active');
    }
});

searchInput.addEventListener('input', function () {
    const query = searchInput.value.trim();

    
    if (!query) {
        suggestionsContainer.innerHTML = '';
        suggestionsContainer.style.display = 'none'; 
        return;
    }

    
    fetch(`/search_suggestions?q=${query}`)
        .then(response => response.json())
        .then(data => {
           
            suggestionsContainer.innerHTML = '';

           
            if (data.length > 0) {
                suggestionsContainer.style.display = 'block'; 

                data.forEach(product => {
                    const suggestionItem = document.createElement('div');
                    suggestionItem.classList.add('autocomplete-suggestion');
                    suggestionItem.textContent = product.ProductName;
                    suggestionItem.onclick = function () {
                        searchInput.value = product.ProductName;  
                        suggestionsContainer.innerHTML = '';  
                        suggestionsContainer.style.display = 'none'; 
                    };
                    suggestionsContainer.appendChild(suggestionItem);
                });
            } else {
                suggestionsContainer.style.display = 'none';
            }
        });
});
