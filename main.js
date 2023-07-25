const img = document.querySelector('img');
const searchInput  = document.querySelector('#searchInput');

const newImageButton = document.querySelector('#newImg');
img.alt="hello";





function fetchNewImg(query){
    const apiUrl = `https://pixabay.com/api/?key=38449990-d672e9afd788fd4ad80bfd2f4&q=${encodeURIComponent(query)}`;
    fetch(apiUrl, {mode: 'cors'})
    .then(function(response) {
      return(response.json());
    })
     .then(function(response) {
      const randomImageIndex = Math.floor(Math.random() * response.hits.length);
                img.src = response.hits[randomImageIndex].largeImageURL;
    })
      .catch(function(error) {
    // Handle any errors that occurred during the fetch or JSON parsing
    console.error('Error:', error);
  });
}

fetchNewImg('yellow');


newImageButton.addEventListener("click", function() {
    const userInput = searchInput.value.trim();
    if (userInput !== '') {
        fetchNewImg(userInput);
    } else {
        alert('Please enter a query.');
    }
});
    


