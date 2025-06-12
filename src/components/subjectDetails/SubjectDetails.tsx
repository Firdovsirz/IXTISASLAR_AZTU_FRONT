import { useParams } from "react-router";

export default function SubjectDetails() {
    const { subject_code } = useParams<{ subject_code: string }>();

    return (
        <>
            <section>Subject Details {subject_code}</section>
        </>
    )
}