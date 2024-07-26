
const Card = ({ pokemonName, pokemonImage }) => {


    return (
        <div className="w-[300px] h-[350px] rounded-2xl bg-2 shadow-2xl pt-12 p-3 cursor-pointer relative overflow-hidden">
            <p className="bg-1 text-center text-white w-40 absolute top-0 right-0 py-2 px-3 rounded-bl-[20px]">{pokemonName}</p>
            <div className="bg-4 w-40 h-40 rounded-full absolute top-14 left-6 z-[1]"></div>
            <img className="z-10 absolute " src={pokemonImage} alt={pokemonName} />
        </div>
    )
}

export default Card
