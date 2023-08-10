import { ListedElement, Infos, } from './styledComponents/ListedElement';

export default function ListedSession({ session, listToShow }) {
    console.log(session)

    return (
        <ListedElement>
            <Infos>
                <p>{session.whichBook}</p>
                <p>{session.duration}</p>
                <p>{session.summary}</p>
                <p>{session.keyMoment}</p>
                <p>{session.subText}</p>
                <p>{session.feeling}</p>
                <p>{session.freeNote}</p>
            </Infos>
        </ListedElement>
    )
}