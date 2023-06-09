//import "./list.css";
import React, { useEffect } from "react";

const GetTasks = function() {

  const url = 'http://localhost:5001/'

  const [toDos, setToDos] = React.useState([]);

  var finalData = [];
 
  const fetchToDos = async () => {

    try {

      const response = await fetch(url);
      const data = await response.json();
      setToDos(data);

    } catch (error) {

        return [];

    } 

  };

useEffect(() => {

  fetchToDos()

}, [])


const data2 = JSON.stringify(toDos);
finalData = JSON.parse(data2);

return (finalData);

}

export default GetTasks;
