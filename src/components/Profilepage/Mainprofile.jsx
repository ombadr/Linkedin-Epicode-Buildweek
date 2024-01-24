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
import Experiences from "./Experiences"





function  Mainprofile(){
    const profilopersonale = Fetchprofilo()
    const [isLoading,setisLoading]=useState(true)
    const [profilo,setprofilo]=useState(null)
    const params=useParams().id
    const [redofetch,setredofetch]=useState(false)
  


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
    setredofetch(false)
  }, [params,redofetch]);


  const handleRedo=()=>{
    setredofetch(true)
  }

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
                         <Profile isMe={true} profilo={profilo} handleRedo={handleRedo}/>
                         <Analisi />
                         <Risorse />
                         <Attivita isMe={true} profilo={profilo}/>
                        <Experiences/>
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
                <Profile isMe={false} profilo={profilo} handleRedo={handleRedo}/>
                <Attivita isMe={false} profilo={profilo}/>
                <Experiences/>
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