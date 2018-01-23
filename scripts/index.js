// Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially return the number supplied * 1 and from then on whatever the current value is times the number supplied
// .getCurrentValue should return the last answer returned from multiply.

function ModelMultiplier () {
  this.value = 1;
  this.multiply = function (inValue) {
    this.value = inValue * this.value;
    return this.getCurrentValue();
  };
  this.getCurrentValue = function () {
    return this.value;
  };
}

var Multiplier = new ModelMultiplier();

console.log('put in 4: ' + Multiplier.multiply(4));
console.log('put in 5: ' + Multiplier.multiply(5));
console.log('put in 6: ' + Multiplier.multiply(6));

// Implement an object model that allows you to store strings that represent a Photo. Your model should include an Album object that can contain many Photo objects in its photos attribute. Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. Each Photo should store the photo's file name and the location the photo was taken in as strings. Create instances of each object defined to prove that your object model works.

function ModelPhoto (filename, location) {
  this.filename = filename;
  this.location = location;
}

function ModelAlbum () {
  this.photos = [];
  this.addNewPhoto = function (inPhoto) {
    this.photos.push(inPhoto);
  };
  this.listAllPhotos = function () {
    console.log('List of all photos:');
    this.photos.forEach(
      (element, i) =>
        console.log(String(i + 1) + ': ' + element.location + element.filename)
      );
  };
  this.getPhoto = function (n) {
    return this.photos[n - 1].location + this.photos[n - 1].filename;
  };
}
console.log(' ');
console.log('Part 2');
console.log(' ');

var photo1 = new ModelPhoto('banana.jpg', 'd:\\');
var photo2 = new ModelPhoto('pineapple.jpg', 'c:\\pictures\\');

var myAlbum = new ModelAlbum();

myAlbum.addNewPhoto(photo1);
myAlbum.addNewPhoto(photo2);

myAlbum.listAllPhotos();
console.log('2nd photo added is: ' + myAlbum.getPhoto(2));
console.log('1st photo added is: ' + myAlbum.getPhoto(1));

// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each of these objects should have attributes and methods pertinent to what they describe. Also create a School object that should be able to store instances of students and teachers. Make sure to write code afterwards that creates instances of these objects to make sure that what you've written works well and you're able to store the necessary data in each object.

function Person (inName) {
  this.name = inName;
}

function Teacher (inName, inSubject) {
  Person.call(this, inName); // extends Person
  this.subject = inSubject;
  this.info = function () {
    return 'Teacher: ' + this.name + ', Subject: ' + this.subject;
  };
}

function Student (inName, inGrade) {
  Person.call(this, inName); // extends Person
  this.grade = inGrade;
  this.info = function () {
    return 'Student: ' + this.name + ', Grade: ' + this.grade;
  };
}

function School (inName) {
  this.name = inName;
  this.students = [];
  this.teachers = [];
  this.add = function (newPerson) {
    // console.log('this guy is ' + (newPerson instanceof Teacher));
    if (newPerson instanceof Teacher) {
      this.teachers.push(newPerson);
    } else {
      this.students.push(newPerson);
    }
  };
  this.printAll = function () {
    console.log('School name: ' + this.name);
    this.students.forEach(
      (element) => console.log(element.info())
    );
    this.teachers.forEach(
      (element) => console.log(element.info())
    );
  };
}

console.log(' ');
console.log('Part 3');
console.log(' ');

var Johny = new Student('Johny Bravo', 1);
var Brock = new Student('Brock Sampson', 10);

var Archer = new Teacher('Archer', 'Math');
var Optimus = new Teacher('Optimus Prime', 'Defense against the dark arts');

var Sealab = new School('Sealab');

Sealab.add(Johny);
Sealab.add(Brock);
Sealab.add(Archer);
Sealab.add(Optimus);

Sealab.printAll();
