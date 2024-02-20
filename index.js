const likeClick = document.getElementById("like-click")
const likeClickGustave = document.getElementById("like-click-gustave")
const likeClickDucreux = document.getElementById("like-click-ducreux")

const likes = document.getElementById("likes")
const likesGus = document.getElementById("likes-gus")
const likesDuc = document.getElementById("likes-duc")

let isLiked = false

const handleLikeClick = (likesElement) => {
    let currentLikes = parseInt(likesElement.textContent.replace(/\D/g, ''), 10)
    isLiked ? currentLikes-- : currentLikes++
    likesElement.textContent = `Likes: ${currentLikes}`
    isLiked = !isLiked
}



likeClick.addEventListener("click", () => handleLikeClick(likes))
likeClickGustave.addEventListener("click", () => handleLikeClick(likesGus))
likeClickDucreux.addEventListener("click", () => handleLikeClick(likesDuc))
