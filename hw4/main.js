"use strict";

//W1

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

for (const key in numbers) {
    if (numbers[key] >= 3) {
        console.log("w1 ответ: " + numbers[key]);
    }
}

//w2

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
      {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
          likes: 10,
          dislikes: 2, // вывести это число
        },
      },
      {
        userId: 5, // вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", // вывести этот текст
        rating: {
          likes: 3,
          dislikes: 1,
        },
      },
    ],
  };

  console.log("w2 ответ: " + post.author);

  console.log("w2 ответ: " + post.comments[0].rating.dislikes);

  console.log("w2 ответ: " + post.comments[1].userId);

  console.log("w2 ответ: " + post.comments[1].text);



// w3

const products = [
    {
      id: 3,
      price: 200,
    },
    {
      id: 4,
      price: 900,
    },
    {
      id: 1,
      price: 1000,
    },
  ];


  products.forEach(element => {
     console.log("w3 ответ: " + element.price * 0.85);
  });

// w4
console.log("w4 ответ: ");
  const productsW4 = [
    {
      id: 3,
      price: 127,
      photos: [
        "1.jpg",
        "2.jpg",
      ],
    },
    {
      id: 5,
      price: 499,
      photos: [],
    },
    {
      id: 10,
      price: 26,
      photos: [
        "3.jpg",
      ],
    },
    {
      id: 8,
      price: 78,
    },
  ];





const productsW4Update = productsW4.filter(
    function (element) {
        return "photos" in element && element.photos.length !== 0;
    }
);

console.log(productsW4Update);

const productsW4Sort = productsW4.sort(function (a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    return 0;
});

console.log(productsW4Sort);



//5

const en = ["mon",  "tue",  "wed",  "thu",  "fri",  "sat",  "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const run = {};
for (let i = 0; i < en.length; i++) {
    run[en[i]] = ru[i];
    
}
console.log("w5 ответ: " );
console.log(run);


//6


const numbersW6 = {
    key1: {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    },
    key2: {
    keyin1: 4,
    keyin2: 5,
    keyin3: 6,
    },
};


const key1 = Object.values(numbersW6.key1);
const key2 = Object.values(numbersW6.key2);

const sumW6 = key1.reduce(function(sum, current) {
  return sum + current;
}, 0) + key2.reduce(function(sum, current) {
  return sum + current;
}, 0);
console.log("w6 ответ: " + sumW6);

