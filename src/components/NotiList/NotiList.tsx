import { Noti, notiList } from "../../data/Notification"
import "./NotiList.css"

const RedDot: React.FC = () => {
  return (
    <div
      className="red-dot">

    </div>
  )
}

type NotiItemProps = {
  noti: Noti
}

const NotiItem: React.FC<NotiItemProps> = props => {
  return (
    <div
      className={`noti-item-container ${props.noti.unread? "unread-noti" : ""}`}>
      <img
        className="profile"
        src={props.noti.profileImgUrl}
        alt="Profile Image" />
      <div className="noti-info-container">
        <div
          className="noti-info">
          <span
            className="name">{props.noti.name}</span>
          <span
            className="caption">{props.noti.caption}</span>
          {
            props.noti.title &&
            <span
              className="title">{props.noti.title}</span>
          }
          {
            props.noti.unread &&
            <RedDot />
          }
        </div>
        <span
          className="date-time margin-top-6">{props.noti.dateTime}</span>
        {
          props.noti.msgBody &&
          <div
            className="msg-body margin-top-12">
            <span
              className="paragraph">{props.noti.msgBody}</span>
          </div>
        }
      </div>
      {
        props.noti.msgBodyImg &&
        <img
          className="msg-body-img"
          src={props.noti.msgBodyImg}
          alt="Message Body Image" />
      }
    </div>
  )
}

type NotiListProps = {
  notiList: Noti[]
}

const NotiList: React.FC<NotiListProps> = ({
  notiList
}) => {

  return (
    <div
      className="noti-list">
      {
        notiList.map((noti, index) => {
          return (
            <NotiItem
              key={index}
              noti={noti} />
          )
        })
      }
    </div>
  )
}

export default NotiList;