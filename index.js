// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;






async function main() {
 await liff.init({liffId: "1656546055-28k835bw"})
 const isFriend = await getFriend()
 if (!isFriend) {
   alert("แจ้งเตือน")
   window.location = "https://line.me/R/ti/p/@488flvw"
 } else {
   getUserProfile()
 }
}
main()

async function getFriend() {
  const friend = await liff.getFriendship()
  return friend.friendFlag
}