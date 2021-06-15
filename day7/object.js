//question 1

var student = 
{ 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12 
}

var a = "";

  for (const key in student)
    a=a+ `${key},`;

  console.log(a.substring(0, a.length - 1));

console.log("");

// question 2

var student = 
{ 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12 
}

console.log(student);
delete student.rollno;
console.log(student);


// question 3

var student = 
{ 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12 
}
var size = Object.values(student).length;
console.log(size);


// question 4

var library = 
[
  { 
      author: 'Bill Gates', 
      title: 'The Road Ahead', 
      readingStatus: true 
    
  }, 
      
  {   
      author: 'Steve Jobs', 
      title: 'Walter Isaacson', 
      readingStatus: true 
    
  }, 
  
  {   
      author: 'Suzanne Collins', 
      title: 'Mockingjay: The Final Book of The Hunger Games', 
      readingStatus: false 
    
  }
]; 


// console.log(library[0].title);
for(i=0;i<library.length;i++)
{
    
    console.log("book name --- "+library[i].title);
    console.log("author name --- "+library[i].author);
    console.log("reading status --- "+library[i].readingStatus);
  
    console.log("");
}

// question 5

var Cylinder = class {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }

  get volume() {
    return this.calcVolume();
  }

  calcVolume() {
    return (Math.PI*this.radius*this.radius*this.height);
  }

};

const obj = new Cylinder(7,2);
console.log("volume is ", obj.volume.toFixed(4));

// question 6

var library = [ 
  
    { 
      title: 'The Road Ahead', 
      author: 'Bill Gates', 
      libraryID: 1254 
      
    }, 
    { 
      title: 'Walter Isaacson', 
      author: 'Steve Jobs', 
      libraryID: 4264 
      
    }, 
    { 
      title: 'Mockingjay: The Final Book of The Hunger Games', 
      author: 'Suzanne Collins', 
      libraryID: 3245 
      
    }
  ];

function compare_to_sort(x,y) 
 {
  if (x.libraryID < y.libraryID)
    return 1;
  if (x.libraryID > y.libraryID)
    return -1;
  return 0;
 }
 

library.sort(compare_to_sort);
console.log(library);
