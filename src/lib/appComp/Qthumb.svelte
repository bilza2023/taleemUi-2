<script>
    export let filename;
    export let name="";
    export let tcode;
  
    function getName() {
    let name2 = name && name !== "" ? name : filename;
    name2 = name2.replace(/_/g, ' ').substring(0, 35);
    return name2;
}

    let imageUrl = `https://taleem-media.blr1.cdn.digitaloceanspaces.com/images/qthumb/${filename}.png`;

    let defaultImageUrl = "https://taleem-media.blr1.cdn.digitaloceanspaces.com/images/qthumb/default.png";
  
    function handleError(event) {
      event.target.src = defaultImageUrl;
    }
  </script>

  <a href={`/player?tcode=${tcode}&filename=${filename}`} >
  <div class="border-2 border-gray-400 rounded-md p-1 m-1 bg-gray-800">
    <img 
      width="200px" 
      height="150px"  
      src={imageUrl} 
      alt="Not found" 
      on:error={handleError}
    />
    <p class="text-xs">&nbsp;{getName()}</p>
  </div>
</a>