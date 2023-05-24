export default function ListedSession({ session }) {
    console.log(session)
    console.log(session.whichBook)

    return (
        <li>
            <p>{session.whichBook}</p>
            <p>{session.duration}</p>
            <p>{session.summary}</p>
            <p>{session.keyMoment}</p>
            <p>{session.subText}</p>
            <p>{session.feeling}</p>
            <p>{session.freeNote}</p>
        </li>
    )
}