import ListedSession from '../components/ListedSession';
import SessionListForm from '../components/SessionListForm';
import '../styles/MyDiary.css';
import useLocalStorage from '../customHooks/useLocalStorage';
import StyledList from '../components/styledComponents/StyledList';

export default function MyDiary() {
  const [sessionList, SetSessionList] = useLocalStorage('SESSION_LIST', []);

  const AddToSessionList = (sessionToAdd) => {
    const SelectedListCopy = [...sessionList];
    SelectedListCopy.push(sessionToAdd);
    SetSessionList(SelectedListCopy);
  }

  const RemoveSession = (sessionToRemove) => {
    const SelectedListCopy = [...sessionList];
    const UpdatedSelectedListCopy = SelectedListCopy.filter(session => session.id !== sessionToRemove.id);
    SetSessionList(UpdatedSelectedListCopy);
  }

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <h1 style={{paddingBottom: '20px'}}>Vos notes de lectures</h1>
        <SessionListForm
          AddToSessionList={AddToSessionList} />
      </div>

      <h3 style={{ paddingLeft: '20px' }}>Historique de lecture</h3>
      <StyledList>
        {sessionList.length === 0 && "Pas de note"}
        {sessionList && sessionList.map((session) => {
          return <ListedSession
            session={session}
            key={session.id}
            RemoveSession={RemoveSession}
          />

        })}
      </StyledList>
    </>
  )
}