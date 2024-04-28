<svelte:head>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4279476755172786"
     crossorigin="anonymous"></script>
</svelte:head>

    
<script>
//@ts-nocheck
import {PageWrapper,HdgWithIcon,Centre} from '$lib/cmp';
import MathCard from '$lib/homePage/MathCard.svelte';
import {Icons,RESOURCE_URL,API_URL} from '$lib/util';
import Nav from '$lib/appComp/Nav.svelte';
import BooksImages from '$lib/homePage/BooksImages.svelte';



</script>

<Nav/>
<PageWrapper>

    <Centre>
        <HdgWithIcon bgColor='bg-stone-600' icon={Icons.BOOKS}> Your Online Home Tutor</HdgWithIcon>
    </Centre>


<Centre>
<div class="bg-gray-700 rounded-md w-full mx-8">
<div class='flex  justify-center gap-1   p-2 m-2'>

<BooksImages tcode='fbise9math' />

<BooksImages tcode='matrices' />
</div>
</div>


</Centre>

<br/>
<div class='flex justify-start m-2 p-2 '>
 <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Math Example Questions</HdgWithIcon>
</div>

<div class='flex justify-center flex-wrap gap-2 bg-gray-900 p-8 m-8 mt-1 rounded-md border-2 border-white'>
 
    <MathCard url= {`/player?tcode=fbise9math&id=659e87fa92faba116b079b76`} name='Ex 1.2 Q-1 pt 0'  />  

    <MathCard url="/player?tcode=fbise9math&id=659e880792faba116b079d96" name='Ex 1.4 Q-1 pt 0'  />  
    
    <MathCard url="/player?tcode=fbise9math&id=659e881192faba116b079ecd" name='Ex 1.5 Q-1 pt 0'  />  

    <MathCard url="/player?tcode=matrices&id=65aa9f91d403c62292b316bd" name='Matrix Multiplication'  />  

</div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<br/>

<br/>
<div class="text-xs">version 0.0.2</div>
</PageWrapper>
