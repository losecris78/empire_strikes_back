document.addEventListener('DOMContentLoaded', function(){
    const character = document.querySelectorAll('[data-tab-button]');
    const info = document.querySelectorAll('[data-tab-id]');
    for (let i= 0; i < character.length; i++){
        character[i].addEventListener('click', function(selected){
            const abaAlvo = selected.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('characters__display__item--is-active');
            removeActive();
            selected.target.classList.add('characters__tabs__button--is-active');
        })
    }
    
})

document.getElementById('trailer').addEventListener('click',showTrailer);
document.getElementById('trailer').addEventListener('dblclick',closeIframe);

function showTrailer() {
  document.querySelector("iframe").style.display= "block";
};
function closeIframe(){
    document.querySelector("iframe").style.display= "none";
}

function removeActive(){
    const character = document.querySelectorAll('[data-tab-button]');

    for (let i=0; i< character.length;i++){
        character[i].classList.remove('characters__tabs__button--is-active');
        
    }
}

function escondeTodasAbas(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('characters__display__item--is-active');
    }
}