import { NavLink } from "react-router-dom";

function Bands({ bands, imgArr }) {
  console.log("img Arr", imgArr[0]);

  return (
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
              <NavLink key={i} to={"/bands/" + item.name}>
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
        <div className="w-[600px] m-auto pt-[10rem] ">
          <img
            src="https://parade.com/.image/t_share/MTkwNTgxMjYyNzA0NzE1NjQ0/joan-jett-runaways.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Bands;
