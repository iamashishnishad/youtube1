// url "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=[YOUR_API_KEY]"


const api_key="AIzaSyDQQr3bsPCa-zBN-LYbkDUkcnjfctyvNOA";



let search = async () =>{
    try {
    let query = document.getElementById('query').value;

    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;

    let res = await fetch(url);

       let data = await res.json();
    // console.log(data);
    append(data.items);

    } catch (err){
        console.log(err);
    }
}; 


let append = (data)=>{

    let container = document.getElementById("results");
   
 //  console.log(data);
   
    data.forEach(({ id: {videoId}, snippet: {title}}) =>{

        // console.log(videoId);
        // console.log(title);

        let div = document.createElement('div');
        // let img = document.createElement('img');
        // img.src=thumbnails.defulturl

    let iframe = document.createElement('iframe');

    iframe.src=`https://www.youtube.com/embed/${videoId}`;
iframe.allow="fullscreen";   
     let h3 = document.createElement('h3');
       h3.innerText=title;
     div.append(iframe, h3);
     let video = {
         title,videoId,
     };


     div.onclick=() =>{
         playvideo();
     }
     container.append(div);

});



};

let playvideo =(video)=>{
    console.log(video)
    localStorage.setItem("video", JSON.stringify(video));
};
/*

<iframe width="560" height="315" src="https://www.youtube.com/embed/3KJI1WZGDrg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*/


