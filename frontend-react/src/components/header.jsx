import logo from '../logos/nxt.svg'
import { Link } from 'react-router-dom'

function header() {
    return (
        <div className="flex justify-between items-center w-full mt-5">
            <div className='flex items-center justify-center'>
                <img src={logo} alt="" />
            </div>
            <div className="flex gap-5 text-gray-400">
                <Link to={'https://youtube.com'} className="hover:text-gray-300">Men</Link>
                <Link to={'https://youtube.com'}  className="hover:text-gray-300">Woman</Link>
                <Link to={'https://youtube.com'} className="hover:text-gray-300">Kid</Link>
                <Link to={'https://youtube.com'} className="hover:text-gray-300">About Us</Link>
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