import AvatarMarkWebber from "./../assets/images/avatar-mark-webber.webp"
import AvatarAngelaGray from "./../assets/images/avatar-angela-gray.webp"
import AvatarJacob from "./../assets/images/avatar-jacob-thompson.webp"
import AvatarRizky from "./../assets/images/avatar-rizky-hasanuddin.webp"
import AvatarKimberly from "./../assets/images/avatar-kimberly-smith.webp"
import AvatarNathan from "./../assets/images/avatar-nathan-peterson.webp"
import AvatarAnnaKim from "./../assets/images/avatar-anna-kim.webp"
import ImageChess from "./../assets/images/image-chess.webp"

export interface Noti {
  unread: boolean
  name: string
  caption: string
  title?: string
  profileImgUrl: string
  msgBodyImg?: string
  msgBody?: string
  dateTime: string
}

export const notiList: Noti[] = [
  {
    unread: true,
    name: "Mark Webber",
    caption: "reacted to your recent post",
    profileImgUrl: AvatarMarkWebber,
    title: "My first tournament today!",
    dateTime: "1m ago"
  },
  {
    unread: true,
    name: "Angela Gray",
    caption: "followed you",
    profileImgUrl: AvatarAngelaGray,
    dateTime: "5m ago"
  },
  {
    unread: true,
    name: "Jacob Thompson",
    caption: "has joined your group",
    profileImgUrl: AvatarJacob,
    dateTime: "1 day ago",
    title: "Chess Club"
  },
  {
    unread: false,
    name: "Rizky Hasanuddin",
    caption: "sent you a private message",
    profileImgUrl: AvatarRizky,
    dateTime: "5 days ago",
    msgBody: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
  },
  {
    unread: false,
    name: "Kimberly Smith",
    caption: "commented on your picture",
    profileImgUrl: AvatarKimberly,
    dateTime: "1 week ago",
    msgBodyImg: ImageChess
  },
  {
    unread: false,
    name: "Nathan Peterson",
    caption: "reacted to your recent post",
    profileImgUrl: AvatarNathan,
    dateTime: "2 weeks ago",
    title: "5 end-game strategies to increase your win rate"
  },
  {
    unread: false,
    name: "Anna Kim",
    caption: "left the group",
    profileImgUrl: AvatarAnnaKim,
    dateTime: "2 weeks ago",
    title: "Chess Club"
  }
]