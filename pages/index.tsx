import { useApp } from "@/context/AppContext"
import CharacterList from "@/components/CharacterList"

const Home = () => {
    const { characters } = useApp()

    return <>
        <CharacterList list={characters} />
    </>
}

export default Home