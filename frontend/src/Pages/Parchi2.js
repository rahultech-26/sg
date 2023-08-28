import React from 'react'

function Parchi2() {
  return (
    <div>
        <div style={{height:500, width:"80%", marginLeft:"10%", border:"1px solid black"}}>
            <div style={{height:100, width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
                <b style={{fontSize:19}}>Star Traders</b>
                <label>16 RAHMAT NAGAR- RATLAM , Madhya Pradesh</label>
                <label>Mob:-987654347</label>
            </div>
            <div  style={{height:30, width:"100%", display:"flex",border:"1px solid black",justifyContent:"space-between", alignItems:"center", padding:1}}>
                <div>
                    <b>GSTIN :</b>
                    <b>23GSTTI98766</b>
                </div>
                <div>
                    <b>Freight Letter :</b>
                </div>
                <div>
                    <b>License No.: 501</b>
                </div>
            </div>



            <div style={{height:140, width:"100%",display:"flex"}}>
                <div style={{height:140, width:"50%",  display:"flex", flexDirection:"column", fontSize:14, paddingLeft:10}}>
                    <label>To,</label>
                    <label>Hari Trading Co Ludhiyana,</label>
                    <label>H422/2 Daulat Market, Satna</label>
                    <label>LUDHIANA</label>
                    <label>Panjab</label>
                    <label>Contact:</label>
                </div>
                <div style={{height:140, width:"50%",textAlign:"end", paddingRight:10}}>
                <label>Date:</label>
                <b>01/July/23</b>
                </div>
            </div>

            <div style={{height:40, width:"100%",fontSize:14, paddingLeft:10}}>
                <label>Commistion Agent:</label>
                <label>Gujrat King Agro Dahod</label><br/>
                <label>Dear Sir/Madam,</label>
            </div>


            <div style={{height:25, width:"100%",fontSize:14, paddingLeft:"10%",wordSpacing:2}}>
                <label>As Per Your order we are sending goods <b>Makka Poha</b> From truck no.<b>MP09CA1090</b> </label>
            </div>

            <div style={{height:25, width:"100%",fontSize:14, paddingLeft:10,wordSpacing:2}}>
                <label>Transport <b>Ashok Roadline- RATLAM</b></label>
            </div>
            <div style={{height:20, width:"30%",fontSize:14, paddingLeft:10,wordSpacing:2, display:"flex", justifyContent:"space-between"}}>
                <label>Total Bag <b>300</b></label>
                <label>Total Weight <b>25 Qt.</b></label>
            </div>

            <div style={{height:25, width:"100%",fontSize:14, paddingLeft:10,wordSpacing:2}}>
                <label>We Requesting please recieve the goods and acknowlegment <b>Makka Poha</b> From truck no.<b>MP09CA1090</b> </label>
            </div>


        </div>
    </div>
  )
}

export default Parchi2