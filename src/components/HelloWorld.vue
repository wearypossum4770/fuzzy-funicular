<template>
    <div>
{{message}}
    </div>
</template>

<script>
    export default {
        props:{
            message:{
                type:String,
                default:undefined
            }
        }
    }
</script>

<style>

</style>