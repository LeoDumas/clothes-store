import LeftNavBar from "../components/LeftNavBar";
import MyItem from "../components/MyItem";
import items from '../assets/products.json';
import { categoryEnum } from "../enums/ClothesType";

const ShopAll = () => {
    return (
        <div className="flex h-full">
            <LeftNavBar />
            <div className="flex-1 flex flex-wrap p-4">
                {items.items.map((item, index) => (
                    <MyItem
                        key={index}
                        title={item.title}
                        price={item.price}
                        picture={item.picture}
                        isSoldOut={item.isSoldOut}
                        category={categoryEnum[item.category as keyof typeof categoryEnum]}
                    />
                ))}
            </div>
        </div>
    );
}

export default ShopAll;
