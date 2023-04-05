import SchContext from "./schContext";
import { useState } from "react";

const SchState=(props)=>{

  const host="http://localhost:8001";

    const schInitial=[]
      const [schs,setSchs]=useState(schInitial)

      //these are the functions for our buttons which we imported from the awesome icon and these function will edit my database
      const getsch=async ()=>{
        const response = await fetch(`${host}/api/sch/fetchallsch`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('token')
          }
        });
        // TODO API CALL
        const json=await response.json()
        console.log(json)
        setSchs(json);
      };

      //code for adding notes in the database
      const addSch=async (title,description,day,locationName,locationStats,timestr,timeend)=>{
        //API call
        const response = await fetch(`${host}/api/sch/addsch`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('token')
          },
          body: JSON.stringify({title,description,day,locationName,locationStats,timestr,timeend})
        });
        // TODO API CALL
        const sch=await response.json();
        setSchs(schs.concat(sch))
      }

      // DELETE NOTE
      const deleteSch = async (id)=>{
        // API call
        const response = await fetch(`${host}/api/sch/deletesch/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('token')
          }
        });
        const json= response.json();
        console.log(json)

        //TODO API CALL
        console.log("deleting the node with id : " + id);
        const newSch= schs.filter((sch)=>{return sch._id !== id})
        setSchs(newSch)
      }

      const editSch=async (id,title,description,day,locationName,locationStats,timestr,timeend)=>{
        //API Call
        const response = await fetch(`${host}/api/sch/updatesch/${id}`, {    // here the data is coming from the given url which is saved in database
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'auth-token':localStorage.getItem('token')
          },
          body: JSON.stringify({title,description,day,locationName,locationStats,timestr,timeend})    // here data is coming in form of string which can be iterated and edited by using loops
        });
        const json= response.json();

        let newSch=JSON.parse(JSON.stringify(schs))
        // logic in client
        for (let index = 0; index < newSch.length; index++) {
          const element = newSch[index];
          if(element._id===id){
            newSch[index].title=title;
            newSch[index].description=description;
            newSch[index].day=day;
            newSch[index].locationName=locationName;
            newSch[index].locationStats=locationStats;
            newSch[index].timestr=timestr
            newSch[index].timeend=timeend;

            break;
          }
        }
        setSchs(newSch);
      };

    return(
        <SchContext.Provider value={{schs,addSch,deleteSch,editSch,getsch}}>
            {props.children}
        </SchContext.Provider>
    )
}
export default SchState; 