const Card = ({ heading, one, two, three, four, five, six}) => {


  return (
      <div style={{width:'49%',height:530}}>
          <h1 style={{height:110,width:'100%',background:'grey',color:'white',margin:0,display:'flex',justifyContent:'center',alignItems:'center',fontWeight:400}}>{heading}</h1>

          <p style={{width:'100%',borderBottom:'1px solid lightgrey',height:40,display:'flex',justifyContent:'center',alignItems:'center',fontWeight:400,color:'grey'}}>{one}</p>
          <p style={{width:'100%',borderBottom:'1px solid lightgrey',height:40,display:'flex',justifyContent:'center',alignItems:'center',fontWeight:400,color:'grey'}}>{two}</p>
          <p style={{width:'100%',borderBottom:'1px solid lightgrey',height:40,display:'flex',justifyContent:'center',alignItems:'center',fontWeight:400,color:'grey'}}>{three}</p>
          <p style={{width:'100%',borderBottom:'1px solid lightgrey',height:40,display:'flex',justifyContent:'center',alignItems:'center',fontWeight:400,color:'grey'}}>{four}</p>

         
          <div style={{width:'100%',borderBottom:'1px solid lightgrey',height:90,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',fontWeight:400,color:'grey'}}>
              <h2 style={{margin:0}}>{five}</h2>
              <p>{six}</p>
          </div>

          <div style={{width:'100%',color:'black',height:90,background:'lightgrey',display:'flex',alignItems:'center',justifyContent:'center'}}>
             <button style={{width:100,border:'none',background:'white',height:40,cursor:'pointer'}}>Sign Up</button>
          </div>

      </div>
  )
};

export default Card;
