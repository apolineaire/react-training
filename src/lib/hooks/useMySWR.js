import useSWR from 'swr'
import React from 'react'
import axios from 'axios'

const useMySWR = url => {
   const [isSlowLoading, setIsSlowLoadingValue] = React.useState(false)
   const { data, error, ...otherParams } = useSWR(url, axios, {
      loadingTimeout: 200,
      onLoadingSlow: () => setIsSlowLoadingValue(true)
   })

   return { data, error, isSlowLoading, ...otherParams }
}

export default useMySWR
