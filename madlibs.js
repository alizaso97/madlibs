// Simple MadLibs game

function createMadLibsStory() {
    // Get the values of the input fields

// OLD
    // let noun1 = document.getElementById('noun1').value;
    // let verb1 = document.getElementById('verb1').value;
    // let adjective1 = document.getElementById('adjective1').value;

// NEW
    let adjective1 = document.getElementById('adjective1').value;
    let name1 = document.getElementById('name1').value;
    let material1 = document.getElementById('material1').value;
    let creatures1 = document.getElementById('creatures1').value;
    let verb1 = document.getElementById('verb1').value;

    // Use string interpolation to insert the player's words into the MadLibs story
    
// OLD    
    // let madLibsStory = `One day, a ${noun1} decided to ${verb1}. It was very ${adjective1}.`;

// NEW
    let madLibsStory = `Far beyond our solar system, cosmonauts discovered a(n) ${adjective1} planet called ${name1}. Its surface was made of ${material1}, and ${creatures1} ${verb1} all around.`;

  
    // Create a new element to contain the MadLibs story
    let madLibsStoryContainer = document.createElement('div');
    madLibsStoryContainer.innerHTML = madLibsStory;
  
    // Add the new element to the page
    document.body.appendChild(madLibsStoryContainer);
  
    // Clear the input fields
// OLD
    // document.getElementById('noun1').value = '';
    // document.getElementById('verb1').value = '';
    // document.getElementById('adjective1').value = '';

// NEW
    document.getElementById('adjective1').value = '';
    document.getElementById('name1').value = '';
    document.getElementById('material1').value = '';
    document.getElementById('creatures1').value = '';
    document.getElementById('verb1').value = '';
  }
  
  

