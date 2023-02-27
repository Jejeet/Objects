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