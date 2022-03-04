import React from 'react';

const Contact = () =>{
    return (
        <div>
            <body className='min-h-screen bg-[#cbd5e1]'>
                <h1 className='text-2xl text-center pt-4'>Contact Us</h1><br/>

            <form className='flex flex-col space-y-2 w-1/2 m-auto'>
                <div className='flex flex-col text-left'>
                    <label>Subject:</label>
                    <select className='p-2 rounded'>
                        <option>Basic informations</option>
                        <option>Call request</option>
                        <option>Payments</option>
                        <option>Private Event</option>
                        <option>Other</option>
                    </select><br/>
                </div>
                <div className='flex flex-col text-left' >
                    <label>First name:</label>
                    <input className='p-2 rounded' type='text'/><br/>
                </div>
                <div className='flex flex-col text-left'>
                    <label>Email address:</label>
                    <input className='p-2 rounded' type='email'/><br/>
                </div>
                <div className='flex flex-col text-left'>
                    <label>Message:</label>
                    <textarea className='h-32 p-2 rounded' type='text'/><br/>
                </div>

                <div className='flex flex-col items-center'>
                    <button className='mb-8 p-1 w-36 bg-[#D286EA] rounded-full' type="submit">Submit</button>
                </div>
            </form>
            </body>
        </div>

    );
}

export default Contact;