import Card from './Card'

const Price = (props) => {
  return(
    <div style={{marginTop:100}}>
        <h1 style={{fontWeight:400,color:'grey'}}>My Price</h1>

      <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
        <Card  
          heading="Basic"
          one="Wed Design"
          two="Photography"
          three="5GB Storage"
          four="Mail Support"
          five="$ 10"
          six="per month"
        />

        <Card 
          heading="Pro"
          one="Wed Design"
          two="Photography"
          three="50GB Storage"
          four="Endless Support"
          five="$ 25"
          six="per month"
        />
      </div>
    </div>
  )
};

export default Price;
