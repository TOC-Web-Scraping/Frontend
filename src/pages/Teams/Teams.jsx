import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Pagination } from "react-bootstrap";

const Container = styled.div`
  margin: 40px auto;
  max-width: 1200px;
  width: 90%;
  position: relative;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: #ffffff87;
`;

const SearchInput = styled.input`
  width: 230px;
  height: 30px;
  background-color: #323949;
  border-radius: 3px;
  border: #323949;
  outline: none;
  color: #ffffff;
  padding: 10px;

  &::placeholder {
    color: #fff;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 30px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }

  div {
    background-color: #ccc;
    border-radius: 10px;
    padding: 10px;
    height: 320px;
    cursor: pointer;
  }
`;

const StyledPagination = styled(Pagination)`
  display: flex;
  margin-top: 20px;
  justify-content: center;

  .page-item.active .page-link {
    background-color: #323949;
    border-color: #323949;
  }

  .page-link {
    color: #000;
  }
`;

const TeamText = styled.h1`
  position: absolute;
  top: 0;
  right: 10px;
  color: #fff;
  line-height: 0.8;
`;

function Teams() {
  const navigate = useNavigate();
  const items = [];
  for (let i = 0; i < 200; i++) {
    items.push(i);
  }

  const [page, setPage] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / 8); i++) {
    pageNumbers.push(i);
  }

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < pageNumbers.length) {
      setPage(page + 1);
    }
  };

  const cardElements = items
    .filter((item, index) => {
      return index >= (page - 1) * 8 && index < page * 8;
    })
    .map((item, index) => {
      return (
        <div key={index} onClick={() => navigate(`/team/${item}`)}>
          <h1>{item}</h1>
        </div>
      );
    });

  const paginationElements = pageNumbers
    .filter((number) => {
      if (page < 3) {
        return number <= 5;
      } else if (page > pageNumbers.length - 3) {
        return number >= pageNumbers.length - 4;
      }
      return number >= page - 2 && number <= page + 2;
    })
    .map((number) => {
      return (
        <Pagination.Item
          key={number}
          active={number === page}
          onClick={() => setPage(number)}
        >
          {number}
        </Pagination.Item>
      );
    });

  return (
    <Container>
      <SearchBox>
        <AiOutlineSearch size={30} />
        <SearchInput type="text" placeholder="Search" />
      </SearchBox>
      <TeamText>Teams</TeamText>
      <CardContainer>{cardElements}</CardContainer>
      <StyledPagination>
        <Pagination.Prev onClick={handlePrev} />
        {paginationElements}
        <Pagination.Next onClick={handleNext} />
      </StyledPagination>
    </Container>
  );
}

export default Teams;
