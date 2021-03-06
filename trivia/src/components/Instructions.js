import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

function Instructions() {
    return (
        <div className="instructions">
            <p>
                Do you like trivia? You've come to the right place, nerd!
                You will receive 10 questions, one at a time. Simply click 
                an answer to select it. There is no time limit, so think it
                through, and choose wisely. A correct answer will net you 
                points based on difficulty, as follows:<br/><br/>
                Easy ... 100 points<br/>
                Medium ... 200 points<br/>
                Hard ... 300 points<br/><br/>
                ...but if you answer incorrectly, it's -50 points. After
                an answer is chosen, the "next" button will appear to guide 
                you to the next question. If you desire a little more
                specificity in your life, perhaps are looking for a tougher
                challenge, or just want to play it safe, the Options page
                allows you to specify the category and/or difficulty for all
                questions. Good luck on your quest, mighty warrior, and may
                you climb the highest ranks of loyatly on the leaderboard!
            </p>
            <Link to="/game">
                <Button className="button">Start A New Game</Button>
            </Link>
        </div>
    )
}

export default Instructions