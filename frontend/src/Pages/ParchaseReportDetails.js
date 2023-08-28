import React from 'react'

function ParchaseReportDetails() {
  return (
    <div>
        <div style={{height:600, width:"80%", marginLeft:"3%"}}>
        <div style={{height:100, width:"100%",display:"flex", flexDirection:"column", alignItems:"center", fontSize:20, justifyContent:"center"}}>
            <b>Sadhbhawnaa Foods & Flour Mill</b>
            <b>किसान खरीदी </b>
        </div>
        <table className='table table-bordered'>
            <thead style={{height:40, textAlign:"center",border:"1px solid black"}}>
                <th style={{borderRight:"1px solid black"}}>Sr No.</th>
                <th style={{borderRight:"1px solid black"}}>किसान</th>
                <th style={{borderRight:"1px solid black"}}>पुस्तिक क्र.</th>
                <th style={{borderRight:"1px solid black"}}>बोरे</th>
                <th style={{borderRight:"1px solid black"}}>वजन</th>
                <th style={{borderRight:"1px solid black"}}>दर</th>
                <th style={{borderRight:"1px solid black"}}>मूल्य</th>
                <th style={{borderRight:"1px solid black"}}>हिम्माली</th>
                <th style={{borderRight:"1px solid black"}}>तुलाई</th>
                <th style={{borderRight:"1px solid black"}}>भुगतान राशि</th>
            </thead>

            <tbody style={{borderColor:"black"}}>
                <tr style={{ textAlign:"center"}}>
                <td>1</td>
                <td>किसान</td>
                <td>पुस्तिक क्र.</td>
                <td>बोरे</td>
                <td>वजन</td>
                <td>दर</td>
                <td>मूल्य</td>
                <td>हिम्माली</td>
                <td>तुलाई</td>
                <td>भुगतान राशि</td>
                </tr>
                <tr style={{ textAlign:"center"}}>
                <td>1</td>
                <td>किसान</td>
                <td>पुस्तिक क्र.</td>
                <td>बोरे</td>
                <td>वजन</td>
                <td>दर</td>
                <td>मूल्य</td>
                <td>हिम्माली</td>
                <td>तुलाई</td>
                <td>भुगतान राशि</td>
                </tr>
                <tr style={{ textAlign:"center"}}>
                <td>1</td>
                <td>किसान</td>
                <td>पुस्तिक क्र.</td>
                <td>बोरे</td>
                <td>वजन</td>
                <td>दर</td>
                <td>मूल्य</td>
                <td>हिम्माली</td>
                <td>तुलाई</td>
                <td>भुगतान राशि</td>
                </tr>
                <tr style={{ textAlign:"center"}}>
                <td>1</td>
                <td>किसान</td>
                <td>पुस्तिक क्र.</td>
                <td>बोरे</td>
                <td>वजन</td>
                <td>दर</td>
                <td>मूल्य</td>
                <td>हिम्माली</td>
                <td>तुलाई</td>
                <td>भुगतान राशि</td>
                </tr>
                <tr style={{ textAlign:"center",fontWeight:"bold"}}>
                <td></td>
                <td></td>
                <td></td>
                <td>3456</td>
                <td>567</td>
                <td>22</td>
                <td>5679</td>
                <td>200</td>
                <td>100</td>
                <td>296000</td>
                </tr>
                <tr style={{ textAlign:"center",fontWeight:"bold"}}>
                <td></td>
                <td >Grand Total</td>
                <td></td>
                <td>3456</td>
                <td>567</td>
                <td>22</td>
                <td>5679</td>
                <td>200</td>
                <td>100</td>
                <td>296000</td>
                </tr>
            </tbody>
        </table>
        <div style={{height:40, width:"100%", border:"1px solid black", display:"flex",alignItems:"start", paddingLeft:5, borderLeft:"none", borderRight:"none",borderTop:"none", }}>
            <b>By Cash ₹456776, By Chq ₹0 ,By NEFT-4567.22 </b>
        </div>

        <div style={{height:100, width:"100%", borderBottom:"1px solid black", display:"flex",}}>
        <div style={{height:100, width:"50%", display:"flex", flexDirection:"column", padding:5}}>
            <b>मंडी शुल्क   </b>
            <b>Sadhbhawnaa Foods & Flour Mill-32225.22  </b>
        </div>
        <div style={{height:100, width:"50%", display:"flex", flexDirection:"column", padding:5, alignItems:"end"}}>
            <b>दिनाँक तक देय  निर्धारित  शुल्क</b>
            <b>Sadhbhawnaa Foods & Flour Mill-3322.22  </b>
        </div>
        </div>

        </div>
    </div>
  )
}

export default ParchaseReportDetails