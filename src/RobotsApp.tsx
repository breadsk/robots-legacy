
import { useEffect , useState } from 'react';

import { NavBar , CardComponent } from './pages/robotsComponents';

import { getRobots } from './actions/get-robots.actions';
         
import type { robotsProps } from './interfaces/robots.interfaces';

import 'bootstrap/dist/css/bootstrap.min.css'

export const RobotsApp = () => {


  const [ robots , setRobots ] = useState<robotsProps[]>([]);
  const [ allRobots , setAllRobots ] = useState<robotsProps[]>([]);

  useEffect(()=> {

    const fetchData = async() => {
      try{

        const data = await getRobots();
        const robots = data.robots;
        setRobots(robots);
        setAllRobots(robots);

      }catch(error){
        console.log(`Error en fetchin data: ${ error }`);
      }
    }

    fetchData();

  },[]);

  const handleSearch = () => {
    console.log("En onClick");
  }

  const handleChange = () => {
    console.log("En onChange");
  }

  const handleSearchKeyDown = () => {
    console.log("En onKeyDown");
  }

  
  return (
    <div className="container-fluid">      
      <div className="row">
        <NavBar handleSearch = { handleSearch } handleChange = { handleChange  } handleSearchKeyDown = { handleSearchKeyDown } />
          {
              robots.map( (robot)=> {
                  return (
                      <CardComponent 
                          key={robot.id}
                          robot={robot} />
                  )
              })
          }
      </div>
    </div>
  )
}
