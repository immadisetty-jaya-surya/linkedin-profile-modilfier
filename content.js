// const newProfilePicUrl = "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2021/05/jr-ntr-1-1621487357.jpg";
const newProfilePicUrl = "https://www.m9.news/wp-content/uploads/2024/01/JrNTR-Devara.jpg";

console.log('New profile picture URL:', newProfilePicUrl);

function replaceProfilePictures() {
    console.log('Replacing profile pictures with:', newProfilePicUrl);
    const profilepics = document.querySelectorAll('img');
    profilepics.forEach((img)=>{
        if(img.src.includes("profile") || img.alt.includes("profile")){
            console.log('Replacing image:', img.src);
            img.src = newProfilePicUrl
        }
    })
}

replaceProfilePictures();

const observer = new MutationObserver(replaceProfilePictures);
observer.observe(document.body, {childList:true,subtree:true});