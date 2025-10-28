var ShowTextJS = document.querySelector(".ShowText");
var Text1JS = document.querySelector(".Text1");
var Text2JS = document.querySelector(".Text2");
var Text3JS = document.querySelector(".Text3");
var Text4JS = document.querySelector(".Text4");
var Text5JS = document.querySelector(".Text5");
var Text6JS = document.querySelector(".Text6");
Text1JS.addEventListener("click", () => {
    ShowTextJS.style.left = "50%";
    ShowTextJS.style.width = "90px";
})

Text2JS.addEventListener("click", () => {
    ShowTextJS.style.left = "55.8%";
    ShowTextJS.style.width = "103px";
})

Text3JS.addEventListener("click", () => {
    ShowTextJS.style.left = "62.1%";
    ShowTextJS.style.width = "103px";
})

Text4JS.addEventListener("click", () => {
    ShowTextJS.style.left = "68%";
    ShowTextJS.style.width = "90px";
})
Text5JS.addEventListener("click", () => {
    ShowTextJS.style.left = "73.2%";
    ShowTextJS.style.width = "94px";
})
Text6JS.addEventListener("click", () => {
    ShowTextJS.style.left = "78.6%";
    ShowTextJS.style.width = "147px";
})

let hidenArrowJS = document.querySelector(".hidenArrow");
let RightIcon1JS = document.querySelector(".RightIcon1");
let RightIcon2JS = document.querySelector(".RightIcon2");
let ChildDivJS = document.querySelector(".ChildDiv");
var CircleFirSidingBarJS = document.querySelector(".CircleFirSidingBar");
var nummer = 0;
RightIcon2JS.addEventListener("click", () => {
    nummer++;
    if (nummer == 1) {
        hidenArrowJS.style.bottom = "200px";
        ChildDivJS.style.left = "-107.3%";
        RightIcon1JS.style.opacity = 1;
        CircleFirSidingBarJS.style.top = "47%";
    }
    if (nummer == 2) {
        RightIcon2JS.style.opacity = '0.7';
        hidenArrowJS.style.bottom = "120px";
        ChildDivJS.style.left = "-215%";
        CircleFirSidingBarJS.style.top = "89%";
    }
})
RightIcon1JS.addEventListener("click", () => {
    nummer--;
    if (nummer == 0) {
        hidenArrowJS.style.bottom = "52px";
        ChildDivJS.style.left = "0%";
        RightIcon1JS.style.opacity = '0.7';
        CircleFirSidingBarJS.style.top = "2%";
    }
    if (nummer == 1) {
        hidenArrowJS.style.bottom = "200px";
        ChildDivJS.style.left = "-107.3%";
        RightIcon2JS.style.opacity = 1;
        CircleFirSidingBarJS.style.top = "47%";
    }
    if (nummer == 2) {
        RightIcon2JS.style.opacity = '0.7';
        hidenArrowJS.style.bottom = "120px";
        ChildDivJS.style.left = "-215%";
        CircleFirSidingBarJS.style.top = "89%";
    }
})

function ForJJs() {
    let ForJSJS = document.querySelector(".ForJS");
    ForJSJS.style.display = "block";
    setTimeout(() => {
        ForJSJS.style.opacity = 1;
    }, 200);
    setTimeout(() => {
        ForJSJS.style.opacity = 0;
        setTimeout(() => {
            ForJSJS.style.display = "none"
        }, 1200);
    }, 1300);
}
var nummber = 0;
let grandchild1JS = document.querySelector(".grandchild1");
grandchild1JS.addEventListener("mouseover", () => {
    nummber++;
    if (nummber == 1) {
        ForJJs();
    }
})
let grandchild2JS = document.querySelector(".grandchild2");
let grandchild3JS = document.querySelector(".grandchild3");
let SlidingBarJS = document.querySelector(".SlidingBar");
let MainDivJS = document.querySelector(".MainDiv");
let Text1GrandChild1JS = document.querySelector(".Text1GrandChild1");
let LoremIpsumTextgrandchild1JS = document.querySelector(".LoremIpsumTextgrandchild1");
let HighlightTextgrandchild1JS = document.querySelector(".HighlightTextgrandchild1");

function SlidingBarPart0() {
    grandchild2JS.style.display = "none";
    grandchild3JS.style.display = "none";
    ChildDivJS.style.width = "1322px";
    grandchild1JS.style.left = "49px"
}

function SlidingBarPart1() {
    SlidingBarJS.style.left = "-10%";
    RightIcon1JS.style.right = "-50%";
    RightIcon2JS.style.right = "-50%";
    Text1GrandChild1JS.style.left = "-60%";
    LoremIpsumTextgrandchild1JS.style.left = "-60%";
    HighlightTextgrandchild1JS.style.left = "-60%";
    grandchild1JS.style.borderRadius = "0px";
    setTimeout(() => {
        grandchild1JS.style.left = "-24%"
        setTimeout(() => {
            grandchild1JS.style.width = "1930px";
            grandchild1JS.style.height = "936px";
        }, 1300);
    }, 1000);
}

function grandchild1part2() {
    grandchild1JS.style.top = "-27.3%";
}
var nummberJs = 0;
grandchild1JS.addEventListener("click", () => {
    nummberJs++;
    console.log(nummberJs);
})
grandchild1JS.addEventListener("click", () => {
    if (nummberJs == 1) {
        SlidingBarPart0();
        setTimeout(() => {
            MainDivJS.style.overflow = "visible"
        }, 5);
        setTimeout(() => {
            SlidingBarPart1();
        }, 20);
        setTimeout(() => {
            grandchild1part2();
        }, 100);
    }
})

// Behind the scenes
// پشت پرده 

let TextSCHOLARJS = document.querySelector(".Text-SCHOLAR");
let nummberBehindTheScenes = 0;
TextSCHOLARJS.addEventListener("click", () => {
    nummberBehindTheScenes++;
    console.log(nummberBehindTheScenes)
    if (nummberBehindTheScenes == 1) {
        TextSCHOLARJS.style.cursor = "pointer";
    }
    if (nummberBehindTheScenes == 3) {
        const UserInput = prompt("Type your idea : ")
        if (UserInput === "پشت پرده") {
            setTimeout(() => {
                hidenArrowJS.style.backgroundColor = "rgba(0, 0, 0, 0.363)";
                ChildDivJS.style.backgroundColor = "rgba(0, 0, 0, 0.616)";
                MainDivJS.style.overflow = "visible";
                let MainDiv1JS = document.querySelector(".MeinDiv1");
                MainDiv1JS.style.overflow = "visible"
            }, 100);
        }
    }
    if (nummberBehindTheScenes == 6) {
        location.reload();
    }
})