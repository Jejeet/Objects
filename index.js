//1
function InstagramPost(handle, content, imageLink, views, likes) {
    this.handle = handle;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
  }
  
  //2.
  const post1 = new InstagramPost('username', 'This is my post!', 'https://www.example.com/image.jpg', 1000, 50);
const post2 = new InstagramPost('anotherusername', 'Check out my vacation pics', 'https://www.example.com/anotherimage.jpg', 500, 25);

//3 a

// Factory function to create a person object
function createPerson(name, age, location) {
    return {
      name,
      age,
      location
    };
  }

  // Create an object representing Musa using the createPerson() factory function
const musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State');

//3 b

// Factory function to create a JAMB scores object
function createJambScores(eng, govt, lit, crk) {
    return {
      eng,
      govt,
      lit,
      crk
    };
  }

  // Create an object representing Musa's JAMB scores using the createJambScores() factory function
const musaJambScores = createJambScores(70, 85, 82, 94);
// Add the JAMB scores object as a property to the Musa object
musa.jambScores = musaJambScores;
console.log(musa);

//4
Object.assign(),

const person = {
    name: 'Ade',
    age: 30,
    city: 'Ekiti'
  };
  
  // Create a shallow copy of the person object
  const personCopy = Object.assign({}, person);
  
  console.log(personCopy); 

  Spread operator


  const person = {
    name: 'Ade',
    age: 30,
    city: 'Ekiti'
  };
  
  // Create a shallow copy of the person object using the spread operator
  const personCopy = { ...person };
  
  console.log(personCopy);


  JSON.stringify() and JSON.parse()

  const person = {
    name: 'Big girl',
    age: 30,
    city: 'Canada'
  };
  
  // Create a deep copy of the person object using JSON.stringify() and JSON.parse()
  const personCopy = JSON.parse(JSON.stringify(person));
  
  console.log(personCopy); 
  

  //5

  const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 
 for (let party in presidentialCandidates) {
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
  }
  