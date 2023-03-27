import "./Header.css"

type BadgeProps = {
  count: string
}

const Badge: React.FC<BadgeProps> = ({
  count
}) => {
  return (
    <div
      className="badge-wrapper">
      <span
        className="badge">{count}</span>
    </div>
  )
}

type HeaderProps = {
  unreadCount: string
  onMarkAllReadClick: () => void
}

const Header: React.FC<HeaderProps> = ({
  unreadCount,
  onMarkAllReadClick
}) => {

  return (
    <div
      className="header-container">
      <span
        className="heading">
        Notifications
      </span>
      <Badge
        count={unreadCount} />
      <span
        className="text-btn"
        onClick={onMarkAllReadClick}>
        Mark all as read
      </span>
    </div>
  )
}

export default Header;