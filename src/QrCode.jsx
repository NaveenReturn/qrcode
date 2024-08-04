import { useState } from "react"
import flower from "./assets/flower-img.jpg";
import { FaGithub } from "react-icons/fa";
export const QrCode = () => {

    const [img,setImge] = useState(flower) ;
    const [loading,setLoading] = useState(false); 
    const [qrData,setQrData] = useState("")
  async function generateQr(){
        setLoading(true);
        try{
           const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}`;
           setImge(url);
        }catch(err){
           console.error("Error generating QR code ",err)
        }finally{
            setLoading(false)
        }
   }
   function dowloadQr(){
        fetch(img).then((reponse)=>reponse.blob()).then((blob)=>{
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link)
        })
   }



  return (
     <div>
        <header className="flex"> 
            <h1 className="brand-name">NAVEEN</h1>
            <div className="right-site">
              <FaGithub className="git-logo" />
              <h1>Github</h1>
            </div>
        </header>
     <div className="app-container">
          <h1>QR CODE GENERATOR</h1>
          {loading && <p>Please wait..</p>}
            {img &&  <img src={img} className="qr-code-image" height={230} />}
        <div>
            <label htmlFor="detaInput" className="input-label">
                Data For QR Code
            </label>
            <input type="text" id="detaInput" required onChange={(e)=>setQrData(e.target.value)} placeholder="Enter data for QR code" />
            <label htmlFor="sizeInput" className="input-label">
                Image Size (e.g., 150);
            </label>
            <input type="text" id="sizeInput" placeholder="Enter image size" />
            <button className="generate-button"  onClick={generateQr} >Senerate QR Code</button>
            <button className="dowload-button" onClick={dowloadQr} >Download QR Code</button>
        </div>
        <p className="footer">Designed By <a href="">Naveen</a> </p>
     </div>
     </div>
  )
}
