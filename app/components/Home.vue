<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>
        <StackLayout>
            <TextField hint="E-Mail" />
            <TextField hint="Password" />
            <Button text="Next" @tap="navigate"></Button>
        </StackLayout>
    </Page>
</template>

<script>
import Data from "./Data";

    export default {
        methods: {
            navigate() {
                this.$navigateTo(Data);
            }
        },
        computed: {
            message() {
                alert(this.Data)
                return "Blank {N}-Vue app";
            }
        },
        components: {
            Data
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables
    // Custom styles
    .fa {
        color: $accent-dark;
    }
    .info {
        font-size: 20;
    }
</style>
