import React from "react";

function Food({name, picture}) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} width="200"  />
  </div>;
}
const foodILike = [
  {
  name: "Kimchi",
  image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg"
  },
  {
  name: "bulgogi",
  image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/12/30/df939769792632a48a0eba8bc895e8601.jpg"
  },
  {
  name: "kimbap",
  image: "https://recipe1.ezmember.co.kr/cache/recipe/2016/04/08/1d26c0444e724bca8ed271b24da0057a1.jpg"
  },
  {
  name: "samgyetang",
  image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg"
  }
];


function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
    </div>
  )
}

export default App;
