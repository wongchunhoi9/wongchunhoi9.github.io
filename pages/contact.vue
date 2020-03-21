<template>
    <b-container>
        <b-row>
            <b-col md="6">
                <div class="contact-info">
                    <p> email: <a href="mailto:wongchunhoi9@gmail.com">wongchunhoi9@gmail.com   </a> </p>
                </div>
            </b-col>
        </b-row>
    </b-container>

                
    
</template>

<script>
export default {
    head () {
        return {
            // title: "blog-wongchunhoi9"
            title: "contact wongchunhoi9",
            meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content: "email me at wongchunhoi9@gmail.com  " }
        ]
        }
        }
}
</script>