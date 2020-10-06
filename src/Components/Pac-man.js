import React, {useEffect, useState} from 'react'
import axios from 'axios'

const PacMan = () => {
    const [board, setBoard] = useState([])
    console.log(board)

    useEffect(() => {
        axios.get('/api/pac-man/board').then(res => {
            setBoard(res.data)
        })
    }, [])

    return(
        <div>
            
        </div>
    )
}

export default PacMan