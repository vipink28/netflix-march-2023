import React from 'react';
import { Link } from 'react-router-dom';

function GenreLink(props) {
    const { genre, platform, genreId } = props;
    return (
        <Link to={`/browsebygenre/${platform}/${genreId}`} className="badge p-2 text-bg-warning me-2 text-decoration-none">{genre.name}</Link>
    );
}

export default GenreLink;