'use client';
import { useState } from "react";
import { getUrl } from "@/utils/urls";
import Btn from "@/components/Btn/btn.component";

type propsType = {
    token: string | null
}

export default function AddUser(props: propsType): JSX.Element {

    const [searchUsername, setSearchUsername] = useState<string>("");
    const [data, setData] = useState([]);

    const handleSearch = () => {
        if(searchUsername === "") {
            return;
        }
        console.log(props.token);
        fetch(`${getUrl()}/search-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${props.token}`
            },
            body: JSON.stringify({
                searchUsername
            })
        })
    }

    return (
        <div className="relative flex my-auto">
            <input onChange={(e) => setSearchUsername(e.target.value)} className='my-auto w-28 h-6 text-black bg-slate-200 rounded-lg p-3 placeholder:text-black mx-1' type="text" placeholder='Search user' />
            <Btn onClick={handleSearch} customTW='bg-gray-50 dark:bg-gray-700 hover:bg-pink-800'>search</Btn>
            <div className='absolute top-8 -right-18 flex flex-col justify-center w-80 max-h-96 bg-white overflow-y-scroll z-10 rounded-md' style={{scrollbarWidth: 'none', display: searchUsername !== "" ? 'block' : 'none'}}>
                {
                    [...Array(1)].map((_, index): JSX.Element => {
                        return(
                            <div key={index} className="flex justify-center m-auto text-center my-2 hover:bg-slate-200 rounded-md'">
                                <div className="mx-1 "><img className="w-10 h-10 rounded-full" src="https://picsum.photos/200" alt="" /></div>
                                <div className="mx-1 self-center">username</div>
                                <div className="mx-1"><Btn customTW='bg-gray-50 dark:bg-gray-700 hover:bg-pink-800'>Send Friend Request</Btn></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}