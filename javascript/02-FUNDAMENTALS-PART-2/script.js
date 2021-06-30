//   console.log('Hello wold 2');

//   function fruitProcessor(apple, orange){
//       console.log(apple, orange);
//       const juice = `Juice with ${apple} apple and ${orange} orange.`;
//       return juice;
//   }

// const appleJuice = fruitProcessor(50, 55);
// console.log(appleJuice);

//   function calAge1(birthYear){
//       return 2021 - birthYear;
//   }

//   const age = calAge1(1992);
//   console.log(`My age is ${age}.`);

//Function inside a function: Data flow

const cutPieces = function (fruit) {
  return fruit * 4;
};

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(2, 3));

//Array
const friend = {
  firstName: "jayakumar",
  lastName: "loganathan",
  age: 1992 - 2021,
  job: "web developer",
  frindes: ["gopi", "hari", "ganga", "siva"],
  boys: ["gopi", "haris", "gangae", "sivane"],
};

console.log(friend);
console.log(friend);
console.log(friend.frindes);
console.log(friend["firstName"]);

const nameKey = "Name";
console.log(friend["first" + nameKey]);
console.log(friend["last" + nameKey]);

//The for loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep} 🏋️`);
}

for (load = 1; load <= 7; load++) {
  console.log(`Today is Great day ${load}`);
}

const gym = load;

console.log(load);

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}

const x = 12;

//slider

const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
