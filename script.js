const wrapper = document.querySelector(".slider-wrapper")

const menuItems = document.querySelectorAll(".menu-item")

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./assests/air.png",
        },
        {
          code: "darkblue",
          img: "./assests/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./assests/jordan.png",
        },
        {
          code: "green",
          img: "./assests/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./assests/blazer.png",
        },
        {
          code: "green",
          img: "./assests/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./assests/crater.png",
        },
        {
          code: "lightgray",
          img: "./assests/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./assests/hippie.png",
        },
        {
          code: "black",
          img: "./assests/hippie2.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0];

    const currentProductImg = document.querySelector(".product-image")
    const currentProductTitle = document.querySelector(".product-title");
    const currentProductPrice = document.querySelector(".product-price");
    const currentProductColors = document.querySelectorAll(".color");
    const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index];

        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
          });
    });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });

  currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
     
        size.style.backgroundColor = "white";
      size.style.color = "black";
      });
      size.style.backgroundColor = "#3d52a0";
      size.style.color = "white";
    });
  });

const productButton = document.querySelector(".product-button");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close-icon");

productButton.addEventListener("click",()=>{
payment.style.display="flex"
})

close.addEventListener("click",()=>{
payment.style.display="none"
})


