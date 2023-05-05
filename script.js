let stores = {
  data: [
    {
      storeName: "AWM Abbotsford",
      category: "AWM",
      address: "324 Johnston Street Abbotsford VIC 3067",
      image: "image/14.png",
    },
    {
      storeName: "AWM Electrical McKinnon",
      category: "AWM",
      address: "247 Jasper Road McKINNON VIC 3204",
      image: "image/14.png",
    },
    {
      storeName: "AWM Electrical (Ballarat)",
      category: "AWM",
      address: "110 Sutton Street DELACOMBE VIC 3356",
      image: "image/14.png",
    },
    {
      storeName: "CNW Pty Ltd - Beverley",
      category: "CNW",
      address: "720 Port Road BEVERLEY SA 5009",
      image: "image/15.png",
    },
    {
      storeName: "CNW Pty Ltd - Clayton",
      category: "CNW",
      address: "488 Clayton Road CLAYTON SOUTH VIC 3169",
      image: "image/15.png",
    },
    {
      storeName: "CNW Pty Ltd - Edwardstown",
      category: "CNW",
      address: "Via Service Lane Rear of 16 Gumbowie Ave Edwardstown SA 5039",
      image: "image/15.png",
    },
    {
      storeName: "Haymans Electrical Blair Athol",
      category: "Haymans",
      address: "110-112 Grand Junction Road BLAIR ATHOL SA 5084",
      image: "image/12.png",
    },
    {
      storeName: "Haymans Electrical Ferryden Park",
      category: "Haymans",
      address: "324 Johnston Street Abbotsford VIC 3067",
      image: "image/12.png",
    },
    {
      storeName: "Haymans Electrical Hendon",
      category: "Haymans",
      address: "Unit 3/61 Tapleys Hill Road HENDON SA 5014",
      image: "image/12.png",
    },
    {
      storeName: "John R Turk (Campbelltown)",
      category: "JRT",
      address: "4/2 Grange Road LEUMEAH NSW 2560",
      image: "image/9.png",
    },
    {
      storeName: "John R Turk ( Castle Hill)",
      category: "JRT",
      address: "Unit 2/4 Victoria Avenue CASTLE HILL NSW 2154",
      image: "image/9.png",
    },
    {
      storeName: "John R Turk (Silverwater)",
      category: "JRT",
      address: "87 Silverwater Road SILVERWATER NSW 2128",
      image: "image/9.png",
    },
    {
      storeName: "Lawrence & Hanson Glynde (DRH)",
      category: "L&H",
      address: "25 Glynburn Road GLYNDE SA 5070",
      image: "image/10.png",
    },
    {
      storeName: "Lawrence & Hanson Salisbury South",
      category: "L&H",
      address: "5 Pentland Road Salisbury South SA 5106",
      image: "image/10.png",
    },
    {
      storeName: "Lawrence & Hanson - Bayswater",
      category: "L&H",
      address: "Lot 12/260 Canterbury Road BAYSWATER NORTH VIC 3153",
      image: "image/10.png",
    },
  ],
};

for (let i of stores.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");

  let container = document.createElement("div");
  container.classList.add("container");
  //store name
  let name = document.createElement("h5");
  name.classList.add("store-name");
  name.innerText = i.storeName.toUpperCase();
  container.appendChild(name);

  //address
  let address = document.createElement("p");
  address.classList.add("address-store");
  address.innerText = i.address.toString();
  container.appendChild(address);
  

  card.appendChild(container);
  document.getElementById("stores").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterStore(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search-store").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".address-store");
  let cards = document.querySelectorAll(".card");
  

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toString())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all stores
window.onload = () => {
  filterStore("all");
};