
<script setup lang="ts">
import { ref } from 'vue';


const items = ref<number[]>(Array.from({length:30},(_,v) => v+1));
async function api():Promise<number[]> {
    return new Promise(resolve=>{
        
        setTimeout(() => {
            resolve(Array.from({length:10},(_,v:number) => 1+ (items.value.at(-1) as number) + v ))
        }, 1000);
    })
}


async function load({done}:any) {
    const res:number[] = await api();

    items.value.push(...res)
    done();
}

</script>

<template>
    <v-infinite-scroll :height="300" :items="items" :onLoad="load">
        <template v-for="(item, index) in items" :key="item">
            <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
            Item number #{{ item }}
            </div>
        </template>
    </v-infinite-scroll>
</template>
