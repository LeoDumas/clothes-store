import LeftNavBar from "../components/LeftNavBar"

const ShopAll = () => {
  return (
    <div className="flex">
        <LeftNavBar />
        <div className="flex-1 flex flex-col p-4 text-white">
            <h1 className="text-2xl mb-4">Main Content</h1>
            <p>Photos, prices ...</p>
        </div>
    </div>
  )
}

export default ShopAll