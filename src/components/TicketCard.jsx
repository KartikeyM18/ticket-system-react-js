import React, { useState } from 'react'

export default function TicketCard(props) {
    const { ticket } = props;
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="ticket-card border-white border-2 my-3 p-3 rounded-lg">
            <h3 className='text-xl'>Ticket ID: {ticket.id}</h3>
            <p>Total Guests: {ticket.guests.length}</p>
            <p>Total Price: INR {ticket.totalPrice}</p>
            <button className='bg-white text-black border-white rounded-md px-2 font-semibold my-2' onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {showDetails && (
                <ul>
                    {ticket.guests.map((guest, index) => (
                        <li key={index}>
                            {guest.name}, Age: {guest.age}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
