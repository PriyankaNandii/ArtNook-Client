import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import MyCraftList from '../Pages/MyCraftList';
import { MdArrowDropDown } from "react-icons/md";

const MyCraft = () => {
    const { user } = useAuth();
    const [item, setItem] = useState([]);
    const [displayItem, setDisplayItem] = useState([]);

    const handleFilter = (filter) => {
        if (filter === 'all') {
            setDisplayItem(item);
        } else if (filter === 'customized') {
            const customizedItem = item.filter(i => i.customization === 'Yes');
            setDisplayItem(customizedItem);
        } else if (filter === 'notcustomized') {
            const notCustomizedItem = item.filter(i => i.customization === 'No');
            setDisplayItem(notCustomizedItem);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/mycraft/${user?.email}`);
                const data = await response.json();
                setItem(data);
                setDisplayItem(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (user?.email) {
            fetchData();
        }
    }, [user]);

    return (
        <div className="md:px-10 px-2 py-5">
            <div className="text-center py-5 underline">
                <h1 className="text-2xl font-bold">My Crafts</h1>
            </div>
            <div className="flex justify-end my-6">
                <details className="dropdown">
                    <summary className="m-1 btn rounded-full bg-[#2f7dfc] text-white flex gap-2">
                        <span>Sort By</span>
                        <span className="text-2xl"><MdArrowDropDown /></span>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><button onClick={() => handleFilter("all")}>All</button></li>
                        <li><button onClick={() => handleFilter("customized")}>Customization</button></li>
                        <li><button onClick={() => handleFilter("notcustomized")}>No Customization</button></li>
                    </ul>
                </details>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-5 gap-2">
                {displayItem.map(p => (
                    <MyCraftList 
                        key={p._id} 
                        list={p} 
                        setItem={setItem} 
                        setDisplayItem={setDisplayItem} 
                    />
                ))}
            </div>
        </div>
    );
};

export default MyCraft;
