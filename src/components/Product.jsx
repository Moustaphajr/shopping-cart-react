import React, { useRef } from "react";
import { plantList } from "../data/ShoppingList";
import Search from "./Search";
import { useState } from "react";

const Product = () => {
  const [element, setElment] = useState("");
  const [isShown, setIsShown] = useState(true);
  const array = [];
  const nom = [];

  const nomplante = useRef();
  const total = useRef();

  function handleClick() {
    setIsShown(!isShown);
  }

  function handleQuantity(e) {
    nom.push(nomplante.current.innerHTML);
    if (nom.toString().includes(e.target.id)) {
      alert("vous avez déjà ajouté ce produit");
      return;
    }

    nomplante.current.innerHTML += `<input type="checkbox" name=" ${e.target.id}"/>
    ${e.target.parentElement.parentElement.firstElementChild.textContent} 
  
      ${e.target.parentElement.parentElement.firstElementChild.nextSibling.textContent} 
      <br/>`;
    array.push(
      e.target.parentElement.parentElement.firstElementChild.nextSibling
        .textContent
    );

    total.current.textContent = `${array
      .map((el) => parseInt(el))
      .reduce((a, b) => a + b)}  £`;
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 ">
        {isShown ? (
          <div className=" mr-10 mt-10 col-span-1 w-[350px] h-[500px] bg-base-100 shadow-xl border border-base-300">
            <div className="flex justify-end mr-3 mt-3 cursor-pointer">
              <h5 onClick={handleClick}>fermer</h5>
            </div>
            <h2 className="mt-6">Panier</h2>
            <hr className="mt-3" />

            <div className="flex ml-3   mt-3">
              <span></span>
              <span className="" ref={nomplante}></span>
            </div>
            <div className="mt-3">
              total:
              <span ref={total}></span>
            </div>
          </div>
        ) : (
          <div className="mt-10 col-span-1 ">
            <h5 className="cursor-pointer" onClick={handleClick}>
              ouvir le panier
            </h5>
          </div>
        )}
        <div className="col-span-2">
          <Search element={element} setElment={setElment} />
          <div className="  grid grid-cols-3 gap-4  ">
            {plantList
              .filter((el) => el.category.toLowerCase().includes(element))
              .map((plant) => (
                <div className="card w-[250px] bg-base-100 shadow-xl">
                  <figure>
                    <img src={`${plant.cover}`} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{plant.name}</h2>

                    <p>{plant.price} £</p>
                    <div className="card-actions justify-end">
                      {/* <input
                        type="number"
                        placeholder="Type here"
                        className="input input-bordered input-secondary w-full max-w-xs"
                        onChange={handleChange}
                        value={quantity}
                      /> */}
                      <button
                        className="btn btn-primary mt-3"
                        onClick={handleQuantity}
                        id={plant.name}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
