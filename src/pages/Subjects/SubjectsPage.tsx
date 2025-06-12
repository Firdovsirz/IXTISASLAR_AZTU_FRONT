import UserHeader from '../../components/header/UserHeader'
import Subjects from '../../components/subjects/Subjects'

export default function SubjectsPage() {
    return (
        <>
            <UserHeader />
            <main className='w-full flex flex-col justify-center items-center'>
                <Subjects />
            </main>
        </>
    )
}
