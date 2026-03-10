import React from 'react'

const CollapstTab = ({data}) => {
    const {question,answer} = data
  return (
    <div className='py-4 bg-white rounded-2xl w-full mb-8'>
        <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
            <div className="collapse-title font-semibold text-2xl">{question}</div>
            <div className="border-t border-dashed "></div>
            <div className="collapse-content text-sm">
                <p className='font-semibold text-blue-500 text-xl'>Answer</p>
                <span className='font-semibold text-black text-xl'>{answer}</span>
            </div>
        </div>
      
    </div>
  )
}


export default CollapstTab
