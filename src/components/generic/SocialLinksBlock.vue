<template>
  <div>
    <div v-for="(block, index) in blocks" :key="block.id" class="add-new-block-links" :id="'block-' + block.id">
      <div class="mt-4 p-3 bg-body-tertiary rounded-4">
        <!-- Conteúdo do bloco -->
        <div class="row my-3">
          <div class="col-sm-3 col-form-label"></div>
          <div class="col-sm-8">
            <i>
              Links para as contas de redes sociais, como Twitter, Facebook, LinkedIn, entre outros, são
              fundamentais neste espaço. Sinta-se à vontade para adicionar quantos forem relevantes para sua
              presença online.
            </i>
          </div>
        </div>
        <div class="row my-3">
          <label for="colFormLabelLink" class="col-sm-3 col-form-label text-md-end"> Link:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelLink" placeholder="" value="">
          </div>
        </div>
        <div class="row my-3">
          <label for="colFormLabelName" class="col-sm-3 col-form-label text-md-end">Nome do link:</label>
          <div class="col-sm-8">
            <input type="text" class="form-control" id="colFormLabelLink" placeholder="" value="">
          </div>
          <div class="col-sm-1">
            <button type="button" class="btn buttom-action-add d-flex re" @click="removeBlock(index)">
              <div class="rounded-3 border bg-primário bg-gradiente d-inline-flex p-2 rem">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 6L11 6" stroke="#FF4655" stroke-width="2" stroke-linecap="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-3">
      <div class="col-sm-4">
        <div class="py-4 d-flex justify-content-between">
          <button type="button" class="btn buttom-action-add d-flex align-items-center add-link"
            @click="adicionarBloco">
            <div class="rounded-3 border bg-primário bg-gradiente d-inline-flex p-2">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1V11" stroke="#35A936" stroke-width="2" stroke-linecap="round" />
                <path d="M1 6L11 6" stroke="#35A936" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
            <div class="px-2">Adicionar mais um link</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialBlocks: {
      type: Array,
      default: () => [{ id: 1 }] // Exemplo de bloco inicial
    }
  },
  data() {
    return {
      blocks: this.initialBlocks
    };
  },
  methods: {
    adicionarBloco() {
      const novoID = this.blocks.length > 0 ? this.blocks[this.blocks.length - 1].id + 1 : 1;
      this.blocks.push({ id: novoID });
    },
    removeBlock(index) {
      this.blocks.splice(index, 1); // Remove o bloco correspondente ao índice
    }
    // Outros métodos conforme necessário
  }
};
</script>

<style>
/* Estilos específicos para o componente SocialLinks.vue */
</style>
