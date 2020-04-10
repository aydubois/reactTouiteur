/******   FUNCTIONS API   **********/
import axios from 'axios'


    function sendTouit(e, messageArea, pseudonyme){
        e.preventDefault()
        e.stopPropagation()
    
        let queryString = "message=" + encodeURIComponent(messageArea) + "&name=" + encodeURIComponent(pseudonyme)
        queryString.toString()
        return axios.post('http://touiteur.cefim-formation.org/send', queryString, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(function () {
                return "Touit envoyé"
    
            })
            .catch(function () {
                return "Une erreur est survenue lors de l'envoi de ton Touit ... encore un coup d'Antho ..."
            })
    }

    function homeTouits() {
        let allTouits = []
        
        return axios.get('http://touiteur.cefim-formation.org/list')
            .then(function (response) {
    
                for (let i = (response.data.messages.length - 120); i < response.data.messages.length; i++) {
                        allTouits.push(response.data.messages[i])
                }
                return allTouits
            })
            .catch(function () {
                return "error" 
            })
    }





// /**
//  * Searchs for the most 5 influencers
//  * Add an event listener that calls the function clickInfluence()
//  * @param  {*} Object.keys(objectInflu) : names of influencers
//  */
// function influence() {
//     axios.get('http://touiteur.cefim-formation.org/influencers?count=5')
//         .then(function (response) {

//             let objectInflu = response.data.influencers
//             buttonsInfluenceur[0].textContent = Object.keys(objectInflu)[0]
//             buttonsInfluenceur[1].textContent = Object.keys(objectInflu)[1]
//             buttonsInfluenceur[2].textContent = Object.keys(objectInflu)[2]
//             buttonsInfluenceur[3].textContent = Object.keys(objectInflu)[3]
//             buttonsInfluenceur[4].textContent = Object.keys(objectInflu)[4]

//             if (nbEventInflu == 0) {

//                 buttonsInfluenceur[0].addEventListener("click", function () {
//                     clickInfluence(Object.keys(objectInflu)[0])
//                 })
//                 buttonsInfluenceur[1].addEventListener("click", function () {
//                     clickInfluence(Object.keys(objectInflu)[1])
//                 })
//                 buttonsInfluenceur[2].addEventListener("click", function () {
//                     clickInfluence(Object.keys(objectInflu)[2])
//                 })
//                 buttonsInfluenceur[3].addEventListener("click", function () {
//                     clickInfluence(Object.keys(objectInflu)[3])
//                 })
//                 buttonsInfluenceur[4].addEventListener("click", function () {
//                     clickInfluence(Object.keys(objectInflu)[4])
//                 })
//                 nbEventInflu++
//             }
//         })
//         .catch(function (error) {
//             buttonsInfluenceur[0].textContent = "Une erreur est survenue lors du chargement des influenceurs."
//             console.log(error);
//         })
//         .finally(function () {})
// }

// function searchCommentMostLike(id) {
//     let commentairesMostLike = document.querySelector('.mostLikeComm')

//     id = encodeURIComponent(id)
//     axios.get(`http://touiteur.cefim-formation.org/comments/list?message_id=${id}`)
//         .then(function (response) {
//             if (response.data.comments.length > 0) {
//                 commentairesMostLike.textContent = ""
//                 for (let i = 0; i < response.data.comments.length; i++) {
//                     // commentaires.textContent = ""
//                     let textComm = document.createElement('p')
//                     let br = document.createElement('br')
//                     let nameComm = document.createElement('span')
//                     let hr = document.createElement('hr')
//                     textComm.textContent = response.data.comments[i].comment
//                     nameComm.textContent = response.data.comments[i].name
//                     nameComm.style.fontStyle = 'italic'
//                     commentairesMostLike.appendChild(textComm)
//                     textComm.appendChild(br)
//                     commentairesMostLike.appendChild(nameComm)
//                     commentairesMostLike.appendChild(hr)
//                     // console.log(comments)
//                 }
//             } else {
//                 commentairesMostLike.textContent = "Pas encore de commentaires"
//                 commentairesMostLike.style.fontStyle = "italic"
//             }

//             let formComment = document.createElement("form")
//             formComment.id = "form"+id
//             let inputName = document.createElement("input")
//             inputName.value = "pseudo"
//             inputName.setAttribute("minlength", "3")
//             inputName.setAttribute("maxlength", "16")
//             inputName.setAttribute("required", "true")
//             formComment.appendChild(inputName)
//             let inputMsg = document.createElement("input")
//             inputMsg.value = "commentaires"
//             inputMsg.setAttribute("minlength", "3")
//             inputMsg.setAttribute("maxlength", "40")
//             inputMsg.setAttribute("required", "true")
//             formComment.appendChild(inputMsg)
//             let inputSubmit = document.createElement("input")
//             inputSubmit.type = "submit"
//             formComment.appendChild(inputSubmit)
//             commentairesMostLike.appendChild(formComment)
    
//             inputSubmit.addEventListener("click", submitComment)
//         })
//         .catch(function (error) {
//             commentairesMostLike.textContent = "Une erreur est survenu lors du chargement des commentaires"
//             console.log(error)
//         })
//         .finally(function () {})

// }



// /**
//  * Search for the most liked touit
//  * Ajax GET request
//  */
// function mostLike() {
//     let divLike = document.querySelector('.mostLike div')
//     let mostLikeName = document.getElementById('likeName')
//     let mostLikeMsg = document.getElementById('likeMsg')
//     let mostLikeNb = document.getElementById('likeNb')


//     axios.get('http://touiteur.cefim-formation.org/likes/top?count=1')
//         .then(function (response) {
//             divLike.id = response.data.top[0].id
//             mostLikeName.textContent = response.data.top[0].name
//             mostLikeMsg.textContent = response.data.top[0].message
//             mostLikeNb.textContent = response.data.top[0].likes
//             let like = document.querySelector(".mostLike button")

//             like.addEventListener('click', likeTouit, {
//                 once: true
//             })
//             searchCommentMostLike(response.data.top[0].id)


//         })
//         .catch(function (error) {
//             mostLikeMsg.textContent = "Une erreur est survenu lors du chargement du Touit."
//             console.log(error);
//         })
//         .finally(function () {})
// }

/**
 * Search most written words
 * Ajax GET request 
 * Calls the function showTrending()
 */
function trending(){

    return axios.get('http://touiteur.cefim-formation.org/trending?count=3')
    .then(function (response) {
        //tri des mots par nb de répétitions
        let sortable = [];
        for (let oneData in response.data) {
            sortable.push([oneData, response.data[oneData]]);
        }
        let sortData = sortable.sort(function (aa, bb) {
            return aa[1] - bb[1]
        })
        let reponse = [
            sortData[sortData.length - 1], 
            sortData[sortData.length - 2], 
            sortData[sortData.length - 3]
        ]

        return reponse
    })
    .catch(function () {
        return "error"
    })
}


/**
 * Research existing comments
 * @param {*} e => event 
 * Call newCommentMobile()
 */
function searchComment(id){

    return axios.get(`http://touiteur.cefim-formation.org/comments/list?message_id=${id}`)
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return "error"
        })

}


