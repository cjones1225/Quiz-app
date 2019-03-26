let STORE = [
  {
    question: 'Approximately how much does a NASA spacesuit cost?',
    answers: [
      '$12,000,000',
      '$4,500,000',
      '$8,000,000',
      '$15,000,000',
    ],
    correctAnswer: '$12,000,000',
    interestingFact: "~70% of the cost comes from the backpack and control module"
  },
  {
    question: 'What is the hottest planet in our solar system?',
    answers: [
      'Mercury',
      'Venus',
      'Mars',
      'Jupiter',
    ],
    correctAnswer: 'Venus',
    interestingFact: "Although it isn't the closest planet to our sun, it has an atmosphere, unlike Mercury. The solar radiation is held in and the planet averages 462°F"
  },
  {
    question: 'About how long have scientists estimated the footprints on the moon will last?',
    answers: [
      'Forever',
      '1 Billion Years',
      '100 Million Years',
      '500 Million Years',
    ],
    correctAnswer: '100 Million Years',
    interestingFact: "The moon has no atmosphere, which means there is no wind to erode the surface and no water to wash away the footprints."
  },
  {
    question: 'About how long do we have until the Milky Way Galaxy collides with the Andromeda Galaxy?',
    answers: [
      '3.75 Billion Years',
      '6 Trillion Years',
      '4.5 Billion Years',
      '90 Million Years',
    ],
    correctAnswer: '3.75 Billion Years',
    interestingFact: "Andromeda is approaching the Milky Way at around 110 Kilometers per second (68 mi/s) eventually the two will collide to form a giant elliptical Galaxy"
  },
  {
    question: 'How large is the largest Volcano on Mars?',
    answers: [
      '200 km wide and 7 km high',
      '600 km wide and 21 km high',
      '400 km wide and 14 km high',
      '800 km wide and 28 km high',
    ],
    correctAnswer: '600 km wide and 21 km high',
    interestingFact: "Olympus Mons is three times the size of Everest and may still be active."
  },
  {
    question: 'How fast can a Neutron star rotate along one axis?',
    answers: [
      '10 rotations per second',
      '600 rotations per second',
      '100 rotations per second',
      '1 rotation per second',
    ],
    correctAnswer: '600 rotations per second',
    interestingFact: "Under special circumstances neutron stars can spin up to 600 times per second, that's 36,000 rpm. Faster than all modern production piston engines."
  },
  {
    question: 'How many stars are there in the known universe?',
    answers: [
      'Unknown',
      '2.5 quadrillion',
      '7 sextillion',
      '500 quintillion',
    ],
    correctAnswer: 'Unknown',
    interestingFact: "It's not currently possible to put an accurate number to this question. Although scientists can estimate, and that estimate is around 70 sextillion. Which is equal to 70,000 million million million"
  },
  {
    question: 'How long is a day on Venus?',
    answers: [
      '243 Earth Days',
      'One Earth Week',
      '226 Earth Days',
      '117 Earth Days',
    ],
    correctAnswer: '243 Earth Days',
    interestingFact: "Venus takes 243 Earth Days to complete 1 full rotation. Funny enough, it takes less time to complete one revolution around the sun at 226 Earth Days."
  },
  {
    question: 'About how many Earths could fit inside the sun?',
    answers: [
      '500,000',
      '1 Million',
      '750,000',
      '5 Million',
    ],
    correctAnswer: '1 Million',
    interestingFact: "This truly shows the mass of our sun. The suns mass is 1.989 × 10^30 kg"
  },
  {
    question: 'If you could drive straight up to space, how long would it take to technically make it?',
    answers: [
      '1 hour at 100kmh',
      '1.5 hours at 100kmh',
      '.5 hours at 100kmh',
      '2.5 hours at 100kmh',
    ],
    correctAnswer: '1 hour at 100kmh',
    interestingFact: "Although space seems so far away and we as humans work extremely hard to get there and understand it, it really isn't that far away! Space is only about an hour away, straight up!"
  }
]

//Randomize answer order for questions
if (!("scramble" in Array.prototype)) {
  Object.defineProperty(Array.prototype, "scramble", {
    enumerable: false,
    value: function() {
      var o, i, ln = this.length;
      while (ln--) {
        i = Math.random() * (ln + 1) | 0;
        o = this[ln];
        this[ln] = this[i];
        this[i] = o;
      }
      return this;
    }
  });
}
//Randomize question answers
STORE.forEach(q => q.answers.scramble());

//Randomize question order
let array2 = [];
while(STORE.length !== 0) {
  let randomIndex = Math.floor(Math.random() * STORE.length);
  array2.push(STORE[randomIndex]);
  STORE.splice(randomIndex, 1);
}
STORE = array2;