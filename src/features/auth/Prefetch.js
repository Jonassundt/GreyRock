import { store } from '../../app/store'
import { notesApiSlice } from '../notes/notesApiSlice'
import { usersApiSlice } from '../users/usersApiSlice'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import React from 'react'

//initiating state for redux


const Prefetch = () => {
    useEffect(() => {
        console.log('subscribing!')
        store.dispatch(notesApiSlice.util.prefetch('getNotes', 'notesList', { force: true })) //prefetch the hooks
        store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))
    }, []) //only runs when component mounts.

    return <Outlet />

}

export default Prefetch