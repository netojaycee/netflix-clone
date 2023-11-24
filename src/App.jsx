import React from "react";
import logo from "./assets/images/newlogo.png";
import mobile from "./assets/images/mobile-0819.jpg";

function App() {
  return (
    <>
      <section className="w-full h-screen bg-cover flex flex-col bg-hero">
        <div className="w-[70%] mx-auto pt-7">
          <div className="flex flex-row justify-between items-center">
            <img src={logo} alt="Logo" className="w-[15%] object-cover" />

            <button className="py-2 px-9 bg-primary text-white">Sign in</button>
          </div>
        </div>
        <div className="flex flex-col text-white items-center justify-center flex-grow">
          <h1 className="text-4xl font-bold mb-2">
            Unlimited movies, TV shows, and more
          </h1>
          <p className="text-2xl font-bold">Watch anywhere. Cancel anytime.</p>
          <p className="font-bold">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="flex flex-row gap-3 mt-4">
            <input
              type="text"
              placeholder="Email address"
              className="w-[400px] bg-transparent rounded-none px-3 py-2 border border-gray-300"
            />
            <button className="py-2 px-9 bg-primary text-white">
              Get Started {">"}
            </button>
          </div>
        </div>
      </section>
      <section className="border-t-[10px] border-gray-500 bg-black h-screen">
        <div className="flex flex-row gap-5 mt-[50px] mx-auto w-[80%] justify-center">
          <div className="flex-1 bg-joker h-[500px] bg-center bg-cover"></div>

          <div className="flex-1 mt-[55px] text-white flex flex-col">
            <p className="mt-8 flex items-center">
              <span className="mr-2 rounded-full p-2 bg-primary"></span>Explore Now
            </p>
            <h1 className="text-4xl font-bold mt-1 text-primary">Joker 2023</h1>
            <p className=" mt-1 ">Now Available</p>
            <p className="mt-1 max-h-[55%]">
              lLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              at turpis ut quam convallis tincidunt vel a ex. Fusce nec urna
              euismod, varius libero et, lacinia orci. Duis eu tellus nec mauris
              imperdiet ultrices. Sed rhoncus augue et lectus facilisis, sit
              amet facilisis tortor elementum. Vestibulum ultricies mauris nec
              augue interdum, id elementum neque commodo. Integer at luctus
              arcu. Vivamus vel ex nec elit sagittis bibendum nec id sem. In hac
              habitasse platea dictumst. Sed facilisis hendrerit odio, in
              facilisis libero dignissim id. Integer scelerisque justo sed
              accumsan fermentum. Maecenas varius purus nec dolor auctor, ac
              dapibus odio finibus. Integer eget metus arcu.
            </p>
            <button className="bg-primary px-3 py-2 rounded-md mt-1 w-[26%]">
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
