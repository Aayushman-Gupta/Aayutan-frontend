import React, { useState } from 'react';
import data from './tempData.json';

export default function ChatList() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredContacts = data.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='w-fit border-s-orange-100 m-5'>
            <div className='chatHeader'>
                {/* <img src="" alt="DocMed" className='logo'/> */}
                <div className='chatHeaderRight flex bg-blue-200 w-fit p-3 rounded-3xl'>
                    <img src="../../src/assets/search.png" alt="Search" className='searchIcon h-5 mr-2'/>
                    <input 
                        type="text" 
                        placeholder="Search or start new chat" 
                        className='searchBar border-none bg-transparent focus:outline-none'
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            <div className='chatList'>
                {
                    filteredContacts.map(contact => (
                        <div key={contact.id} className='chatListContainer flex items-center p-3 hover:bg-blue-100 rounded-3xl'>
                            <img src="../../src/assets/doctor.png" alt="" className='profilePic h-7 rounded-full bg-blue-400'/>
                            <div className='chatListRight ml-3'>
                                <h3 className='chatListUsername'>{contact.name}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}