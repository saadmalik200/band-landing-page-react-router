import { useParams, NavLink } from "react-router-dom";

function SingleBand({ bands }) {
  const { name } = useParams();
  const band = bands.filter((item) => item.name === name)[0];

  return (
    <>
      <div className="bg-black text-white h-screen">
        <div>
          <div className="flex justify-center pt-5 mb-5">
            <NavLink to="/">
              <h1 className="text-[3.5rem]">BLACK JAL PARI</h1>
            </NavLink>
          </div>
          <ul className="flex justify-center gap-[5rem] mt-[3rem]">
            {bands.map((item, i) => {
              return (
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "purple",
                          fontWeight: "bold",
                        }
                      : undefined
                  }
                  key={i}
                  to={"/bands/" + item.name}
                >
                  <li>
                    <p className="text-center text-[2rem] mt-3">
                      {" "}
                      {item.name.toUpperCase()}
                    </p>
                  </li>
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div className="w-[600px]  m-auto pt-[10rem] ">
          <img className="text-center" src={band.image} alt="" />
        </div>
      </div>
    </>
  );
}

export default SingleBand;
