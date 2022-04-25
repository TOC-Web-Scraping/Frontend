import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Nav, Tab, Col, Row, Tabs, ListGroup } from "react-bootstrap";
import { useAgents } from "../../hooks/useAgents";
import Loader from "../../components/Loader/Loader"


// import httpClient from "../../utils/httpClient";

function Agents() {
  const {
    data: agentList,
    isLoading,
    error,
    isError,
  } = useAgents();
  // const [agentList, setagentList] = useState([])
  const baseImageUrl = `https://raw.githubusercontent.com/TOC-Web-Scraping/scraping/main`

  const [selected, setSelected] = useState({});
  const [selectedIndex, setselectedIndex] = useState(0)
  const [agentImageUrl, setagentImageUrl] = useState();
  const [isDataLoading, setisDataLoading] = useState(false)

  useEffect(() => {
    if (agentList) {
      setagentImageUrl(baseImageUrl + agentList[0].imageUrl)
      setSelected(agentList[0])
    }
  }, [agentList])





  const tabEventKey = ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"];
  const [tabSelected, settabSelected] = useState(tabEventKey[0])

  const ListAgents = agentList?.map((agent) => {
    return (
      <div
        key={agent.name}
        onClick={() => {
          setSelected(agent);
          setagentImageUrl(null);
          setTimeout(() => {
            setagentImageUrl(`${baseImageUrl}${agent.imageUrl}`);
          }, 100);
          setselectedIndex(agentList.indexOf(agent))

          console.log("isdataloading:", isDataLoading)
          // console.log(agentImageUrl)
        }}

      >
        <AgentNameText>{agent.name}</AgentNameText>
      </div>
    )
  });
  console.log(selected.abilities)

  if (isLoading) {
    return <Loader />
  }

  return <div><Container >
    {/* style={{maxHeight:"79vh",overflow:"hidden"}} */}
    <RowWrapper>
      <Row style={{ justifyContent: "center" }}>

        <Col xs="3" style={{ maxHeight: "75vh", overflow: "overlay" }}>

          {ListAgents}

        </Col>
        <Col lg="6" style={{ height: "100vh", width: "600px" }}>
          {agentImageUrl ? <AgentImage src={agentImageUrl} alt="teams" /> : <Loader />}
        </Col>
        <Col style={{ align: "left", width: "360px" }}>
          <div >
            <AgentDesContainer>
              <AgentDesTab>
                <h1>{selected.name}</h1>
              </AgentDesTab>
              <AgentDesTab>

                <h2 >//Role: <span style={{fontSize:"1.5rem"}}>{selected.role}</span></h2> 
                
              </AgentDesTab>



              <div>
                <h3>//Abilities</h3>
              </div>

              <Tab.Container id="left-tabs-example" defaultActiveKey={tabEventKey[0]} onSelect={(e) => { settabSelected(e) }}>
                <Row>
                  <Col xs = {2} lg={4}>
                    <Nav variant="pills" className="flex-column">

                      {selected.abilities?.map((skill) => {
                        return (
                          <Nav.Item key={selected.abilities.indexOf(skill)}>
                            <Nav.Link eventKey={tabEventKey[selected.abilities.indexOf(skill)]}>
                              <div style={{ height: "60px",width: "50px" }}>
                                < img src={baseImageUrl + skill.imageUrl} style={{width:"100%",height:"100%"}}/>
                              </div>

                          </Nav.Link>
                          </Nav.Item>
                        );
                      })}

                    </Nav>
                  </Col>
                  <Col >
                    <Tab.Content>

                      {selected.abilities?.map((skill) => {
                        return (
                          <>
                            {tabSelected === tabEventKey[selected.abilities.indexOf(skill)] ?
                              (<Tab.Pane eventKey={tabEventKey[selected.abilities.indexOf(skill)]}>
                                <p>Skill: {skill.name}</p>
                                <p>Type: {skill.type} {skill.cost?(<>(Cost: {skill.cost})</>):(<></>)}</p>
                                <p style={{fontSize:"0.85rem"}}>{skill.bottomDescription}</p>

                              </Tab.Pane>) : (<></>)}
                          </>

                        );
                      })}

                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>


            </AgentDesContainer>

          </div>
        </Col>
      </Row>
    </RowWrapper>
  </Container></div>;
}


const AgentNameText = styled.h1`
  position: relative;
  top: 0;
  left: 10px;
  color: #fff;
  line-height: 1.5;
  @media (max-width: 1200px) { 
  padding-left: 25px;
  };
`;

const Container = styled.div`
  margin: 10px auto;
  max-width: 1200px;
  width: 97%;
  position: relative;
  display: block;
  alignItems: "center"

`;

const AgentImage = styled.img`
  width: 100%;
  `;



const AgentDesContainer = styled.div`
  color: #fff;
  padding: 10px;
  `

const AgentDesTab = styled.div`
`
//   @media (max-width: 1200px) {
//     flex-direction: row;
//   }
// `
const RowWrapper = styled.div`
  max-Height: 88vh;
  overflow: hidden;
  @media (max-width: 1200px) {
    max-Height:999vh
  }
`

export default Agents;
