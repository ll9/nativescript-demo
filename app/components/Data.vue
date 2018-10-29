<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>
        <StackLayout>
            <TextField hint="Ort" />
            <TextField hint="Straße" />
            <TextField hint="Hausnummer" />
            <Button text="Previous" @tap="$navigateBack"></Button>
            <Button text="Weiter" @tap="navigate"></Button>
        </StackLayout>
    </Page>
</template>

<script>
import FinalPage from './FinalPage';

    export default {
        computed: {
            message() {
                return "Blank {N}-Vue app";
            }
        },
        methods: {
            navigate() {
                // alert("bla")
                this.$navigateTo(FinalPage);
            }
        },
        components: {
            FinalPage,
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
