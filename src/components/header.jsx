function header() {
    return (
        <div className="flex justify-between items-center w-full mt-5">
            <div className="w-24 h-10">
                <p>logo</p>
            </div>
            <div className="flex gap-5 text-gray-400">
                <a href="" className="hover:text-gray-300">Men</a>
                <a href="" className="hover:text-gray-300">Woman</a>
                <a href="" className="hover:text-gray-300">Kid</a>
                <a href="" className="hover:text-gray-300">About Us</a>
            </div>
            <div>
                <button className="border-orange-500 border w-24 h-10 text-orange-500 hover:text-orange-700 hover:border-orange-700">
                    Log in
                </button>
            </div>
        </div>
    )
}
export default header