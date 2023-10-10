import { Link } from "@remix-run/react";

const sponsersData = [
  {
    id: 1,
    name: "Lazurdi",
    details:
      "Discover L'azurde luxury diamond & gold jewelry designs. Pick & shop your favorites pieces.",
  },
  {
    id: 2,
    name: "EGYPT Gold",
    details:
      "Egypt's top premium brands that cater to all industry sectors, from gold and diamond jewelry and precious metal!",
  },
  {
    id: 3,
    name: "King Gold",
    details:
      "Lightweight and Elegant Design, these rings from King Gold are crafted from 18-carat gold and available at all our authorized distributors in Egypt.",
  },
];
export default function Sponsers() {
  return (
    <div className="container px-20 mx-auto my-10 ">
      <h1 className="text-3xl text-center">
        Main Gold
        <span className="font-bold uppercase block text-yellow-700">
          Sponsers
        </span>
      </h1>
      <div className="grid md:grid-cols-3 grid-col-1 gap-4 my-8">
        {sponsersData.map((sponser) => {
          return (
            <div
              className="bg-stone-300 rounded p-4 hover:scale-105 transition duration-300 flex flex-col justify-center gap-2"
              key={sponser.id}
            >
              <h1 className="text-2xl font-semibold">{sponser.name}</h1>
              <p className="text-stone-700 font-light max-w-lg">
                {sponser.details}
              </p>
              <Link to={`/${sponser.id}`} className="btn-light mx-auto">
                More details &rarr;
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
