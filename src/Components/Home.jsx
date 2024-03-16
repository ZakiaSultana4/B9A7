import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import swal from "sweetalert";

const Home = () => {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);
  const [cart2, setCart2] = useState([]);

  useEffect(() => {
    fetch("/foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  const handleCookie = (pd) => {
    const isExists = cart.find((p) => p.id == pd.id);
    if (!isExists) {
      setCart([...cart, pd]);
    } else {
      swal({
        text: "This Reciepe is already prepering to cooked",
        icon: "error",
        button: "Close",
      });
    }
  };
  const handleRemove = (id) => {
    const removeItem = cart.filter((item) => item.id != id);
    const removeItem2 = cart.filter((item) => item.id == id);
    setCart(removeItem);
    setCart2(...removeItem2,cart2);
  };
  console.log(cart);
  console.log(cart2);
  return (
    <div>
      <div className=" text-center mt-10 mb-5">
        <h1 className=" text-4xl font-bold">Our Recipes</h1>
        <p className=" text-base">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
      </div>
      <div className=" text-center mb-5">
        <label className="input input-bordered flex  gap-2 w-[400px] text-center justify-center mx-auto items-center">
          <input
            type="text"
            className="grow rounded-xl "
            placeholder="Search Recipes"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className=" flex gap-5 flex-col md:flex-row">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} handleCookie={handleCookie} />
          ))}
        </div>
        <div className="  border border-gray-500 flex-grow">
          <p className="font-bold text-2xl text-center">
            <span className=" ">Want to cook:</span> {cart.length}
          </p>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((cp, i) => (
                  <tr className=" mx-8 ">
                    <th>{i + 1}</th>
                    <td>{cp.name}</td>
                    <td>{cp.time}</td>
                    <td>{cp.Calories}</td>
                    <button
                      onClick={(e) => handleRemove(cp.id)}
                      className="mt-2 mr-5 px-2 py-1 bg-[#6f31fa] text-white rounded-xl font-semibold"
                    >
                      Preparing
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr />
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {cart2.length ? cart2.map((cp, i) => (
                  <tr className=" mx-8 ">
                    <th>{i + 1}</th>
                    <td>{cp.name}</td>
                    <td>{cp.time}</td>
                    <td>{cp.Calories}</td>
                  </tr>
                )):""}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
