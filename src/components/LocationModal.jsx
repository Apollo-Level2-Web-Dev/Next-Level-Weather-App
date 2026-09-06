import { X } from 'lucide-react';
import { useState } from 'react';

const LocationModal = ({onClose}) => {
    const [city,setCity] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        const value = city.trim()
        console.log(value);
    }


    const handleGeoLocations = ()=>{
        navigator.geolocation.getCurrentPosition((positions)=>{
          const {latitude,longitude} = positions.coords
          console.log({latitude,longitude});
        },(error)=>{
          console.log(error);
        },{
            timeout : 10000
        })
    }



    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60">
           <div className="h-[300px] p-5 rounded-2xl w-[400px] bg-gray-100 shadow-2xl">
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-medium">Where are you today?</h2>
                <button onClick={onClose} className='cursor-pointer'><X /></button>
                </div>
                <div className='pt-8'>
                    <form onSubmit={handleSubmit} className='space-y-5'>
                        <input
                        
                        type="text" 
                        placeholder='Enter City name' 
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}
                        className='w-full border p-1 rounded-2xl' />

                         <div className="">
                <button 
                type="submit" 
                className="text-lg w-full font-medium hover:scale-105 transition-all delay-500 bg-blue-500 px-5 cursor-pointer py-1 rounded-4xl text-gray-100">Get Weather</button>
            </div>
                    </form>
                </div>
                <div className='py-2 text-center'>Or</div>
               <div className="">
                <button 
                type="button"  
                onClick={handleGeoLocations}
                className="text-lg w-full font-medium hover:scale-105 transition-all delay-500 bg-blue-500 px-5 cursor-pointer py-1 rounded-4xl text-gray-100">Use My Locations</button>
            </div>
            </div> 


        </div>
    );
};

export default LocationModal;