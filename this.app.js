
<<<<<<< HEAD
//Build all of your functions for displaying and gathering information below (GUI).
// app is the function called to start the entire application
=======
>>>>>>> 01257bcd64afc804f27deaaee15e73096844345f
    function app(people){
       var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
        switch(searchType){
        case 'yes':
            searchByName(people);
            break;
        case 'no':
            // TODO: search by traits
            FindPeopeleByTriats(people);
            break;
        default:
            alert("Invalid input. Please try again!");
            app(people); // restart app
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
        app(people); // restart
        break;
      case "quit":
        return; // stop execution
      default:
        return mainMenu(person, people); // ask again
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
function searchByGender(people){
  var Gender = promptFor("What is the person's Gender?", chars);
  

  let filteredPeople = people.filter(function(el) {
    if(el.gender === male) {
      return el;
    }
    else(el.gender === female); {
      return el;
    }
   
  });
  return mainMenu(filteredPeople[0],people);
 
}

function FindPeopeleByTriats(people)
{ var searchtraits = promptFor("choose what trait do you want to search by 1 = Gender, 2 = Height, 3 = Weight, 4 = Eye Color", chars );
 switch(searchtraits){
     case "1":
        searchByGeneder(people);
         break;
    case "2":
        seacrhByHeight(people);
        break;
    case "3":
        seacrhByWeight(people);
        break;
    case "4":
        searchByEyeColor(people);
        break;
    default:
        return app(peolpe);
 }

}
    // TODO: What to do with filteredPeople?
    //Put all filtered pple in empty array
    //return that array
    //Or retun new array withou those pple

       function searchByGeneder(people){
           var gender = promptFor("What is the geneder of the person you are looking for",chars);
           
           
           let filteredPeople = people.filter(function(el){
<<<<<<< HEAD
                if (el.gender === gender) {
               return el;
           }
           });
           displayPeopleList(filteredPeople);
=======
                if (el.gender === person.male) {
               return el;
           }
           else if(el.gender === person.female){
             return el;
           }
           });
           return displayPeople(filterpeople);
>>>>>>> 01257bcd64afc804f27deaaee15e73096844345f
          
        }

        function seacrhByHeight(people){
            var height = prompt("How tall is the perosn you are looking for",chars);

            let filteredPeople = peolpe.filter(function(el){
                if (el.height === height){
                    return el;
                }
                
            });
            return displayPeople();
           
        }

        function seacrhByWeight(peolpe){
            var weight = prompt("What is the wieght of the perosn you are looking for",chars);
            
            let filteredPeople = people.filter(function(el){
                if (el.weight === weight){
                    return el;
                }
               
            });
            return displayPeople();
        }
        function searchByEyeColor(peolpe){
            var eyecolor = prompt("What is the eyecoloe of the person your looking for",chars);

            let filteredPeople = peolpe.filter(function(el){
                if (el.eyecolor === eyecolor){
                    return el;
                }
            });
            return displayPeople();

        }
  
  // alerts a list of people
  function displayPeople(people){
    alert(people.map(function(person){
      return person.firstName + " " + person.lastName;
    }).join("\n"));
  }
<<<<<<< HEAD

  function displayPeopleList(people){
    alert(people.reduce(function(person){
      return person.firstName + " " + person.lastName;
    }).join("\n"));
   
=======
  function displayFamily(spouse=null, parent1=null, parent2=null, children=null, siblings=null){
    var outputString = "";
    if(spouse != null)
    {
      outputString = "Spouse: " + spouse.firstName + " " + spouse.lastName + "\n";
    }
    if(parent1 != null)
    {
      outputString += "Parent 1: " + parent1.firstName + " " + parent1.lastName + "\n";
    }
    if(parent2 != null)
    {
      outputString += "Parent 2: " + parent2.firstName + " " + parent2.lastName + "\n";
    }
    if(children != null)
    {
      for(child in children)
      {
        outputString += "Child " + (parseInt(child) + 1) + ": " + children[child].firstName + " " + children[child].lastName + "\n";
      }
    }
    if(siblings != null)
    {
      for(sibling in siblings)
      {
        outputString += "Sibling " + (parseInt(sibling) + 1) + ": " + siblings[sibling].firstName + " " + siblings[sibling].lastName + "\n";
      }
    }
    alert(outputString);
>>>>>>> 01257bcd64afc804f27deaaee15e73096844345f
  }
  
  function displayPerson(person){
   
    var personInfo = "First Name: " + person.firstName + "\n";
    personInfo += "Last Name: " + person.lastName + "\n";
    personInfo += "Gender: " + person.gender + "\n";
    personInfo += "Date of Birth: " + person.dob + "\n";
    personInfo += "Height: " + person.height + "\n";
    personInfo += "Weight: " + person.weight + "\n";
    personInfo += "Eye Color: " + person.eyecolor + "\n";
    personInfo += "Occupation: " + person.occupation + "\n";
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
  function chars(input){
    return true; // default validation only
  }