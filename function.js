// console.log('hello js')

const loadPhtube = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const news = data.data;
    // console.log(news);

    const newsTabMenu = document.getElementById('news-body-menu');
    // newsTabMenu.textContent="";
    news.forEach((newsmenu)=>{
        const newsMenuLi = document.createElement('li');
        newsMenuLi.innerHTML = `
            <a onclick="displyPhtube('${newsmenu.category_id}')"> ${newsmenu.category} </a>
        `;
        newsTabMenu.appendChild(newsMenuLi);
    });
    
}

const displyPhtube = async(id)=>{
    // console.log(id)
   const res= await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
   const data = await res.json();
//    console.log(data);
   const newsContainer = document.getElementById('news-container');
   newsContainer.textContent = "";

   const noNewsDataShow = document.getElementById('no-data-show');
   noNewsDataShow.textContent = "";
   //check data.data length is 0,
//    displaySort(data.data);
   if(data.data.length === 0){
    const div = document.createElement('div');
    div.classList = `pt-30 flex flex-col justify-center items-center text-center`;
    div.innerHTML =`
    <img class="h-56 w-56" src="img/Icon.png" alt="">
    <h1 class="pt-8 text-3xl text-gray-900 font-bold leading-10"> Oops!! Sorry, There is no <br> content here </h1>
    `;
    noNewsDataShow.appendChild(div);
   }
   else{
   data.data.forEach((news)=>{
    // displaySort(news);
    const minute = Math.floor(news.others.posted_date / 60);
    const hours = Math.floor(minute / 60); 
    const minutes = Math.floor(minute -(hours*60));
   

    const div = document.createElement('div');
    div.innerHTML =`
        <div class="card w-80 lg:w-72 bg-base-100 shadow-xl">
            <figure><img class="bg-cover" src="${news.thumbnail}" alt="Shoes" />
            
            ${news.others.posted_date > 0 ?
            `<p class=" absolute bg-zinc-600 text-white px-1 py-2 rounded-lg ml-48 lg:ml-49 mt-32 text-xs"> ${hours} hr : ${minutes} mins </p>` :'' }
            </figure>

            <div class=" flex gap-2 px-2 py-2">

            <div class="">
                <img class="h-12 w-12 rounded-full flex-start" src="${news.authors[0].profile_picture}" alt="" />
            </div>
            <div>
                <h2 class="card-title text-lg">${news.title}</h2>
                <div class=" flex items-center gap-2 pt-1"> 
                <p>${news.authors[0].profile_name} </p> <p>${news.authors[0].verified === true ? `<img class="h-6 w-6" src="./img/fi_10629607.svg" alt="">` : ""} </p> </div>
                <p class=" py-2">${news.others.views}</p>
            </div>
            
            </div>
        </div>
    `
    newsContainer.appendChild(div);
    displaySort(news);
   });
}

}
const displaySort=(news)=>{
//  console.log('hello')
const newData = parseInt(news.others.views)
console.log(newData);
};
loadPhtube();
displyPhtube(1000);
