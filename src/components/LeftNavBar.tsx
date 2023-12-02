import { useState, FC } from "react";
import { Link } from "react-router-dom";

interface NavItemProps {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  subItems?: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const NavItem: FC<NavItemProps> = ({ title, isOpen, onClick, subItems, selectedCategory, onSelectCategory }) => (
  <li className="my-2">
    <a
      className={`text-xs block w-10/12 items-center transition-colors duration-300 ease-out hover:text-gray-500 hover:cursor-pointer ${selectedCategory === title ? 'text-gray-500' : ''}`}
      onClick={() => {
        onSelectCategory(title);
        onClick();
      }}
    >
      {isOpen ? `${title} -` : `${title} +`}
    </a>
    {subItems && (
      <ul className={`pl-3 ${isOpen ? 'border-l border-gray-800' : 'hidden'}`} style={{ listStyle: 'none', marginLeft: '0' }}>
        {subItems.map((item, index) => (
          <li key={index} className="my-2">
            <a
              href="#"
              className={`text-3xs block w-10/12 items-center transition-colors duration-300 ease-out hover:text-gray-500 hover:cursor-pointer ${selectedCategory === item ? 'text-gray-500' : ''}`}
              onClick={() => onSelectCategory(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    )}
  </li>
);

interface LeftNavBarProps {
  onSelectCategory: (category: string | null) => void;
  selectedCategory: string | null;
}

const LeftNavBar: FC<LeftNavBarProps> = ({ onSelectCategory, selectedCategory }) => {
  const [shopOpen, setShopOpen] = useState<boolean>(false);
  const [collectionsOpen, setCollectionsOpen] = useState<boolean>(false);
  const [termsOpen, setTermsOpen] = useState<boolean>(false);

  const handleClick = (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    setter((prev) => !prev);
  };

  return (
    <header className="flex flex-col h-screen w-64 bg-black text-white font-kanit">
      <div className="flex flex-col justify-between h-full p-5">
        <div className="pt-8">
          <Link to="/clothes-store/">
            <h1 className="text-xl font-semibold mb-5">CLOTHES-STORE</h1>
          </Link>
          <nav>
            <ul>
              <NavItem
                title="SHOP"
                isOpen={shopOpen}
                onClick={handleClick(setShopOpen)}
                subItems={["NEW ARRIVALS", "ALL", "TOPS", "BOTTOMS", "OUTWEARS", "ACCESSORIES"]}
                selectedCategory={selectedCategory}
                onSelectCategory={onSelectCategory}
              />
              <li className="my-2">
                <a className="text-xs block w-10/12 items-center transition-colors duration-300 ease-out hover:text-gray-500 hover:cursor-pointer" href="/">
                  CAMPAIGN TOKYO
                </a>
              </li>
              <li className="my-2">
                <a className="text-xs block w-10/12 items-center transition-colors duration-300 ease-out hover:text-gray-500 hover:cursor-pointer" href="/">
                  LOOKBOOK 2023
                </a>
              </li>
              <NavItem
                title="COLLECTIONS"
                isOpen={collectionsOpen}
                onClick={handleClick(setCollectionsOpen)}
                subItems={["2022", "2021", "2020", "2019", "2018", "2017"]}
                selectedCategory={selectedCategory}
                onSelectCategory={onSelectCategory}
              />
              <li className="my-2">
                <a className="text-xs block w-10/12 items-center transition-colors duration-300 ease-out hover:text-gray-500 hover:cursor-pointer" href="/">
                  CONTACT US
                </a>
              </li>
              <li className="my-2">
                <a className="text-xs block w-10/12 items-center transition-colors duration-300 ease-out hover:text-gray-500 hover:cursor-pointer" href="/">
                  SIGN IN
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-auto">
          <ul>
            <NavItem
              title="TERMS"
              isOpen={termsOpen}
              onClick={handleClick(setTermsOpen)}
              subItems={["CONDITIONS", "LEGAL NOTICES", "RETURNS & EXCHANGES"]}
              selectedCategory={selectedCategory}
              onSelectCategory={onSelectCategory}
            />
          </ul>
          <a href="https://www.instagram.com/arnodefrance/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 invert text-white hover:fill-current hover:text-gray-500 transition-colors duration-300 ease-out">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default LeftNavBar;
