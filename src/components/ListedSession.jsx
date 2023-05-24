export default function ListedSession({ session, whichBook }) {
    console.log(session)
    console.log(session.whichBook)
    console.log(whichBook)
    console.log(whichBook.whichBook)

    return (
        <li>
            <p>{session.id}</p>
            <p>{session.whichBook}</p>
            <p>{session.sessionDuration}</p>
            <p>{session.summary}</p>
            <p>{session.keyMoment}</p>
            <p>{session.subText}</p>
            <p>{session.feeling}</p>
            <p>{session.freeNote}</p>
        </li>
    )
}