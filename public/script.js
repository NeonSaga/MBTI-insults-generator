const btn = document.getElementById("btn");
const insultText = document.getElementById("insult");
const mbtiSelect = document.getElementById("mbti");


btn.addEventListener("click", async()=> {
    try{
        const type = mbtiSelect.value;

        const res = await fetch(`/api/insult/${type}`);

        const data = await res.json();

        insultText.textContent = data.insult;
    }catch(error){
        insultText.textContent = "Something broke. Even your insult couldn't load.";
        console.error(error);
    }
})