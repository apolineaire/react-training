import React from 'react'
import useSWR from '../../lib/hooks/useMySWR'
import Title from '../UI/Title/Title'

const openApiUrl = 'http://dummy.restapiexample.com/api/v1/employees'

const LoadingComponent = () => <p>Loading...</p>

/**
 * SWR allows to handle slow loading cases (here defined at 200 ms) by displaying a specific UI
 * See SWR config in `../../lib/hooks/useMySWR.js`
 */
const ZeitSWR = () => {
   const { data, error, isSlowLoading } = useSWR(openApiUrl)

   if (error)
      return (
         <p>
            Error !<br />
            {JSON.stringify(error)}
         </p>
      )

   // lol
   if (data && data.data.data) {
      const emplys = data.data.data
      return (
         <ul
            style={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'flex-start'
            }}
         >
            <Title>Employees</Title>
            {emplys.map(employee => (
               <li
                  style={{ display: 'inline', marginBottom: '.6rem' }}
                  key={employee.employee_salary + employee.index}
               >
                  {employee.employee_name} is paid{' '}
                  <em>
                     $&nbsp;
                     {employee.employee_salary}
                  </em>
               </li>
            ))}
         </ul>
      )
   }
   if (!data && isSlowLoading) return <p>It's taking a long time friend</p>
   if (!data) return <LoadingComponent />
   return null
}

export default ZeitSWR
