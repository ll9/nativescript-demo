<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>
        <StackLayout>
            <Button text="Previous" @tap="$navigateBack"></Button>
            <Button text="Abschicken"></Button>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        computed: {
            message() {
                return "Blank {N}-Vue app";
            }
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
