import React, { useState } from 'react'
import GuestForm from './GuestForm';
import TicketCard from './TicketCard';

export default function TicketSystem(props) {
    const { setShowTicketSystem } = props;
    const [guestCount, setGuestCount] = useState(0);
    const [guests, setGuests] = useState([]);
    const [tickets, setTickets] = useState([]);
    const [ticketId, setTicketId] = useState(1);

    function handleAddGuests() {
        const totalPrice = guests.reduce((total, guest) => {
            if (guest.age <= 2) return total;
            if (guest.age > 2 && guest.age < 18) return total + 100;
            if (guest.age >= 18 && guest.age < 60) return total + 500;
            if (guest.age >= 60) return total + 300;
            return total;
        }, 0);

        setTickets([...tickets, { id: ticketId, guests, totalPrice }]);
        setTicketId(ticketId + 1);
        setGuests([]);
        setGuestCount(0);
    };

    return (
        <div className="absolute h-screen w-screen backdrop-blur flex flex-col justify-center items-center z-20 drop-shadow-md">
            <div className='border-white border-4 rounded-lg bg-black text-white p-5'>

                <h1 className='text-2xl '>Ticket Booking System</h1>
                <div className='flex justify-center'>

                    <input
                        className='w-1/2 m-3 text-center rounded-md text-black'
                        type="number"
                        placeholder="Enter number of guests"
                        value={guestCount}
                        onChange={(e) => setGuestCount(Number(e.target.value))}
                    />
                </div>
                {guestCount > 0 && (
                    <GuestForm guestCount={guestCount} setGuests={setGuests} />
                )}
                {guests.length === guestCount && guestCount > 0 && (
                    <div className='flex justify-center mt-1 mb-2'>
                        <button className='border-white border-2 p-2 rounded-md' onClick={handleAddGuests}>Add Guests</button>
                    </div>
                )}
                <div>
                    {tickets.map((ticket) => (
                        <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                    {(tickets.length != 0) && <div className='flex justify-center mt-1 mb-2'>
                        <button className='border-white border-2 px-3 py-2 text-xl rounded-md' onClick={() => setShowTicketSystem(false)}>Done</button>
                    </div>}
                </div>


            </div>
        </div>
    );
}
