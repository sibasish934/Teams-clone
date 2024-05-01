import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
    console.log(params.id)
  return (
    <div>My post id:-{params.id}</div>
  )
}

export default page