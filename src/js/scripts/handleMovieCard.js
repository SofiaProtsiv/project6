export default function handleMovieCard(movies) {
  movies.forEach(elem => {
    if (elem.title.length > 30) {
      elem.title = elem.title.slice(0, 30) + '...';
    }

    if (elem.release_date){
        (elem.release_date = elem.release_date.slice(0, 4))
    } else {
        elem.release_date = 'Unknown'
    }

    elem.genre_ids = 'Unknown';
  

    if (elem.vote_average === 0) {
        elem.vote_average = 'Unknown'
    }

    if (elem.poster_path) {
      elem.poster_path = 'https://image.tmdb.org/t/p/w500' + elem.poster_path;
    }else{
      elem.poster_path = 'https://www.shoshinsha-design.com/wp-content/uploads/2020/05/noimage-1024x898.png'
    }
  });
  
  return movies;
}