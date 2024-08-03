import { Md5 } from 'ts-md5'

const publicKey = process.env.NEXT_PUBLIC_PUBLICKEY as string
const privateKey = process.env.NEXT_PUBLIC_PRIVATEKEY as string

export const getCharactersMarvelAPI = async ({ params }: GetMarvelAPIProps) => {
    const timeStamp = new Date().getTime()

    const response = await fetch(`http://gateway.marvel.com/v1/public/characters?${new URLSearchParams({
        apikey: publicKey,
        ts: timeStamp,
        hash: Md5.hashStr(timeStamp + privateKey + publicKey),
        ...params
    }).toString()}`)

    return response.json()
}

export const getCharacterMarvelAPI = async ({ id, params }: GetCharacterMarvelAPIProps) => {
    const timeStamp = new Date().getTime()

    const response = await fetch(`http://gateway.marvel.com/v1/public/characters/${id}?${new URLSearchParams({
        apikey: publicKey,
        ts: timeStamp,
        hash: Md5.hashStr(timeStamp + privateKey + publicKey),
        ...params
    }).toString()}`)

    return response.json()
}

export const getComicsMarvelAPI = async ({ id, params }: GetCharacterMarvelAPIProps) => {
    const timeStamp = new Date().getTime()

    const response = await fetch(`http://gateway.marvel.com/v1/public/characters/${id}/comics?${new URLSearchParams({
        apikey: publicKey,
        ts: timeStamp,
        hash: Md5.hashStr(timeStamp + privateKey + publicKey),
        ...params
    }).toString()}`)

    return response.json()
}