"use client"
import React from 'react'
import {motion} from "framer-motion"
//components
function page() {
    const variants ={
        variants1:{
            opacity:0.5,x:200,y:200,
        },
        variants2:
        {
            opacity:0.9,x:300,y:200
        }
    }
  return (
    <div className='h-full flex items-center justify-center'>
        <motion.div className='w-96 h-96 bg-red-400 rounded-xl' initial={{x:-100}} variants={variants}  animate="variants1" transition={{delay:3,duration:5}}>
        TestAnimation
        </motion.div>
    </div>
  )
}
export default page
