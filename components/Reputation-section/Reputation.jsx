import ReputationItem from "./ReputationItem";

const Reputation = ({heading, text, discription, img}) => {
    return (
        <div style={{
            padding: "32px 0px 0px 0px",
            color: "#757575",
          }}>

<h1 style={{ fontWeight: "400" }}>My Reputation</h1>

<ReputationItem heading="Chandler Bing." text="Web Designer." discription="Jane Doe is just awesome. I am so happy to have met her!"  img="https://www.w3schools.com/w3images/avatar_smoke.jpg" />
<ReputationItem heading="Chris Fox." text="CEO at Mighty Schools." discription="Jane Doe saved us from a web disaster."  img="https://www.w3schools.com/w3images/bandmember.jpg" />
<ReputationItem heading="Rebecca Flex." text=" CEO at Company." discription="No one is better than Jane Doe."  img="https://www.w3schools.com/w3images/avatar_g2.jpg" />

           
        </div>
    );
}

export default Reputation;