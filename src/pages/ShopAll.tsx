import { useState, FC } from "react";
import LeftNavBar from "../components/LeftNavBar";
import MyItem from "../components/MyItem";
import items from "../assets/products.json";

interface Item {
    title: string;
    price: string;
    picture: string;
    isSoldOut: boolean;
    category: string;
    isNew: boolean; // Updated property name to match the JSON
}

interface ShopAllProps {
    items: Item[];
}

const ShopAll: FC<ShopAllProps> = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const filteredItems = selectedCategory !== null
    ? items.items.filter((item: Item) => {
        if (selectedCategory === "NEW ARRIVALS") {
            return item.isNew === true;
        } else if (["TOPS", "BOTTOMS", "OUTWEARS", "ACCESSORIES"].includes(selectedCategory)) {
            return item.category === selectedCategory;
        } else {
            return true;
        }
        })
  : items.items;

    return (
        <div className="flex h-full">
            <LeftNavBar onSelectCategory={(category) => setSelectedCategory(category)} selectedCategory={selectedCategory} />
            <div className="flex-1 flex flex-wrap p-4">
                {filteredItems.map((item: Item, index: number) => (
                <MyItem
                    key={index}
                    title={item.title}
                    price={item.price}
                    picture={item.picture}
                    isSoldOut={item.isSoldOut}
                    category={item.category}
                    isNew={item.isNew}
                />
                ))}
            </div>
        </div>
    );
}

export default ShopAll;
