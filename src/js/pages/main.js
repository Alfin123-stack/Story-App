import Stories from "../network/stories";
import CheckUserAuth from "./stories/auth/check-user-auth";

const main ={
    async init(){
        CheckUserAuth.checkLoginState()
        await this._initialData();
    },

    async _initialData(){
        const dataStories = await Stories.getAll();

        this._addCardToMain(dataStories.listStory);

    },
    _addCardToMain(userStories){
        const cardStoriesContainer = document.querySelector("#container-cardStories");

        userStories.forEach(story => {
            cardStoriesContainer.innerHTML += this._templateLoading();
        });

        setTimeout(() => {
            cardStoriesContainer.innerHTML = "";
            userStories.forEach(story => {
                cardStoriesContainer.innerHTML += this._templateCardMain(story);
            });
        }, 2000);
    },
    _templateCardMain(userStories) {
        return `
        <div class="col-md-3">
            <div class="card mb-3 bg-dark text-bg-dark ref-card p-overflow">
            <img src="${userStories.photoUrl}" class="card-img-top img-center-cover img-h" alt="...">
            <div class="card-body p-overflow">
                <p class="card-text text-muted">${userStories.createdAt}</p>
                <h5 class="card-title">${userStories.name}</h5>
                <p class="card-text p-overflow">
                    ${userStories.description}
                </p>
            </div>
            </div>
        </div>
        `;
    },

    _templateLoading(){
        return `
        <div class="col-md-3">
            <div class="spinner-border" role="status" style="width: 100px; height: 100px;">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
      `
    }


}

export default main;

