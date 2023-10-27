import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUserById } from './usersApiSlice'
import EditUserForm from './EditUserForm'

import { useGetUsersQuery } from './usersApiSlice'
import PuffLoader from 'react-spinners/PuffLoader'


const EditUser = () => {
    const { id } = useParams() //useparams (from the url)

    const { user } = useGetUsersQuery('usersList', {
        selectFromResult: ({ data }) => ({
            user: data?.entities[id]
        }),
    })

    // const user = useSelector(state => selectUserById(state, id)) //Memoized selector created inside slice.
    // const content = user ? <EditUserForm user={user} /> : <p>Loading...</p>

    if (!user) return (
        <div className='centered_container_middle'>
            <PuffLoader color="#36d7b7" />
        </div>
    )

    const content = <EditUserForm user={user} />

    return content
}

export default EditUser
