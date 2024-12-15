import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className='bg-cyan-300 p-3 sticky top-0 z-50'>
      <ul className=' flex gap-20 justify-center font-bold cursor-pointer '>
        <li className='hover:bg-sky-700 rounded-lg'><Link to="/home">HOME</Link></li>
        <li className='hover:bg-sky-700 rounded-md'><Link to="/about">ABOUT</Link></li>
        <li className='hover:bg-sky-700 rounded-md'><Link to="/login">LOGIN</Link></li>
        <li className='hover:bg-sky-700 rounded-md'><Link to="/moreInfo">MORE INFO</Link></li>
      </ul>
    </nav>
    
   
   
   </>
  );
};

export default Navbar;