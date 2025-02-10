const cursor = document.querySelector(".cursor")
const outerCursor = document.querySelector(".outer-cursor")

document.addEventListener('mousemove', (e) => {
    // main center cursor

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    setTimeout(() => {
        outerCursor.style.left = e.clientX + 'px';
        outerCursor.style.top = e.clientY + 'px';
    }, 80)
})

// Onclick scale effect

document.addEventListener("mousedown", (e) => {
    // cursor.style.scale = 1.5;
    cursor.style.transition = ".15s ease";
    cursor.style.transform = " translate(-50%,-50%) scale(1.5)";

    // outer circle

    // 
    // Scale and transform pproperty ek sath nhi de sakte isliye transform me hi scale ko de do
    // 

    // outerCursor.style.scale = 1.3;
    outerCursor.style.transition = ".15s ease";
    outerCursor.style.transform = " translate(-50%,-50%) scale(1.3)";
})

document.addEventListener("mouseup", (e) => {
    cursor.style.transform = "translate(-50%,-50%)  scale(1)";
    outerCursor.style.transform = "translate(-50%,-50%)  scale(1)";
    outerCursor.style.transition = ".15s ease";
})



