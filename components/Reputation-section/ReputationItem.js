import { margin } from "@mui/system";

const ReputationItem = ({heading, text, discription, img}) => {
    return (
        <div style={{
            // border:"1px red solid",
            display:"flex",
            alignItems:"center",
            marginTop:"14px"
        }}>
           <div style={{
               width:"80px",
               height:"80px",
            //    border:"1px red solid",
               margin:"0px 16px 0px 0px",
               borderRadius:"50%"
               
           }}>
               <img style={{borderRadius:"50%"}} width={80} height={80} src={img} />

           </div>
           <div>

           <div style={{
                //    border:"1px red solid",
                   display:"flex"
               }}>
                   <span style={{margin:"0px 16px 0px 0px",fontSize:"18px",color:"black"}}>{heading}</span>
                   <p style={{margin:"0px"}}>{text}</p>

               </div>

               <div style={{
                //    border:"1px red solid"
               }}>
                   <p>{discription}</p>
               </div>
               </div>
        </div>
    );
}


export default ReputationItem;