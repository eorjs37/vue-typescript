
<script setup lang="ts">
import { ref } from 'vue';

enum USER_TYPE{
    MASTER=1,
    USER=2,
    GUEST=3
}

const userType = ref<USER_TYPE>(USER_TYPE.MASTER);


</script>
<template>
    <section>
    <div class="user_type">
        {{ userType }}
    </div>
    </section>
</template>
