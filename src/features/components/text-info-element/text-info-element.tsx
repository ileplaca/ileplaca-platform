import React, { FC } from 'react';

export interface TextInfoElementProps {
  text: string | number,
  textValue: string | number
}

const TextInfoElement: FC<TextInfoElementProps> = ({ text, textValue }) => {
  return (
    <div className='border rounded py-1 px-2'>
      {text}
      <span className='font-semibold ml-2'>
        {textValue}
      </span>
    </div>
  )
}

export default TextInfoElement;