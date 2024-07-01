<template>
  <label class="switch">
    <input type="checkbox" id="btn" @change="toggleTheme" :checked="isDarkTheme">
    <span class="slider"></span>
  </label>
</template>
<script>
export default {
  name: 'ThemeSwitcher',
  data() {
    return {
      isDarkTheme: false,
    };
  },
  mounted() {
    this.isDarkTheme = this.getPreferredTheme() === 'dark';
    this.applyTheme(this.isDarkTheme ? 'dark' : 'light');
  },
  methods: {
    getStoredTheme() {
      return localStorage.getItem('theme');
    },
    setStoredTheme(theme) {
      localStorage.setItem('theme', theme);
    },
    getPreferredTheme() {
      const storedTheme = this.getStoredTheme();
      if (storedTheme) {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },
    applyTheme(theme) {
      document.documentElement.setAttribute('data-bs-theme', theme);
    },
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      const theme = this.isDarkTheme ? 'dark' : 'light';
      this.setStoredTheme(theme);
      this.applyTheme(theme);
    },
  },
};
</script>

<style scoped>
:root {
  --text-color: #7E7E7E;
  --switch-dot: #808080;

  /* colors - light mode */
  --bg-light: #ffffff;
  --switch-light: #CCCCCC;

  /* colors - dark mode */
  --bg-dark: #000000;
  --switch-dark: #383838;
  transition: background 1s ease;
}

.switch {
  position: relative;
  display: inline-block;
  width: 160px;
  height: 40px;
  padding: 15px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bs-tertiary-bg);
  -webkit-transition: .8s;
  transition: .8s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  right: 12px;
  bottom: 0;
  top: 0;
  margin: auto;
  background-color: #000;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

.slider:after {
  position: absolute;
  content: "Modo Claro";
  left: 20px;
  bottom: 0;
  top: 0;
  display: flex;
  align-items: center;
  -webkit-transition: .4s;
  transition: .4s;

}

input:checked+.slider {
  background-color: var(--bs-tertiary-bg);
}


input:checked+.slider:before {
  -webkit-transform: translateX(-124px);
  -ms-transform: translateX(-124px);
  transform: translateX(-100px);
  background-color: #ffffff;
}

input:checked+.slider:after {
  position: absolute;
  right: 10px;
  bottom: 0;
  top: 0;
  left: unset;
  content: "Modo Escuro";
}

.dark {
  transition: background 1s ease;
  background: var(--bg-dark);
}
</style>
