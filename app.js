document.documentElement.setAttribute('data-theme', 'light');

const arr = ["agnik ", "rishi ", "ankit ", "disha ", "neha ", "salini ", "dipankar ", "abhrojit ", "abhrajit ", "ahana ", "aahaanaa ", "ahanaa ", "aahaanaa ", "aaahaaanaaa ", "gayatri "];
const arr2 = ["agnik", "rishi", "ankit", "disha", "neha", "salini", "dipankar", "abhrojit", "abhrajit", "ahana", "aahaanaa", "ahanaa", "aahaanaa", "aaahaaanaaa", "gayatri"]
//input-text

const inputtext = document.getElementById("inputtext");
const input = inputtext.value.trim().toLowerCase();
const namee = document.getElementById("name");
const name2 = document.getElementById("name2");
const name3 = document.getElementById("name3");


//buttons
const bt1 = document.getElementById("bt1");
const bt2 = document.getElementById("bt2");
const bt3 = document.getElementById("bt3");
const bt4 = document.getElementById("bt4");

const bt5 = document.getElementById("bt5");
const bt6 = document.getElementById("bt6");
const bt7 = document.getElementById("bt7");
const bt8 = document.getElementById("bt8");
const bt9 = document.getElementById("bt9");
const bt10 = document.getElementById("bt10");

//pages
const p1 = document.getElementById("page1");
const p2 = document.getElementById("page2");
const p3 = document.getElementById("page3");
const p4 = document.getElementById("page4");
const p5 = document.getElementById("page5");

//sp
const sp1 = document.getElementById("spage1");
const sp2 = document.getElementById("spage2");
const sp3 = document.getElementById("spage3");
const sp4 = document.getElementById("spage4");
const sp5 = document.getElementById("spage5");
const sp6 = document.getElementById("spage6");




bt1.addEventListener("click", () => {
    const input = inputtext.value.trim().toLowerCase(); // Remove spaces from the input

    if (input === "") {
        alert("Please, Enter your name!");
    } else {
        // Check if the input exists in either of the arrays (with extra spaces removed)
        if (arr.some(name => name.trim().toLowerCase() === input) || arr2.includes(input)) {
            sp1.style.display = "block";
            namee.innerHTML = inputtext.value.trim();
            p1.style.display = "none";
        } else {
            p1.style.display = "none";
            p2.style.display = "block";
        }
    }
});
bt2.addEventListener("click", () => {
    p3.style.display = "block";
    p2.style.display = "none";

})
bt3.addEventListener("click", () => {
    p4.style.display = "block";
    p3.style.display = "none";

})
bt4.addEventListener("click", () => {
    p5.style.display = "block";
    p3.style.display = "none";

})
bt5.addEventListener("click", () => {
    sp2.style.display = "block";
    name2.innerHTML = inputtext.value.trim();
    sp1.style.display = "none";

})
bt6.addEventListener("click", () => {
    sp3.style.display = "block";
    name3.innerHTML = inputtext.value.trim();
    sp2.style.display = "none";

})
bt7.addEventListener("click", () => {
    sp4.style.display = "block";
    sp3.style.display = "none";

})
bt8.addEventListener("click", () => {
    sp4.style.display = "block";
    sp3.style.display = "none";

})
let count = 0;
const number = +917003078203;
const message = "hello, Agnik I am";
bt9.addEventListener("click", () => {
    count++;
    if (count > 0) {
        const whatsappURL = `https://wa.me/${number}?text=${encodeURIComponent(message)} ${encodeURIComponent(inputtext.value)}`;
        window.open(whatsappURL, "_blank");


        var params = {
            name: inputtext.value.trim(),
            ans: "yess"
        }

        emailjs.send('service_4hh5wqb', 'template_rrmzlfg', params).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );
    }
    sp4.style.display = "none";
    sp5.style.display = "block"
})
const message2 = "Aise Ghost, maat kia kro nh madam!";

emailjs.init("ojDVnOOa-KEi24bad");

bt10.addEventListener("click", () => {
    count++;
    if (count > 0) {
        const whatsappURL = `https://wa.me/${number}?text=${encodeURIComponent(message2)}`;
        window.open(whatsappURL, "_blank");




        var params = {
            name: inputtext.value.trim(),
            ans: "no"
        }

        emailjs.send('service_4hh5wqb', 'template_rrmzlfg', params).then(
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );
    }
    sp4.style.display = "none";
    sp6.style.display = "block";
})