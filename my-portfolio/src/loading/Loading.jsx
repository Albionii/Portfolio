import React, { useEffect, useState } from 'react'

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false);
    }, 3000)
  }, [])

  return (
    <div>Loading...</div>
  )
}
