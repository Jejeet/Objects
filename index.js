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

//3