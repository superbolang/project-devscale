"use client"

import { useState } from "react"
import Reservation from "../reservation/Reservation";


export function BranchDetail({branch}) {
    const [isReservation, setIsReservation] = useState(false);

    async function handleClick() {
        setIsReservation(true)
    }
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <img src="/branch.jpg" className="card rounded-box w-[500px] justify-self-center"  />
            <div>
                <h1 className="text-2xl font-bold">{branch.name}</h1>
                <div className="indicator mt-3">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn btn-primary" onClick={handleClick}>Reservation</button>
                    </div> 
                    <div className="card border w-[500px] bg-fuchsia-100">
                        <div className="card-body">
                            <h2 className="card-title">Location : Jakarta</h2> 
                            <p>Address : ashjdjahsd asjdhahdj asjdhjakhsjd</p>
                        </div>
                    </div>
                </div>
                <Reservation isReservation={isReservation}/>
            </div>

            
        </div> 
    )
}