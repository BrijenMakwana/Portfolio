import React,{useState,useEffect} from 'react'
import "./PublishedApps.css"
import AppItem from "../appItem/AppItem"

export default function PublishedApps(props) {
    const [publishedApps,setPublishedApps] = useState("");

    const getAllApps = () => {
         fetch(
            "https://gzsq4ssh.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%3D%3D%22apps%22%5D%7B%0A%20%20title%2C%0A%20%20%22imageUrl%22%3A%20image.asset-%3Eurl%2C%0A%20%20url%0A%7D"
          )
            .then((res) => res.json())
            .then((res) => {
                
                setPublishedApps(res.result);
            });
    }

    useEffect(()=>{
        getAllApps();
    },[])

  return (
    <div className='pa'>
    <div className='pa-texts'>
        <h1 className='pa-title'>{props.heading}</h1>
        <p className='pa-desc'>
        {props.description}
        </p>
    </div>
    <div className='pa-list'>
        {
            publishedApps && publishedApps.map((item,index)=>(
                <AppItem key={index} title={item.title} imageUrl={item.imageUrl} url={item.url}/>
            ))
        }
    </div>
</div>
  )
}
