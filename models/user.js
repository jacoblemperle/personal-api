var user = {
  name: "jacob",
  location: "provo",
  occupations: ["first job", "last job", 'a', 'b', 'z'],
  hobbies: [
    {
      name: "basketball",
      type: "sport"
    },
    {
      name: "eating",
      type: "life"
    },
    {
      name: "boating",
      type: "lifestyle"
    }
  ],
  family: [
    {
      name: "travis",
      relation: "brother",
      gender: "male"
    },
    {
      name: "kyle",
      relation: "cousin",
      gender: "male"
    },{
      name: "tammy",
      relation: "mother",
      gender: "female"
    }
  ],
  restaurants: [
    {
      name: "texas roadhouse",
      type: "bbq",
      rating: 5
    },
    {
      name: "mcdonalds",
      type: "fast food",
      rating: 2
    },
    {
      name: "panda express",
      type: "not good",
      rating: 1
    }
  ]
};
module.exports = user;
