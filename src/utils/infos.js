import service1 from "../images/about/single_service_01.jpg";
import service2 from "../images/about/single_service_02.jpg";
import service3 from "../images/about/single_service_03.jpg";
import service4 from "../images/about/single_service_04.jpg";

export const navLinks = [
  { id: 1, url: "/", name: "home" },
  { id: 2, url: "/products", name: "products" },
  { id: 3, url: "/magazine", name: "magazine" },
  { id: 4, url: "/our-team", name: "our team" },
  { id: 5, url: "/about-us", name: "about us" },
  { id: 6, url: "/contactus", name: "contact us" },
];

export const contents = [
  {
    id: 0,
    name: "Market Analysis",
    text: [
      "Vivamus sed feugiat elit. Pellentesque pretium, massa at placerat vehicula, neque turpis pulvinar tortor, eget convallis lorem odio non tortor. Donec massa est, fermentum sit amet felis ac, maximus luctus elit. Vivamus aliquet, dolor id imperdiet imperdiet, dui diam aliquet dui, a euismod metus enim ac velit. Vivamus eu tristique odio, vel tristique quam.",
      "Proin eu molestie risus. Etiam suscipit pretium odio, at consectetur nisi. Sed ut dolor in augue cursus ultrices. Vivamus mauris turpis, auctor vel facilisis in, tincidunt vel diam. Sed vitae scelerisque orci. Nunc non magna orci. Aliquam commodo mauris ante.",
    ],
    image: service1,
  },
  {
    id: 1,
    name: "Financial Data",
    text: [
      "Sed ut dolor in augue cursus ultrices. Vivamus mauris turpis, auctor vel facilisis in, tincidunt vel diam. Sed vitae scelerisque orci. Nunc non magna orci. Aliquam commodo mauris ante, quis posuere nibh vestibulum sit amet",
      "Pellentesque pretium, massa at placerat vehicula, neque turpis pulvinar tortor, eget convallis lorem odio non tortor. Donec massa est, fermentum sit amet felis ac, maximus luctus elit. Vivamus aliquet, dolor id imperdiet imperdiet, dui diam aliquet dui, a euismod metus enim ac velit. Vivamus eu tristique odio, vel tristique quam.",
    ],
    image: service2,
  },
  {
    id: 2,
    name: "Accounting Service",
    text: [
      "Mauris lobortis quam id dictum dignissim. Donec pellentesque erat dolor, cursus dapibus turpis hendrerit quis. Suspendisse at suscipit arcu. Nulla sed erat lectus. Nulla facilisi. In sit amet neque sapien. Donec scelerisque mi at gravida efficitur. Nunc lacinia a est eu malesuada. Curabitur eleifend elit sapien, sed pulvinar orci luctus eget.",
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vel ultrices nulla, ac tincidunt eros. Aenean quis tellus velit. Praesent pretium justo non auctor condimentum.",
    ],
    image: service3,
  },
  {
    id: 3,
    name: "Overall Evaluation",
    text: [
      "Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel.",
      "Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam.",
    ],
    image: service4,
  },
];
