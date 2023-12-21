import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div
        className="hero min-h-[75vh] mb-8 mt-4"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="text-2xl md:text-3xl lg:text-7xl font-bold ">
              Welcome;
            </h2>
            <p className="mt-6 text-2xl">
              Stay Organized and Productive
              <br />{" "}
              <span className="text-[#800080]">Explore our To-Do Website!</span>
            </p>
            <Link className="" to="/login">
              <button className="btn btn-primary">Let`s Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
