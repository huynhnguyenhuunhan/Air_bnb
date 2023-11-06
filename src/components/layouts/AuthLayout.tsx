import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="AuthLayout h-full">
      <div className="h-screen w-screen relative ">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            className="w-full h-full object-cover object-center"
            src="/images/authLayout.jpg"
          />
        </div>
        <div className="absolute top-20 left-20 w-[200px] z-30">
          <img src="/images/logo.png" alt="" />
        </div>
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black z-10 opacity-50 "></div> */}
        <div className="absolute w-auto p-[25px] top-1/2 left-1/2 bg-[rgba(0,0,0,.6)] z-20 -translate-x-1/2 -translate-y-1/2 rounded-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
