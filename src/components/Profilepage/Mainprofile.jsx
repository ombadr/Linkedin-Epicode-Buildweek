import Profile from "./Profile"
import Analisi from "./Analisi"
import Risorse from "./Risorse"
import Attivita from "./Attivita"
import Formazione from "./Formazione"
import Interessi from "./Interessi"
import { Fetchprofilo,FetchProfiles } from "../Fetchprofilo"
import { useParams } from "react-router-dom"
import SideBar from "./SideBar"
import { Col } from "react-bootstrap"
import { useEffect } from "react"
import { useState } from "react"





function  Mainprofile(){
    const profilopersonale = Fetchprofilo()
    

    const [isLoading,setisLoading]=useState(true)
    const [profilo,setprofilo]=useState(null)
    const params=useParams().id
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData=await FetchProfiles(params)
        setprofilo(profileData)
        setisLoading(false);
      } catch (error) {
        console.log("Errore nella fetch: " + error);
        setisLoading(false);
      }
    };

    fetchData();
  }, [params]);

    if (isLoading) {
        return <p>Loading...</p>;
      }

    if(profilopersonale && profilopersonale.profile && profilo)
    {
        const idpersonale=profilopersonale.profile._id

        return(
            <>
             {params===idpersonale? (
             
                 <>
                     <Col md={9}>
                         <Profile isMe={true} profilo={profilo}/>
                         <Analisi />
                         <Risorse />
                         <Attivita isMe={true} profilo={profilo}/>
                         <Formazione isMe={true}/>
                         <Interessi isMe={true} />
                     </Col>
                     <Col md={3}>
                     <SideBar isMe={true}/>
                     </Col>
                 </>
             ):(
                <>
                <Col md={9}>
                <Profile isMe={false} profilo={profilo}/>
                <Attivita isMe={false} profilo={profilo}/>
                <Formazione isMe={false}/>
                <Interessi isMe={false}/>
                </Col>
                     <Col md={3}>
                     <SideBar isMe={false}/>
                </Col>
            </>
             )}
    
            </>
        )
    }
    
}

export default Mainprofile