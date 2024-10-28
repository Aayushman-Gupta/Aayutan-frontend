import React, { useContext, useState } from "react";
import data from "../pages/Chat/tempData.json";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton,Stack } from "@mui/material";
import userContext from "../context/userContext/userContext";

export default function ChatList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts,setContacts]=useState([])
  const context=useContext(userContext)
  const {setChatMemberName,chatMember}=context

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  

  const filteredContacts = contacts.filter((contact) =>
    contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit=async (e)=>{
    e.preventDefault()
    console.log(searchTerm)
    await setChatMemberName(searchTerm)
    console.log(chatMember)
    setContacts((prevContacts) => [...prevContacts, searchTerm]);

  }

  return (
    <div className="w-fit border-s-orange-100 m-5">
      <div className="chatHeader">
        {/* <img src="" alt="DocMed" className='logo'/> */}
        <div className="chatHeaderRight flex bg-blue-200 w-fit p-3 rounded-3xl">
          
          <form
            onSubmit={handleSubmit}
             
          >
            <Stack
            direction="row"
            alignItems="center"
            spacing={1}
          >
            <input
              type="text"
              placeholder="Search or start new chat"
              className="searchBar border-none bg-transparent focus:outline-none"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <IconButton
              type='submit'
              sx={{
                backgroundColor: "#2a9cc9",
                height: "100%", // Match input height
                width: "48px", // Fixed width for button
              }}
            >
              <SearchIcon/>
            </IconButton>
            </Stack>
            

          </form>
        </div>
      </div>

      <div className="chatList">
        {contacts && filteredContacts.map((contact) => (
          <div
            key={contact}
            className="chatListContainer flex items-center p-3 hover:bg-blue-100 rounded-3xl"
          >
            <img
              src="../../src/assets/doctor.png"
              alt=""
              className="profilePic h-7 rounded-full bg-blue-400"
            />
            <div className="chatListRight ml-3">
              <h3 className="chatListUsername">{contact}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
