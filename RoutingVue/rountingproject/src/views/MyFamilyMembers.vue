<template>
    <div>
        <h1>This is My Family Members Page</h1>
        <div v-for="x in members" class="members">
            <ul>
                <li>{{ x.name  + " - "+ x.yas }}</li>
            </ul>


        </div>
        <!-- <ul>
            <li>Abdullah</li>
            <li>Halime</li>
            <li>Murat</li>
            <li>Jiyan</li>
            <li>Rojda</li>
            <li>Fırat</li>
            <li>Viyan</li>
            <li>Sema</li>
        </ul> -->
    </div>
</template>


<script>
 export default{
    data() {
        return {
            members :[

          
            ]
        }
    },
    mounted() {
        fetch('http://localhost:3000/myFamily').then(res => res.json()).then(data => this.members=data)
    },
    
    name : 'MyFamilyMembers' ,
    
    comments: {

    },
    mounted

 }

</script>