import { Outlet, Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className=" bg-gray-800 bg-[url('/images/homePicture.jpeg')] bg-cover bg-center text-white h-screen flex items-center justify-center font-kanit font-semibold">
            <div className=" flex flex-col text-center">
                <span className=" text-2xl my-2">CLOTHINGS</span>
                <Link to="shop-all" className=" text-xs underline underline-offset-2 my-2">SHOP THE COLLECTION</Link>
            </div>

            <Outlet/>
        </div>
    )
}

export default HomePage