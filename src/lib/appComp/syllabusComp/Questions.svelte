<script>
//@ts-nocheck
import { Card } from '$lib/cmp';
import {Icons,toast,ajaxPost,API_URL } from '$lib/util';
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


</script>
{#if selectedQuestions.length <= 0 }
<div class="flex justify-center w-full">
    <h1 class="bg-stone-600 p-2 m-2 rounded-lg">No Question found!</h1>
</div>
{:else}
<div class='flex  bg-gray-700 p-2 m-2 rounded-md w-full justify-center  flex-wrap  '>

        {#each selectedQuestions as question,index}    
    
            <div class='w-3/12'>

            <Card
            title = {getTitle(question)}
            icon={Icons.TEST}
            url = {`/player?tcode=${tcode}&filename=${question.filename}`}
            >
             
            </Card>
            </div>
{/each}
</div>
{/if}