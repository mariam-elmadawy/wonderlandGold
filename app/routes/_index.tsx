import type { MetaFunction } from "@remix-run/node";
import Nav from "./../components/Nav";
import Sponsers from "./../components/Sponsers";
import { Link } from "@remix-run/react";
import Blogs from "./../components/Blogs";
import Cards from "./../components/Cards";
import Promo from "./../components/Promo";
import Footer from "./../components/Footer";
export const meta: MetaFunction = () => {
  return [
    { title: "Wonderland.Gold" },
    { name: "description", content: "gold store" },
  ];
};

export default function Index() {
  return (
    <div className=" w-full h-screen bg-main-bg bg-center bg-cover ">
      <div className=" backdrop-brightness-50 w-full h-screen ">
        <Nav />
        <div className="container text-center mx-auto my-32 px-10 md:px-20 text-white flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl text-yellow-500 my-3">
            Wonderland.
            <span className="font-thin text-xl">Gold Store</span>
          </h1>
          <p className="max-w-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ullam
            illo non. Quibusdam mollitia doloribus dolore cum non officiis a
            amet, corrupti rem quo deserunt itaque iusto voluptatum cupiditate
            provident.
          </p>
          <Link to="/login" className="btn">
            Get Started
          </Link>
        </div>
      </div>
      <Sponsers />
      <Blogs />
      <Cards />
      <Promo />
      <Footer />
    </div>
  );
}
