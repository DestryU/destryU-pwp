function fadeOut() {
    const targetSection = document.getElementById('hellSection')

    targetSection.classList.add('fade-out')
}

function fadeIn() {
    const targetSection = document.getElementById('helloSection')
    targetSection.classList.add('fade-in')
}



function whoTitle() {
    const targetSection = document.getElementById('whoTitle')
    targetSection.classList.add('fade-out')
}
function whoContent() {
    const targetSection = document.getElementById('whoContent')
    targetSection.classList.add('fade-in')
}



function whatTitle() {
    const targetSection = document.getElementById('whatTitle')
    targetSection.classList.add('fade-out')
}
function whatContent() {
    const targetSection = document.getElementById('whatContent')
    targetSection.classList.add('fade-in')
}



function whereTitle() {
    const targetSection = document.getElementById('whereTitle')
    targetSection.classList.add('fade-out')
}
function whereContent() {
    const targetSection = document.getElementById('whereContent')
    targetSection.classList.add('fade-in')
}



function whyTitle() {
    const targetSection = document.getElementById('whyTitle')
    targetSection.classList.add('fade-out')
}
function whyContent() {
    const targetSection = document.getElementById('whyContent')
    targetSection.classList.add('fade-in')
}



function howTitle() {
    const targetSection = document.getElementById('howTitle')
    targetSection.classList.add('fade-out')
}
function howContent() {
    const targetSection = document.getElementById('howContent')
    targetSection.classList.add('fade-in')
}








function whatSection() {
    const targetSection = document.getElementById('whatSection')

    targetSection.innerHTML = `
        <div class="flex flex-col min-w-[18rem] max-w-[30rem] p-8">
            <button class="text-5xl text-neutral-800 opacity-0 text-center fade-0 pb-8" onclick="whatReset()">What?</button>
            <p class="text-neutral-800 text-center fade-1">The obvious question is:</p>
            <p class="text-neutral-800 text-center fade-2 pb-4">'What is Interactive Design?'</p>
            <p class="text-neutral-800 text-center fade-3">That's a good question...</p>
            <p class="text-neutral-800 text-center fade-4 pb-4">... and kind of hard to answer.</p>
            <p class="text-neutral-800 text-center fade-5 pb-4">If design is what happens when we reach out to the world around us, then...</p>
            <p class="text-neutral-800 text-center fade-6">I guess you could say that my job is making sure that the world reaches out to touch us </p>
            <p class="text-neutral-800 text-center fade-7">in <em>meaningful</em> and <strong>engaging</strong> ways.</p>
        </div>
        <img src="https://placehold.co/300x300" alt="placeholder" class=" p-8 fade-8">
    `
}

function whatReset() {

    const targetSection = document.getElementById('whatSection')
    targetSection.innerHTML = `
        <button class="self-center font-bold text-8xl px-16 text-neutral-800" onclick="whatSection()">What?</button>
    `
}



function whereSection() {
    const targetSection = document.getElementById('whereSection')

    targetSection.innerHTML = `
        <div class="flex flex-col min-w-[18rem] max-w-[30rem] p-8">
            <button class="text-5xl text-neutral-300 fade-0 pb-8" onclick="whereReset()">Where?</button>
            <p class="text-neutral-300 text-center fade-1 pb-4">Everywhere!</p>
            <p class="text-neutral-300 text-center fade-2 pb-4">And everything!</p>
            <p class="text-neutral-300 text-center fade-3 pb-4">If it was made <em>by</em> people, and it was made <em>for</em> people, then that means someone designed it!</p>
            <p class="text-neutral-300 text-center fade-4 pb-4">BUT</p>
            <p class="text-neutral-300 text-center fade-5">... not everyone is good at design.</p>
        </div>
        <div class="flex flex-col justify-center items-center max-w-fit p-8">
            <img src="Design.png" alt="placeholder" class="fade-6 p-8">
            <p class="text-neutral-300 text-justify max-w-[28rem] fade-7">"Good designs are hard, complex, and take a lot of time to get right. It should be no surprise that there's a lot of bad design in the world."</p>
            <p></p>
        </div>
    `
}

function whereReset() {

    const targetSection = document.getElementById('whereSection')
    targetSection.innerHTML = `
        <button class="self-center font-bold text-8xl px-16 text-neutral-300" onclick="whereSection()">Where?</button>
    `
}



function whySection() {
    const targetSection = document.getElementById('whySection')

    targetSection.innerHTML = `
      <div class="flex flex-col min-w-[18rem] max-w-[30rem] p-8">
        <button class="text-5xl text-neutral-800 fade-0 pb-8" onclick="whyReset()" >Why?</button>
        <p class="text-neutral-800 text-center fade-1 pb-4">Because bad design <em>REALLY</em> sucks.</p>
        <p class="text-neutral-800 text-center fade-2 pb-4">Think about the fiddly knobs,<br>the pull doors you try to push,<br>or the HaRd tO rEaD tExT you deal with.<br>Every. Single. Day.</p>
<!--        <p class="text-neutral-800 text-center fade-3 pb-4">Every. Single. Day.</p>-->
        <p class="text-neutral-800 text-center fade-4 pb-4">It feels awful.</p>
        <p class="text-neutral-800 text-center fade-5">But good design?</p>
        <p class="text-neutral-800 text-center fade-6 pb-4">Good design is invisible.</p>
        <p class="text-neutral-800 text-center fade-7 pb-4">No matter what you do, I can assure you that you don't want to be remembered as the product that didn't work, or the website that felt awful to use.</p>
        <p class="text-neutral-800 text-center fade-8 pb-4">We all need good design.</p>
        <p class="text-neutral-800 text-center fade-9">And I can help you with that.</p>
      </div>
      <img src="https://placehold.co/300x300" alt="placeholder" class="p-8 fade-10">
    `
}

function whyReset() {

    const targetSection = document.getElementById('whySection')
    targetSection.innerHTML = `
        <button class="self-center font-bold text-8xl px-16 text-neutral-800" onclick="whySection()">Why?</button>
    `
}



function howSection() {
    const targetSection = document.getElementById('howSection')

    targetSection.innerHTML = `
    
    <h1 class="text-white">Follow my work, support my projects, or contact me to chat</h1>
    
    <div class="w-[250px] h-[250px] bg-blue-500 p-3 rounded-3xl">
        <button>
            <img src="https://placehold.co/300x300" alt="">
        </button>
    </div>
    
    <div class="w-[250px] h-[250px] bg-blue-500 p-3 rounded-3xl">
        <button>
            <img src="https://placehold.co/300x300" alt="">
        </button>
    </div>
    
    <div class="w-[250px] h-[250px] bg-blue-500 p-3 rounded-3xl">
        <button>
            <img src="https://placehold.co/300x300" alt="">
        </button>
    </div>
    
    <div class="w-[250px] h-[250px] bg-blue-500 p-3 rounded-3xl">
        <button>
            <img src="https://placehold.co/300x300" alt="">
        </button>
    </div>
    
    <div class="w-[250px] h-[250px] bg-blue-500 p-3 rounded-3xl">
        <button>
            <img src="https://placehold.co/300x300" alt="">
        </button>
    </div>
    `
}



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