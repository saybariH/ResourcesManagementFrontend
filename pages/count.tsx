import { useGetUsersQuery } from '@/services/githubApi'
import { RootState } from '@/store/configureStore'
import { decrement, increment } from '@/store/reduxSlice/counterSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetUsersQuery('')
  console.log(data)

  return (
    <>
      <i className="bi bi-2-circle-fill"></i>
    </>
  )
}
