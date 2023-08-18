let courses = [
  {
    id: 1,
    title: "ReactJS Tutorial",
    rating: 4.2,
  },
  {
    id: 2,
    title: "Angular Tutorial",
    rating: 2.5,
  },
  {
    id: 3,
    title: "VueJS Tutorial",
    rating: 3.8,
  },
  {
    id: 4,
    title: "Java Tutorial",
    rating: 4,
  },
  {
    id: 5,
    title: "JavaScript Tutorial",
    rating: 3.5,
  },
];
// Task 1
courses.forEach((course) => {
  if (course.rating >= 4) {
    console.log(course);
  }
});

// Task 2
let newCourses = courses.filter((course) => course.rating < 4);

let result = newCourses.map((course) => {
  let newValue = course.id + " - " + course.title + " - " + course.rating;
  course = newValue;
  return newValue;
});
console.log(result);

// Task 3
let addedCourses = [
  {
    id: 6,
    title: "PHP Tutorial",
    rating: 3,
  },
  {
    id: 7,
    title: "C# Tutorial",
    rating: 2,
  },
  {
    id: 8,
    title: "Docker Tutorial",
    rating: 3.8,
  },
];
let newArr = [...courses, ...addedCourses];
console.log(newArr);
