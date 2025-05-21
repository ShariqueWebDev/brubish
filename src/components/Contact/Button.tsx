import React from 'react'
import { useFormStatus } from 'react-dom'


const Button = () => {
const {pending} = useFormStatus()
    return (
    <button
    type="submit"
    className="w-full text-base text-primary font-bold p-3 transition border shadow-lg rounded-md bg-gradient-to-r from-secondary1 to-secondary hover:to-secondary/70 hover:bg-opacity-60"
>
    {
        pending? 'Sending...' : 'Send Message'
    }
</button>
  )
}

export default Button