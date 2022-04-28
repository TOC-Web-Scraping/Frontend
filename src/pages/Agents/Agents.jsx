import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Nav, Tab, Col, Row } from "react-bootstrap";
import { useAgents } from "../../hooks/useAgents";
import Loader from "../../components/Loader/Loader";

// import httpClient from "../../utils/httpClient";

function Agents() {
  const { data: agentList, isLoading } = useAgents();
  // const [agentList, setagentList] = useState([])
  const baseImageUrl = `https://raw.githubusercontent.com/TOC-Web-Scraping/scraping/main`;

  const [selected, setSelected] = useState({});
  const [agentImageUrl, setagentImageUrl] = useState();

  useEffect(() => {
    if (agentList) {
      setagentImageUrl(baseImageUrl + agentList[0].imageUrl);
      setSelected(agentList[0]);
    }
  }, [agentList, baseImageUrl]);

  const tabEventKey = ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"];
  const [tabSelected, settabSelected] = useState(tabEventKey[0]);

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
        }}
      >
        <AgentNameText
          style={
            selected === agent
              ? { color: "#fff", backgroundColor: "rgba(128, 128, 128, 0.1)" }
              : null
          }
        >
          {agent.name}
        </AgentNameText>
      </div>
    );
  });
  // console.log(selected.abilities)

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Container>
        <RowWrapper>
          <Row style={{ justifyContent: "center" }}>
            <Col xs="12" md="4" lg="3">
              <AgentFlowBox style={{ maxHeight: "90vh", overflow: "auto" }}>
                {ListAgents}
              </AgentFlowBox>
            </Col>
            <Col lg="6" md="4" style={{ height: "100vh" }}>
              {agentImageUrl ? (
                <AgentImage src={agentImageUrl} alt="teams" />
              ) : (
                <Loader />
              )}
            </Col>
            <Col md="" style={{ align: "left", width: "360px" }}>
              <div>
                <AgentDesContainer>
                  <AgentDesTab>
                    <h1>{selected.name}</h1>
                  </AgentDesTab>
                  <AgentDesTab>
                    <h2>
                      {"//"}ROLE:{" "}
                      <span style={{ fontSize: "1.5rem" }}>
                        {selected.role}
                      </span>
                    </h2>
                  </AgentDesTab>

                  <div>
                    <h3>{"//"}ABILITIES:</h3>
                  </div>

                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey={tabEventKey[0]}
                    onSelect={(e) => {
                      settabSelected(e);
                    }}
                  >
                    <Row
                      style={{ backgroundColor: "rgba(128, 128, 128, 0.1)" }}
                    >
                      <Col xs="4" lg="4">
                        <Nav variant="pills" className="flex-column">
                          {selected.abilities?.map((skill) => {
                            return (
                              <Nav.Item
                                key={selected.abilities.indexOf(skill)}
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Nav.Link
                                  eventKey={
                                    tabEventKey[
                                      selected.abilities.indexOf(skill)
                                    ]
                                  }
                                >
                                  <div
                                    style={{ height: "60px", width: "50px" }}
                                  >
                                    <img
                                      alt="agent"
                                      src={baseImageUrl + skill.imageUrl}
                                      style={{ width: "100%", height: "100%" }}
                                    />
                                  </div>
                                </Nav.Link>
                              </Nav.Item>
                            );
                          })}
                        </Nav>
                      </Col>
                      <Col xs="1"></Col>
                      <Col>
                        <Tab.Content>
                          {selected.abilities?.map((skill) => {
                            return (
                              <>
                                {tabSelected ===
                                tabEventKey[
                                  selected.abilities.indexOf(skill)
                                ] ? (
                                  <Tab.Pane
                                    eventKey={
                                      tabEventKey[
                                        selected.abilities.indexOf(skill)
                                      ]
                                    }
                                  >
                                    <AgentDesPanel
                                      style={{
                                        height: "60vh",
                                        overflow: "overlay",
                                      }}
                                    >
                                      <p>Abilities Name: {skill.name}</p>
                                      <p>
                                        Type: {skill.type}{" "}
                                        {skill.cost ? (
                                          <>(Cost: {skill.cost})</>
                                        ) : (
                                          <></>
                                        )}
                                      </p>
                                      <p style={{ fontSize: "1rem" }}>
                                        {skill.bottomDescription}
                                      </p>
                                    </AgentDesPanel>
                                  </Tab.Pane>
                                ) : (
                                  <></>
                                )}
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
      </Container>
    </div>
  );
}

const AgentNameText = styled.h1`
  position: relative;
  top: 0;
  left: 10px;
  color: #808080;
  line-height: 1.5;
  cursor: pointer;

  @media (max-width: 1200px) {
    padding-left: 25px;
  }

  &:hover {
    color: #fff;
  }
`;

const Container = styled.div`
  margin: 10px auto;
  max-width: 1600px;
  width: 95%;
  position: relative;
  display: block;
  alignitems: "center";
`;

const AgentImage = styled.img`
  width: 100%;
`;

const AgentDesContainer = styled.div`
  color: #fff;
  padding: 10px;
`;

const AgentDesTab = styled.div``;

const RowWrapper = styled.div`
  max-height: 88vh;
  overflow: hidden;
  @media (max-width: 800px) {
    max-height: 999vh;
  }
`;

const AgentFlowBox = styled.div`

&::-webkit-scrollbar {
  color: #fff
  width: 0.5em;
  height: 0.5em;
}

&::-webkit-scrollbar-thumb {
  background-color: rgba(128, 128, 128, 0.352);
  border-radius: 3px;
  &:hover {
    background: rgba(256, 256, 256, 0.352);
  }
}
`;

const AgentDesPanel = styled.div`
&::-webkit-scrollbar {
  color: #fff
  width: 0.5em;
  height: 0.5em;
}

&::-webkit-scrollbar-thumb {
  background-color: rgba(128, 128, 128, 0.352);
  border-radius: 3px;
  &:hover {
    background: rgba(255, 255, 255, 0.352);
  }
}
`;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   @media (max-width: 765px) {
//     flex-direction: row;
//     height: 10vh;
//     align-items: center;
//   }
// `

export default Agents;
