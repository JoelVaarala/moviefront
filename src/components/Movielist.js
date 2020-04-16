import React from 'react';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';

export default function Movielist(){

const[movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        getMovies();
    },[])
    
const getMovies = () => {
    fetch('https://movieapppp.herokuapp.com/movies')
    .then(response => response.json())
    .then(res => {setMovies(res)})
    .catch(err => console.error(err))
    }
    
const columns = [
        {
            Header: 'Title',
            accessor: 'title'
        },
        {
            Header: 'Genre',
            id: 'genre',
            accessor: g => g.genre.nameOfGenre
        },
        {
            Header: 'Director',
            id: 'director',
            accessor: 'director.dirName'
        },
        {
            Header: 'Year',
            accessor: 'year'
        },
        {
            Header: 'Points',
            accessor: 'points'
        },
    ]

return(
     <div>
        <ReactTable filterable={true} 
        defaultPageSize={5} data={movies} columns={columns} />
    </div>

    );
}