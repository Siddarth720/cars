import React from "react";
import NavBar from "./NavBar";

export default function Cars() {
  const places = [
      {
      carname: "Ford RAM trx",
      model_year: "2019 ",
      Price:"Rs.52.5L",
      description:
        "Ford RAM trx + 1.5L PETROL AT",
      url: "https://pbs.twimg.com/media/FQwriBNUUAAi275.jpg:large",
    },

    {
      carname: "JEEP Rubicon",
      model_year: "1999 ",
      Price: "Rs.75L",
      description:
        " JEEP Rubicon PLUS  PETROL",
      url: "https://i.ytimg.com/vi/vLH5nEatHq0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLACpUOtBtbTcqlRWKXgoj_1Fe57mA",
    },
    {
      carname: "Benz C63",
      model_year: "2000 ",
      Price: "Rs.1.5C",
      description:
        "Benz turbo engine v8",
      url:"https://www.cnet.com/a/img/resize/e9bfb16ba6b6c79d6c38e417ccd3ab8e33b8e94d/hub/2020/10/22/430d2249-3e10-422d-8e2b-dd0720920d3e/ogi-2020-mercedes-amg-c63-s-coupe-71.jpg?auto=webp&fit=crop&height=900&width=1200",
    },
    {
      carname: "Ford Mustang shelby gt500",
      model_year: "2019 ",
      Price: "Rs.88.2L",
      description:
        "Ford Mustang is a 4 seater Coupe with 4951 cc engine option ",
      url: "https://hips.hearstapps.com/hmg-prod/images/2022-ford-mustang-shelby-gt500-02-1636734552.jpg?crop=0.998xw:0.790xh;0,0.127xh&resize=1200:*",
    },
    {
      carname: "G63",
      model_year: "1990 ",
      Price: "Rs.4cr",
      description:
        "Turbo v8 ",
      url: "https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C3132/U739/IMG_18452-large.jpg",
    }
    
  
  ];

  return (
    <div>
      <NavBar />

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {places.map((place) => (
          <div className="col">
            <div className="card">
              <img src={place.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{place.carname}</h5>
                <p className="card-text">{place.model_year}</p>
                <p className="card-text">{place.Price}</p>
                <p className="card-text">{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}