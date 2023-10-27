import NewNoteForm from './NewNoteForm'
import { useGetUsersQuery } from '../users/usersApiSlice'
import PuffLoader from 'react-spinners/PuffLoader'

const NewNote = () => {
    // const users = useSelector(selectAllUsers)
    const { users } = useGetUsersQuery('usersList', {
        selectFromResult: ({ data }) => ({
            users: data?.ids.map(id => data?.entities[id])
        }),
    })

    if (!users?.length) return (
        <div className='centered_container_middle'>
            <PuffLoader color="#36d7b7" />
        </div>
    )

    const content = <NewNoteForm users={users} />

    return content
}

export default NewNote
