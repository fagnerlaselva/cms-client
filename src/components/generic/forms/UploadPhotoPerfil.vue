<template>
    <div class="row my-3">
        <label :for="inputId" class="col-sm-3 col-form-label text-md-end">
            <div class="upload-status text-sm-end" aria-label="Status de upload de imagem">
                {{ labelText }}:
            </div>
        </label>

        <div class="col-sm-8">
            <div class="profile-photo-thumbnail rounded-4 position-relative">
                <label class="profile-photo-upload bg-light-subtle rounded-4 float-start position-absolute"
                    :class="{ 'image-loaded': imageLoaded }" :style="backgroundImageStyle">
                    <div v-if="!imageLoaded" class="loading-overlay"></div>
                    <input class="custom-file-input" :class="inputClass" type="file" :id="inputId" :name="name"
                        :accept="accept" @click="clearSelection" @change="handleImageChange"
                        aria-label="Selecionar imagem para upload" />
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
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
            default: "profile-image"
        },
        accept: {
            type: String,
            default: "image/png, image/jpeg, image/webp"
        },
    },
    data() {
        return {
            imageUrl: '',
            imageLoaded: false,
            backgroundImageStyle: {
                'background-image': this.imageUrl ? `url(${this.imageUrl})` : 'none',
                'background-size': 'cover',
                'background-position': 'center'
            }
        };
    },
    methods: {
        uploadImage() { },
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
                    this.setBackgroundImage(reader.result);
                    this.imageLoaded = true; // Set imageLoaded state when image is loaded
                };
                reader.readAsDataURL(file);
            }
            this.$emit('imageLoaded', file)

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

.profile-photo-thumbnail {
    width: 155px;
    height: 155px;
}

.profile-photo-upload {
    width: 155px;
    height: 155px;
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
    /* Cor de fundo com opacidade */
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