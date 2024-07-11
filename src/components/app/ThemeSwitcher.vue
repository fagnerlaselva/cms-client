<template>


  <div class="col-12 col-lg-9">
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input class="btn-check" type="radio" id="light" name="theme" value="light" @change="setTheme('light')"
        :checked="isDarkTheme === 'light'">
      <label for="light" class="btn btn-outline-primary"
        style="--bs-btn-padding-y: .45rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </label>
      <input class="btn-check" type="radio" id="dark" name="theme" value="dark" @change="setTheme('dark')"
        :checked="isDarkTheme === 'dark'">
      <label for="dark" class="btn btn-outline-primary"
        style="--bs-btn-padding-y: .45rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22 15.8442C20.6866 16.4382 19.2286 16.7688 17.6935 16.7688C11.9153 16.7688 7.23116 12.0847 7.23116 6.30654C7.23116 4.77135 7.5618 3.3134 8.15577 2C4.52576 3.64163 2 7.2947 2 11.5377C2 17.3159 6.68414 22 12.4623 22C16.7053 22 20.3584 19.4742 22 15.8442Z"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </label>
      <input class="btn-check" type="radio" id="auto" name="theme" value="auto" @change="setTheme('auto')"
        :checked="isDarkTheme === 'auto'" autocomplete="off">
      <label for="auto" class="btn btn-outline-primary"
        style="--bs-btn-padding-y: .45rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 2L14 5M14 5L11 8M14 5H6.8C5.11984 5 4.27976 5 3.63803 5.32698C3.07354 5.6146 2.6146 6.07354 2.32698 6.63803C2 7.27976 2 8.11984 2 9.8V15.5C2 15.9644 2 16.1966 2.02567 16.3916C2.2029 17.7378 3.26222 18.7971 4.60842 18.9743C4.80337 19 5.03558 19 5.5 19M10 19H17.2C18.8802 19 19.7202 19 20.362 18.673C20.9265 18.3854 21.3854 17.9265 21.673 17.362C22 16.7202 22 15.8802 22 14.2V8.5C22 8.03558 22 7.80337 21.9743 7.60842C21.7971 6.26222 20.7378 5.2029 19.3916 5.02567C19.1966 5 18.9644 5 18.5 5M10 19L13 22M10 19L13 16"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </label>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ThemeSwitcher',
  data() {
    return {
      isDarkTheme: 'auto', // 'dark', 'light', or 'auto'
    };
  },
  mounted() {
    this.isDarkTheme = this.getPreferredTheme();
    this.applyTheme(this.isDarkTheme === 'auto' ? this.getSystemTheme() : this.isDarkTheme);
  },
  methods: {
    getStoredTheme() {
      return localStorage.getItem('theme') || 'auto';
    },
    setStoredTheme(theme) {
      localStorage.setItem('theme', theme);
    },
    getPreferredTheme() {
      const storedTheme = this.getStoredTheme();
      return storedTheme;
    },
    getSystemTheme() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    },
    applyTheme(theme) {
      const finalTheme = theme === 'auto' ? this.getSystemTheme() : theme;
      document.documentElement.setAttribute('data-bs-theme', finalTheme);
    },
    setTheme(theme) {
      this.isDarkTheme = theme;
      this.setStoredTheme(theme);
      this.applyTheme(theme);
    },
  },
};
</script>

<style scoped></style>
