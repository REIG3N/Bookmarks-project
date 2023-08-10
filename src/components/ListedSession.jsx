import { ListedElement, Infos, Title, } from './styledComponents/ListedElement';
import { DeleteBtn, OpenBtn } from './styledComponents/Btn';
import { useState } from 'react';
import close_menu from '../../public/close_menu.svg';
import ShowDiv, { DarkBG, FormHeader, SessionTextDiv, SessionText } from './styledComponents/FormDiv';

export default function ListedSession({ RemoveSession,session }) {
    const [showSession, SetShowSession] = useState(false);

    const ShowSession = (stateToChange, SetStateToChange) => {
        !stateToChange ? SetStateToChange(true) : SetStateToChange(false)
    }

 
    return (
        <>
            <ListedElement>
                <Infos>
                    <Title>{session.whichBook}</Title>
                    <p>{session.duration}</p>
                </Infos>
                <OpenBtn onClick={(e) => { ShowSession(showSession, SetShowSession) }}>Voir la note</OpenBtn>
            </ListedElement>
            <DarkBG style={{ display: showSession ? 'block' : 'none' }}>
                <ShowDiv style={{ display: showSession ? 'block' : 'none' }} >
                    <FormHeader >
                        <h3 style={{ margin: 'auto' }}>Note sur {session.whichBook}</h3>
                        <button onClick={(e) => { ShowSession(showSession, SetShowSession) }} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}><img src={close_menu} style={{ width: '20px', height: '20px', }} /></button>
                    </FormHeader>

                    <SessionTextDiv style={{ display: session.duration.length === 0 ? 'none' : 'block' }}>
                        <p>Durée de la lecture :</p>
                        <SessionText>{session.duration}</SessionText>
                    </SessionTextDiv>

                    <SessionTextDiv style={{ display: session.summary.length === 0 ? 'none' : 'block' }}>
                        <p>Résumé de votre session :</p>
                        <SessionText>{session.summary}</SessionText>
                    </SessionTextDiv>

                    <SessionTextDiv style={{ display: session.keyMoment.length === 0 ? 'none' : 'block' }}>
                        <p>Passages marquant :</p>
                        <SessionText>{session.keyMoment}</SessionText>
                    </SessionTextDiv>

                    <SessionTextDiv style={{ display: session.subText.length === 0 ? 'none' : 'block' }}>
                        <p>Sous-texte/Thème abordés :</p>
                        <SessionText>{session.subText}</SessionText>
                    </SessionTextDiv>

                    <SessionTextDiv style={{ display: session.feeling.length === 0 ? 'none' : 'block' }}>
                        <p>Ressenti par rapport au texte :</p>
                        <SessionText>{session.feeling}</SessionText>
                    </SessionTextDiv>

                    <SessionTextDiv style={{ display: session.freeNote.length === 0 ? 'none' : 'block' }}>
                        <p>Notes libres :</p>
                        <SessionText>{session.freeNote}</SessionText>
                    </SessionTextDiv>
                    
                    <DeleteBtn onClick={() => RemoveSession(session)}>Supprimer la note</DeleteBtn>
                </ShowDiv>
            </DarkBG>



        </>

    )
}