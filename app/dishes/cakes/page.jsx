// pages/menu.js
import Head from "next/head";
import Link from "next/link";
import menuData from "../../data/menuData";

function MenuPage() {
  // const desserts = menuData.desserts; // Access the desserts category
  const smallCakes = menuData.smallCakes || [];
  const largeCakes = menuData.largeCakes || [];
  // console.log(menuData);

 
  return (
    <div>
      <Head>
        <title>Restaurant Menu</title>
      </Head>
      <h1 className="text-3xl font-semibold mb-4 mx-12 text-violet-700">
        Restaurant Menu for Cakes
      </h1>
      <span className="mx-12 text-gray-700">
        Total menu items {smallCakes.length + largeCakes.length}
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          key={0}
          className="bg-white rounded-xl p-4 shadow-2xl shadow-cyan-500/50 m-8 opacity-100"
        >
            <a href="/dishes/cakes/large">
          <img
            src={
              "https://i.ibb.co/nMRxmnd/photo-1621792888014-baa25efa7c7e-crop-faces-edges-cs-tinysrgb-fit-crop-fm-jpg-ixid-M3wx-Mj-A3f-DB8-M.jpg"
            }
            alt="Large Cakes"
            className="w-full h-24 object-cover mb-2"
          />
          <h2 className="text-xl text-violet-700 font-semibold mb-2">
            Large Cakes
          </h2>
          </a>
          <p className="text-gray-600">Cakes for bigger parties</p>
          <p className="text-gray-600">$17.99 onwards</p>
          <div className="mt-2 flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="text-blue-500 font-bold">-</button>
              <span>0</span>
              <button className="text-blue-500 font-bold">+</button>
            </div>
          </div>
        </div>

        {/* //Small cakes */}

        <div
          key={1}
          className="bg-white rounded-xl p-4 shadow-2xl shadow-cyan-500/50 m-8 opacity-100"
        >
            <a href="/dishes/cakes/small">
          <img
            src={"item.image"}
            alt="Small sized cakes"
            className="w-full h-24 object-cover mb-2"
          />
          <h2 className="text-xl text-violet-700 font-semibold mb-2">
            Small sized Cakes
          </h2>
          </a>
          <p className="text-gray-600">Cakes for small gatherings</p>
          <p className="text-gray-600">$3.99 onwards</p>
          <div className="mt-2 flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="text-blue-500 font-bold">-</button>
              <span>0</span>
              <button className="text-blue-500 font-bold">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
