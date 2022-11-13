const products = [
  {
    id: "rec43w3ipXvP28vog",
    title: "high-back bench",
    company: "ikea",
    image:
      "https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg",
    price: 9.99,
  },
  {
    id: "rec4f2RIftFCb7aHh",
    title: "albany table",
    company: "marcos",
    image:
      "https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg",
    price: 79.99,
  },
  {
    id: "rec8kkCmSiMkbkiko",
    title: "accent chair",
    company: "caressa",
    image:
      "https://dl.airtable.com/.attachments/f292eaec4fea8a791b037c759ae559c9/2d5e34d5/product-4.jpeg",
    price: 25.99,
  },
  {
    id: "recBohCqQsot4Q4II",
    title: "wooden table",
    company: "caressa",
    image:
      "https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg",
    price: 45.99,
  },
  {
    id: "recDG1JRZnbpRHpoy",
    title: "dining table",
    company: "caressa",
    image:
      "https://dl.airtable.com/.attachments/06bbede65bd09196b4a81a8e7b59e683/8af0aeb5/product-8.jpg",
    price: 6.99,
  },
  {
    id: "recNWGyP7kjFhSqw3",
    title: "sofa set",
    company: "liddy",
    image:
      "https://dl.airtable.com/.attachments/443aa7884207dae7c3cc127262a2f993/d4f33110/product-1.jpeg",
    price: 69.99,
  },
  {
    id: "recZEougL5bbY4AEx",
    title: "modern bookshelf",
    company: "marcos",
    image:
      "https://dl.airtable.com/.attachments/a889b1928b134c2ca0b5bbca32ea9abf/65c8a9a6/product-7.jpg",
    price: 8.99,
  },
  {
    id: "recjMK1jgTb2ld7sv",
    title: "emperor bed",
    company: "liddy",
    image:
      "https://dl.airtable.com/.attachments/10fdf29ae17f2d1f98770ae42584d021/82b9403f/product-6.jpg",
    price: 21.99,
  },
  {
    id: "recmg2a1ctaEJNZhu",
    title: "utopia sofa",
    company: "marcos",
    image:
      "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg",
    price: 39.95,
  },
  {
    id: "recvKMNR3YFw0bEt3",
    title: "entertainment center",
    company: "liddy",
    image:
      "https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg",
    price: 29.98,
  },
  {
    id: "recxaXFy5IW539sgM",
    title: "albany sectional",
    company: "ikea",
    image:
      "https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg",
    price: 10.99,
  },
  {
    id: "recyqtRglGNGtO4Q5",
    title: "leather sofa",
    company: "liddy",
    image:
      "https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg",
    price: 9.99,
  },
];

$(document).ready(function () {
  var filter = "";
  $("#all").on("click", function () {
    filter = $("#all").text();
    display(filter);
  });
  $("#ikea").on("click", function () {
    filter = $("#ikea").text();
    display(filter);
  });
  $("#marcos").on("click", function () {
    filter = $("#marcos").text();
    display(filter);
  });
  $("#caressa").on("click", function () {
    filter = $("#caressa").text();
    display(filter);
  });
  $("#liddy").on("click", function () {
    filter = $("#liddy").text();
    display(filter);
  });
  filter = "all";
  display(filter);
});

function display(filter) {
  $(".col-10 .row").html("");
  for (let i = 0; i < 12; i++) {
    if (filter.toLowerCase() == products[i].company) {
      var text = `
  <div class="col-4 text-center">
    <img src="${products[i].image}" class="w-100 rounded" />
    <div class="text-secondary m-2 text-capitalize">${products[i].title}</div>
    <div class="text-secondary m-2 fw-bold">${products[i].price}</div>
  </div>
  `;

      $(".col-10 .row").append(text);
    } else if (filter.toLowerCase() == "all") {
      var text = `
      <div class="col-4 text-center">
        <img src="${products[i].image}" class="w-100 rounded" />
        <div class="text-secondary m-2 text-capitalize">${products[i].title}</div>
        <div class="text-secondary m-2 fw-bold">${products[i].price}</div>
      </div>
      `;

      $(".col-10 .row").append(text);
    }
  }
}

function search(word) {
  $(".col-10 .row").html("");

  for (let i = 0; i < 12; i++) {
    console.log(products[i].title.toLowerCase().includes(`${word}`));
    if (products[i].title.toLowerCase().includes(`${word}`)) {
      var text = `
  <div class="col-4 text-center">
    <img src="${products[i].image}" class="w-100 rounded" />
    <div class="text-secondary m-2 text-capitalize">${products[i].title}</div>
    <div class="text-secondary m-2 fw-bold">${products[i].price}</div>
  </div>
  `;

      $(".col-10 .row").append(text);
    }
  }
  if ($(".col-10 .row").html() == "") {
    var text = `
    <p class="fs-5 text-danger">Not found<p/>
`;

    $(".col-10 .row").append(text);
  }
}

var word = "";
$("#input").on("keyup", function () {
  word = $("#input").val();
  search(word);
});
