import React from 'react'

export default function GuestForm(props) {
    const { guestCount, setGuests } = props;
    function handleGuestChange(index, field, value) {
        setGuests((prevGuests) => {
            const newGuests = [...prevGuests];
            newGuests[index] = { ...newGuests[index], [field]: value };
            return newGuests;
        });
    };

    return (
        <div>
            {[...Array(guestCount)].map((_, index) => (
                <div key={index}>
                    <input
                        className="m-1 p-1 rounded-md pl-2 text-black"
                        type="text"
                        placeholder="Name"
                        onChange={(e) => handleGuestChange(index, 'name', e.target.value)}
                    />
                    <input
                        className="m-1 p-1 rounded-md pl-2 text-black"
                        type="number"
                        placeholder="Age"
                        onChange={(e) => handleGuestChange(index, 'age', Number(e.target.value))}
                    />
                </div>
            ))}
        </div>
    );
}
