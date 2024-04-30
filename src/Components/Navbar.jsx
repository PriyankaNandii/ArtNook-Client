import { Link, NavLink } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";

// const Menus = () => {
//     const links = ['allcrafts', 'addcraft', 'My Art & Craft Item', 'blog'];
//     return (
//         <>
//             {
//                 links.map(link => <li key={link}>
//                     <Link to={`/${link}`} className="btn btn-sm  btn-ghost">{link}</Link>
//                 </li>)
//             }
//         </>
//     )
// }
const NavBar = () => {
    
    // const { logout, user } = useAuth();
    // console.log(user);
    return (
        <>
            <div className="navbar bg-[#f4f4f4]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink
  to='/'
  className={({ isActive }) => isActive ? 'p-0.5 px-5 py-2 border-[#ff00c6] border-b-2 font-bold text-black' : 'font-bold'}
  ClassName='group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] text-black'
> Home
</NavLink>
      
      <Link to='/register' className="relative  items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
<span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#af2a89] rounded-lg blur-md ease"></span>
<span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
<span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#af2a89] rounded-full blur-md"></span>
<span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
</span>
<span className="relative text-white">Register</span>
</Link>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost font-bold normal-case text-3xl text-[#2f7dfc]">ArtNook</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 justify-center text-center items-center gap-3">
                    <NavLink
  to='/'
  className={({ isActive }) => isActive ? 'p-0.5 px-5 py-2 border-[#2f7dfc] border-b-2 font-bold text-black' : ' text-black'}
  ClassName='group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] '
> Home
</NavLink>


  <NavLink
  to='/allcrafts'
  className={({ isActive }) => isActive ? 'p-0.5 px-5 py-2 border-[#2f7dfc] border-b-2 font-bold text-black' : ' text-black'}
  ClassName='group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] '
> All Art & craft Items
</NavLink>



<NavLink
  to='/addcraft'
  className={({ isActive }) => isActive ? 'p-0.5 px-5 py-2 border-[#2f7dfc] border-b-2 font-bold text-black' : ' text-black'}
  ClassName='group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] '
> Add Craft Item
</NavLink>

<NavLink
  to='/mycraft'
  className={({ isActive }) => isActive ? 'p-0.5 px-5 py-2 border-[#2f7dfc] border-b-2 font-bold text-black' : ' text-black'}
  ClassName='group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] '
> My List
</NavLink>
                    </ul>
                </div>



                {/* <div className="navbar-end">

                    {
                        user? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL || "https://i.ibb.co/y0yrnYQ/1681283571946.jpg" } />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user?.displayName||'user name not found'}</button>

                                </li>
                                <li>
                                    <button
                                        onClick={logout}
                                        className="btn btn-sm  btn-ghost">Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div> */}
            </div>
        </>
    );
};

export default NavBar;