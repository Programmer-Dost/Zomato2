import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import menuData from "../data/menuData";

function MenuPage() {
  // const smallCakes = menuData.smallCakes || [];
  // const largeCakes = menuData.largeCakes || [];
  // const desserts = menuData.desserts || [];
  // const pastries = menuData.pastries || [];

  return (
    <div>
      <Head>
        <title>Restaurant Menu</title>
      </Head>
      <h1 className="text-gray-600  font-semibold mb-4 mx-12 mt-4 text-lg md:text-2xl lg:text-3xl md:mt-24 sm:mt-12">
        Restaurant Menu
      </h1>
      <span className="mx-12 text-gray-700">Total menu items 40</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          key={0}
          className="rounded-2xl p-4 shadow-2xl shadow-violet-500/30 m-8 opacity-100"
        >
          <Link href="/dishes/cakes/large">
            <Image
              src="http://res.cloudinary.com/dkv7cimyy/image/upload/v1704207154/Zomato%202.0/dishes/cakes/LargeCakes/3.jpg"
              alt="Large Cakes"
              width={400}
              height={400}
              className="w-full h-36 object-cover mb-2"
            />
            <h2 className="text-xl text-violet-700 font-semibold mb-2">
              Large Cakes
            </h2>
          </Link>
          <p className="text-gray-600">Cakes for bigger parties</p>
          <p className="text-gray-600">$17.99 onwards</p>
          <div className="mt-2 flex justify-between items-center"></div>
        </div>

        {/* //Small cakes */}

        <div
          key={1}
          className=" rounded-xl p-4 shadow-2xl shadow-violet-500/30 m-8 opacity-100"
        >
          <Link href="/dishes/cakes/small">
            <Image
              src="http://res.cloudinary.com/dkv7cimyy/image/upload/v1704206617/Zomato%202.0/dishes/cakes/SmallCakes/1.jpg"
              alt="Small sized cakes"
              className="w-full h-36 object-cover mb-2"
              width={400}
              height={400}
            />
            <h2 className="text-xl text-violet-700 font-semibold mb-2">
              Small Cakes
            </h2>
          </Link>
          <p className="text-gray-600">Cakes for small gatherings</p>
          <p className="text-gray-600">$3.99 onwards</p>
          <div className="mt-2 flex justify-between items-center"></div>
        </div>

        {/* //Pastries*/}

        <div
          key={2}
          className=" rounded-xl p-4 shadow-2xl shadow-violet-500/30 m-8 opacity-100"
        >
          <Link href="/dishes/pastries">
            <Image
              src="http://res.cloudinary.com/dkv7cimyy/image/upload/v1704206412/Zomato%202.0/dishes/pastries/6.jpg"
              alt="Pastries"
              className="w-full h-36 object-cover mb-2"
              width={400}
              height={400}
            />
            <h2 className="text-xl text-violet-700 font-semibold mb-2">
              Pastries
            </h2>
          </Link>
          <p className="text-gray-600">Pastries for everyone</p>
          <p className="text-gray-600">$3.99 onwards</p>
          <div className="mt-2 flex justify-between items-center"></div>
        </div>

        {/* //Desserts */}

        <div
          key={3}
          className=" rounded-xl p-4 shadow-2xl shadow-violet-500/30 m-8 opacity-100"
        >
          <Link href="/dishes/desserts">
            <Image
              src="http://res.cloudinary.com/dkv7cimyy/image/upload/v1704205907/Zomato%202.0/dishes/desserts/4.jpg"
              alt="Desserts"
              className="w-full h-36 object-cover mb-2"
              width={400}
              height={400}
            />
            <h2 className="text-xl text-violet-700 font-semibold mb-2">
              Desserts
            </h2>
          </Link>
          <p className="text-gray-600">Desserts of all types</p>
          <p className="text-gray-600">$4.99 onwards</p>
          <div className="mt-2 flex justify-between items-center"></div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