function submitComment(idTouit, messageArea, pseudonyme){
    
    let queryString = "message_id=" + encodeURIComponent(idTouit) + "&name=" + encodeURIComponent(pseudonyme) + "&comment=" + encodeURIComponent(messageArea)
    
    return axios.post(`http://touiteur.cefim-formation.org/comments/send`, queryString, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(function (response) {
            return response.data
        })
        .catch(function () {
            return "error"
        })
}

/**
 * function EventListener that sends a like
 * Ajax PUT request > params : id touit
 * @param {*} e  => event
 */
function likeTouit(idTouit){

    return axios.put('http://touiteur.cefim-formation.org/likes/send', 'message_id=' + idTouit)

        .then(function (response) {
            return response
        })
        .catch(function () {
            return "error"
        })
}

/**
 * function EventListener that sends a dislike
 * Ajax DELETE request > params : id touit
 * @param {*} e  => event
 */
function dislikeTouit(idTouit) {

    idTouit = encodeURIComponent(idTouit)
    return axios.delete('http://touiteur.cefim-formation.org/likes/remove', {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: 'message_id=' + idTouit
        })

        .then(function (response) {
            return response
        })
        .catch(function () {
            return "error"
        })
}
export {sendTouit, homeTouits, searchComment, likeTouit, dislikeTouit, submitComment, trending}