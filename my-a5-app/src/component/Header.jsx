

function Header() {
  return (
    <div className="bg-white p-4 md:p-10">

      <div className="flex flex-col gap-8 md:flex-row md:items-center">

        {/* Text */}
        <div className="w-full md:w-1/2">

          <h1 className="text-3xl font-bold md:text-5xl">
            Build Your Ideal
            <br />

            <span className="bg-linear-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-4 text-sm text-gray-600">
            Explore frontend, backend, database, and tooling options.
            Choose the best stack for your next project.
          </p>
       <div className="flex justify-center md:justify-start">
          <div className="mt-6 flex flex-wrap  gap-3">

            <button className="rounded bg-pink-600 px-4 py-3 text-white cursor-pointer hover:bg-pink-700 transition">
              Explore Technologies
            </button>

            <button className="rounded border px-4 py-3 cursor-pointer hover:bg-gray-100 transition">
              Learn More
            </button>
       </div>
          </div>

        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">

          <img
            src="./banner-stack.png"
            alt="Technology components"
            className="w-full rounded-lg"
          />

        </div>

      </div>

    </div>
  );
}

export default Header;