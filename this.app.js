
//Build all of your functions for displaying and gathering information below (GUI).
// app is the function called to start the entire application

    function app(people){
        var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
        switch(searchType){
        case 'yes':
            searchByName(people);
            break;
        case 'no':
            FindPeopeleByTriats(people);
            break;
        default:
            alert("Invalid input. Please try again!");
            app(people); 
        break;
        }
    }

    
  
  // Menu function to call once you find who you are looking for
  function mainMenu(person, people){
    /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */
    if(!person){
      alert("Could not find that individual.");
      return app(people); // restart
    }
    var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
    switch(displayOption){
      case "info":
        displayPerson(person);
        break;
      case "family":
        // TODO: get person's family

        break;
      case "descendants":
        // TODO: get person's descendants
        break;
      case "restart":
        app(people); 
        break;
      case "quit":
        return; 
      default:
        return mainMenu(person, people); 
    }
  }

  
  function searchByName(people){
    var firstName = promptFor("What is the person's first name?", chars);
    var lastName = promptFor("What is the person's last name?", chars);
  
    let filteredPeople = people.filter(function(el) {
      if(el.firstName === firstName && el.lastName === lastName) {
        return el;
      }
    });
    return mainMenu(filteredPeople[0],people);  
}

// function FindByFamily( person, people){
//   var lastname = promptFor("What is the family name you are looking for",chars);

//   let filteredPeople = people.filter(function(el) {
//     if(el.lastName === lastName)
//     {
//       return el;
//     }
//   });
//   return displayPeople(filteredPeople);
//}

function FindPeopeleByTriats(people){ 
 
  var searchtraits = promptFor("choose what trait do you want to search for through the options: 1, 2, 3, 4, 5, 6. An options 7 searches by multipule traits and 8 returns you to general search", chars );
  switch(searchtraits){
      case "1":
       searchByGender(people); 
          return FindPeopeleByTriats(people);
     case "2":
       searchByHeight(people);
         return FindPeopeleByTriats(people);
     case "3":
         searchByWeight(people);
         return FindPeopeleByTriats(people);
     case "4":
         searchByEyeColor(people);
         return FindPeopeleByTriats(people); 
      case "5":
        seachByDob(people);
        return seachByDob(people);
    case "6":
      seacrhByOccupation(people);
      return seacrhByOccupation(people);
    case "7":
      searchByMultipleTraits(people);
      return FindPeopeleByTriats(people);
    case "8":
      return app(people);
     default:
         return app(people);
  }

}

function searchByMultipleTraits(people){
  

  var searchtraits = promptFor("Search peolpe by multimple traits using options 1, 2, 3. Option 4 returns to previous menu", chars);
  switch(searchtraits){
    case "1":
      searchByGenderEyecolor(people);
        return FindPeopeleByTriats(people);
     case "2":
        searchByHeightWeight(people);
         FindPeopeleByTriats(people);
       case "3":
          searchByDobOccupation(people);
          return FindPeopeleByTriats(people);
        case "4":
          return FindPeopeleByTriats(people)
        default:
          return app(people)
      
  }
}

function searchByGenderEyecolor(people){
  var gender = promptFor("What is the geneder of the person you are looking for",chars);
  var eyecolor = promptFor("What is the eyecolor of this perosn", chars);
   let filteredPeople = people.filter(function(el){
       if (el.gender === gender && el.eyeColor === eyecolor){
      return el;
  }
  });
  displayPeople(filteredPeople);
}

function searchByHeightWeight(people){
  var height = promptFor("What is the height of the person you are looking for",chars);
  var weight = promptFor("What is the weight of this perosn", chars);
   let filteredPeople = people.filter(function(el){
       if (el.height == height && el.weight == weight){
      return el;
  }
  });
  displayPeople(filteredPeople);
}

function searchByDobOccupation(people){
  var dob = promptFor("What is the date of birth of the person you are looking for",chars);
  var occupation = promptFor("What is the occupation of this perosn", chars);
   let filteredPeople = people.filter(function(el){
       if (el.dob === dob && el.occupation === occupation){
      return el;
  }
  });
  displayPeople(filteredPeople);
}

       function searchByGender(people){
           var gender = promptFor("What is the geneder of the person you are looking for",chars);
            let filteredPeople = people.filter(function(el){
                if (el.gender === gender){
               return el;
           }
           });
           displayPeople(filteredPeople);
        }

        function searchByHeight(people){
            var height = prompt("How tall is the perosn you are looking for" ,chars);
            let filteredPeople = people.filter(function(el){
                if (el.height == height) {
                    return el;
                }
                
            });
            return displayPeople(filteredPeople); 
        }

        function searchByWeight(people){
            var weight = prompt("What is the wieght of the perosn you are looking for",chars);
             let filteredPeople = people.filter(function(el){
                if (el.weight == weight){
                    return el;
                }
               
            });
            return displayPeople(filteredPeople);
        }

        function searchByEyeColor(people){
            var eyecolor = prompt("What is the eyecolor of the person your looking for",chars);

             let filteredPeople = people.filter(function(el){
                if (el.eyeColor === eyecolor) {
                    return el;
                }
            });
            return displayPeople(filteredPeople);

        }
        function seacrhByOccupation(people){
          var weight = prompt("What is the occupation of the person you are looking for",chars);
           let filteredPeople = people.filter(function(el){
              if (el.occupation === occupation){
                  return el;
              }
            }); 
            return displayPeople(filteredPeople);
          }

          function seachByDob(people){
            var dob = promptFor("What is the persons date of birth you are looking for,chars");
             let filteredPeople = people.filter(function(el){
              if (el.dob === dob){
                return el
              }
            });
            return displayPeople(filteredPeople);
          }

       
        
  
  // alerts a list of people
  function displayPeople(people){
    alert(people.map(function(person){
      return person.firstName + " " + person.lastName;
    }).join("\n"));
  }
 
  function displayPerson(person){
    var personInfo = "First Name: " + person.firstName + "\n";
    personInfo += "Last Name: " + person.lastName + "\n";
    personInfo += "gender: " + person.gender + "\n";
    personInfo += "age: " + person.dob + "\n";
    personInfo += "height: " + person.height + "\n"; 
    personInfo += "weight: " + person.weight + "\n";
    personInfo += "eye color: " + person.eyeColor + "\n";
    personInfo += "occupation: " + person.occupation + "\n";
    alert(personInfo);
  }
  
  // function that prompts and validates user input
  function promptFor(question, callback){
    do{
      var response = prompt(question).trim();
    } while(!response || !callback(response));
    return response;
  }
  
  // helper function to pass into promptFor to validate yes/no answers
  function yesNo(input){
    return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
  }
  
  // helper function to pass in as default promptFor validation
  function chars(_input){
    return true; 
  }