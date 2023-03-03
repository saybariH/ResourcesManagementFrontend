import { useGetUsersQuery } from '@/services/githubapi'
import { RootState } from '@/store/configureStore'
import { decrement, increment } from '@/store/reduxSlice/counterSlice'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'


export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const {data , error , isLoading } = useGetUsersQuery('')
  console.log(data)

  return (
    <>
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    <div>
        {
            data?.map( (user:any) => <div>
                    <p>id :{user.id}|login:{user.login}</p>
                </div>
            )
        }
    </div>
    </>
  )
}