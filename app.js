const reviews = [

    {
        name:"Szent Endre",
        job: "PHP fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae veritatis rerum asperiores illum qui aliquam. Delectus voluptatem perferendis quis unde asperiores eaque qui, voluptates eveniet iusto dolor enim temporibus tempore, laudantium est molestias voluptas ut accusamus dicta quas accusantium natus officiis rem! Quidem cupiditate quia reiciendis veritatis consequatur sit veniam nam facilis nobis eaque perspiciatis cum, sunt totam ab aspernatur aliquid illo dolore quo ipsa rem rerum ratione, tenetur corrupti quas! Earum quam quisquam neque, odit placeat nulla dolore, sunt maxime qui, aliquam atque est hic debitis. Doloremque odit ipsam voluptatum? Perspiciatis placeat quasi illo numquam. Vero doloribus fugiat hic ipsa nesciunt nobis minima numquam repudiandae ad itaque, vitae quisquam! Numquam odit eius illum suscipit officia nihil tempore dignissimos quidem ipsa quisquam dolorum commodi iure possimus voluptates unde rem, veritatis, molestias consequuntur ratione laborum maiores minus quae! Corporis numquam tenetur tempore iste asperiores, similique dolorem repudiandae voluptas! Fugit, sed."

    },

    {
        name:"Nagy Zsani",
        job: "Java fejlesztő",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae veritatis rerum asperiores illum qui aliquam. Delectus voluptatem perferendis quis unde asperiores eaque qui, voluptates eveniet iusto dolor enim temporibus tempore, laudantium est molestias voluptas ut accusamus dicta quas accusantium natus officiis rem! Quidem cupiditate quia reiciendis veritatis consequatur sit veniam nam facilis nobis eaque perspiciatis cum, sunt totam ab aspernatur aliquid illo dolore quo ipsa rem rerum ratione, tenetur corrupti quas! Earum quam quisquam neque, odit placeat nulla dolore, sunt maxime qui, aliquam atque est hic debitis. Doloremque odit ipsam voluptatum? Perspiciatis placeat quasi illo numquam. Vero doloribus fugiat hic ipsa nesciunt nobis minima numquam repudiandae ad itaque, vitae quisquam! Numquam odit eius illum suscipit officia nihil tempore dignissimos quidem ipsa quisquam dolorum commodi iure possimus voluptates unde rem, veritatis, molestias consequuntur ratione laborum maiores minus quae! Corporis numquam tenetur tempore iste asperiores, similique dolorem repudiandae voluptas! Fugit, sed." 
    },

    {
        name:"Török Bálint",
        job: "Tesztelő",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quae veritatis rerum asperiores illum qui aliquam. Delectus voluptatem perferendis quis unde asperiores eaque qui, voluptates eveniet iusto dolor enim temporibus tempore, laudantium est molestias voluptas ut accusamus dicta quas accusantium natus officiis rem! Quidem cupiditate quia reiciendis veritatis consequatur sit veniam nam facilis nobis eaque perspiciatis cum, sunt totam ab aspernatur aliquid illo dolore quo ipsa rem rerum ratione, tenetur corrupti quas! Earum quam quisquam neque, odit placeat nulla dolore, sunt maxime qui, aliquam atque est hic debitis. Doloremque odit ipsam voluptatum? Perspiciatis placeat quasi illo numquam. Vero doloribus fugiat hic ipsa nesciunt nobis minima numquam repudiandae ad itaque, vitae quisquam! Numquam odit eius illum suscipit officia nihil tempore dignissimos quidem ipsa quisquam dolorum commodi iure possimus voluptates unde rem, veritatis, molestias consequuntur ratione laborum maiores minus quae! Corporis numquam tenetur tempore iste asperiores, similique dolorem repudiandae voluptas! Fugit, sed." 
    }
]

//Használni kívant elemek eltarolasa valtozoba

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");


let current = 0;

window.addEventListener("load", ()=> {

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;

})

function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

nextBtn.addEventListener("click", () => {


    current++;

    if(current > reviews.length -1){

        current = 0;
    }

    showPerson(current);


    

})

prevBtn.addEventListener("click", () => {


    current--;

    if(current < 0){

        current = reviews.length -1;
    }

    showPerson(current);

})