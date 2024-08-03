type CharacterCardProps = {
    character: {
        id: number
        name: string | undefined
        thumbnail: {
            path: string
            extension: string
        }
    }
}