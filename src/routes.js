import React from 'react'
import {Switch, Route} from 'react-router-dom'
import PacMan from './Components/Pac-man'
import Tetris from './Components/Tetris'

export default(
    <Switch>
        <Route path='/pac-man' component={PacMan} />
        <Route path='/tetris' component={Tetris} />
    </Switch>
)