import type {Ref} from "vue";

interface StoreUser {
    isLoggedIn: Ref<boolean>;
    submit: () => void;
}

export const useUserStore = defineStore("storeUser", (): StoreUser => {
    const isLoggedIn = ref<boolean>(false);

    const submit = () => {
        isLoggedIn.value = !isLoggedIn.value;
        useRouter().push("/");
    };

    return {
        isLoggedIn,
        submit,
    };
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}