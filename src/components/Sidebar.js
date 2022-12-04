import React from "react";
import { List } from "react-virtualized";
import "./stylesheets/Sidebar.css";
import { userContextData } from "../App";
import { useContext, useState } from "react";
import UserInfo from "./UserInfo";

// Constructing side bar component
const Sidebar = () => {
  const [disp, setDisp] = useState(false);
  const data = useContext(userContextData);
  const [info, setUserInfo] = useState(false);

  // Function to trigger the display of clicked user from users list for 3 Seconds
  const ShowInfo = (data) => {
    setUserInfo(data);
  };

  return (
    <>
      {disp ? (
        <div className="SideSection">
          <div className="Sidebar">
            <div className="Icon" onClick={() => setDisp()}>
              <div className="Collapse">Users List &lt;&lt;&lt;</div>
            </div>
            {/* Creating the list of users using react-Virtualized */}
            <div className="UserList">
              <List
                width={300}
                height={590}
                rowHeight={100}
                rowCount={data.length}
                // Setting what to return for each list element
                rowRenderer={({ index, style }) => { 
                  const user = data[index];
                  return (
                    <ul style={style} onClick={() => ShowInfo(user)}>
                      <div className="UserCard">
                        <h3>Name:{user.userName} </h3>
                        <h3>Age: {user.age} </h3>
                      </div>
                    </ul>
                  );
                }}
              />
            </div>
          </div>
          {/* Component for info card for present clicked user from users list */}
          <UserInfo info={info} close={ShowInfo}/> 
        </div>
      ) : (
        <div className="Sidebar2">
          <div className="Icon" onClick={() => setDisp(!disp)}>
            <div className="Collapse2">
              <b>&gt;&gt;&gt;</b>
            </div>
          </div>
          <div className="UserList2"></div>
        </div>
      )}
    </>
  );
};
export default Sidebar;
