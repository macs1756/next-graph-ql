import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_NEWS = gql`
  query ExampleQuery {
    roadster {
      apoapsis_au
    }
    company {
      ceo
      employees
      name
    }
  }
`;

function News() {
  const { loading, error, data } = useQuery(GET_NEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>News</h2>
      <p>Roadster Apoapsis: {data.roadster.apoapsis_au}</p>
      <p>Company Name: {data.company.name}</p>
      <p>CEO: {data.company.ceo}</p>
      <p>Number of Employees: {data.company.employees}</p>
    </div>
  );
}

export default News;
