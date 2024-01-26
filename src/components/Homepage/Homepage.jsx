
import "./Homepage.css"
import mattia from "./assets/mattia.gif"
import giuseppe from "./assets/giuseppe.gif"
import davide from "./assets/davide.gif"
import salvatore from "./assets/salvatore.png"
import vincenzo from "./assets/vincenzo.gif"
import omar from "./assets/omar.gif"
import { Link } from "react-bootstrap-icons"

import sfondo from "./assets/sfondo.jpg"
import { useNavigate } from "react-router-dom"

const Giuseppe="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmOWEzN2JkNWQxMjAwMTg5MGQ0NWMiLCJpYXQiOjE3MDYwMDcwOTUsImV4cCI6MTcwNzIxNjY5NX0.2qRmM_CYazxx8y1MJej_ce3QSwMxl5Z7A5TbBdWiY78"
const Mattia="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMzE0MTYwMGJlMTAwMTgzYTg2OGIiLCJpYXQiOjE3MDU5MTQ2ODksImV4cCI6MTcwNzEyNDI4OX0.4wuc8BPQtnbrrjR2fr4os_GS-UinPRJDLkLLihyMLtE"
const Omar="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlMzI1OTYwMGJlMTAwMTgzYTg2OGMiLCJpYXQiOjE3MDU5MTQ5NjksImV4cCI6MTcwNzEyNDU2OX0.9Y6ciExDqr0o5TEUCuDS0Q_mBD8HGwe-f0kJcEZqyIQ"
const Vincenzo="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlNzc5MDYwMGJlMTAwMTgzYTg2YzgiLCJpYXQiOjE3MDYyNzUyODEsImV4cCI6MTcwNzQ4NDg4MX0.YeoSwL7JA2l5tWQFYmQEOFSoXQsfgNt7lKpNwQ-L9hw"
const Davide="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0Mzk5YWZlMDMxZTAwMTliYTFkYTkiLCJpYXQiOjE3MDYyNjU5ODcsImV4cCI6MTcwNzQ3NTU4N30.tFw_iDedrDzjprD6nFOBQ9_EeHTR91xOT-Htmj_whSk"
const Salvatore="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIzYWVhYzMxYTczZjAwMTlkNWM4YmIiLCJpYXQiOjE3MDYyNzQ0NzYsImV4cCI6MTcwNzQ4NDA3Nn0.cmMPq9Q-8jUENITJBONq0zSq2bn0U6GlYoilC-2XfBM"

export let idhomepage







const Homepage = () => {
    const navigate = useNavigate();
    function handleclick(id){
        idhomepage=id
        console.log(idhomepage)
        navigate("/home");
        
        

    }
    return (
      <div className="homepage">
        <div className="img-container">
          
              <img src={giuseppe} className="imgprofilo giuseppe" alt=""  onClick={()=>{
                handleclick(Giuseppe)
              }} />
          
          <div className="overlaygiuseppe text-danger overlay"><h1>GIUSEPPE</h1></div>
        </div>
        <div className="img-container">
          <img src={mattia} className="imgprofilo mattia" alt="" onClick={()=>{
            handleclick(Mattia)
          }}/>
          <div className="overlaymattia text-danger overlay"><h1>MATTIA</h1></div>
        </div>
        <div className="img-container">
          <img src={davide} className="imgprofilo davide" alt="" onClick={()=>{
            handleclick(Davide)
          }}/>
          <div className="overlaydavide text-danger overlay"><h1>DAVIDE</h1></div>
        </div>
        <div className="img-container">
          <img src={salvatore} className="imgprofilo salvatore " alt="" onClick={()=>{
            handleclick(Salvatore)
          }}/>
          <div className="overlaysalvatore text-danger overlay"><h1>SALVATORE</h1></div>
        </div>
        <div className="img-container">
          <img src={omar} className="imgprofilo omar" alt="" onClick={()=>{
            handleclick(Omar)
          }}/>
          <div className="overlayomar text-danger overlay"><h1>OMAR</h1></div>
        </div>
        <div className="img-container">
          <img src={vincenzo} className="imgprofilo vincenzo" alt=""
          onClick={()=>{
            handleclick(Vincenzo)
          }} />
          <div className="overlayvincenzo text-danger overlay"><h1>VINCENZO</h1></div>
        </div>
      </div>
    );
  }
export default Homepage