

  function PokemonCard(props) {
    console.log(props)

    return <figure>
        <img src={props.pokemon.imgSrc}/>
        

            <figcaption>
            <h1>{props.pokemon.name}</h1>
             </figcaption>
    </figure>;

  }

 
    



export default PokemonCard;
