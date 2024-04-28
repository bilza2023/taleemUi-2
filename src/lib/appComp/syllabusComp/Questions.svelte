<script>
//@ts-nocheck
import { Card } from '$lib/cmp';
import {Icons,onMount } from '$lib/util';
export let tcode;
export let selectedQuestions;
    
    
function getTitle(question){
    
    if (question.name && question.name !== ''){
        return `${question.name} `;
    }else {
        let r = `Ex ${question.exercise} Q-${question.questionNo}`;
        if(question.part || question.part != 0){
            r+= ` pt ${question.part}`
        }
        return r;
    }
}


// $: totalExQuestion = questions.filter(question => question.exercise === selectedEx).length

</script>

<div class="bg-gray-700 p-2 m-2 rounded-md">
    <!-- <div class="text-center w-full">
    <button class="p-1 m-1 bg-gray-800 rounded-md "
    on:click={()=>showQs = !showQs}
    >
    Total Exercise Questions ({`${totalExQuestion}`})
    </button>
    </div> -->

<div class='flex  w-full justify-center  flex-wrap  '>
{#each selectedQuestions as question,index}    
    <!-- {#if question.exercise == selectedEx && question.status == 'final' } -->
    
            <div class='w-3/12'>

            <Card
            title = {getTitle(question)}
            icon={Icons.TEST}
            url = {`/player?tcode=${tcode}&id=${question._id}`}
            >

            </Card>
            </div>
{/each}
    </div>
    
</div>    