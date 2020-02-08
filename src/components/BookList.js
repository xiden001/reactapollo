import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const ALL_BOOKS = gql`
{
    books{ 
    id
    name
    author{
      name
    }
  }
}
`;

function BookList() {
    const { loading, error, data } = useQuery(ALL_BOOKS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return data.books.map(({ id,name,author }) => (
      <div key={id}>
        <p>
          Book : {name} &nbsp; &nbsp; Author : {author.name}
        </p>
      </div>
    ));
  }




export default BookList;