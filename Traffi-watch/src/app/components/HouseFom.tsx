import React from 'react';

// const HouseFom = () => {
//   return (
//     <div>
      
//     </div>
//   );
// }

// export default HouseFom;

interface IformData {
    address: string;
    latitude: number;
    longitude: number;
    image: FileList;
    description: string;
}

interface Iprops{

}

export default function HouseForm({}: Iprops) {
    return <form className='max-auto max-w-xl py-4'>
        <h1 className='text-xl'>Add New Event</h1>
    </form>
}