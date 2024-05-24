<template>
    <div class="sidebar-article p-2 pb-4 position-relative d-flex flex-column flex-shrink-0">
        <div class="mb-auto">
            <div class="row mt-4">
                <strong class="caption text-primary-emphasis">
                    Autores
                </strong>
                <div class="py-2">
                    <img src="https://avatars.githubusercontent.com/u/34191081?v=4" class="rounded-circle"
                        alt="Fagner Mendes" height="24" width="24">
                    <span class="px-2">Fagner Mendes</span>
                </div>
                <span class=" span-add">Adicionar outro</span>
            </div>

            <div class="row mt-4">
                <strong class="caption text-primary-emphasis">
                    Categoria do post
                </strong>
                <div class="col p-2">
                    <span class="badge p-3 " disabled aria-label="Close">Marketing</span>
                    <span class="badge p-3">Mailing</span>
                    <span class="badge p-3">Mailing List</span>
                </div>
                <span class="mt-3 span-add"> Adicionar outra</span>
            </div>

            <div class="row mt-4">
                <strong class="caption text-primary-emphasis">
                    Estátistica
                </strong>
                <div class="col">
                    <strong>766</strong>
                    <span> Palavras</span>
                </div>
                <div>
                    <strong>4.443</strong>
                    <span> Caracteres</span>
                </div>
                <div class="col">
                    <span>Tempo de leitura 8 min</span>
                </div>
            </div>

            <div class="row mt-4">
                <div class="col">
                    <div class="row">
                        <strong class="caption text-primary-emphasis">
                            Criado
                        </strong>
                        <span class="date">
                            30/01/2024 às 4:03
                        </span>
                    </div>
                </div>
                <div class="col">
                    <div class="row">
                        <strong class="caption text-primary-emphasis">
                            Editado
                        </strong>
                        <span class="date">
                            30/01/2024 às 6:23
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-grid gap-3 col-12 mx-auto align-self-stretch">
            <button class="btn btn-primary" type="button">Publicar</button>
        </div>
    </div>
</template>

<style scoped>
.span-add {
    color: var(--bs-primary-rgb);
    font-size: 0.9rem;
    cursor: pointer
}

.sidebar-article {
    width: 100%;
    max-width: 340px;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
}

.sidebar-article strong.caption {
    font-weight: 500;
    font-size: 1rem;
    color: var(--bs-primary-text-emphasis);
}

.sidebar-article .badge {
    margin-right: 0.8rem;
    background: var(--bs-primary-o-course);
    color: var(--bs-gray-dark);
    font-size: 13px;
    font-weight: 400;
}

.sidebar-article span {
    font-size: 0.9rem;
}
</style>
<script>

export default {
    name: 'SidebarArticle',
}
</script>