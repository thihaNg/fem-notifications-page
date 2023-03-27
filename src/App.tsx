import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import NotiList from './components/NotiList/NotiList'
import { Noti, notiList } from './data/Notification'

const TextStyleList: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}>
      <span className='heading'>Heading Text</span>
      <span className='badge'>Badge Text</span>
      <span className='name'>Name Text</span>
      <span className='caption'>Caption Text</span>
      <span className='date-time'>Date Time Text</span>
      <span className='paragraph'>Paragraph Text</span>
      <span className='title'>Title Text</span>
      <span className='text-btn'>Text Button Text</span>
    </div>
  )
}

function App() {

  const [notifications, setNotifications] = useState(notiList);
  let unreadCount = 0;
  notifications.forEach(noti => {
    if (noti.unread)
      unreadCount++;
  })

  return (
    <div>
      <div className="main">
        <Header
          unreadCount={unreadCount.toString()}
          onMarkAllReadClick={() => {
            const tmpNotiList: Noti[] = Object.assign([], notifications);

            setNotifications(tmpNotiList.map(tmpNoti => {
              const noti: Noti = Object.assign({}, tmpNoti);
              noti.unread = false;

              return noti;
            }));

          }} />
        <NotiList
          notiList={notifications} />
      </div>
    </div>
  )
}

export default App
