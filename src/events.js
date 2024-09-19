function fadeOut() {
    const targetSection = document.getElementById('hellSection')

    targetSection.classList.add('fade-out')
}
window.fadeOut = fadeOut

function fadeIn() {
    const targetSection = document.getElementById('helloSection')
    targetSection.classList.add('fade-in')
}
window.fadeIn = fadeIn


function whoContent() {
    const targetSection = document.getElementById('whoContent')
    targetSection.classList.add('fade-in')
}
window.whoContent = whoContent



function whatTitle() {
    const targetSection = document.getElementById('whatTitle')
    targetSection.classList.add('fade-out')
}
window.whatTitle = whatTitle

function whatContent() {
    const targetSection = document.getElementById('whatContent')
    targetSection.classList.add('fade-in')
}
window.whatContent = whatContent


function whereTitle() {
    const targetSection = document.getElementById('whereTitle')
    targetSection.classList.add('fade-out')
}
window.whereTitle = whereTitle

function whereContent() {
    const targetSection = document.getElementById('whereContent')
    targetSection.classList.add('fade-in')
}
window.whereContent = whereContent



function whyTitle() {
    const targetSection = document.getElementById('whyTitle')
    targetSection.classList.add('fade-out')
}
window.whyTitle = whyTitle

function whyContent() {
    const targetSection = document.getElementById('whyContent')
    targetSection.classList.add('fade-in')
}
window.whyContent = whyContent



function howTitle() {
    const targetSection = document.getElementById('howTitle')
    targetSection.classList.add('fade-out')
}
window.howTitle = howTitle

function howContent() {
    const targetSection = document.getElementById('howContent')
    targetSection.classList.add('fade-in')
}
window.howContent = howContent


function sillyMessages() {
    let i = Math.floor(Math.random() * 11)
    console.log(i)
    let messages = [
        "Stop",
        "Stoppit!",
        "Too slow",
        "Nuh-uh",
        "You missed",
        "Don't",
        "Nope",
        "Don't try",
        "Told you",
        "No more",
        ":P"
    ]
    return messages[i]
}
window.sillyMessages = sillyMessages


function sillyOffset() {
    const targetSection = document.getElementById('keepAway')

    let i = Math.floor(Math.random() * 11)

    let temp = [
        "translate-x-[185px] translate-y-[22px]",
        "translate-x-[4px] translate-y-[132px]",
        "translate-x-[153px] translate-y-[160px]",
        "translate-x-[101px] translate-y-[209px]",
        "translate-x-[110px] translate-y-[191px]",
        "translate-x-[204px] translate-y-[80px]",
        "translate-x-[19px] translate-y-[4px]",
        "translate-x-[36px] translate-y-[37px]",
        "translate-x-[96px] translate-y-[150px]",
        "translate-x-[170px] translate-y-[213px]",
        "translate-x-[204px] translate-y-[116px]",
        "translate-x-[18px] translate-y-[36px]"
        ]

    targetSection.innerHTML = `
        <button onmouseenter="sillyOffset()" onclick="sillyOffset()" class="bg-neutral-800 text-neutral-300 max-w-fit h-fit p-3 rounded-2xl z-[9999] ${temp[i]}">${sillyMessages()}</button>
    `
}
window.sillyOffset = sillyOffset