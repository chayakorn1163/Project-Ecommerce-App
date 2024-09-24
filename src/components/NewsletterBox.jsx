    import React from 'react'

    const NewsletterBox = () => {

        const onSubmitHandler = (Event) =>{
            Event.preventDefault()
            alert('Form submitted!')
        }


    return (
        <div className='text-center '>
            <p className='text-2xl font-medium text-gray-800'>Subscribe Now & get 20% off</p>
            <p className='text-gray-400 mt-3'>
                Magna aute sit aliquip irure eu tempor sunt adipisicing nostrud.
            </p>
            <form className='w-full   flex items-center gap-3 max-auto  my-6 border pl-3'>
                <input className='w-full sm:flex-1 outline-none' type='Email' placeholder='Enter you Email' required/>
                <button type='submit' className='bg-black text-white text-xs px-10 p-4' >SUBSCRIBE</button>
            </form>
        
        </div>
    )
    }

    export default NewsletterBox
