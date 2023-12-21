import Container from "../components/ui/Container";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <>
      <Container>
        <div
          className="flex my-32 flex-col md:flex-row items-center 
         md:items-start"
        >
          <div className="">
            <h2 className="text-7xl font-bold w-[80%]">
              Organize Your Work
              <br /> <span className="text-[#800080]">& Life, finally</span>
            </h2>
            <p className="mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              commodi sit corrupti sint quo et dicta accusamus reprehenderit
              omnis
            </p>
            <div className="mt-6">
              {!user && (
                <button className="btn bg-[#800080] text-white">
                  Book a Service
                </button>
              )}
              <button className="btn btn-ghost">Read More</button>
            </div>
            <div className="divider"></div>
          </div>

          <div className="h-[400px] bg-red-500 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
