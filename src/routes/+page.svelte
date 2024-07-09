    
<script>
//@ts-nocheck
import {PageWrapper,HdgWithIcon,Centre} from '$lib/cmp';
import {Icons,RESOURCE_URL,API_URL} from '$lib/util';
import NavBlog from '$lib/appComp/NavBlog.svelte';
import BooksImages from '$lib/homePage/BooksImages.svelte';
// import Qthumb from '$lib/appComp/Qthumb.svelte';

</script>

<NavBlog />
<PageWrapper>

    <Centre>
        <HdgWithIcon bgColor='bg-stone-600' icon={Icons.BOOKS}> Your Online Home Tutor</HdgWithIcon>
    </Centre>

 <Centre>
<div class="bg-gray-700 rounded-md w-full mx-8">
<div class='flex  justify-center gap-32    p-2 m-2'>

<!-- <BooksImages tcode='fbise9mathOld' /> -->
<BooksImages tcode='fbise9math' />
<!-- <BooksImages tcode='fbise9english' /> -->

</div>
</div>


</Centre> 


<div class='flex justify-start m-2 p-2 '>
    <HdgWithIcon bgColor='bg-stone-600' icon={Icons.TEST}>Math Example Questions</HdgWithIcon>
</div>


<div class='flex justify-center flex-wrap gap-4  '>


</div>    


<!-- <ExamplesCard /> -->

<br/>

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
