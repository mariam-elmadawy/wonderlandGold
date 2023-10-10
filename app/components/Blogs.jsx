export default function Blogs() {
  return (
    <div className=" mx-auto px-20 border ">
      <div className="mx-auto  p-6 lg:px-8">
        <div className="flex justify-center items-center gap-8">
          <div className="md:w-1/2 w-full">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-yellow-700 sm:text-4xl">
                History of Gold
              </h2>
              <p className="mt-2 text-lg leading-8 ">
                Let's know all about the history of gold.
              </p>
            </div>
            <p className="max-w-md font-light py-4 border-b-2 border-yellow-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              repudiandae ad quia delectus soluta dolores, tempore repellat
              aliquid earum consequatur excepturi sequi neque minus nobis
              necessitatibus eaque ratione consectetur possimus! Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Perspiciatis,
              repellat rem nulla cum hic est delectus, alias amet consectetur id
              quibusdam temporibus vel dolor ea nihil tenetur eos ab nam.
            </p>
            <div className="flex justify-start items-center gap-4 py-4">
              <img
                src="https://images.unsplash.com/photo-1592621385612-4d7129426394?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt="avatar"
                className="rounded-full w-12 h-12 bg-cover"
              />
              <h1>
                Gold Founder<span className="block text-gray-500">Mariam</span>
              </h1>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1599459183200-59c7687a0275?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1889&q=80"
            alt="img"
            className="w-1/2 h-[80vh] object-cover object-center  hidden md:block outline p-1 outline-yellow-700 shadow-lg hover:shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
