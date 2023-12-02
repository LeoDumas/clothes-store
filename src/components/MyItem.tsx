import { FC } from "react";

interface MyItemProps {
  title: string;
  price: string;
  picture: string;
  isSoldOut: boolean;
  category: string;
  isNew: boolean;
}

const MyItem: FC<MyItemProps> = ({ title, price, picture, isSoldOut, category}) => {
  return (
    <article className="relative w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 mb-8 px-2">
      <img
        src={picture}
        alt={title + " - " + category}
        className={`w-full ${
          category === "BOTTOMS" || category === "ACCESSORIES" ? "sm:w-2/3 md:w-full" : "w-full"
        }`}
      />

      <div className="font-kanit p-2 text-white bg-opacity-70">
        <div className="bg-black rounded-md p-2">
          <h2 className="text-xs text-white">{title}</h2>
          <span className="text-xs text-neutral-500">{price}</span>
        </div>
      </div>

      <div className={isSoldOut ? "font-kanit absolute top-0 left-0 bg-neutral-800 py-2 px-4" : " hidden"}>
        <h3 className="text-xs text-white">SOLD OUT</h3>
      </div>
    </article>
  );
}

export default MyItem;
