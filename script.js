// for burger styling 

burger = document.querySelector('.burger')
navig = document.querySelector('.navig')
naviglist = document.querySelector('.navig-list')

const list = document.getElementById("list");
const totalproductcards = document.getElementById("totalproducts");


let allproducts = [
  {
    pic: "shoe-3 2.png",
    shoe: "H&M",
    stars: 5.0,
    Price: 2350.99,
    deliveryTime: new Date("20 Feb 2022"),
  },
  {
    pic: "shoe-5 1.jpg",
    shoe: "Zara",
    stars: 4.0,
    Price: 9559.99,
    deliveryTime: new Date("17 Feb 2022"), 
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Mango",
    stars: 3.0,
    Price: 1550,
    deliveryTime: new Date("25 Feb 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "HRX by Hritik Roshan",
    stars: 5.0,
    Price: 3550.99, 
    deliveryTime: new Date("22 Feb 2022"),
  },
  {
    pic: "shoe-5 1.jpg",
    shoe: "FILA",
    stars: 2.0,
    Price: 1300,
    deliveryTime: new Date("24 Feb 2022"),
  },
  {
    pic: "shoe-3 2.png",
    shoe: "Puma",
    stars: 5.0,
    Price: 3050,
    deliveryTime: new Date("20 Mar 2022"),
  },
  {
    pic: "shoe-5 1.jpg",
    shoe: "Reebok",
    stars: 5.0,
    Price: 1590,
    deliveryTime: new Date("21 Mar 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "HRZ by Hritik Roshan",
    stars: 3.0,
    Price: 1300,
    deliveryTime: new Date("11 Mar 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Redtape",
    stars: 2.0,
    Price: 1000,
    deliveryTime: new Date("18 Feb 2022"),
  },
  {
    pic: "shoe-5 2.jpg",
    shoe: "Adidas",
    stars: 2.0,
    Price: 1790,
    deliveryTime: new Date("20 Mar 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "one8 x PUMA",
    stars: 4.0,
    Price: 2300,
    deliveryTime: new Date("11 Mar 2022"),
  },
  {
    pic: "shoe-3 2.png",
    shoe: "Reebok",
    stars: 3.0,
    Price: 3000,
    deliveryTime: new Date("18 Apr 2022"),
  },
  {
    pic: "shoe-5 1.jpg",
    shoe: "Nike",
    stars: 2.0,
    Price: 4590,
    deliveryTime: new Date("20 Apr 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "one8 x PUMA",
    stars: 3.0,
    Price: 1300,
    deliveryTime: new Date("11 Jan 2022"),
  },
  {
    pic: "shoe-3 2.png",
    shoe: "Puma",
    stars: 4.0,
    Price: 9900,
    deliveryTime: new Date("28 Apr 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "H&M",
    stars: 1.0,
    Price: 1590,
    deliveryTime: new Date("20 Jan 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Sparx",
    stars: 3.0,
    Price: 1300,
    deliveryTime: new Date("11 Jan 2022"),
  },
  {
    pic: "shoe-5  1.jpg",
    shoe: "Campus",
    stars: 2.0,
    Price: 1000,
    deliveryTime: new Date("18 Mar 2022"),
  },
  {
    pic: "shoe-3 2.png",
    shoe: "Action",
    stars: 1.0,
    Price: 1590,
    deliveryTime: new Date("20 Jan 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "one8 x PUMA",
    stars: 3.0,
    Price: 1300,
    deliveryTime: new Date("11 Feb 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "FILA",
    stars: 2.0,
    Price: 1000,
    deliveryTime: new Date("18 Jan 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Nike",
    stars: 1.0,
    Price: 1590,
    deliveryTime: new Date("20 Jan 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Puma",
    stars: 3.0,
    Price: 1300,
    deliveryTime: new Date("11 Jan 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "one8 x PUMA",
    stars: 2.0,
    Price: 1000,
    deliveryTime: new Date("18 Jan 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Bata",
    stars: 1.0,
    Price: 1590,
    deliveryTime: new Date("20 Jan 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Puma x Nike",
    stars: 3.0,
    Price: 1300,
    deliveryTime: new Date("11 Jan 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Action",
    stars: 2.0,
    Price: 1000,
    deliveryTime: new Date("28 Mar 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Bata",
    stars: 1.0,
    Price: 1590,
    deliveryTime: new Date("21 Mar 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Puma",
    stars: 3.0,
    Price: 1300,
    deliveryTime: new Date("22 Mar 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Sparx",
    stars: 2.0,
    Price: 1460,
    deliveryTime: new Date("23 Mar 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Campus",
    stars: 1.0,
    Price: 1590,
    deliveryTime: new Date("24 Mar 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "WoodLand",
    stars: 3.0,
    Price: 4360,
    deliveryTime: new Date("25 Mar 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Skechers",
    stars: 4.0,
    Price: 1999,
    deliveryTime: new Date("26 Mar 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Highlander",
    stars: 1.0,
    Price: 1590,
    deliveryTime: new Date("27 Mar 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Bata",
    stars: 3.0,
    Price: 1360,
    deliveryTime: new Date("29 Mar 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "H&M",
    stars: 2.0,
    Price: 1000,
    deliveryTime: new Date("30 Mar 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Zara",
    stars: 1.0,
    Price: 1590,
    deliveryTime: new Date("21 Feb 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "WoodLand",
    stars: 3.0,
    Price: 1300,
    deliveryTime: new Date("19 Feb 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Skechers",
    stars: 2.0,
    Price: 1000,
    deliveryTime: new Date("18 Feb 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Bata",
    stars: 1.0,
    Price: 1590,
    deliveryTime: new Date("20 Feb 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "FILA",
    stars: 3.0,
    Price: 1300,
    deliveryTime: new Date("21 Feb 2022"),
  },
  {
    Img: "shoe-6 1.jpg",
    shoe: "Adidas",
    stars: 2.0,
    Price: 1000,
    deliveryTime: new Date("18 Feb 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Puma",
    stars: 4.0,
    Price: 1590,
    deliveryTime: new Date("20 feb 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "Adidas",
    stars: 5.0,
    Price: 1397,
    deliveryTime: new Date("25 Feb 2022"),
  },
  {
    pic: "shoe-6 1.jpg",
    shoe: "H&M",
    stars: 5.0,
    Price: 5000,
    deliveryTime: new Date("26 May 2022"),
  },
];



// this function is from bootsrap for generating card to show product
const productcards = (element) => {
  return `
  <div class="card m-3 mx-4 p-1" style="width: 18rem;">
  <img src="./images/${
    element.pic
  }" class="card-img-top" alt="shoe image" height="250px">
  
  <div class="card-body">

      <div class="d-flex justify-content-between align-items-center">           
          <h5 class="card-title fw-bolder">${element.shoe}</h5>
          <span id="star" class="d-flex justify-content-center align-items-center rounded p-1 px-2">
              <img src="./images/imagestar.png" alt="star image" class="mx-1" height="17"> <span id="star-rating" class="fw-bold">${
                element.stars
              }</span>
          </span>
      </div>
    
      <h4 class="fs-1 fw-bold">&#8377;${element.Price}</h4>
    <p class="card-text">Delivery by ${element.deliveryTime.toDateString()}</p>
  </div>

</div>`;
};



// for burger styling 
burger.addEventListener('click', () => {
  naviglist.classList.toggle('v-class-resp');
  navig.classList.toggle('h-navig-resp');
});




// for star rating
const sfil = document.getElementsByClassName("sfil"); 
Array.from(sfil).forEach((element) => {
  element.addEventListener("click", (e) => {
    list.innerHTML = "";
    let i = 0;
    const starrating = parseFloat(e.target.innerHTML.split("")[0]);

    allproducts.forEach((element) => {
      if (parseFloat(element.stars) == starrating) {
        list.innerHTML += productcards(element);
        i += 1;
      }
    });

    totalproductcards.innerHTML = i;
  });
});



// function for showing all the cards
allproducts.forEach((element) => {
  list.innerHTML += productcards(element);
});




const highrate = document.getElementById("highrate");

//function for sorting price high to low
highrate.addEventListener("click", () => {
   list.innerHTML = "";
  const priceSort = (first, second) => {
    if (parseFloat(first.Price) > parseFloat(second.Price)) {
      return -1;
    } else if (parseFloat(first.Price) < parseFloat(second.Price)) {
      return 1;
    }
  };

  totalproductcards.innerHTML = 45;
  allproducts.sort(priceSort).forEach((element) => {
    list.innerHTML += productcards(element);
  });
});



const lowrate = document.getElementById("lowrate");

//function for sorting price low to high
lowrate.addEventListener("click", () => {
   list.innerHTML = "";
  const priceSort = (first, second) => {
    if (parseFloat(first.Price) < parseFloat(second.Price)) {
      return -1;
    } else if (parseFloat(first.Price) > parseFloat(second.Price)) {
      return 1;
    } 
  };

  totalproductcards.innerHTML = 45;
  allproducts.sort(priceSort).forEach((element) => {
    list.innerHTML += productcards(element);
  });
});




//function for sorting delivery day & date
const delivDate = new Date();
const delivery = document.getElementById("deliverytime");
delivery.addEventListener("click", () => {
  list.innerHTML = "";
 const deliveryTimeSort = (a, b) => {
    if (a.deliveryTime - delivDate > b.deliveryTime - delivDate) {
      return 1;
    } else if (
      a.deliveryTime - delivDate < b.deliveryTime - delivDate
    ) {
      return -1;
    }
  };

  totalproductcards.innerHTML = 45;
  allproducts.sort(deliveryTimeSort).forEach((element) => {
    list.innerHTML += productcards(element);
  });
});



const brandname = document.getElementById("brandname");

// function for name sorting (A to Z)
brandname.addEventListener("click", () => {
  list.innerHTML = "";
  const brandnameSort = (name_a, name_b) => {
    if (name_a.shoe > name_b.shoe) {
      return 1;
    } else if (name_a.shoe < name_b.shoe) {
      return -1;
    }
  };

  totalproductcards.innerHTML = 45;
  allproducts.sort(brandnameSort).forEach((element) => {
    list.innerHTML += productcards(element);
  });
});