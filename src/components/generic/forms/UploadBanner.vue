<template>
    <div class="row my-3">
        <label :for="inputId" class="col-sm-3 col-form-label text-md-end">
            <div class="upload-status text-sm-end" aria-label="Status de upload de imagem">
                {{ labelText }}:
            </div>
        </label>
        <div class="col-sm-8">
            <label class="thubnail-member rounded-4 position-relative"
                :class="`custom-file-input-label ${imageLoaded ? 'image-loaded' : ''}`" :for="inputId"
                :style="backgroundImageStyle">

                <div v-if="!imageLoaded" class="loading-overlay"></div>
                <input class="custom-file-input" :class="inputClass" type="file" :id="inputId" :name="name"
                    :accept="accept" @click="clearSelection" @change="handleImageChange"
                    aria-label="Selecionar imagem para upload" />
            </label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        defaultImage: {
            type: String
        },
        labelText: {
            type: String,
            default: "Selecione uma imagem"
        },
        inputId: {
            type: String,
            required: true
        },
        inputClass: {
            type: String,
            default: "custom-file-input"
        },
        name: {
            type: String,
            default: "banner-image"
        },
        accept: {
            type: String,
            default: "image/png, image/jpeg, image/webp"
        }
    },
    data() {
        return {
            imagePreviewUrl: null,
            imageLoaded: false,
            backgroundImageStyle: null
        };
    },
    mounted() {
        this.setBackgroundImage(this.defaultImage)
    },
    methods: {
        clearSelection(event) {
            event.target.value = "";
        },
        handleImageChange(event) {
            this.imageLoaded = false; // Reset imageLoaded state
            const file = event.target.files[0];
            if (file) {
                if (!this.isValidFileType(file)) {
                    alert("Por favor, selecione um arquivo de imagem válido (PNG, JPEG ou WebP).");
                    return;
                }

                const reader = new FileReader();
                reader.onloadend = () => {
                    this.imagePreviewUrl = reader.result;
                    this.setBackgroundImage(reader.result);
                    this.imageLoaded = true; // Set imageLoaded state when image is loaded
                };
                reader.readAsDataURL(file);
                this.$emit('imageLoaded', file)
            }
        },
        isValidFileType(file) {
            const allowedTypes = ["image/png", "image/jpeg", "image/webp"];
            return allowedTypes.includes(file.type);
        },
        setBackgroundImage(imageUrl) {
            this.backgroundImageStyle = {
                'background-image': `url(${imageUrl})`,
                'background-size': 'cover',
                'background-position': 'center'
            };
        }
    }
};
</script>

<style scoped>
.custom-file-input {
    display: none;
    /* Oculta o campo de escolher arquivo */
}

.custom-file-input-label.image-loaded {
    width: 100%;
    /* Não precisa de nada aqui, vamos aplicar o estilo diretamente no componente */
}

.loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.loading-spinner {
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-top: 3px solid #007bff;
    /* Cor do spinner */
    border-radius: 50%;
    width: 30px;
    height: 30px;
    animation: spin 1s linear infinite;
    /* Animação de rotação */
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
