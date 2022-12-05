import React, { useState, useMemo } from "react";

const Home = () => {
  const data = [
    {
      image: "images/food.webp",
      category: "food",
    },
    {
      image: "images/wonder.webp",
      category: "wonders",
    },
    {
      image: "images/birds.webp",
      category: "birds",
    },
    {
      image: "images/place.jpg",
      catcategory: "places",
    },
]
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function getFilteredList() {
    if (!selectedCategory || selectedCategory === "all") {
      return data;
    }
    return data.filter((item) => item.category === selectedCategory);
  }
  
  var filteredList = useMemo(getFilteredList, [selectedCategory, data]);
  
  return (
    <>
      <div className="container col-md-4 mt-3">
        <h1>Categories</h1>
        
        <div className="mt-3 d-flex justify-content-evenly">
          <button
            type="button"
            className="btn btn-dark"
            value="all"
            onClick={handleCategoryChange}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-dark"
            value="food"
            onClick={handleCategoryChange}
          >
            Food
          </button>
          <button
            type="button"
            className="btn btn-dark"
            value="wonders"
            onClick={handleCategoryChange}
          >
            Wonders
          </button>
          <button
            type="button"
            className="btn btn-dark"
            value="birds"
            onClick={handleCategoryChange}
          >
            Birds
          </button>
          <button
            type="button"
            className="btn btn-dark"
            value="places"
            onClick={handleCategoryChange}
          >
            Places
          </button>
        </div>
      </div>
      <div className="container mt-4">
        {filteredList.length === 0 ? (
          <div className="display-5 p-5 mt-5">No Result Found!</div>
        ) : (
          <div></div>
        )}
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4 g-3">
          {filteredList.map((item, key) => (
            <div className="col" key={key}>
              <img src={item.image} alt={item.category} height="250" width="250" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
